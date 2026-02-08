import React from "react";
import { Styled } from "./styled";

const QuickState = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>State</h1>
                <p className="intro">
                    State is data that changes over time and causes a component
                    to re-render. If a value should persist between renders and
                    affect UI, it belongs in state.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Mental Model</span>
                    <span className="chip">Pitfalls</span>
                </div>
            </header>

            <section className="block">
                <h2>1) When to use state</h2>
                <ul className="list">
                    <li>
                        Use state for values that change due to user actions or
                        async work
                    </li>
                    <li>If the UI depends on it, it can be state</li>
                    <li>
                        If it can be computed from props or other state, prefer
                        computing it (derived state)
                    </li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Basic state</div>
                    <pre>
                        <code>{`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) setState is async and batched</h2>
                <p>
                    React may batch state updates for performance. That means
                    state might not update immediately after calling a setter.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">
                        Do not rely on immediate state change
                    </div>
                    <pre>
                        <code>{`const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  // count here is still the old value (in this render)
};`}</code>
                    </pre>
                </div>

                <p className="note">
                    If you need the next state based on previous state, use a
                    functional update.
                </p>
            </section>

            <section className="block">
                <h2>3) Functional updates (must know)</h2>
                <p>
                    Use functional updates when the new value depends on the
                    previous one. This avoids stale values when multiple updates
                    happen quickly.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            Incorrect (can be stale)
                        </div>
                        <pre>
                            <code>{`setCount(count + 1);
setCount(count + 1);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Correct</div>
                        <pre>
                            <code>{`setCount((prev) => prev + 1);
setCount((prev) => prev + 1);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>4) State must be treated as immutable</h2>
                <p>
                    Never mutate objects or arrays in state. Always create a new
                    copy so React can detect changes correctly.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Incorrect (mutation)</div>
                        <pre>
                            <code>{`const [user, setUser] = useState({ name: "Ash" });

user.name = "New"; // ❌ mutation
setUser(user);     // ❌ same reference`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Correct (copy)</div>
                        <pre>
                            <code>{`const [user, setUser] = useState({ name: "Ash" });

setUser((prev) => ({
  ...prev,
  name: "New"
}));`}</code>
                        </pre>
                    </div>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Arrays: add/remove/update</div>
                    <pre>
                        <code>{`// add
setItems((prev) => [...prev, newItem]);

// remove
setItems((prev) => prev.filter((x) => x.id !== id));

// update one
setItems((prev) =>
  prev.map((x) => (x.id === id ? { ...x, done: true } : x))
);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>5) Derived state (common trap)</h2>
                <p>
                    If a value can be computed from other state/props, do not
                    store it as separate state. Keeping both creates sync bugs.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            Incorrect (two sources of truth)
                        </div>
                        <pre>
                            <code>{`const [items, setItems] = useState([]);
const [count, setCount] = useState(0); // ❌ derived

// now you must always keep count in sync with items`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">
                            Correct (derive during render)
                        </div>
                        <pre>
                            <code>{`const [items, setItems] = useState([]);

const count = items.length; // ✅ derived value`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    If deriving is expensive, use useMemo. Do not store derived
                    state unless needed.
                </p>
            </section>

            <section className="block">
                <h2>6) Initial state from props (careful)</h2>
                <p>
                    Initializing state from props is sometimes valid, but
                    remember state will not update automatically when props
                    change.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Initial from props</div>
                    <pre>
                        <code>{`function Form({ initialName }) {
  const [name, setName] = useState(initialName);

  // name won't change if initialName changes later
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    If you want to respond to prop changes, use effects
                    carefully or redesign the flow.
                </p>
            </section>

            <section className="block">
                <h2>7) Where state should live (lifting state)</h2>
                <ul className="list">
                    <li>Keep state as close as possible to where it is used</li>
                    <li>
                        If multiple components need it, lift it up to their
                        common parent
                    </li>
                    <li>Do not over-lift state without reason</li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Lifting state idea</div>
                    <pre>
                        <code>{`// Parent owns state
// Child receives value + setter or callbacks

<Filter value={filter} onChange={setFilter} />
<List filter={filter} />`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">State changes cause re-render</div>
                    <div className="row">
                        Use functional updates for previous-based updates
                    </div>
                    <div className="row">
                        Never mutate objects or arrays in state
                    </div>
                    <div className="row">Avoid derived state when possible</div>
                    <div className="row">
                        Lift state only when multiple components need it
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickState;
