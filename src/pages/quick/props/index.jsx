import React from "react";
import { Styled } from "./styled";

const QuickProps = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Props</h1>
                <p className="intro">
                    Props are inputs passed from parent components to child
                    components. They allow components to be configurable and
                    reusable.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Patterns</span>
                    <span className="chip">Pitfalls</span>
                </div>
            </header>

            <section className="block">
                <h2>1) What props are</h2>
                <p>
                    Props are plain JavaScript values passed into a component.
                    They are read-only. A component must never modify its props.
                </p>

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
            </section>

            <section className="block">
                <h2>2) Props are immutable</h2>
                <p>
                    Props should be treated as immutable values. If something
                    needs to change, lift the state up and pass new props down.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Correct</div>
                        <pre>
                            <code>{`function Counter({ value }) {
  return <span>{value}</span>;
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Incorrect</div>
                        <pre>
                            <code>{`function Counter({ value }) {
  value = value + 1; // ❌ never do this
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>3) Default values</h2>
                <p>
                    Use default values when destructuring props to handle
                    missing inputs.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">
                        Default props via destructuring
                    </div>
                    <pre>
                        <code>{`function Button({ type = "button", disabled = false }) {
  return <button type={type} disabled={disabled} />;
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Default parameters are preferred over the old defaultProps
                    pattern.
                </p>
            </section>

            <section className="block">
                <h2>4) Boolean props</h2>
                <p>Boolean props can be passed implicitly or explicitly.</p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Implicit boolean</div>
                        <pre>
                            <code>{`<Modal open />`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Explicit boolean</div>
                        <pre>
                            <code>{`<Modal open={true} />`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>5) Passing functions as props</h2>
                <p>
                    Functions are commonly passed as props to allow children to
                    notify parents about events.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Event callback pattern</div>
                    <pre>
                        <code>{`function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}

function Page() {
  const handleSave = () => {
    console.log("saved");
  };

  return <SaveButton onSave={handleSave} />;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) children as props</h2>
                <p>
                    The children prop allows components to be composable. This
                    is one of React's most powerful ideas.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">children pattern</div>
                    <pre>
                        <code>{`function Card({ children }) {
  return <div className="card">{children}</div>;
}`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Usage</div>
                    <pre>
                        <code>{`<Card>
  <h3>Title</h3>
  <p>Description</p>
</Card>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Props drilling</h2>
                <p>
                    Passing props through many layers is called props drilling.
                    It is not wrong, but it can become hard to maintain.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Props drilling example</div>
                    <pre>
                        <code>{`<App user={user}>
  <Layout user={user}>
    <Header user={user} />
  </Layout>
</App>`}</code>
                    </pre>
                </div>

                <p className="note">
                    When drilling becomes painful, consider composition or
                    context.
                </p>
            </section>

            <section className="block">
                <h2>8) Spreading props</h2>
                <p>
                    The spread operator forwards all props. Useful for wrapper
                    components, but use carefully.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Spread props</div>
                    <pre>
                        <code>{`function Input(props) {
  return <input {...props} />;
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Be careful not to pass unintended props to DOM elements.
                </p>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">Props are read-only</div>
                    <div className="row">Use defaults for optional props</div>
                    <div className="row">Functions can be passed as props</div>
                    <div className="row">children enables composition</div>
                    <div className="row">Avoid excessive props drilling</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickProps;
