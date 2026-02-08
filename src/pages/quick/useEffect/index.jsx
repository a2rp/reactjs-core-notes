import React from "react";
import { Styled } from "./styled";

const QuickUseEffect = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>useEffect</h1>
                <p className="intro">
                    useEffect runs side effects after render. Side effects are
                    things React does not control directly, like fetching data,
                    timers, subscriptions, DOM APIs, and syncing with external
                    systems.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Dependencies</span>
                    <span className="chip">Cleanup</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Mental model</h2>
                <ul className="list">
                    <li>Render builds UI from current state and props</li>
                    <li>Effect runs after render to do side work</li>
                    <li>Cleanup runs before next effect and on unmount</li>
                </ul>

                <div className="codeCard">
                    <div className="codeTitle">Basic shape</div>
                    <pre>
                        <code>{`useEffect(() => {
  // side effect work

  return () => {
    // cleanup
  };
}, [deps]);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>2) Dependency array rules (must know)</h2>
                <p>
                    Dependencies control when the effect runs. Think of it as:
                    "rerun effect whenever any dependency changes".
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Runs after every render</div>
                        <pre>
                            <code>{`useEffect(() => {
  console.log("runs after every render");
});`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Runs once on mount</div>
                        <pre>
                            <code>{`useEffect(() => {
  console.log("runs on mount");
}, []);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">
                            Runs when a value changes
                        </div>
                        <pre>
                            <code>{`useEffect(() => {
  console.log("runs when query changes");
}, [query]);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Cleanup runs on unmount</div>
                        <pre>
                            <code>{`useEffect(() => {
  return () => {
    console.log("cleanup on unmount");
  };
}, []);`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    Missing dependencies are the number one source of stale
                    bugs.
                </p>
            </section>

            <section className="block">
                <h2>3) Cleanup examples</h2>
                <p>
                    Cleanup prevents memory leaks and duplicate subscriptions.
                    Use it for timers, event listeners, and external
                    subscriptions.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Timer cleanup</div>
                    <pre>
                        <code>{`useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Event listener cleanup</div>
                    <pre>
                        <code>{`useEffect(() => {
  const onResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>4) Fetching data (recommended pattern)</h2>
                <p>
                    You cannot make the effect callback async directly. Create
                    an inner async function, call it, and handle cancellation.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Fetch with AbortController</div>
                    <pre>
                        <code>{`useEffect(() => {
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
}, []);`}</code>
                    </pre>
                </div>

                <p className="note">
                    AbortController prevents state updates after unmount or fast
                    route changes.
                </p>
            </section>

            <section className="block">
                <h2>5) Infinite loop trap</h2>
                <p>
                    Effects that update state can re-render, and re-render can
                    re-run effects. Infinite loops happen when dependencies are
                    wrong.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Incorrect</div>
                        <pre>
                            <code>{`useEffect(() => {
  setCount(count + 1); // ❌ causes rerender
}, [count]);`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">
                            Correct intention (example)
                        </div>
                        <pre>
                            <code>{`useEffect(() => {
  // run once
  setCount(1);
}, []);`}</code>
                        </pre>
                    </div>
                </div>

                <p className="note">
                    If you are setting state based on the same dependency,
                    rethink the logic.
                </p>
            </section>

            <section className="block">
                <h2>6) Stale closure bug</h2>
                <p>
                    Effects capture values from the render they were created in.
                    If you do not include dependencies, you can read stale
                    values.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Stale closure</div>
                    <pre>
                        <code>{`useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // can become stale
  }, 1000);

  return () => clearInterval(id);
}, []); // ❌ count missing`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Fix: include dependency</div>
                    <pre>
                        <code>{`useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
}, [count]);`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">
                        Alternative: functional state update
                    </div>
                    <pre>
                        <code>{`useEffect(() => {
  const id = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) React Strict Mode note (dev only)</h2>
                <p>
                    In development, React Strict Mode may run effects twice to
                    help detect unsafe side effects. This does not happen in
                    production.
                </p>

                <div className="note">
                    If you see double logs or double fetch in dev, check Strict
                    Mode behavior and ensure your effects are safe and
                    idempotent.
                </div>
            </section>

            <section className="block">
                <h2>8) Good useEffect checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Effects are for side effects, not pure calculations
                    </div>
                    <div className="row">
                        Always include correct dependencies
                    </div>
                    <div className="row">
                        Use cleanup for timers, listeners, subscriptions
                    </div>
                    <div className="row">Handle async fetch cancellation</div>
                    <div className="row">
                        Watch out for stale closures and loops
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickUseEffect;
