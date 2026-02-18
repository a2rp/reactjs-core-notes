import{d as s,j as e}from"./index-Dw88vYR0.js";const o={Wrapper:s.div`
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

        .table {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .tHead,
        .tRow {
            display: grid;
            grid-template-columns: 160px 1fr 1fr;
            gap: 10px;
            padding: 10px 12px;
        }

        .tHead {
            border-bottom: 1px solid var(--color-border);
            color: var(--color-text-primary);
            font-weight: 700;
            font-size: 12px;
        }

        .tRow {
            border-top: 1px solid var(--color-border);
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .tRow:first-of-type {
            border-top: 0;
        }

        @media (max-width: 900px) {
            .tHead,
            .tRow {
                grid-template-columns: 140px 1fr;
            }

            .colTip {
                display: none;
            }
        }

        @media (max-width: 820px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
    `},r=()=>e.jsxs(o.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Hooks"}),e.jsx("p",{className:"intro",children:"Hooks let function components use React features like state, lifecycle-like effects, refs, memoization, and context. Hooks help you reuse logic without changing component structure."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Rules"}),e.jsx("span",{className:"chip",children:"Patterns"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Why hooks exist"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Use state and effects in function components"}),e.jsx("li",{children:"Reuse logic via custom hooks"}),e.jsx("li",{children:"Keep components simpler and more composable"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Example: state + effect"}),e.jsx("pre",{children:e.jsx("code",{children:`import React, { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{now.toLocaleTimeString()}</div>;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Rules of hooks (must follow)"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Only call hooks at the top level (no loops, no conditions)"}),e.jsx("li",{children:"Only call hooks inside React function components or custom hooks"}),e.jsx("li",{children:"Hook order must stay the same on every render"})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect"}),e.jsx("pre",{children:e.jsx("code",{children:`if (open) {
  useEffect(() => {
    console.log("runs");
  }, []);
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  if (!open) return;
  console.log("runs");
}, [open]);`})})]})]}),e.jsx("p",{className:"note",children:"Put conditions inside the hook body, not around the hook call."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Common hooks overview"}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"tHead",children:[e.jsx("div",{className:"colHook",children:"Hook"}),e.jsx("div",{className:"colUse",children:"Use for"}),e.jsx("div",{className:"colTip",children:"Tip"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useState"})}),e.jsx("div",{className:"colUse",children:"Component state"}),e.jsx("div",{className:"colTip",children:"Use functional updates for prev-based changes"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useEffect"})}),e.jsx("div",{className:"colUse",children:"Side effects"}),e.jsx("div",{className:"colTip",children:"Cleanup for timers, listeners, subscriptions"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useRef"})}),e.jsx("div",{className:"colUse",children:"Persist values without re-render"}),e.jsx("div",{className:"colTip",children:"Use for DOM refs and stable mutable values"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useMemo"})}),e.jsx("div",{className:"colUse",children:"Memoize computed values"}),e.jsx("div",{className:"colTip",children:"Use only for expensive work or stable deps"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useCallback"})}),e.jsx("div",{className:"colUse",children:"Memoize functions"}),e.jsx("div",{className:"colTip",children:"Useful when passing callbacks to memoized children"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useContext"})}),e.jsx("div",{className:"colUse",children:"Global-ish shared state"}),e.jsx("div",{className:"colTip",children:"Avoid overusing context for fast-changing values"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{className:"colHook",children:e.jsx("code",{children:"useReducer"})}),e.jsx("div",{className:"colUse",children:"Complex state transitions"}),e.jsx("div",{className:"colTip",children:"Great when state logic has many actions"})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) useRef basics"}),e.jsxs("p",{children:["useRef stores a mutable value that persists between renders. Updating ",e.jsx("code",{children:"ref.current"})," does not re-render."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Ref for DOM"}),e.jsx("pre",{children:e.jsx("code",{children:`import React, { useRef } from "react";

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
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Ref for stable value"}),e.jsx("pre",{children:e.jsx("code",{children:`const lastValueRef = useRef(null);

useEffect(() => {
  lastValueRef.current = value;
}, [value]);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) useMemo and useCallback (when they matter)"}),e.jsx("p",{children:"useMemo memoizes values. useCallback memoizes functions. They are performance tools, not default patterns."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"useMemo"}),e.jsx("pre",{children:e.jsx("code",{children:`const total = useMemo(() => {
  return items.reduce((sum, x) => sum + x.price, 0);
}, [items]);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"useCallback"}),e.jsx("pre",{children:e.jsx("code",{children:`const handleSave = useCallback(() => {
  onSave(formData);
}, [onSave, formData]);`})})]})]}),e.jsx("p",{className:"note",children:"If you do not have a real performance issue, keep code simple."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Custom hooks (reuse logic)"}),e.jsx("p",{children:'A custom hook is just a function that uses other hooks. Prefix with "use" so React and linters recognize it.'}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Custom hook example"}),e.jsx("pre",{children:e.jsx("code",{children:`function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`})})]}),e.jsx("p",{className:"note",children:"Custom hooks are for shared logic, not for shared UI."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Hooks must be called at top level"}),e.jsx("div",{className:"row",children:"Effects are for side effects, not rendering logic"}),e.jsx("div",{className:"row",children:"useRef keeps values without re-render"}),e.jsx("div",{className:"row",children:"useMemo/useCallback are performance tools"}),e.jsx("div",{className:"row",children:"Custom hooks reuse logic cleanly"})]})]})]});export{r as default};
