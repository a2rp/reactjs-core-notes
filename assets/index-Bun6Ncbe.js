import{d as t,j as e,N as o}from"./index-B0yqN1dR.js";const r={Wrapper:t.div`
        min-height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;

        color: var(--color-text-primary);

        .content {
            text-align: center;
            max-width: 420px;
        }

        .code {
            font-size: 64px;
            font-weight: 800;
            margin-bottom: 12px;
            color: var(--color-text-muted);
            letter-spacing: 2px;
        }

        h1 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
            margin-bottom: 22px;
            line-height: 1.6;
        }

        .actions {
            display: flex;
            gap: 12px;
            justify-content: center;

            a {
                padding: 6px 14px;
                font-size: 13px;
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                text-decoration: none;

                &:hover {
                    background: var(--color-surface-2);
                }
            }
        }
    `},a=()=>e.jsx(r.Wrapper,{children:e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"code",children:"404"}),e.jsx("h1",{children:"Page not found"}),e.jsx("p",{children:"The page you are trying to access does not exist or may have been moved."}),e.jsxs("div",{className:"actions",children:[e.jsx(o,{to:"/home",children:"Go to Home"}),e.jsx(o,{to:"/quick",children:"Quick Reference"})]})]})});export{a as default};
