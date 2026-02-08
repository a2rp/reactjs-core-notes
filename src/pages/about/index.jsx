import React from "react";
import { Styled } from "./styled";

const About = () => {
    return (
        <Styled.Wrapper>
            <h1>About this project</h1>

            <p>
                reactjs-core-notes is a personal reference project created to
                document and explain React core concepts in a clear, structured,
                and practical way.
            </p>

            <p>
                This is not a tutorial series and not a beginner walkthrough.
                The goal is to capture how React actually works, why certain
                patterns exist, and how to reason about React while building
                real applications.
            </p>

            <h2>Why this exists</h2>

            <ul>
                <li>
                    To serve as a long-term reference for React fundamentals
                </li>
                <li>To avoid copy-paste driven learning</li>
                <li>
                    To document mental models, edge cases, and common mistakes
                </li>
                <li>To keep concepts concise, searchable, and maintainable</li>
            </ul>

            <h2>How to use this site</h2>

            <ul>
                <li>
                    Use <strong>Quick Reference</strong> for fast recall
                </li>
                <li>
                    Use <strong>React Core</strong> sections for deeper
                    understanding
                </li>
                <li>Treat each page as a note, not a lesson</li>
            </ul>

            <h2>Scope</h2>

            <p>
                This project focuses on React fundamentals, hooks, rendering
                behavior, component design, performance considerations, and
                common UI patterns. It intentionally avoids framework-level
                abstractions and opinionated tooling.
            </p>

            <p className="foot">
                This site is actively maintained and updated as understanding
                evolves.
            </p>
        </Styled.Wrapper>
    );
};

export default About;
