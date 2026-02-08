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

        @media (max-width: 820px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }
    `},n=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"useEffect"}),e.jsx("p",{className:"intro",children:"useEffect runs side effects after render. Side effects are things React does not control directly, like fetching data, timers, subscriptions, DOM APIs, and syncing with external systems."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Dependencies"}),e.jsx("span",{className:"chip",children:"Cleanup"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Mental model"}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Render builds UI from current state and props"}),e.jsx("li",{children:"Effect runs after render to do side work"}),e.jsx("li",{children:"Cleanup runs before next effect and on unmount"})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Basic shape"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  // side effect work

  return () => {
    // cleanup
  };
}, [deps]);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) Dependency array rules (must know)"}),e.jsx("p",{children:'Dependencies control when the effect runs. Think of it as: "rerun effect whenever any dependency changes".'}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Runs after every render"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  console.log("runs after every render");
});`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Runs once on mount"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  console.log("runs on mount");
}, []);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Runs when a value changes"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  console.log("runs when query changes");
}, [query]);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Cleanup runs on unmount"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  return () => {
    console.log("cleanup on unmount");
  };
}, []);`})})]})]}),e.jsx("p",{className:"note",children:"Missing dependencies are the number one source of stale bugs."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Cleanup examples"}),e.jsx("p",{children:"Cleanup prevents memory leaks and duplicate subscriptions. Use it for timers, event listeners, and external subscriptions."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Timer cleanup"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Event listener cleanup"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const onResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Fetching data (recommended pattern)"}),e.jsx("p",{children:"You cannot make the effect callback async directly. Create an inner async function, call it, and handle cancellation."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Fetch with AbortController"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const controller = new AbortController();

  const run = async () => {
    try {
      const res = await fetch("/api/users", {
        signal: controller.signal
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    }
  };

  run();

  return () => controller.abort();
}, []);`})})]}),e.jsx("p",{className:"note",children:"AbortController prevents state updates after unmount or fast route changes."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Infinite loop trap"}),e.jsx("p",{children:"Effects that update state can re-render, and re-render can re-run effects. Infinite loops happen when dependencies are wrong."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Incorrect"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  setCount(count + 1); // ❌ causes rerender
}, [count]);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Correct intention (example)"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  // run once
  setCount(1);
}, []);`})})]})]}),e.jsx("p",{className:"note",children:"If you are setting state based on the same dependency, rethink the logic."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Stale closure bug"}),e.jsx("p",{children:"Effects capture values from the render they were created in. If you do not include dependencies, you can read stale values."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Stale closure"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // can become stale
  }, 1000);

  return () => clearInterval(id);
}, []); // ❌ count missing`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Fix: include dependency"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
}, [count]);`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Alternative: functional state update"}),e.jsx("pre",{children:e.jsx("code",{children:`useEffect(() => {
  const id = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) React Strict Mode note (dev only)"}),e.jsx("p",{children:"In development, React Strict Mode may run effects twice to help detect unsafe side effects. This does not happen in production."}),e.jsx("div",{className:"note",children:"If you see double logs or double fetch in dev, check Strict Mode behavior and ensure your effects are safe and idempotent."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Good useEffect checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Effects are for side effects, not pure calculations"}),e.jsx("div",{className:"row",children:"Always include correct dependencies"}),e.jsx("div",{className:"row",children:"Use cleanup for timers, listeners, subscriptions"}),e.jsx("div",{className:"row",children:"Handle async fetch cancellation"}),e.jsx("div",{className:"row",children:"Watch out for stale closures and loops"})]})]})]});export{n as default};
