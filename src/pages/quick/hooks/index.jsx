import React from "react";
import { Styled } from "./styled";

const QuickHooks = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Hooks</h1>
                <p className="intro">
                    Hooks let function components use React features like state,
                    lifecycle-like effects, refs, memoization, and context.
                    Hooks help you reuse logic without changing component
                    structure.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Rules</span>
                    <span className="chip">Patterns</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Why hooks exist</h2>
                <ul className="list">
                    <li>Use state and effects in function components</li>
                    <li>Reuse logic via custom hooks</li>
                    <li>Keep components simpler and more composable</li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Example: state + effect</div>
                    <pre>
                        <code>{`import React, { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{now.toLocaleTimeString()}</div>;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) Rules of hooks (must follow)</h2>
                <ul className="list">
                    <li>
                        Only call hooks at the top level (no loops, no
                        conditions)
                    </li>
                    <li>
                        Only call hooks inside React function components or
                        custom hooks
                    </li>
                    <li>Hook order must stay the same on every render</li>
                </ul>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Incorrect</div>
                        <pre>
                            <code>{`if (open) {
  useEffect(() => {
    console.log("runs");
  }, []);
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Correct</div>
                        <pre>
                            <code>{`useEffect(() => {
  if (!open) return;
  console.log("runs");
}, [open]);`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    Put conditions inside the hook body, not around the hook
                    call.
                </p>
            </section>

            <section className="block">
                <h2>3) Common hooks overview</h2>

                <div className="table">
                    <div className="tHead">
                        <div className="colHook">Hook</div>
                        <div className="colUse">Use for</div>
                        <div className="colTip">Tip</div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useState</code>
                        </div>
                        <div className="colUse">Component state</div>
                        <div className="colTip">
                            Use functional updates for prev-based changes
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useEffect</code>
                        </div>
                        <div className="colUse">Side effects</div>
                        <div className="colTip">
                            Cleanup for timers, listeners, subscriptions
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useRef</code>
                        </div>
                        <div className="colUse">
                            Persist values without re-render
                        </div>
                        <div className="colTip">
                            Use for DOM refs and stable mutable values
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useMemo</code>
                        </div>
                        <div className="colUse">Memoize computed values</div>
                        <div className="colTip">
                            Use only for expensive work or stable deps
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useCallback</code>
                        </div>
                        <div className="colUse">Memoize functions</div>
                        <div className="colTip">
                            Useful when passing callbacks to memoized children
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useContext</code>
                        </div>
                        <div className="colUse">Global-ish shared state</div>
                        <div className="colTip">
                            Avoid overusing context for fast-changing values
                        </div>
                    </div>

                    <div className="tRow">
                        <div className="colHook">
                            <code>useReducer</code>
                        </div>
                        <div className="colUse">Complex state transitions</div>
                        <div className="colTip">
                            Great when state logic has many actions
                        </div>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>4) useRef basics</h2>
                <p>
                    useRef stores a mutable value that persists between renders.
                    Updating <code>ref.current</code> does not re-render.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Ref for DOM</div>
                    <pre>
                        <code>{`import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Ref for stable value</div>
                    <pre>
                        <code>{`const lastValueRef = useRef(null);

useEffect(() => {
  lastValueRef.current = value;
}, [value]);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>5) useMemo and useCallback (when they matter)</h2>
                <p>
                    useMemo memoizes values. useCallback memoizes functions.
                    They are performance tools, not default patterns.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">useMemo</div>
                        <pre>
                            <code>{`const total = useMemo(() => {
  return items.reduce((sum, x) => sum + x.price, 0);
}, [items]);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">useCallback</div>
                        <pre>
                            <code>{`const handleSave = useCallback(() => {
  onSave(formData);
}, [onSave, formData]);`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    If you do not have a real performance issue, keep code
                    simple.
                </p>
            </section>

            <section className="block">
                <h2>6) Custom hooks (reuse logic)</h2>
                <p>
                    A custom hook is just a function that uses other hooks.
                    Prefix with "use" so React and linters recognize it.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Custom hook example</div>
                    <pre>
                        <code>{`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Custom hooks are for shared logic, not for shared UI.
                </p>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">Hooks must be called at top level</div>
                    <div className="row">
                        Effects are for side effects, not rendering logic
                    </div>
                    <div className="row">
                        useRef keeps values without re-render
                    </div>
                    <div className="row">
                        useMemo/useCallback are performance tools
                    </div>
                    <div className="row">Custom hooks reuse logic cleanly</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickHooks;
