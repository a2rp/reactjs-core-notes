import{d as r,j as e}from"./index-DmL9HLb2.js";const s={Wrapper:r.div`
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
    `},o=()=>e.jsxs(s.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Conditional Rendering"}),e.jsx("p",{className:"intro",children:"Conditional rendering means showing different UI depending on props, state, or computed values. In React, you mostly use expressions like ternary, &&, early returns, and render maps."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Patterns"}),e.jsx("span",{className:"chip",children:"Pitfalls"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) If it is not JSX, return early"}),e.jsx("p",{children:"The cleanest pattern is often early return. It keeps JSX simple and avoids nested ternaries."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Early return"}),e.jsx("pre",{children:e.jsx("code",{children:`function Profile({ user }) {
  if (!user) {
    return <div>Please login</div>;
  }

  return <div>Welcome {user.name}</div>;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Ternary operator"}),e.jsx("p",{children:"Use ternary when there are two clear UI outcomes. Keep it short."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Ternary"}),e.jsx("pre",{children:e.jsx("code",{children:`function Status({ online }) {
  return (
    <span>
      {online ? "Online" : "Offline"}
    </span>
  );
}`})})]}),e.jsx("p",{className:"note",children:"Avoid nested ternaries unless it is extremely simple."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Logical && (show only if true)"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"&&"})," when you want to render something only when a condition is true."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Common"}),e.jsx("pre",{children:e.jsx("code",{children:"{error && <p>{error}</p>}"})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Full example"}),e.jsx("pre",{children:e.jsx("code",{children:`function ErrorBox({ error }) {
  return (
    <div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}`})})]})]}),e.jsx("div",{className:"note",children:"Beware: rendering numbers with && can show 0 on screen."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:'4) The "0 renders" trap'}),e.jsxs("p",{children:["If the left side is ",e.jsx("code",{children:"0"}),", React renders it. So this can accidentally show ",e.jsx("code",{children:"0"})," in UI."]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Problem"}),e.jsx("pre",{children:e.jsx("code",{children:"{items.length && <List items={items} />}"})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Fix"}),e.jsx("pre",{children:e.jsx("code",{children:"{items.length > 0 && <List items={items} />}"})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Conditional classNames and styles"}),e.jsx("p",{children:"You can conditionally apply classes or inline styles. In your project, you use styled-components, so className toggles are still useful."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Conditional className"}),e.jsx("pre",{children:e.jsx("code",{children:`<button className={active ? "isActive" : ""}>
  Tab
</button>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Render different components"}),e.jsx("p",{children:"Sometimes you want to render completely different components. Keep it readable with early returns or a variable."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Component switch"}),e.jsx("pre",{children:e.jsx("code",{children:`function Page({ loading, error }) {
  if (loading) return <Loader />;
  if (error) return <Error />;

  return <Content />;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Conditional rendering in map"}),e.jsx("p",{children:"When mapping lists, you can filter first or return null. Filtering is usually clearer."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Filter then map"}),e.jsx("pre",{children:e.jsx("code",{children:`{items
  .filter((x) => x.visible)
  .map((x) => (
    <Item key={x.id} item={x} />
  ))}`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Return null"}),e.jsx("pre",{children:e.jsx("code",{children:`{items.map((x) =>
  x.visible ? <Item key={x.id} item={x} /> : null
)}`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Avoid deeply nested logic in JSX"}),e.jsx("p",{children:"If JSX becomes messy, move logic above into variables."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Compute then render"}),e.jsx("pre",{children:e.jsx("code",{children:`const title = isAdmin ? "Admin" : "User";
const badge = online ? <GreenDot /> : <GrayDot />;

return (
  <div>
    <h3>{title}</h3>
    {badge}
  </div>
);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Prefer early returns for clean UI branches"}),e.jsx("div",{className:"row",children:"Use ternary for two outcomes"}),e.jsx("div",{className:"row",children:"Use && to show something only when true"}),e.jsx("div",{className:"row",children:"Avoid the 0 renders trap"}),e.jsx("div",{className:"row",children:"Move complex logic outside JSX"})]})]})]});export{o as default};
