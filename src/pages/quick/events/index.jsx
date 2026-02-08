import React from "react";
import { Styled } from "./styled";

const QuickEvents = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Events</h1>
                <p className="intro">
                    Events in React let components respond to user interactions
                    like clicks, input changes, keyboard actions, and form
                    submits. React events are wrapped as Synthetic Events for
                    consistency.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Patterns</span>
                    <span className="chip">Mistakes</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Basic event handling</h2>
                <p>
                    Events are passed as props starting with <code>on</code>.
                    You pass a function reference, not a function call.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Correct</div>
                        <pre>
                            <code>{`function Button() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Incorrect</div>
                        <pre>
                            <code>{`// ❌ this runs immediately
<button onClick={handleClick()} />`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>2) Accessing event object</h2>
                <p>
                    React provides a Synthetic Event object that normalizes
                    browser differences. You usually access it as the first
                    argument.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Event object</div>
                    <pre>
                        <code>{`function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Synthetic events are pooled internally, but in modern React
                    you usually do not need to worry about event pooling.
                </p>
            </section>

            <section className="block">
                <h2>3) Passing arguments to handlers</h2>
                <p>To pass arguments, wrap the handler in an arrow function.</p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">With arrow function</div>
                        <pre>
                            <code>{`<button onClick={() => removeItem(id)}>
  Remove
</button>`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Avoid binding in JSX</div>
                        <pre>
                            <code>{`// ❌ unnecessary in function components
<button onClick={removeItem.bind(null, id)} />`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>4) Common DOM events</h2>
                <ul className="list">
                    <li>
                        <code>onClick</code> – mouse click
                    </li>
                    <li>
                        <code>onChange</code> – input, textarea, select
                    </li>
                    <li>
                        <code>onSubmit</code> – form submit
                    </li>
                    <li>
                        <code>onKeyDown</code>, <code>onKeyUp</code>
                    </li>
                    <li>
                        <code>onFocus</code>, <code>onBlur</code>
                    </li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Form submit</div>
                    <pre>
                        <code>{`function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>5) Preventing default behavior</h2>
                <p>
                    Use <code>e.preventDefault()</code> to stop default browser
                    actions like page reloads on form submit or link navigation.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Prevent default</div>
                    <pre>
                        <code>{`const handleClick = (e) => {
  e.preventDefault();
  console.log("link clicked");
};`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Event handlers and state updates</h2>
                <p>
                    Event handlers often update state. Remember that state
                    updates are async and may be batched.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Updating state in events</div>
                    <pre>
                        <code>{`const [count, setCount] = useState(0);

const handleClick = () => {
  setCount((prev) => prev + 1);
};`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Inline handlers vs named handlers</h2>
                <p>
                    Prefer named handlers for readability and reuse. Inline
                    handlers are fine for very small logic.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Named handler</div>
                        <pre>
                            <code>{`<button onClick={handleSave}>
  Save
</button>`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Inline handler</div>
                        <pre>
                            <code>{`<button onClick={() => setOpen(true)}>
  Open
</button>`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>8) Event bubbling</h2>
                <p>
                    React events bubble up just like DOM events. Use{" "}
                    <code>e.stopPropagation()</code> only when necessary.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Stop propagation</div>
                    <pre>
                        <code>{`function Item({ onRemove }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onRemove();
  };

  return <button onClick={handleClick}>Remove</button>;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Pass function references to event props
                    </div>
                    <div className="row">
                        Use arrow functions to pass arguments
                    </div>
                    <div className="row">
                        Prevent default behavior when needed
                    </div>
                    <div className="row">Prefer named handlers for clarity</div>
                    <div className="row">Use stopPropagation sparingly</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickEvents;
