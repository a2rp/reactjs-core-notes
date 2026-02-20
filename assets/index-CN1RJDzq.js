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
    `},a=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Props"}),e.jsx("p",{className:"intro",children:"Props are inputs passed from parent components to child components. They allow components to be configurable and reusable."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Patterns"}),e.jsx("span",{className:"chip",children:"Pitfalls"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) What props are"}),e.jsx("p",{children:"Props are plain JavaScript values passed into a component. They are read-only. A component must never modify its props."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Passing props"}),e.jsx("pre",{children:e.jsx("code",{children:'<Button label="Save" />'})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Receiving props"}),e.jsx("pre",{children:e.jsx("code",{children:`function Button({ label }) {
  return <button>{label}</button>;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Props are immutable"}),e.jsx("p",{children:"Props should be treated as immutable values. If something needs to change, lift the state up and pass new props down."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct"}),e.jsx("pre",{children:e.jsx("code",{children:`function Counter({ value }) {
  return <span>{value}</span>;
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect"}),e.jsx("pre",{children:e.jsx("code",{children:`function Counter({ value }) {
  value = value + 1; // ❌ never do this
}`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Default values"}),e.jsx("p",{children:"Use default values when destructuring props to handle missing inputs."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Default props via destructuring"}),e.jsx("pre",{children:e.jsx("code",{children:`function Button({ type = "button", disabled = false }) {
  return <button type={type} disabled={disabled} />;
}`})})]}),e.jsx("p",{className:"note",children:"Default parameters are preferred over the old defaultProps pattern."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Boolean props"}),e.jsx("p",{children:"Boolean props can be passed implicitly or explicitly."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Implicit boolean"}),e.jsx("pre",{children:e.jsx("code",{children:"<Modal open />"})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Explicit boolean"}),e.jsx("pre",{children:e.jsx("code",{children:"<Modal open={true} />"})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Passing functions as props"}),e.jsx("p",{children:"Functions are commonly passed as props to allow children to notify parents about events."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Event callback pattern"}),e.jsx("pre",{children:e.jsx("code",{children:`function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}

function Page() {
  const handleSave = () => {
    console.log("saved");
  };

  return <SaveButton onSave={handleSave} />;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) children as props"}),e.jsx("p",{children:"The children prop allows components to be composable. This is one of React's most powerful ideas."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"children pattern"}),e.jsx("pre",{children:e.jsx("code",{children:`function Card({ children }) {
  return <div className="card">{children}</div>;
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Usage"}),e.jsx("pre",{children:e.jsx("code",{children:`<Card>
  <h3>Title</h3>
  <p>Description</p>
</Card>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Props drilling"}),e.jsx("p",{children:"Passing props through many layers is called props drilling. It is not wrong, but it can become hard to maintain."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Props drilling example"}),e.jsx("pre",{children:e.jsx("code",{children:`<App user={user}>
  <Layout user={user}>
    <Header user={user} />
  </Layout>
</App>`})})]}),e.jsx("p",{className:"note",children:"When drilling becomes painful, consider composition or context."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Spreading props"}),e.jsx("p",{children:"The spread operator forwards all props. Useful for wrapper components, but use carefully."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Spread props"}),e.jsx("pre",{children:e.jsx("code",{children:`function Input(props) {
  return <input {...props} />;
}`})})]}),e.jsx("p",{className:"note",children:"Be careful not to pass unintended props to DOM elements."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Props are read-only"}),e.jsx("div",{className:"row",children:"Use defaults for optional props"}),e.jsx("div",{className:"row",children:"Functions can be passed as props"}),e.jsx("div",{className:"row",children:"children enables composition"}),e.jsx("div",{className:"row",children:"Avoid excessive props drilling"})]})]})]});export{a as default};
