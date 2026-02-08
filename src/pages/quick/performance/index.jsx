import React from "react";
import { Styled } from "./styled";

const QuickPerformance = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Performance</h1>
                <p className="intro">
                    React performance is mostly about avoiding unnecessary
                    rerenders, keeping components small, and optimizing only
                    when it actually matters. Memoization is a tool, not a
                    default habit.
                </p>

                <div className="chips">
                    <span className="chip">Rerenders</span>
                    <span className="chip">Memoization</span>
                    <span className="chip">Patterns</span>
                </div>
            </header>

            <section className="block">
                <h2>1) What causes rerenders</h2>
                <ul className="list">
                    <li>State update in a component</li>
                    <li>Props change from parent</li>
                    <li>Context value changes</li>
                    <li>
                        Parent rerender can rerender children (unless memoized)
                    </li>
                </ul>

                <div className="note">
                    Rerender does not mean DOM update every time. React compares
                    and updates only what changed.
                </div>
            </section>

            <section className="block">
                <h2>2) The most common mistake</h2>
                <p>
                    Creating new objects/functions in render makes props change,
                    which can force child rerenders.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            Problem: new object each render
                        </div>
                        <pre>
                            <code>{`<Child config={{ size: 10 }} />`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Fix: memoize object</div>
                        <pre>
                            <code>{`const config = useMemo(() => ({ size: 10 }), []);
<Child config={config} />`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>3) React.memo</h2>
                <p>
                    React.memo prevents rerender of a component if props are the
                    same (shallow comparison). Great for heavy child components.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">React.memo usage</div>
                    <pre>
                        <code>{`import React from "react";

const HeavyCard = React.memo(function HeavyCard({ title }) {
  return <div>{title}</div>;
});`}</code>
                    </pre>
                </div>

                <p className="note">
                    React.memo does not help if you pass new objects/functions
                    every render.
                </p>
            </section>

            <section className="block">
                <h2>4) useMemo (memoize values)</h2>
                <p>
                    useMemo caches a computed value between renders. Use it for
                    expensive computations or to keep object/array references
                    stable.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Expensive computation</div>
                    <pre>
                        <code>{`const filtered = useMemo(() => {
  return items.filter((x) => x.price > minPrice);
}, [items, minPrice]);`}</code>
                    </pre>
                </div>

                <div className="note">
                    If the computation is cheap, do not use useMemo just for
                    style.
                </div>
            </section>

            <section className="block">
                <h2>5) useCallback (memoize functions)</h2>
                <p>
                    useCallback caches a function reference. Useful when passing
                    callbacks to memoized children or when a function is a
                    dependency in an effect.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            Callback passed to memo child
                        </div>
                        <pre>
                            <code>{`const onSave = useCallback(() => {
  submit(form);
}, [form]);

<Child onSave={onSave} />`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Avoid: inline function</div>
                        <pre>
                            <code>{`<Child onSave={() => submit(form)} />`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    If Child is not memoized and the callback is not a
                    dependency anywhere, useCallback may be unnecessary.
                </p>
            </section>

            <section className="block">
                <h2>6) Derived state (avoid storing what you can compute)</h2>
                <p>
                    Storing derived values in state can cause extra rerenders
                    and bugs. Compute when needed.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Avoid</div>
                        <pre>
                            <code>{`const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(items.reduce((s, x) => s + x.price, 0));
}, [items]);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Better</div>
                        <pre>
                            <code>{`const total = useMemo(() => {
  return items.reduce((s, x) => s + x.price, 0);
}, [items]);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>7) Rendering lists efficiently</h2>
                <ul className="list">
                    <li>Use stable keys (id) to preserve identity</li>
                    <li>Split large UI into smaller components</li>
                    <li>
                        Render only what is needed (pagination, lazy loading)
                    </li>
                    <li>For huge lists: consider virtualization (later)</li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Stable keys</div>
                    <pre>
                        <code>{`{items.map((x) => (
  <Row key={x.id} item={x} />
))}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>8) Performance mindset</h2>
                <ul className="list">
                    <li>Measure first, optimize second</li>
                    <li>Fix the biggest rerender sources</li>
                    <li>Prefer simpler code unless you have a real issue</li>
                    <li>Memoization adds complexity and memory usage</li>
                </ul>

                <div className="note">
                    Typical wins: smaller components, stable props, fewer
                    context updates, and avoiding unnecessary derived state.
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Avoid passing new objects/functions unnecessarily
                    </div>
                    <div className="row">
                        Use React.memo for heavy components with stable props
                    </div>
                    <div className="row">
                        Use useMemo for expensive calculations or stable
                        references
                    </div>
                    <div className="row">
                        Use useCallback for memo children or effect deps
                    </div>
                    <div className="row">
                        Do not store derived values in state
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickPerformance;
