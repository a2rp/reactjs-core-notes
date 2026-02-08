import{d as s,j as e}from"./index-BN6OS7WO.js";const r={Wrapper:s.div`
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
    `},o=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Components"}),e.jsx("p",{className:"intro",children:"Components are the building blocks of React UI. A component is just a JavaScript function that returns React elements based on props and state."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Patterns"}),e.jsx("span",{className:"chip",children:"Best Practices"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Function components"}),e.jsx("p",{children:"Modern React uses function components. They are simple functions that return JSX. Class components still exist but are no longer recommended for new code."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Basic function component"}),e.jsx("pre",{children:e.jsx("code",{children:`function Button() {
  return <button>Click</button>;
}`})})]}),e.jsx("p",{className:"note",children:"Component names must start with a capital letter. Lowercase names are treated as HTML tags."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Components receive props"}),e.jsx("p",{children:"Props are inputs to components. They are read-only and passed from parent to child."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Passing props"}),e.jsx("pre",{children:e.jsx("code",{children:'<Button label="Save" />'})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Receiving props"}),e.jsx("pre",{children:e.jsx("code",{children:`function Button({ label }) {
  return <button>{label}</button>;
}`})})]})]}),e.jsx("p",{className:"note",children:"Props flow in one direction: parent → child. Children never mutate props directly."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Children prop"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"children"})," prop lets a component wrap other elements. This is essential for layout and reusable UI patterns."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Using children"}),e.jsx("pre",{children:e.jsx("code",{children:`function Card({ children }) {
  return <div className="card">{children}</div>;
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Rendering children"}),e.jsx("pre",{children:e.jsx("code",{children:`<Card>
  <h3>Title</h3>
  <p>Description</p>
</Card>`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Conditional rendering inside components"}),e.jsx("p",{children:"Components often render different UI based on props or state. Use expressions, not statements."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Ternary"}),e.jsx("pre",{children:e.jsx("code",{children:`function Status({ online }) {
  return (
    <span>
      {online ? "Online" : "Offline"}
    </span>
  );
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Logical &&"}),e.jsx("pre",{children:e.jsx("code",{children:`function Error({ message }) {
  return (
    <>
      {message && <p>{message}</p>}
    </>
  );
}`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Splitting components"}),e.jsx("p",{children:"If a component grows too large, split it. Each component should have one clear responsibility."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Before (too much responsibility)"}),e.jsx("pre",{children:e.jsx("code",{children:`function UserPage() {
  // fetch data
  // render header
  // render list
  // handle events
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"After (split)"}),e.jsx("pre",{children:e.jsx("code",{children:`function UserPage() {
  return (
    <>
      <UserHeader />
      <UserList />
    </>
  );
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Container vs presentational components"}),e.jsx("p",{children:"A common pattern is to separate logic from UI. Containers handle data and state, presentational components focus on rendering."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Presentational component"}),e.jsx("pre",{children:e.jsx("code",{children:`function UserView({ user }) {
  return <div>{user.name}</div>;
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Container component"}),e.jsx("pre",{children:e.jsx("code",{children:`function UserContainer() {
  const user = useUser();
  return <UserView user={user} />;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Components are functions that return JSX"}),e.jsx("div",{className:"row",children:"Component names must be capitalized"}),e.jsx("div",{className:"row",children:"Props are read-only inputs"}),e.jsx("div",{className:"row",children:"Use children for composition"}),e.jsx("div",{className:"row",children:"Split large components early"})]})]})]});export{o as default};
