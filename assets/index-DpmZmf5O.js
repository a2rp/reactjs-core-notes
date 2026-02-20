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

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }

        @media (max-width: 820px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
    `},a=()=>e.jsxs(s.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Styling"}),e.jsx("p",{className:"intro",children:"This project uses styled-components and theme tokens from theme.css. The goal is consistent UI: same spacing, colors, borders, and readable components without repeating random hex codes everywhere."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"styled-components"}),e.jsx("span",{className:"chip",children:"theme.css"}),e.jsx("span",{className:"chip",children:"Patterns"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Styled-components basics"}),e.jsx("p",{children:"A styled component is just a React component with styles attached. You can style any HTML tag or another component."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Basic styled component"}),e.jsx("pre",{children:e.jsx("code",{children:`import styled from "styled-components";

const Card = styled.div\`
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 12px;
\`;

export default function Example() {
  return <Card>Card</Card>;
}`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Use theme tokens, not hardcoded colors"}),e.jsx("p",{children:"Hardcoded colors become painful when you add dark/light themes. Tokens let you change look globally in one file."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Good (tokens)"}),e.jsx("pre",{children:e.jsx("code",{children:`background: var(--color-bg);
color: var(--color-text-primary);
border: 1px solid var(--color-border);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Avoid (random hex)"}),e.jsx("pre",{children:e.jsx("code",{children:`background: #0b0b0b;
color: #ffffff;
border: 1px solid #333333;`})})]})]}),e.jsx("p",{className:"note",children:"Tokens make your theme toggle reliable and consistent."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Styling by props"}),e.jsxs("p",{children:["You can change styles based on props. Prefix transient props with",e.jsx("code",{children:"$"})," so they do not leak to the DOM."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Transient props"}),e.jsx("pre",{children:e.jsx("code",{children:`const Badge = styled.span\`
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  background: \${(p) => (p.$active ? "var(--color-surface-2)" : "var(--color-surface)")};
\`;

<Badge $active={true}>Active</Badge>`})})]}),e.jsx("p",{className:"note",children:"Use $props for UI state like $active, $variant, $size."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Variants pattern (cleaner than many ifs)"}),e.jsx("p",{children:"For buttons, chips, tags, cards, define variants in one place and select by prop."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Variant mapping"}),e.jsx("pre",{children:e.jsx("code",{children:`const stylesByVariant = {
  primary: {
    bg: "var(--color-text-primary)",
    fg: "var(--color-bg)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--color-text-primary)"
  }
};

const Button = styled.button\`
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  background: \${(p) => stylesByVariant[p.$variant || "primary"].bg};
  color: \${(p) => stylesByVariant[p.$variant || "primary"].fg};
\`;

<Button $variant="ghost">Ghost</Button>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Reusable layout helpers"}),e.jsx("p",{children:"Use wrappers like Container, Section, Stack to keep spacing consistent."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Stack helper"}),e.jsx("pre",{children:e.jsx("code",{children:`const Stack = styled.div\`
  display: flex;
  flex-direction: column;
  gap: \${(p) => (p.$gap ? p.$gap : "12px")};
\`;

<Stack $gap="16px">
  <div>Row 1</div>
  <div>Row 2</div>
</Stack>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Component composition"}),e.jsx("p",{children:"You can create a base component and extend it. This reduces duplication."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Extend base"}),e.jsx("pre",{children:e.jsx("code",{children:`const BaseButton = styled.button\`
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 10px 12px;
\`;

const DangerButton = styled(BaseButton)\`
  background: var(--color-surface-2);
\`;`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Responsive patterns"}),e.jsx("p",{children:"Keep breakpoints minimal. Avoid 10 breakpoints. Use 1-2 sensible ones."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Simple media query"}),e.jsx("pre",{children:e.jsx("code",{children:`const Grid = styled.div\`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
\`;`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Global styles vs component styles"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Global: resets, typography defaults, base background, scrollbars"}),e.jsx("li",{children:"Component: layout, spacing, hover states, UI visuals"}),e.jsx("li",{children:"Tokens: only in theme.css"})]}),e.jsx("p",{className:"note",children:"Put colors in theme.css, not inside random component files."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Use theme tokens instead of hardcoded colors"}),e.jsx("div",{className:"row",children:"Use transient props ($active, $variant) for styling"}),e.jsx("div",{className:"row",children:"Prefer variants map over nested ifs"}),e.jsx("div",{className:"row",children:"Make small layout helpers for consistent spacing"}),e.jsx("div",{className:"row",children:"Keep responsive breakpoints minimal"})]})]})]});export{a as default};
