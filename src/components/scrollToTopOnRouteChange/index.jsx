import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = ({ scrollRef }) => {
    const location = useLocation();

    useEffect(() => {
        if (!scrollRef?.current) return;

        scrollRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [location.pathname, scrollRef]);

    return null;
};

export default ScrollToTopOnRouteChange;
