import{d as s,j as e}from"./index-DbjC5TsS.js";const r={Wrapper:s.div`
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
            margin: 0 0 10px;
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
            overflow: auto;
            padding: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
        }

        pre code {
            padding: 0;
            border: 0;
            background: transparent;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.6;
            display: block;
            white-space: pre;
        }

        .codeCard {
            margin-top: 12px;
        }

        .codeTitle {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 6px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
            margin-top: 10px;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
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
    `},l=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"JSX"}),e.jsx("p",{className:"intro",children:"JSX is JavaScript syntax used to describe UI. It looks like HTML, but it compiles into JavaScript function calls that create React elements. Browsers never see JSX."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Syntax"}),e.jsx("span",{className:"chip",children:"Gotchas"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) What JSX becomes"}),e.jsx("p",{children:"JSX is compiled to React element creation. The exact output depends on your build setup, but the mental model is always the same: JSX produces objects that describe what UI should look like."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"JSX (what you write)"}),e.jsx("pre",{children:e.jsx("code",{children:'const el = <button className="btn">Save</button>;'})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Compiled idea (mental model)"}),e.jsx("pre",{children:e.jsx("code",{children:`// conceptual output
const el = React.createElement(
  "button",
  { className: "btn" },
  "Save"
);`})})]}),e.jsx("p",{className:"note",children:"You do not call createElement manually. This is only to understand what JSX means."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) JSX rules you must know"}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single parent:"})," A component must return one top-level element. Use a wrapper or fragments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use className:"})," JSX uses"," ",e.jsx("code",{children:"className"})," instead of ",e.jsx("code",{children:"class"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JavaScript expressions only:"})," Put expressions inside ",e.jsx("code",{children:"{}"}),". Statements like"," ",e.jsx("code",{children:"if"})," and ",e.jsx("code",{children:"for"})," do not work directly inside JSX."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attributes are camelCase:"})," example"," ",e.jsx("code",{children:"onClick"}),", ",e.jsx("code",{children:"tabIndex"}),","," ",e.jsx("code",{children:"htmlFor"}),"."]})]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Single parent using Fragment"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"className + htmlFor"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <label htmlFor="email" className="label">
    Email
  </label>
);`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Expressions vs statements"}),e.jsxs("p",{children:["Inside ",e.jsx("code",{children:"{}"})," you can use expressions (values that evaluate). For conditions, use ternary or logical operators."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Good: ternary"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <div>
    {isLoggedIn ? <UserMenu /> : <LoginButton />}
  </div>
);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Good: && (renders right side if true)"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <div>
    {hasError && <ErrorBanner />}
  </div>
);`})})]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Not allowed inside JSX: if/for statements"}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ not valid inside JSX
return (
  <div>
    if (isOpen) { <Modal /> }
  </div>
);`})})]}),e.jsx("p",{className:"note",children:"Put statements outside JSX, compute variables first, then render with expressions."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Rendering lists"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"map"})," to render arrays. Each rendered item needs a stable ",e.jsx("code",{children:"key"}),". Do not use array index as key if the list can reorder."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"List render with stable key"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.label}</li>
    ))}
  </ul>
);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Index as key (only for static lists)"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <ul>
    {staticItems.map((label, idx) => (
      <li key={idx}>{label}</li>
    ))}
  </ul>
);`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Attributes, booleans, and props patterns"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Boolean attributes"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <button disabled={isSaving}>
    Save
  </button>
);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Conditional className"}),e.jsx("pre",{children:e.jsx("code",{children:`const cls = isActive ? "tab active" : "tab";

return (
  <div className={cls}>
    Tab
  </div>
);`})})]})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Spreading props (use carefully)"}),e.jsx("pre",{children:e.jsx("code",{children:`// ✅ useful when building wrappers
const Button = (props) => {
  return <button {...props} />;
};

// ⚠ be careful: you may pass unwanted props
<Button type="button" onClick={save} data-id="x" />`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Inline styles vs className"}),e.jsx("p",{children:"JSX inline styles are objects, not strings. Keys are camelCase. Prefer className for most styling, use inline styles for truly dynamic values."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Inline style object"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <div style={{ marginTop: 12, backgroundColor: "black" }}>
    Box
  </div>
);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Prefer className"}),e.jsx("pre",{children:e.jsx("code",{children:`return (
  <div className="box">
    Box
  </div>
);`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Dangerous HTML (rare)"}),e.jsxs("p",{children:["React escapes strings by default. Only use"," ",e.jsx("code",{children:"dangerouslySetInnerHTML"}),"if you fully trust the content (or sanitize it properly)."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"dangerouslySetInnerHTML"}),e.jsx("pre",{children:e.jsx("code",{children:`const html = "<b>bold</b>";

return (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);`})})]}),e.jsx("p",{className:"note",children:"Treat this as a last resort. Most apps never need it."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"JSX compiles to JS that creates React elements"}),e.jsx("div",{className:"row",children:"One parent element or Fragment"}),e.jsxs("div",{className:"row",children:["Expressions inside ","{}",", statements outside"]}),e.jsx("div",{className:"row",children:"className, htmlFor, camelCase attributes"}),e.jsx("div",{className:"row",children:"Lists need stable keys"})]})]})]});export{l as default};
