import React from "react";
import { Styled } from "./styled";

const QuickStyling = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Styling</h1>
                <p className="intro">
                    This project uses styled-components and theme tokens from
                    theme.css. The goal is consistent UI: same spacing, colors,
                    borders, and readable components without repeating random
                    hex codes everywhere.
                </p>

                <div className="chips">
                    <span className="chip">styled-components</span>
                    <span className="chip">theme.css</span>
                    <span className="chip">Patterns</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Styled-components basics</h2>
                <p>
                    A styled component is just a React component with styles
                    attached. You can style any HTML tag or another component.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Basic styled component</div>
                    <pre>
                        <code>{`import styled from "styled-components";

const Card = styled.div\`
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 12px;
\`;

export default function Example() {
  return <Card>Card</Card>;
}`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) Use theme tokens, not hardcoded colors</h2>
                <p>
                    Hardcoded colors become painful when you add dark/light
                    themes. Tokens let you change look globally in one file.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Good (tokens)</div>
                        <pre>
                            <code>{`background: var(--color-bg);
color: var(--color-text-primary);
border: 1px solid var(--color-border);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Avoid (random hex)</div>
                        <pre>
                            <code>{`background: #0b0b0b;
color: #ffffff;
border: 1px solid #333333;`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    Tokens make your theme toggle reliable and consistent.
                </p>
            </section>

            <section className="block">
                <h2>3) Styling by props</h2>
                <p>
                    You can change styles based on props. Prefix transient props
                    with
                    <code>$</code> so they do not leak to the DOM.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Transient props</div>
                    <pre>
                        <code>{`const Badge = styled.span\`
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  background: \${(p) => (p.$active ? "var(--color-surface-2)" : "var(--color-surface)")};
\`;

<Badge $active={true}>Active</Badge>`}</code>
                    </pre>
                </div>

                <p className="note">
                    Use $props for UI state like $active, $variant, $size.
                </p>
            </section>

            <section className="block">
                <h2>4) Variants pattern (cleaner than many ifs)</h2>
                <p>
                    For buttons, chips, tags, cards, define variants in one
                    place and select by prop.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Variant mapping</div>
                    <pre>
                        <code>{`const stylesByVariant = {
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

<Button $variant="ghost">Ghost</Button>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>5) Reusable layout helpers</h2>
                <p>
                    Use wrappers like Container, Section, Stack to keep spacing
                    consistent.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Stack helper</div>
                    <pre>
                        <code>{`const Stack = styled.div\`
  display: flex;
  flex-direction: column;
  gap: \${(p) => (p.$gap ? p.$gap : "12px")};
\`;

<Stack $gap="16px">
  <div>Row 1</div>
  <div>Row 2</div>
</Stack>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Component composition</h2>
                <p>
                    You can create a base component and extend it. This reduces
                    duplication.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Extend base</div>
                    <pre>
                        <code>{`const BaseButton = styled.button\`
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 10px 12px;
\`;

const DangerButton = styled(BaseButton)\`
  background: var(--color-surface-2);
\`;`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Responsive patterns</h2>
                <p>
                    Keep breakpoints minimal. Avoid 10 breakpoints. Use 1-2
                    sensible ones.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Simple media query</div>
                    <pre>
                        <code>{`const Grid = styled.div\`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
\`;`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>8) Global styles vs component styles</h2>
                <ul className="list">
                    <li>
                        Global: resets, typography defaults, base background,
                        scrollbars
                    </li>
                    <li>
                        Component: layout, spacing, hover states, UI visuals
                    </li>
                    <li>Tokens: only in theme.css</li>
                </ul>

                <p className="note">
                    Put colors in theme.css, not inside random component files.
                </p>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Use theme tokens instead of hardcoded colors
                    </div>
                    <div className="row">
                        Use transient props ($active, $variant) for styling
                    </div>
                    <div className="row">
                        Prefer variants map over nested ifs
                    </div>
                    <div className="row">
                        Make small layout helpers for consistent spacing
                    </div>
                    <div className="row">
                        Keep responsive breakpoints minimal
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickStyling;
