import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const specialLabels = {
    api: "API",
    dom: "DOM",
    html: "HTML",
    jsx: "JSX",
    ui: "UI",
    usecallback: "useCallback",
    useeffect: "useEffect",
    usememo: "useMemo",
    useref: "useRef",
    usestate: "useState",
};

const formatSegment = (segment) =>
    segment
        .split("-")
        .map((word, index) => {
            const knownLabel = specialLabels[word.toLowerCase()];
            if (knownLabel) return knownLabel;
            return index === 0
                ? `${word.charAt(0).toUpperCase()}${word.slice(1)}`
                : word;
        })
        .join(" ");

const Placeholder = () => {
    const { pathname } = useLocation();
    const segments = pathname.split("/").filter(Boolean);
    const title = segments.length
        ? formatSegment(segments[segments.length - 1])
        : "React Core";
    const breadcrumb = segments.map(formatSegment).join(" / ");

    return (
        <Styled.Wrapper>
            <section className="content" aria-labelledby="placeholder-title">
                <p className="eyebrow">React notes · Deep dive</p>
                {breadcrumb && <p className="breadcrumb">{breadcrumb}</p>}
                <h1 id="placeholder-title">{title}</h1>
                <p className="status" role="status">Full notes for this topic are in progress.</p>
                <p className="description">
                    You can use the quick reference for concise explanations, or
                    browse the interview questions while this deep-dive page is
                    being prepared.
                </p>
                <nav className="actions" aria-label="Related React resources">
                    <Link to="/quick">Browse Quick Reference</Link>
                    <Link to="/react-interview">Open Interview Q&amp;A</Link>
                </nav>
            </section>
        </Styled.Wrapper>
    );
};

export default Placeholder;
