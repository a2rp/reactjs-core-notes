import{d as s,j as e}from"./index-DmL9HLb2.js";const n={Wrapper:s.div`
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
    `},o=()=>e.jsxs(n.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Events"}),e.jsx("p",{className:"intro",children:"Events in React let components respond to user interactions like clicks, input changes, keyboard actions, and form submits. React events are wrapped as Synthetic Events for consistency."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Patterns"}),e.jsx("span",{className:"chip",children:"Mistakes"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Basic event handling"}),e.jsxs("p",{children:["Events are passed as props starting with ",e.jsx("code",{children:"on"}),". You pass a function reference, not a function call."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct"}),e.jsx("pre",{children:e.jsx("code",{children:`function Button() {
  const handleClick = () => {
    console.log("clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ this runs immediately
<button onClick={handleClick()} />`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Accessing event object"}),e.jsx("p",{children:"React provides a Synthetic Event object that normalizes browser differences. You usually access it as the first argument."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Event object"}),e.jsx("pre",{children:e.jsx("code",{children:`function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return <input onChange={handleChange} />;
}`})})]}),e.jsx("p",{className:"note",children:"Synthetic events are pooled internally, but in modern React you usually do not need to worry about event pooling."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Passing arguments to handlers"}),e.jsx("p",{children:"To pass arguments, wrap the handler in an arrow function."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"With arrow function"}),e.jsx("pre",{children:e.jsx("code",{children:`<button onClick={() => removeItem(id)}>
  Remove
</button>`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Avoid binding in JSX"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ unnecessary in function components
<button onClick={removeItem.bind(null, id)} />`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Common DOM events"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("code",{children:"onClick"})," – mouse click"]}),e.jsxs("li",{children:[e.jsx("code",{children:"onChange"})," – input, textarea, select"]}),e.jsxs("li",{children:[e.jsx("code",{children:"onSubmit"})," – form submit"]}),e.jsxs("li",{children:[e.jsx("code",{children:"onKeyDown"}),", ",e.jsx("code",{children:"onKeyUp"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"onFocus"}),", ",e.jsx("code",{children:"onBlur"})]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Form submit"}),e.jsx("pre",{children:e.jsx("code",{children:`function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Preventing default behavior"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"e.preventDefault()"})," to stop default browser actions like page reloads on form submit or link navigation."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Prevent default"}),e.jsx("pre",{children:e.jsx("code",{children:`const handleClick = (e) => {
  e.preventDefault();
  console.log("link clicked");
};`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Event handlers and state updates"}),e.jsx("p",{children:"Event handlers often update state. Remember that state updates are async and may be batched."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Updating state in events"}),e.jsx("pre",{children:e.jsx("code",{children:`const [count, setCount] = useState(0);

const handleClick = () => {
  setCount((prev) => prev + 1);
};`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Inline handlers vs named handlers"}),e.jsx("p",{children:"Prefer named handlers for readability and reuse. Inline handlers are fine for very small logic."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Named handler"}),e.jsx("pre",{children:e.jsx("code",{children:`<button onClick={handleSave}>
  Save
</button>`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Inline handler"}),e.jsx("pre",{children:e.jsx("code",{children:`<button onClick={() => setOpen(true)}>
  Open
</button>`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Event bubbling"}),e.jsxs("p",{children:["React events bubble up just like DOM events. Use"," ",e.jsx("code",{children:"e.stopPropagation()"})," only when necessary."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Stop propagation"}),e.jsx("pre",{children:e.jsx("code",{children:`function Item({ onRemove }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onRemove();
  };

  return <button onClick={handleClick}>Remove</button>;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Pass function references to event props"}),e.jsx("div",{className:"row",children:"Use arrow functions to pass arguments"}),e.jsx("div",{className:"row",children:"Prevent default behavior when needed"}),e.jsx("div",{className:"row",children:"Prefer named handlers for clarity"}),e.jsx("div",{className:"row",children:"Use stopPropagation sparingly"})]})]})]});export{o as default};
