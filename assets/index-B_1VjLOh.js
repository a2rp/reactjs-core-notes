import{d as o,j as e,L as t}from"./index-DmL9HLb2.js";const r={Wrapper:o.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px 20px 80px;
        color: var(--color-text-primary);
    `,Hero:o.section`
        margin-bottom: 60px;

        h1 {
            font-size: 42px;
            margin-bottom: 12px;
        }

        .subtitle {
            font-size: 18px;
            color: var(--color-text-secondary);
            max-width: 700px;
        }
    `,Section:o.section`
        margin-bottom: 48px;

        h2 {
            font-size: 24px;
            margin-bottom: 12px;
        }

        p {
            max-width: 800px;
            color: var(--color-text-secondary);
        }

        ul {
            margin-top: 10px;

            li {
                margin-bottom: 8px;
                color: var(--color-text-secondary);
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            border: 1px solid var(--color-border);
            padding: 20px;
            background: var(--color-surface);

            h3 {
                margin-bottom: 8px;
                font-size: 18px;
            }

            p {
                font-size: 14px;
                margin-bottom: 12px;
            }

            a {
                font-size: 14px;
                color: var(--color-link);
            }

            a:hover {
                color: var(--color-link-hover);
            }
        }
    `},s=()=>e.jsxs(r.Wrapper,{children:[e.jsxs(r.Hero,{children:[e.jsx("h1",{children:"ReactJS Core Notes"}),e.jsx("p",{className:"subtitle",children:"A structured reference to understand how React actually works - not just how to write it."})]}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"What is this?"}),e.jsx("p",{children:"This site is not another React tutorial. It is a carefully organized set of notes that explain React's core concepts, mental models, and real-world usage patterns."})]}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"How to use this site"}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Quick Reference"}),e.jsx("p",{children:"Short, focused explanations for fast recall. Useful before interviews or while working."}),e.jsx(t,{to:"/quick",children:"Go to Quick Reference →"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Deep Dive"}),e.jsx("p",{children:"Full explanations of React core concepts, written in a logical learning order."}),e.jsx(t,{to:"/react",children:"Start React Core →"})]})]})]}),e.jsxs(r.Section,{children:[e.jsx("h2",{children:"Who is this for?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Developers who want to understand React beyond copy-paste"}),e.jsx("li",{children:"Frontend engineers preparing for interviews"}),e.jsx("li",{children:"Anyone who wants a long-term React reference"})]})]})]});export{s as default};
