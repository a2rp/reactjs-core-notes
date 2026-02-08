import React from "react";
import { Styled } from "./styled";

const QuickConditional = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Conditional Rendering</h1>
                <p className="intro">
                    Conditional rendering means showing different UI depending
                    on props, state, or computed values. In React, you mostly
                    use expressions like ternary, &&, early returns, and render
                    maps.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Patterns</span>
                    <span className="chip">Pitfalls</span>
                </div>
            </header>

            <section className="block">
                <h2>1) If it is not JSX, return early</h2>
                <p>
                    The cleanest pattern is often early return. It keeps JSX
                    simple and avoids nested ternaries.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Early return</div>
                    <pre>
                        <code>{`function Profile({ user }) {
  if (!user) {
    return <div>Please login</div>;
  }

  return <div>Welcome {user.name}</div>;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) Ternary operator</h2>
                <p>
                    Use ternary when there are two clear UI outcomes. Keep it
                    short.
                </p>

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

                <p className="note">
                    Avoid nested ternaries unless it is extremely simple.
                </p>
            </section>

            <section className="block">
                <h2>3) Logical && (show only if true)</h2>
                <p>
                    Use <code>&&</code> when you want to render something only
                    when a condition is true.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Common</div>
                        <pre>
                            <code>{`{error && <p>{error}</p>}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Full example</div>
                        <pre>
                            <code>{`function ErrorBox({ error }) {
  return (
    <div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}`}</code>
                        </pre>
                    </div>
                </div>

                <div className="note">
                    Beware: rendering numbers with && can show 0 on screen.
                </div>
            </section>

            <section className="block">
                <h2>4) The "0 renders" trap</h2>
                <p>
                    If the left side is <code>0</code>, React renders it. So
                    this can accidentally show <code>0</code> in UI.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Problem</div>
                        <pre>
                            <code>{`{items.length && <List items={items} />}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Fix</div>
                        <pre>
                            <code>{`{items.length > 0 && <List items={items} />}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>5) Conditional classNames and styles</h2>
                <p>
                    You can conditionally apply classes or inline styles. In
                    your project, you use styled-components, so className
                    toggles are still useful.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Conditional className</div>
                    <pre>
                        <code>{`<button className={active ? "isActive" : ""}>
  Tab
</button>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Render different components</h2>
                <p>
                    Sometimes you want to render completely different
                    components. Keep it readable with early returns or a
                    variable.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Component switch</div>
                    <pre>
                        <code>{`function Page({ loading, error }) {
  if (loading) return <Loader />;
  if (error) return <Error />;

  return <Content />;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Conditional rendering in map</h2>
                <p>
                    When mapping lists, you can filter first or return null.
                    Filtering is usually clearer.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Filter then map</div>
                        <pre>
                            <code>{`{items
  .filter((x) => x.visible)
  .map((x) => (
    <Item key={x.id} item={x} />
  ))}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Return null</div>
                        <pre>
                            <code>{`{items.map((x) =>
  x.visible ? <Item key={x.id} item={x} /> : null
)}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>8) Avoid deeply nested logic in JSX</h2>
                <p>If JSX becomes messy, move logic above into variables.</p>

                <div className="codeCard">
                    <div className="codeTitle">Compute then render</div>
                    <pre>
                        <code>{`const title = isAdmin ? "Admin" : "User";
const badge = online ? <GreenDot /> : <GrayDot />;

return (
  <div>
    <h3>{title}</h3>
    {badge}
  </div>
);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Prefer early returns for clean UI branches
                    </div>
                    <div className="row">Use ternary for two outcomes</div>
                    <div className="row">
                        Use && to show something only when true
                    </div>
                    <div className="row">Avoid the 0 renders trap</div>
                    <div className="row">Move complex logic outside JSX</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickConditional;
