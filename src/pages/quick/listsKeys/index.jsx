import React from "react";
import { Styled } from "./styled";

const QuickListsKeys = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Lists & Keys</h1>
                <p className="intro">
                    Lists allow you to render collections of data. Keys help
                    React identify which items have changed, been added, or
                    removed. Incorrect keys are a common source of subtle bugs.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Performance</span>
                    <span className="chip">Pitfalls</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Rendering lists with map</h2>
                <p>
                    Use <code>Array.map</code> to transform data into elements.
                    Each element returned from a list must have a{" "}
                    <code>key</code>.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Basic list rendering</div>
                    <pre>
                        <code>{`function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) What keys actually do</h2>
                <p>
                    Keys are used by React’s reconciliation algorithm to match
                    elements between renders. They are not passed to components
                    as props.
                </p>

                <ul className="list">
                    <li>Keys help React reuse existing DOM nodes</li>
                    <li>Keys must be stable across renders</li>
                    <li>Keys must be unique among siblings</li>
                </ul>

                <div className="note">
                    Think of keys as identity, not as index or position.
                </div>
            </section>

            <section className="block">
                <h2>3) Using array index as key (when it is okay)</h2>
                <p>
                    Using index as key is not always wrong, but it is only safe
                    in very limited cases.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Acceptable use</div>
                        <pre>
                            <code>{`// static list, never reordered
{["A", "B", "C"].map((x, idx) => (
  <li key={idx}>{x}</li>
))}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Problematic use</div>
                        <pre>
                            <code>{`// ❌ items can be reordered or removed
{items.map((item, idx) => (
  <Row key={idx} item={item} />
))}`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    Index keys break state preservation when items move or
                    change.
                </p>
            </section>

            <section className="block">
                <h2>4) Real bug caused by wrong keys</h2>
                <p>
                    Using index as key can cause React to associate the wrong
                    state with list items.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Input list bug</div>
                    <pre>
                        <code>{`// ❌ wrong key
{items.map((item, idx) => (
  <input key={idx} defaultValue={item.value} />
))}

// Removing one item shifts indexes and values mismatch`}</code>
                    </pre>
                </div>

                <p className="note">
                    Always use a stable ID when list items contain stateful
                    components or inputs.
                </p>
            </section>

            <section className="block">
                <h2>5) Keys are not props</h2>
                <p>
                    Keys are consumed by React internally. They are not
                    available inside the component.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Incorrect assumption</div>
                        <pre>
                            <code>{`function Row({ key }) {
  // ❌ key is undefined
}`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Correct approach</div>
                        <pre>
                            <code>{`<Row key={item.id} id={item.id} />

function Row({ id }) {
  // use id explicitly
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>6) Fragment keys</h2>
                <p>
                    When returning multiple elements per iteration, use a keyed
                    fragment.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Keyed fragment</div>
                    <pre>
                        <code>{`{items.map((item) => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </React.Fragment>
))}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Where to generate keys</h2>
                <ul className="list">
                    <li>Prefer IDs from backend or data source</li>
                    <li>Do not generate random keys during render</li>
                    <li>
                        Generate IDs when data is created, not when rendered
                    </li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Bad: random keys</div>
                    <pre>
                        <code>{`<li key={Math.random()}>{item.label}</li>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">Always use a stable, unique key</div>
                    <div className="row">
                        Avoid index as key for dynamic lists
                    </div>
                    <div className="row">
                        Keys are for React, not your component
                    </div>
                    <div className="row">Wrong keys cause subtle UI bugs</div>
                    <div className="row">Fragments can also have keys</div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickListsKeys;
