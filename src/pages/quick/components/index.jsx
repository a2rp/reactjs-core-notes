import React from "react";
import { Styled } from "./styled";

const QuickComponents = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Components</h1>
                <p className="intro">
                    Components are the building blocks of React UI. A component
                    is just a JavaScript function that returns React elements
                    based on props and state.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Patterns</span>
                    <span className="chip">Best Practices</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Function components</h2>
                <p>
                    Modern React uses function components. They are simple
                    functions that return JSX. Class components still exist but
                    are no longer recommended for new code.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Basic function component</div>
                    <pre>
                        <code>{`function Button() {
  return <button>Click</button>;
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Component names must start with a capital letter. Lowercase
                    names are treated as HTML tags.
                </p>
            </section>

            <section className="block">
                <h2>2) Components receive props</h2>
                <p>
                    Props are inputs to components. They are read-only and
                    passed from parent to child.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Passing props</div>
                        <pre>
                            <code>{`<Button label="Save" />`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Receiving props</div>
                        <pre>
                            <code>{`function Button({ label }) {
  return <button>{label}</button>;
}`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    Props flow in one direction: parent → child. Children never
                    mutate props directly.
                </p>
            </section>

            <section className="block">
                <h2>3) Children prop</h2>
                <p>
                    The <code>children</code> prop lets a component wrap other
                    elements. This is essential for layout and reusable UI
                    patterns.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Using children</div>
                        <pre>
                            <code>{`function Card({ children }) {
  return <div className="card">{children}</div>;
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Rendering children</div>
                        <pre>
                            <code>{`<Card>
  <h3>Title</h3>
  <p>Description</p>
</Card>`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>4) Conditional rendering inside components</h2>
                <p>
                    Components often render different UI based on props or
                    state. Use expressions, not statements.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Ternary</div>
                        <pre>
                            <code>{`function Status({ online }) {
  return (
    <span>
      {online ? "Online" : "Offline"}
    </span>
  );
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Logical &&</div>
                        <pre>
                            <code>{`function Error({ message }) {
  return (
    <>
      {message && <p>{message}</p>}
    </>
  );
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>5) Splitting components</h2>
                <p>
                    If a component grows too large, split it. Each component
                    should have one clear responsibility.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">
                        Before (too much responsibility)
                    </div>
                    <pre>
                        <code>{`function UserPage() {
  // fetch data
  // render header
  // render list
  // handle events
}`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">After (split)</div>
                    <pre>
                        <code>{`function UserPage() {
  return (
    <>
      <UserHeader />
      <UserList />
    </>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Container vs presentational components</h2>
                <p>
                    A common pattern is to separate logic from UI. Containers
                    handle data and state, presentational components focus on
                    rendering.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Presentational component</div>
                    <pre>
                        <code>{`function UserView({ user }) {
  return <div>{user.name}</div>;
}`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Container component</div>
                    <pre>
                        <code>{`function UserContainer() {
  const user = useUser();
  return <UserView user={user} />;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Components are functions that return JSX
                    </div>
                    <div className="row">
                        Component names must be capitalized
                    </div>
                    <div className="row">Props are read-only inputs</div>
                    <div className="row">Use children for composition</div>
                    <div className="row">Split large components early</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickComponents;
