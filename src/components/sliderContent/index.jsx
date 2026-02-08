import React, { useEffect, useMemo, useRef, useState } from "react";
import { Styled } from "./styled";
import { NavLink, useLocation } from "react-router-dom";
import { FiX, FiSearch } from "react-icons/fi";

const SliderContent = ({ handleNavClick }) => {
    const [query, setQuery] = useState("");
    const location = useLocation();
    const activeRef = useRef(null);

    // NOTE:
    // - type: "parent" | "child"
    // - end: true only for parent routes (exact match)
    const links = useMemo(
        () => [
            // Base
            { to: "/home", label: "Home", type: "parent", end: true },
            { to: "/about", label: "About", type: "parent", end: true },

            // Quick Reference
            {
                to: "/quick",
                label: "Quick Reference",
                type: "parent",
                end: true,
            },
            { to: "/quick/jsx", label: "JSX", type: "child" },
            { to: "/quick/components", label: "Components", type: "child" },
            { to: "/quick/props", label: "Props", type: "child" },
            { to: "/quick/state", label: "State", type: "child" },
            { to: "/quick/events", label: "Events", type: "child" },
            { to: "/quick/lists-keys", label: "Lists & Keys", type: "child" },
            {
                to: "/quick/conditional-rendering",
                label: "Conditional Rendering",
                type: "child",
            },
            { to: "/quick/useeffect", label: "useEffect", type: "child" },
            { to: "/quick/hooks", label: "Hooks", type: "child" },
            { to: "/quick/forms", label: "Forms", type: "child" },
            { to: "/quick/styling", label: "Styling", type: "child" },
            { to: "/quick/performance", label: "Performance", type: "child" },

            // react interview
            {
                to: "/react-interview",
                label: "React Interview QnA",
                type: "parent",
                end: true,
            },

            // React Core
            { to: "/react", label: "React Core", type: "parent", end: true },
            { to: "/react/why-react", label: "Why React", type: "child" },
            {
                to: "/react/rendering-model",
                label: "Rendering Model",
                type: "child",
            },
            { to: "/react/jsx", label: "JSX In Depth", type: "child" },
            { to: "/react/components", label: "Components", type: "child" },
            { to: "/react/props", label: "Props", type: "child" },
            { to: "/react/state", label: "State", type: "child" },
            { to: "/react/events", label: "Events", type: "child" },
            {
                to: "/react/lists-and-keys",
                label: "Lists & Keys",
                type: "child",
            },
            {
                to: "/react/conditional-rendering",
                label: "Conditional Rendering",
                type: "child",
            },
            { to: "/react/useeffect", label: "useEffect", type: "child" },

            // Hooks
            { to: "/hooks", label: "Hooks", type: "parent", end: true },
            { to: "/hooks/usestate", label: "useState", type: "child" },
            { to: "/hooks/useeffect", label: "useEffect", type: "child" },
            { to: "/hooks/useref", label: "useRef", type: "child" },
            { to: "/hooks/usememo", label: "useMemo", type: "child" },
            { to: "/hooks/usecallback", label: "useCallback", type: "child" },
            { to: "/hooks/custom-hooks", label: "Custom Hooks", type: "child" },

            // Styling
            { to: "/styling", label: "Styling", type: "parent", end: true },
            {
                to: "/styling/theme-tokens",
                label: "Theme Tokens",
                type: "child",
            },
            {
                to: "/styling/component-variants",
                label: "Component Variants",
                type: "child",
            },
            {
                to: "/styling/responsive",
                label: "Responsive Patterns",
                type: "child",
            },

            // Performance
            {
                to: "/performance",
                label: "Performance",
                type: "parent",
                end: true,
            },
            {
                to: "/performance/react-memo",
                label: "React.memo",
                type: "child",
            },
            { to: "/performance/usememo", label: "useMemo", type: "child" },
            {
                to: "/performance/usecallback",
                label: "useCallback",
                type: "child",
            },

            // Architecture
            {
                to: "/architecture",
                label: "Architecture",
                type: "parent",
                end: true,
            },
            {
                to: "/architecture/lifting-state",
                label: "Lifting State",
                type: "child",
            },
            {
                to: "/architecture/derived-state",
                label: "Derived State",
                type: "child",
            },

            // Routing
            { to: "/routing", label: "Routing", type: "parent", end: true },
            {
                to: "/routing/react-router-basics",
                label: "React Router Basics",
                type: "child",
            },
            {
                to: "/routing/nested-routes",
                label: "Nested Routes",
                type: "child",
            },

            // Patterns
            {
                to: "/patterns",
                label: "UI Patterns",
                type: "parent",
                end: true,
            },
            {
                to: "/patterns/loading-patterns",
                label: "Loading Patterns",
                type: "child",
            },
            { to: "/patterns/modals", label: "Modals", type: "child" },
            { to: "/patterns/drawers", label: "Drawers", type: "child" },
        ],
        [],
    );

    const filteredLinks = useMemo(() => {
        if (!query.trim()) return links;
        return links.filter((l) =>
            l.label.toLowerCase().includes(query.toLowerCase()),
        );
    }, [query, links]);

    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                block: "center",
                behavior: "smooth",
            });
        }
    }, [location.pathname]);

    return (
        <Styled.Wrapper>
            <div className="searchWrapper">
                <FiSearch className="searchIcon" />
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search topics"
                />
                {query && (
                    <button
                        type="button"
                        className="clearBtn"
                        onClick={() => setQuery("")}
                        aria-label="Clear search"
                        title="Clear"
                    >
                        <FiX />
                    </button>
                )}
            </div>

            <ul>
                {filteredLinks.map((link) => {
                    const exactActive = location.pathname === link.to;

                    return (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end={Boolean(link.end)}
                                onClick={handleNavClick}
                                ref={exactActive ? activeRef : null}
                                className={({ isActive }) => {
                                    const activeClass = isActive
                                        ? "active"
                                        : "";
                                    const typeClass =
                                        link.type === "parent"
                                            ? "isParent"
                                            : "isChild";
                                    return `${activeClass} ${typeClass}`.trim();
                                }}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </Styled.Wrapper>
    );
};

export default SliderContent;
