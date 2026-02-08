import React, { useMemo } from "react";
import { Styled } from "./styled";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiChevronRight, FiArrowLeft } from "react-icons/fi";

const labelMap = {
    home: "Home",
    about: "About",

    quick: "Quick Reference",
    jsx: "JSX",
    components: "Components",
    props: "Props",
    state: "State",
    events: "Events",
    "lists-keys": "Lists & Keys",
    "conditional-rendering": "Conditional Rendering",
    useeffect: "useEffect",
    hooks: "Hooks",
    forms: "Forms",
    styling: "Styling",
    performance: "Performance",

    react: "React Core",
    "why-react": "Why React",
    "rendering-model": "Rendering Model",
    "lists-and-keys": "Lists & Keys",

    architecture: "Architecture",
    "lifting-state": "Lifting State",
    "derived-state": "Derived State",

    routing: "Routing",
    "react-router-basics": "React Router Basics",
    "nested-routes": "Nested Routes",

    patterns: "UI Patterns",
    "loading-patterns": "Loading Patterns",
    modals: "Modals",
    drawers: "Drawers",

    "theme-tokens": "Theme Tokens",
    "component-variants": "Component Variants",
    responsive: "Responsive Patterns",
    "react-memo": "React.memo",
    usememo: "useMemo",
    usecallback: "useCallback",
    usestate: "useState",
    useref: "useRef",
    "custom-hooks": "Custom Hooks",
};

const prettyLabel = (segment) => {
    if (labelMap[segment]) return labelMap[segment];

    return segment
        .split("-")
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
};

const Breadcrumbs = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const crumbs = useMemo(() => {
        const segments = location.pathname.split("/").filter(Boolean);
        if (segments.length === 0) {
            return [{ to: "/home", label: "Home", isLast: true }];
        }

        const items = [];
        let path = "";

        segments.forEach((seg, idx) => {
            path += `/${seg}`;
            items.push({
                to: path,
                label: prettyLabel(seg),
                isLast: idx === segments.length - 1,
            });
        });

        if (items[0]?.to !== "/home") {
            items.unshift({ to: "/home", label: "Home", isLast: false });
            items[items.length - 1].isLast = true;
        }

        return items;
    }, [location.pathname]);

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/home");
        }
    };

    return (
        <Styled.Wrapper aria-label="Breadcrumb">
            <button
                type="button"
                className="backBtn"
                onClick={handleBack}
                aria-label="Go back"
                title="Go back"
            >
                <FiArrowLeft />
            </button>

            <div className="crumbs">
                {crumbs.map((c, idx) => (
                    <React.Fragment key={c.to}>
                        {idx !== 0 && (
                            <span className="sep" aria-hidden="true">
                                <FiChevronRight />
                            </span>
                        )}

                        {c.isLast ? (
                            <span className="current">{c.label}</span>
                        ) : (
                            <NavLink to={c.to} className="link">
                                {c.label}
                            </NavLink>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default Breadcrumbs;
