import React from "react";
import { Styled } from "./styled";

const QuickJSX = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>JSX</h1>
                <p className="intro">
                    JSX is JavaScript syntax used to describe UI. It looks like
                    HTML, but it compiles into JavaScript function calls that
                    create React elements. Browsers never see JSX.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Syntax</span>
                    <span className="chip">Gotchas</span>
                </div>
            </header>

            <section className="block">
                <h2>1) What JSX becomes</h2>
                <p>
                    JSX is compiled to React element creation. The exact output
                    depends on your build setup, but the mental model is always
                    the same: JSX produces objects that describe what UI should
                    look like.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">JSX (what you write)</div>
                    <pre>
                        <code>{`const el = <button className="btn">Save</button>;`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">
                        Compiled idea (mental model)
                    </div>
                    <pre>
                        <code>{`// conceptual output
const el = React.createElement(
  "button",
  { className: "btn" },
  "Save"
);`}</code>
                    </pre>
                </div>

                <p className="note">
                    You do not call createElement manually. This is only to
                    understand what JSX means.
                </p>
            </section>

            <section className="block">
                <h2>2) JSX rules you must know</h2>

                <ul className="list">
                    <li>
                        <strong>Single parent:</strong> A component must return
                        one top-level element. Use a wrapper or fragments.
                    </li>
                    <li>
                        <strong>Use className:</strong> JSX uses{" "}
                        <code>className</code> instead of <code>class</code>.
                    </li>
                    <li>
                        <strong>JavaScript expressions only:</strong> Put
                        expressions inside <code>{"{}"}</code>. Statements like{" "}
                        <code>if</code> and <code>for</code> do not work
                        directly inside JSX.
                    </li>
                    <li>
                        <strong>Attributes are camelCase:</strong> example{" "}
                        <code>onClick</code>, <code>tabIndex</code>,{" "}
                        <code>htmlFor</code>.
                    </li>
                </ul>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            Single parent using Fragment
                        </div>
                        <pre>
                            <code>{`return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">className + htmlFor</div>
                        <pre>
                            <code>{`return (
  <label htmlFor="email" className="label">
    Email
  </label>
);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>3) Expressions vs statements</h2>
                <p>
                    Inside <code>{"{}"}</code> you can use expressions (values
                    that evaluate). For conditions, use ternary or logical
                    operators.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Good: ternary</div>
                        <pre>
                            <code>{`return (
  <div>
    {isLoggedIn ? <UserMenu /> : <LoginButton />}
  </div>
);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">
                            Good: && (renders right side if true)
                        </div>
                        <pre>
                            <code>{`return (
  <div>
    {hasError && <ErrorBanner />}
  </div>
);`}</code>
                        </pre>
                    </div>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">
                        Not allowed inside JSX: if/for statements
                    </div>
                    <pre>
                        <code>{`// ❌ not valid inside JSX
return (
  <div>
    if (isOpen) { <Modal /> }
  </div>
);`}</code>
                    </pre>
                </div>

                <p className="note">
                    Put statements outside JSX, compute variables first, then
                    render with expressions.
                </p>
            </section>

            <section className="block">
                <h2>4) Rendering lists</h2>
                <p>
                    Use <code>map</code> to render arrays. Each rendered item
                    needs a stable <code>key</code>. Do not use array index as
                    key if the list can reorder.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">
                            List render with stable key
                        </div>
                        <pre>
                            <code>{`return (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.label}</li>
    ))}
  </ul>
);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">
                            Index as key (only for static lists)
                        </div>
                        <pre>
                            <code>{`return (
  <ul>
    {staticItems.map((label, idx) => (
      <li key={idx}>{label}</li>
    ))}
  </ul>
);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>5) Attributes, booleans, and props patterns</h2>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Boolean attributes</div>
                        <pre>
                            <code>{`return (
  <button disabled={isSaving}>
    Save
  </button>
);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Conditional className</div>
                        <pre>
                            <code>{`const cls = isActive ? "tab active" : "tab";

return (
  <div className={cls}>
    Tab
  </div>
);`}</code>
                        </pre>
                    </div>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">
                        Spreading props (use carefully)
                    </div>
                    <pre>
                        <code>{`// ✅ useful when building wrappers
const Button = (props) => {
  return <button {...props} />;
};

// ⚠ be careful: you may pass unwanted props
<Button type="button" onClick={save} data-id="x" />`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Inline styles vs className</h2>
                <p>
                    JSX inline styles are objects, not strings. Keys are
                    camelCase. Prefer className for most styling, use inline
                    styles for truly dynamic values.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Inline style object</div>
                        <pre>
                            <code>{`return (
  <div style={{ marginTop: 12, backgroundColor: "black" }}>
    Box
  </div>
);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Prefer className</div>
                        <pre>
                            <code>{`return (
  <div className="box">
    Box
  </div>
);`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>7) Dangerous HTML (rare)</h2>
                <p>
                    React escapes strings by default. Only use{" "}
                    <code>dangerouslySetInnerHTML</code>
                    if you fully trust the content (or sanitize it properly).
                </p>

                <div className="codeCard">
                    <div className="codeTitle">dangerouslySetInnerHTML</div>
                    <pre>
                        <code>{`const html = "<b>bold</b>";

return (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);`}</code>
                    </pre>
                </div>

                <p className="note">
                    Treat this as a last resort. Most apps never need it.
                </p>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        JSX compiles to JS that creates React elements
                    </div>
                    <div className="row">One parent element or Fragment</div>
                    <div className="row">
                        Expressions inside {"{}"}, statements outside
                    </div>
                    <div className="row">
                        className, htmlFor, camelCase attributes
                    </div>
                    <div className="row">Lists need stable keys</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickJSX;
