// pages/home/index.jsx
import React from "react";
import { Styled } from "./styled";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <h1>ReactJS Core Notes</h1>
                <p className="subtitle">
                    A structured reference to understand how React actually
                    works - not just how to write it.
                </p>
            </Styled.Hero>

            <Styled.Section>
                <h2>What is this?</h2>
                <p>
                    This site is not another React tutorial. It is a carefully
                    organized set of notes that explain React's core concepts,
                    mental models, and real-world usage patterns.
                </p>
            </Styled.Section>

            <Styled.Section>
                <h2>How to use this site</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Quick Reference</h3>
                        <p>
                            Short, focused explanations for fast recall. Useful
                            before interviews or while working.
                        </p>
                        <Link to="/quick">Go to Quick Reference →</Link>
                    </div>

                    <div className="card">
                        <h3>Deep Dive</h3>
                        <p>
                            Full explanations of React core concepts, written in
                            a logical learning order.
                        </p>
                        <Link to="/react">Start React Core →</Link>
                    </div>
                </div>
            </Styled.Section>

            <Styled.Section>
                <h2>Who is this for?</h2>
                <ul>
                    <li>
                        Developers who want to understand React beyond
                        copy-paste
                    </li>
                    <li>Frontend engineers preparing for interviews</li>
                    <li>Anyone who wants a long-term React reference</li>
                </ul>
            </Styled.Section>
        </Styled.Wrapper>
    );
};

export default Home;
