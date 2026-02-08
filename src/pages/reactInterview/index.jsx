// src/pages/interview/react/index.jsx
import React, { useMemo, useRef, useState, useEffect } from "react";
import { Styled } from "./styled";
import { reactInterviewQna } from "./data";
import {
    FiChevronLeft,
    FiChevronRight,
    FiList,
    FiMessageSquare,
} from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

const ReactInterview = () => {
    const contentRef = useRef(null);
    const listBodyRef = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();

    // flatten: sections -> questions
    const { flatQuestions, sectionsMeta, totalQuestions, idToIndex } =
        useMemo(() => {
            const flat = [];
            const meta = [];
            const map = {};

            reactInterviewQna.forEach((sec) => {
                const startIndex = flat.length;

                sec.items.forEach((it) => {
                    const row = {
                        sectionId: sec.id,
                        sectionTitle: sec.title,
                        id: it.id,
                        q: it.q,
                        a: it.a || "",
                    };
                    map[row.id] = flat.length;
                    flat.push(row);
                });

                meta.push({
                    id: sec.id,
                    title: sec.title,
                    startIndex,
                    count: sec.items.length,
                });
            });

            return {
                flatQuestions: flat,
                sectionsMeta: meta,
                totalQuestions: flat.length,
                idToIndex: map,
            };
        }, []);

    const getIndexFromUrl = () => {
        const qId = searchParams.get("q");
        if (!qId) return 0;

        const idx = idToIndex[qId];
        if (typeof idx === "number" && idx >= 0 && idx < totalQuestions)
            return idx;

        return 0;
    };

    const [activeIndex, setActiveIndex] = useState(() => getIndexFromUrl());

    const active = flatQuestions[activeIndex];

    const scrollContentIntoView = () => {
        const el = contentRef.current;
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const scrollActiveInListIntoView = () => {
        const wrap = listBodyRef.current;
        if (!wrap) return;

        const node = wrap.querySelector(`[data-q-idx="${activeIndex}"]`);
        if (!node) return;

        const wrapRect = wrap.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();

        const currentScrollTop = wrap.scrollTop;

        const offset =
            nodeRect.top -
            wrapRect.top -
            wrapRect.height / 2 +
            nodeRect.height / 2;

        wrap.scrollTo({
            top: currentScrollTop + offset,
            behavior: "smooth",
        });
    };

    const updateUrlForIndex = (idx) => {
        const row = flatQuestions[idx];
        if (!row) return;

        setSearchParams(
            (prev) => {
                const next = new URLSearchParams(prev);
                next.set("q", row.id);
                return next;
            },
            { replace: true },
        );
    };

    const setActiveIndexAndUrl = (idx, opts = { scrollContent: true }) => {
        const safe = Math.max(0, Math.min(totalQuestions - 1, idx));
        setActiveIndex(safe);
        updateUrlForIndex(safe);

        window.requestAnimationFrame(() => {
            scrollActiveInListIntoView();
            if (opts.scrollContent) scrollContentIntoView();
        });
    };

    const handlePickQuestion = (idx) => {
        setActiveIndexAndUrl(idx, { scrollContent: true });
    };

    const handlePrev = () => {
        setActiveIndexAndUrl(activeIndex - 1, { scrollContent: true });
    };

    const handleNext = () => {
        setActiveIndexAndUrl(activeIndex + 1, { scrollContent: true });
    };

    // 1) On first mount: ensure URL has q=... and list is aligned
    useEffect(() => {
        if (!flatQuestions.length) return;

        const qId = searchParams.get("q");
        if (!qId) {
            updateUrlForIndex(activeIndex);
        }

        window.requestAnimationFrame(() => {
            scrollActiveInListIntoView();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flatQuestions.length]);

    // 2) If user refreshes / shares URL / manually changes query param:
    // sync activeIndex from URL without forcing content scroll
    useEffect(() => {
        if (!flatQuestions.length) return;

        const idxFromUrl = getIndexFromUrl();
        if (idxFromUrl !== activeIndex) {
            setActiveIndex(idxFromUrl);
            window.requestAnimationFrame(() => {
                scrollActiveInListIntoView();
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams, flatQuestions.length]);

    // group rendering with section headers and correct indices
    const renderQuestionList = () => {
        return sectionsMeta.map((sec) => {
            const start = sec.startIndex;
            const end = start + sec.count;
            const items = flatQuestions.slice(start, end);

            return (
                <div className="qnaSection" key={sec.id}>
                    <div className="sectionHeader">
                        <div className="sectionTitle">{sec.title}</div>
                        <div className="sectionCount">
                            {sec.count} questions
                        </div>
                    </div>

                    <ul className="qnaList">
                        {items.map((item, idxLocal) => {
                            const idxGlobal = start + idxLocal;
                            const isActive = idxGlobal === activeIndex;

                            return (
                                <li key={item.id}>
                                    <button
                                        type="button"
                                        className={`qnaItem ${isActive ? "isActive" : ""}`}
                                        onClick={() =>
                                            handlePickQuestion(idxGlobal)
                                        }
                                        title={item.q}
                                        data-q-idx={idxGlobal}
                                        data-q-id={item.id}
                                    >
                                        <span className="qIndex">
                                            {idxGlobal + 1}.
                                        </span>
                                        <span className="qText">{item.q}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    };

    useEffect(() => {
        if (!flatQuestions.length) return;

        window.requestAnimationFrame(() => {
            scrollActiveInListIntoView();
        });
    }, [activeIndex, flatQuestions.length]);

    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>React Interview QnA</h1>
                <p className="intro">
                    Crisp interview-style questions with practical answers and
                    follow-ups. Use this for fast revision before interviews.
                </p>

                <div className="chips">
                    <span className="chip">QnA</span>
                    <span className="chip">Follow ups</span>
                    <span className="chip">Revision</span>
                </div>
            </header>

            <div className="qnaGrid">
                <div className="qnaListWrapper">
                    <div className="listTop">
                        <div className="listTitle">
                            <span className="icon">
                                <FiList />
                            </span>
                            All Questions
                        </div>

                        <div className="listMeta">Total: {totalQuestions}</div>
                    </div>

                    <div className="listBody" ref={listBodyRef}>
                        {renderQuestionList()}
                    </div>
                </div>

                <div className="content" ref={contentRef}>
                    <div className="contentCard">
                        <div className="contentTop">
                            <div className="contentMeta">
                                <span className="badge">
                                    {active?.sectionTitle || "React"}
                                </span>
                                <span className="counter">
                                    {activeIndex + 1} / {totalQuestions}
                                </span>
                            </div>

                            <div className="navButtons">
                                <button
                                    type="button"
                                    className="navBtn"
                                    onClick={handlePrev}
                                    disabled={activeIndex === 0}
                                    aria-label="Previous question"
                                    title="Previous question"
                                >
                                    <FiChevronLeft />
                                    Prev
                                </button>

                                <button
                                    type="button"
                                    className="navBtn"
                                    onClick={handleNext}
                                    disabled={
                                        activeIndex === totalQuestions - 1
                                    }
                                    aria-label="Next question"
                                    title="Next question"
                                >
                                    Next
                                    <FiChevronRight />
                                </button>
                            </div>
                        </div>

                        <div className="questionBlock">
                            <div className="qTitle">
                                <span className="qIcon">
                                    <FiMessageSquare />
                                </span>
                                <span className="qLabel">Question</span>
                            </div>
                            <div className="qTextBig">{active?.q || ""}</div>
                        </div>

                        <div className="answerBlock">
                            <div className="aTitle">Answer</div>

                            {active?.a ? (
                                <div className="aText">{active.a}</div>
                            ) : (
                                <div className="emptyAnswer">
                                    Answer not added yet. Add it later in
                                    data.js
                                </div>
                            )}
                        </div>

                        <div className="hint">
                            Tip: URL stores current question, so refresh keeps
                            your spot.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ReactInterview;
