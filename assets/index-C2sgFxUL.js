import{d as s,j as e}from"./index-B0yqN1dR.js";const t={Wrapper:s.div`
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

            strong {
                color: var(--color-text-primary);
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
    `},a=()=>e.jsxs(t.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"State"}),e.jsx("p",{className:"intro",children:"State is data that changes over time and causes a component to re-render. If a value should persist between renders and affect UI, it belongs in state."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Mental Model"}),e.jsx("span",{className:"chip",children:"Pitfalls"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) When to use state"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Use state for values that change due to user actions or async work"}),e.jsx("li",{children:"If the UI depends on it, it can be state"}),e.jsx("li",{children:"If it can be computed from props or other state, prefer computing it (derived state)"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Basic state"}),e.jsx("pre",{children:e.jsx("code",{children:`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) setState is async and batched"}),e.jsx("p",{children:"React may batch state updates for performance. That means state might not update immediately after calling a setter."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Do not rely on immediate state change"}),e.jsx("pre",{children:e.jsx("code",{children:`const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  // count here is still the old value (in this render)
};`})})]}),e.jsx("p",{className:"note",children:"If you need the next state based on previous state, use a functional update."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Functional updates (must know)"}),e.jsx("p",{children:"Use functional updates when the new value depends on the previous one. This avoids stale values when multiple updates happen quickly."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect (can be stale)"}),e.jsx("pre",{children:e.jsx("code",{children:`setCount(count + 1);
setCount(count + 1);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct"}),e.jsx("pre",{children:e.jsx("code",{children:`setCount((prev) => prev + 1);
setCount((prev) => prev + 1);`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) State must be treated as immutable"}),e.jsx("p",{children:"Never mutate objects or arrays in state. Always create a new copy so React can detect changes correctly."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect (mutation)"}),e.jsx("pre",{children:e.jsx("code",{children:`const [user, setUser] = useState({ name: "Ash" });

user.name = "New"; // ❌ mutation
setUser(user);     // ❌ same reference`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct (copy)"}),e.jsx("pre",{children:e.jsx("code",{children:`const [user, setUser] = useState({ name: "Ash" });

setUser((prev) => ({
  ...prev,
  name: "New"
}));`})})]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Arrays: add/remove/update"}),e.jsx("pre",{children:e.jsx("code",{children:`// add
setItems((prev) => [...prev, newItem]);

// remove
setItems((prev) => prev.filter((x) => x.id !== id));

// update one
setItems((prev) =>
  prev.map((x) => (x.id === id ? { ...x, done: true } : x))
);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Derived state (common trap)"}),e.jsx("p",{children:"If a value can be computed from other state/props, do not store it as separate state. Keeping both creates sync bugs."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect (two sources of truth)"}),e.jsx("pre",{children:e.jsx("code",{children:`const [items, setItems] = useState([]);
const [count, setCount] = useState(0); // ❌ derived

// now you must always keep count in sync with items`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct (derive during render)"}),e.jsx("pre",{children:e.jsx("code",{children:`const [items, setItems] = useState([]);

const count = items.length; // ✅ derived value`})})]})]}),e.jsx("p",{className:"note",children:"If deriving is expensive, use useMemo. Do not store derived state unless needed."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Initial state from props (careful)"}),e.jsx("p",{children:"Initializing state from props is sometimes valid, but remember state will not update automatically when props change."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Initial from props"}),e.jsx("pre",{children:e.jsx("code",{children:`function Form({ initialName }) {
  const [name, setName] = useState(initialName);

  // name won't change if initialName changes later
}`})})]}),e.jsx("p",{className:"note",children:"If you want to respond to prop changes, use effects carefully or redesign the flow."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Where state should live (lifting state)"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Keep state as close as possible to where it is used"}),e.jsx("li",{children:"If multiple components need it, lift it up to their common parent"}),e.jsx("li",{children:"Do not over-lift state without reason"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Lifting state idea"}),e.jsx("pre",{children:e.jsx("code",{children:`// Parent owns state
// Child receives value + setter or callbacks

<Filter value={filter} onChange={setFilter} />
<List filter={filter} />`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"State changes cause re-render"}),e.jsx("div",{className:"row",children:"Use functional updates for previous-based updates"}),e.jsx("div",{className:"row",children:"Never mutate objects or arrays in state"}),e.jsx("div",{className:"row",children:"Avoid derived state when possible"}),e.jsx("div",{className:"row",children:"Lift state only when multiple components need it"})]})]})]});export{a as default};
