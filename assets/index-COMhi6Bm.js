import{d as s,j as e}from"./index-DmL9HLb2.js";const i={Wrapper:s.div`
        max-width: 980px;
        margin: 0 auto;
        padding: 40px 20px 80px;
        color: var(--color-text-primary);

        .pageHeader {
            margin-bottom: 20px;
        }

        h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            max-width: 820px;
            margin-bottom: 12px;
        }

        .intro {
            margin-bottom: 10px;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .chip {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
        }

        .block {
            margin-top: 26px;
            padding-top: 16px;
            border-top: 1px solid var(--color-border);
        }

        .list {
            margin-left: 18px;
            margin-bottom: 12px;

            li {
                font-size: 14px;
                color: var(--color-text-secondary);
                margin-bottom: 8px;
                list-style: disc;
            }
        }

        code {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            padding: 2px 4px;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
        }

        pre {
            margin: 0;
            padding: 12px;
            overflow: auto;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
        }

        pre code {
            padding: 0;
            border: 0;
            background: transparent;
            display: block;
            white-space: pre;
            line-height: 1.6;
        }

        .codeCard {
            margin-top: 12px;
        }

        .codeTitle {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 6px;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            margin-top: 10px;
        }

        .checklist {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .checklist .row {
            padding: 10px 12px;
            font-size: 13px;
            color: var(--color-text-secondary);
            border-top: 1px solid var(--color-border);
        }

        .checklist .row:first-child {
            border-top: 0;
        }

        @media (max-width: 820px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
    `},a=()=>e.jsxs(i.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Lists & Keys"}),e.jsx("p",{className:"intro",children:"Lists allow you to render collections of data. Keys help React identify which items have changed, been added, or removed. Incorrect keys are a common source of subtle bugs."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Performance"}),e.jsx("span",{className:"chip",children:"Pitfalls"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Rendering lists with map"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"Array.map"})," to transform data into elements. Each element returned from a list must have a"," ",e.jsx("code",{children:"key"}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Basic list rendering"}),e.jsx("pre",{children:e.jsx("code",{children:`function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) What keys actually do"}),e.jsx("p",{children:"Keys are used by React’s reconciliation algorithm to match elements between renders. They are not passed to components as props."}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Keys help React reuse existing DOM nodes"}),e.jsx("li",{children:"Keys must be stable across renders"}),e.jsx("li",{children:"Keys must be unique among siblings"})]}),e.jsx("div",{className:"note",children:"Think of keys as identity, not as index or position."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Using array index as key (when it is okay)"}),e.jsx("p",{children:"Using index as key is not always wrong, but it is only safe in very limited cases."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Acceptable use"}),e.jsx("pre",{children:e.jsx("code",{children:`// static list, never reordered
{["A", "B", "C"].map((x, idx) => (
  <li key={idx}>{x}</li>
))}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Problematic use"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ items can be reordered or removed
{items.map((item, idx) => (
  <Row key={idx} item={item} />
))}`})})]})]}),e.jsx("p",{className:"note",children:"Index keys break state preservation when items move or change."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Real bug caused by wrong keys"}),e.jsx("p",{children:"Using index as key can cause React to associate the wrong state with list items."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Input list bug"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ wrong key
{items.map((item, idx) => (
  <input key={idx} defaultValue={item.value} />
))}

// Removing one item shifts indexes and values mismatch`})})]}),e.jsx("p",{className:"note",children:"Always use a stable ID when list items contain stateful components or inputs."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Keys are not props"}),e.jsx("p",{children:"Keys are consumed by React internally. They are not available inside the component."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect assumption"}),e.jsx("pre",{children:e.jsx("code",{children:`function Row({ key }) {
  // ❌ key is undefined
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct approach"}),e.jsx("pre",{children:e.jsx("code",{children:`<Row key={item.id} id={item.id} />

function Row({ id }) {
  // use id explicitly
}`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Fragment keys"}),e.jsx("p",{children:"When returning multiple elements per iteration, use a keyed fragment."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Keyed fragment"}),e.jsx("pre",{children:e.jsx("code",{children:`{items.map((item) => (
  <React.Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </React.Fragment>
))}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Where to generate keys"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Prefer IDs from backend or data source"}),e.jsx("li",{children:"Do not generate random keys during render"}),e.jsx("li",{children:"Generate IDs when data is created, not when rendered"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Bad: random keys"}),e.jsx("pre",{children:e.jsx("code",{children:"<li key={Math.random()}>{item.label}</li>"})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Always use a stable, unique key"}),e.jsx("div",{className:"row",children:"Avoid index as key for dynamic lists"}),e.jsx("div",{className:"row",children:"Keys are for React, not your component"}),e.jsx("div",{className:"row",children:"Wrong keys cause subtle UI bugs"}),e.jsx("div",{className:"row",children:"Fragments can also have keys"})]})]})]});export{a as default};
