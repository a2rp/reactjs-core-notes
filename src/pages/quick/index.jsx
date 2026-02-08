import React from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";

const QuickIndex = () => {
    return (
        <Styled.Wrapper>
            <h1>Quick Reference</h1>

            <p className="intro">
                This section provides short, focused notes for fast recall. Each
                page is designed to answer a specific React question without
                long explanations or setup.
            </p>

            <h2>How to use</h2>

            <ul>
                <li>Use this when you already know React basics</li>
                <li>Ideal for interview preparation or daily work</li>
                <li>Each topic fits on a single screen</li>
            </ul>

            <h2>Topics</h2>

            <div className="grid">
                <NavLink to="/quick/jsx">JSX</NavLink>
                <NavLink to="/quick/components">Components</NavLink>
                <NavLink to="/quick/props">Props</NavLink>
                <NavLink to="/quick/state">State</NavLink>
                <NavLink to="/quick/events">Events</NavLink>
                <NavLink to="/quick/lists-keys">Lists & Keys</NavLink>
                <NavLink to="/quick/conditional-rendering">
                    Conditional Rendering
                </NavLink>
                <NavLink to="/quick/useeffect">useEffect</NavLink>
                <NavLink to="/quick/hooks">Hooks</NavLink>
                <NavLink to="/quick/forms">Forms</NavLink>
                <NavLink to="/quick/styling">Styling</NavLink>
                <NavLink to="/quick/performance">Performance</NavLink>
            </div>

            <p className="note">
                If you are new to React, start with the React Core section
                instead of Quick Reference.
            </p>
        </Styled.Wrapper>
    );
};

export default QuickIndex;
