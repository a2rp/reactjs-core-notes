import{d as r,j as e,N as o}from"./index-Dw88vYR0.js";const i={Wrapper:r.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 20px 80px;

        color: var(--color-text-primary);

        h1 {
            font-size: 30px;
            margin-bottom: 12px;
        }

        h2 {
            font-size: 18px;
            margin-top: 32px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            max-width: 780px;
            margin-bottom: 14px;
        }

        .intro {
            margin-bottom: 22px;
        }

        ul {
            margin-left: 18px;
            margin-bottom: 20px;

            li {
                font-size: 14px;
                color: var(--color-text-secondary);
                margin-bottom: 6px;
                list-style: disc;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            margin-top: 10px;

            a {
                padding: 10px 12px;
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                font-size: 13px;
                text-decoration: none;

                &:hover {
                    background: var(--color-surface-2);
                }
            }
        }

        .note {
            margin-top: 28px;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `},s=()=>e.jsxs(i.Wrapper,{children:[e.jsx("h1",{children:"Quick Reference"}),e.jsx("p",{className:"intro",children:"This section provides short, focused notes for fast recall. Each page is designed to answer a specific React question without long explanations or setup."}),e.jsx("h2",{children:"How to use"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use this when you already know React basics"}),e.jsx("li",{children:"Ideal for interview preparation or daily work"}),e.jsx("li",{children:"Each topic fits on a single screen"})]}),e.jsx("h2",{children:"Topics"}),e.jsxs("div",{className:"grid",children:[e.jsx(o,{to:"/quick/jsx",children:"JSX"}),e.jsx(o,{to:"/quick/components",children:"Components"}),e.jsx(o,{to:"/quick/props",children:"Props"}),e.jsx(o,{to:"/quick/state",children:"State"}),e.jsx(o,{to:"/quick/events",children:"Events"}),e.jsx(o,{to:"/quick/lists-keys",children:"Lists & Keys"}),e.jsx(o,{to:"/quick/conditional-rendering",children:"Conditional Rendering"}),e.jsx(o,{to:"/quick/useeffect",children:"useEffect"}),e.jsx(o,{to:"/quick/hooks",children:"Hooks"}),e.jsx(o,{to:"/quick/forms",children:"Forms"}),e.jsx(o,{to:"/quick/styling",children:"Styling"}),e.jsx(o,{to:"/quick/performance",children:"Performance"})]}),e.jsx("p",{className:"note",children:"If you are new to React, start with the React Core section instead of Quick Reference."})]});export{s as default};
