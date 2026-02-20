import{d as s,j as e}from"./index-DmL9HLb2.js";const r={Wrapper:s.div`
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
            padding: 10px 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
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
    `},c=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Performance"}),e.jsx("p",{className:"intro",children:"React performance is mostly about avoiding unnecessary rerenders, keeping components small, and optimizing only when it actually matters. Memoization is a tool, not a default habit."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Rerenders"}),e.jsx("span",{className:"chip",children:"Memoization"}),e.jsx("span",{className:"chip",children:"Patterns"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) What causes rerenders"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"State update in a component"}),e.jsx("li",{children:"Props change from parent"}),e.jsx("li",{children:"Context value changes"}),e.jsx("li",{children:"Parent rerender can rerender children (unless memoized)"})]}),e.jsx("div",{className:"note",children:"Rerender does not mean DOM update every time. React compares and updates only what changed."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) The most common mistake"}),e.jsx("p",{children:"Creating new objects/functions in render makes props change, which can force child rerenders."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Problem: new object each render"}),e.jsx("pre",{children:e.jsx("code",{children:"<Child config={{ size: 10 }} />"})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Fix: memoize object"}),e.jsx("pre",{children:e.jsx("code",{children:`const config = useMemo(() => ({ size: 10 }), []);
<Child config={config} />`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) React.memo"}),e.jsx("p",{children:"React.memo prevents rerender of a component if props are the same (shallow comparison). Great for heavy child components."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"React.memo usage"}),e.jsx("pre",{children:e.jsx("code",{children:`import React from "react";

const HeavyCard = React.memo(function HeavyCard({ title }) {
  return <div>{title}</div>;
});`})})]}),e.jsx("p",{className:"note",children:"React.memo does not help if you pass new objects/functions every render."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) useMemo (memoize values)"}),e.jsx("p",{children:"useMemo caches a computed value between renders. Use it for expensive computations or to keep object/array references stable."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Expensive computation"}),e.jsx("pre",{children:e.jsx("code",{children:`const filtered = useMemo(() => {
  return items.filter((x) => x.price > minPrice);
}, [items, minPrice]);`})})]}),e.jsx("div",{className:"note",children:"If the computation is cheap, do not use useMemo just for style."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) useCallback (memoize functions)"}),e.jsx("p",{children:"useCallback caches a function reference. Useful when passing callbacks to memoized children or when a function is a dependency in an effect."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Callback passed to memo child"}),e.jsx("pre",{children:e.jsx("code",{children:`const onSave = useCallback(() => {
  submit(form);
}, [form]);

<Child onSave={onSave} />`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Avoid: inline function"}),e.jsx("pre",{children:e.jsx("code",{children:"<Child onSave={() => submit(form)} />"})})]})]}),e.jsx("p",{className:"note",children:"If Child is not memoized and the callback is not a dependency anywhere, useCallback may be unnecessary."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Derived state (avoid storing what you can compute)"}),e.jsx("p",{children:"Storing derived values in state can cause extra rerenders and bugs. Compute when needed."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Avoid"}),e.jsx("pre",{children:e.jsx("code",{children:`const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(items.reduce((s, x) => s + x.price, 0));
}, [items]);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Better"}),e.jsx("pre",{children:e.jsx("code",{children:`const total = useMemo(() => {
  return items.reduce((s, x) => s + x.price, 0);
}, [items]);`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Rendering lists efficiently"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Use stable keys (id) to preserve identity"}),e.jsx("li",{children:"Split large UI into smaller components"}),e.jsx("li",{children:"Render only what is needed (pagination, lazy loading)"}),e.jsx("li",{children:"For huge lists: consider virtualization (later)"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Stable keys"}),e.jsx("pre",{children:e.jsx("code",{children:`{items.map((x) => (
  <Row key={x.id} item={x} />
))}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Performance mindset"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Measure first, optimize second"}),e.jsx("li",{children:"Fix the biggest rerender sources"}),e.jsx("li",{children:"Prefer simpler code unless you have a real issue"}),e.jsx("li",{children:"Memoization adds complexity and memory usage"})]}),e.jsx("div",{className:"note",children:"Typical wins: smaller components, stable props, fewer context updates, and avoiding unnecessary derived state."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Avoid passing new objects/functions unnecessarily"}),e.jsx("div",{className:"row",children:"Use React.memo for heavy components with stable props"}),e.jsx("div",{className:"row",children:"Use useMemo for expensive calculations or stable references"}),e.jsx("div",{className:"row",children:"Use useCallback for memo children or effect deps"}),e.jsx("div",{className:"row",children:"Do not store derived values in state"})]})]})]});export{c as default};
