import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import { FiArrowUp } from "react-icons/fi";

const SCROLL_THRESHOLD = 120;

const GoToTop = ({ scrollRef }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!scrollRef?.current) return;

        const el = scrollRef.current;

        const onScroll = () => {
            setVisible(el.scrollTop > SCROLL_THRESHOLD);
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => el.removeEventListener("scroll", onScroll);
    }, [scrollRef]);

    const handleClick = () => {
        if (!scrollRef?.current) return;

        scrollRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Button
            type="button"
            onClick={handleClick}
            aria-label="Go to top"
            title="Go to top"
            className={visible ? "show" : ""}
        >
            <FiArrowUp />
        </Styled.Button>
    );
};

export default GoToTop;
