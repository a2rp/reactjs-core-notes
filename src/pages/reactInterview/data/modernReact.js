export const modernReact = {
    id: "modern-react",
    title: "Modern React (React 18+)",
    items: [
        {
            id: "m-001",
            q: "What changed in React 18 that interviewers care about?",
            a: `
<p>
    React 18 introduced major improvements focused on performance,
    concurrency, and better user experience without breaking existing apps.
    The most important changes revolve around <strong>concurrent rendering</strong>,
    <strong>automatic batching</strong>, and new hooks.
</p>

<hr />

<h4>1. Concurrent Rendering (Big Concept)</h4>

<p>
    React 18 introduced the new concurrent rendering engine. This does not mean
    everything runs in parallel, but it allows React to prepare multiple versions
    of the UI and interrupt rendering if needed.
</p>

<p>
    This makes apps feel more responsive, especially during heavy updates.
</p>

<hr />

<h4>2. New Root API</h4>

<p>
    React 18 replaces <code>ReactDOM.render</code> with <code>createRoot</code>.
</p>

<pre><code>
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(&lt;App /&gt;);
</code></pre>

<p>
    Without <code>createRoot</code>, you do not get concurrent features.
</p>

<hr />

<h4>3. Automatic Batching (Very Important)</h4>

<p>
    Before React 18, React only batched state updates inside event handlers.
    In React 18, batching works everywhere - including promises, timeouts,
    and native event handlers.
</p>

<pre><code>
setTimeout(() => {
    setCount(c => c + 1);
    setFlag(true);
});
</code></pre>

<p>
    In React 18, this triggers only one re-render instead of two.
</p>

<hr />

<h4>4. New Hooks</h4>

<ul>
    <li><strong>useTransition</strong> - mark updates as non-urgent</li>
    <li><strong>useDeferredValue</strong> - defer expensive values</li>
    <li><strong>useId</strong> - generate stable unique IDs</li>
</ul>

<p>
    These hooks help improve perceived performance and UX.
</p>

<hr />

<h4>5. Suspense Improvements</h4>

<p>
    Suspense now works better with concurrent rendering and supports
    streaming SSR in frameworks like Next.js.
</p>

<hr />

<h4>6. Strict Mode Changes (Development)</h4>

<p>
    In development mode, React 18 intentionally double-invokes certain
    lifecycle behaviors to detect unsafe side effects.
    This confuses beginners but helps catch bugs early.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Concurrent rendering engine introduced</li>
    <li>New createRoot API</li>
    <li>Automatic batching everywhere</li>
    <li>New performance hooks like useTransition</li>
    <li>Improved Suspense and SSR support</li>
</ul>

<p>
    The main takeaway is that React 18 focuses on making apps more responsive
    and better prepared for scalable, modern UI workloads.
</p>
`,
        },

        {
            id: "m-002",
            q: "Automatic batching: what is it and why does it matter?",
            a: `
<p>
    <strong>Automatic batching</strong> is a performance optimization in React
    where multiple state updates are grouped together and processed in a
    single re-render instead of triggering separate renders.
</p>

<p>
    This reduces unnecessary rendering work and improves overall UI performance.
</p>

<hr />

<h4>1. What is batching?</h4>

<p>
    When multiple <code>setState</code> calls happen close together, React
    does not immediately re-render after each call. Instead, it waits and
    processes them together in one render cycle.
</p>

<pre><code>
setCount(c =&gt; c + 1);
setFlag(true);
</code></pre>

<p>
    Instead of rendering twice, React renders once with both updates applied.
</p>

<hr />

<h4>2. Before React 18</h4>

<p>
    In React versions before 18, batching only happened inside React event
    handlers like <code>onClick</code>.
</p>

<p>
    If updates happened inside <code>setTimeout</code>, promises, or async
    callbacks, they were not batched.
</p>

<hr />

<h4>3. React 18 automatic batching</h4>

<p>
    In React 18, batching works across:
</p>

<ul>
    <li>Event handlers</li>
    <li>setTimeout</li>
    <li>Promises</li>
    <li>Async functions</li>
    <li>Native event callbacks</li>
</ul>

<p>
    This means React now batches updates consistently across most scenarios.
</p>

<hr />

<h4>4. Why does it matter?</h4>

<ul>
    <li>Fewer re-renders</li>
    <li>Better performance</li>
    <li>More predictable state updates</li>
    <li>Cleaner mental model for async code</li>
</ul>

<p>
    Especially in large applications, reducing unnecessary renders helps
    keep the UI responsive.
</p>

<hr />

<h4>5. When batching does not apply</h4>

<p>
    If you need React to update immediately before continuing, you can use
    <code>flushSync</code> from <code>react-dom</code>.
</p>

<pre><code>
import { flushSync } from "react-dom";

flushSync(() =&gt; {
    setCount(c =&gt; c + 1);
});
</code></pre>

<p>
    This forces React to process the update synchronously.
</p>

<hr />

<h4>6. Interview-ready summary</h4>

<ul>
    <li>Automatic batching groups multiple state updates into one render</li>
    <li>React 18 extends batching beyond event handlers</li>
    <li>It improves performance and reduces unnecessary renders</li>
    <li>flushSync can be used when immediate rendering is required</li>
</ul>

<p>
    In short, automatic batching is one of the subtle but important
    performance improvements introduced in modern React.
</p>
`,
        },

        {
            id: "m-003",
            q: "Concurrent rendering: explain like you’re not selling a course.",
            a: `
<p>
    Concurrent rendering in React is not a new API. It is a new internal
    rendering behavior introduced in React 18 that allows React to prepare
    multiple versions of the UI at the same time and decide which one to
    commit to the DOM.
</p>

<p>
    The important part - React can now pause, resume, and even discard
    rendering work before it reaches the screen.
</p>

<hr />

<h4>1. What problem does it solve?</h4>

<p>
    In older React versions, rendering was mostly synchronous. Once React
    started rendering a large update, it would block the main thread until
    it finished.
</p>

<p>
    If a heavy re-render happened - the UI could freeze for a moment.
</p>

<p>
    Concurrent rendering allows React to:
</p>

<ul>
    <li>Break rendering work into smaller chunks</li>
    <li>Pause rendering if something more important happens</li>
    <li>Keep the UI responsive during large updates</li>
</ul>

<hr />

<h4>2. Important clarification</h4>

<p>
    Concurrent rendering does NOT mean:
</p>

<ul>
    <li>Multiple threads</li>
    <li>Parallel JavaScript execution</li>
    <li>Faster CPU execution</li>
</ul>

<p>
    JavaScript is still single-threaded. React just schedules work more
    intelligently.
</p>

<hr />

<h4>3. When do you see it?</h4>

<p>
    You use it indirectly through features like:
</p>

<ul>
    <li>startTransition</li>
    <li>useTransition</li>
    <li>Suspense</li>
    <li>Streaming SSR</li>
</ul>

<pre><code>
import { startTransition } from "react";

function handleChange(value) {
    startTransition(() => {
        setSearchQuery(value);
    });
}
</code></pre>

<p>
    Updates inside startTransition are marked as low priority.
    React can delay them to keep typing or clicks responsive.
</p>

<hr />

<h4>4. What actually changed internally?</h4>

<ul>
    <li>Rendering is interruptible</li>
    <li>Rendering work can be restarted</li>
    <li>React may render something and throw it away before committing</li>
</ul>

<p>
    Commit phase is still synchronous. Only rendering phase is concurrent.
</p>

<hr />

<h4>5. Why this matters in real apps</h4>

<p>
    In complex apps with large lists, filters, dashboards, or data-heavy
    components - concurrent rendering reduces UI blocking and improves
    perceived performance.
</p>

<p>
    It makes the app feel smoother, not necessarily faster in raw benchmarks.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Concurrent rendering allows interruptible rendering</li>
    <li>React can pause, resume, or discard rendering work</li>
    <li>JavaScript is still single-threaded</li>
    <li>It improves responsiveness, not raw execution speed</li>
</ul>

<p>
    In short - concurrent rendering is a smarter scheduling model,
    not magic parallelism.
</p>
`,
        },

        {
            id: "m-004",
            q: "What is startTransition and when would you use it?",
            a: `
<p>
    <strong>startTransition</strong> is a React API introduced in React 18
    that lets you mark certain state updates as <strong>non-urgent</strong>.
    This allows React to keep the UI responsive while performing expensive
    rendering work in the background.
</p>

<p>
    In simple terms, it tells React:
    <em>"This update is not urgent - handle it when you get time."</em>
</p>

<hr />

<h4>1. Why do we need it?</h4>

<p>
    In React, some updates are urgent - like typing in an input field.
    Others are not urgent - like filtering a large list based on that input.
</p>

<p>
    Without transitions, both updates are treated equally and may block the UI.
</p>

<hr />

<h4>2. Basic example</h4>

<pre><code>
import { useState, startTransition } from "react";

function SearchList({ items }) {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(items);

    function handleChange(e) {
        const value = e.target.value;
        setQuery(value); // urgent update

        startTransition(() => {
            const result = items.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(result); // non-urgent update
        });
    }

    return (
        &lt;&gt;
            &lt;input value={query} onChange={handleChange} /&gt;
            &lt;ul&gt;
                {filtered.map(item =&gt; (
                    &lt;li key={item}&gt;{item}&lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/&gt;
    );
}
</code></pre>

<p>
    Here:
</p>

<ul>
    <li>Typing in the input is urgent</li>
    <li>Filtering a large list is non-urgent</li>
</ul>

<p>
    React may delay the filtering slightly to keep typing smooth.
</p>

<hr />

<h4>3. What problem does it solve?</h4>

<ul>
    <li>Prevents UI from freezing during heavy re-renders</li>
    <li>Keeps interactions responsive</li>
    <li>Improves perceived performance</li>
</ul>

<hr />

<h4>4. Important details</h4>

<ul>
    <li>Works only in React 18+</li>
    <li>Does not guarantee background execution, just lowers priority</li>
    <li>Useful for large lists, heavy computations, tab switches</li>
</ul>

<hr />

<h4>5. Related API - useTransition</h4>

<p>
    React also provides <code>useTransition</code> which gives you a pending
    state indicator.
</p>

<pre><code>
const [isPending, startTransition] = useTransition();
</code></pre>

<p>
    This helps show loading indicators during transitions.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>startTransition marks state updates as non-urgent</li>
    <li>It keeps urgent updates like typing responsive</li>
    <li>Useful for heavy UI updates like filtering or sorting large data</li>
    <li>Part of React 18 concurrent features</li>
</ul>

<p>
    In short, startTransition improves responsiveness by prioritizing
    critical updates over expensive rendering work.
</p>
`,
        },

        {
            id: "m-005",
            q: "useTransition vs useDeferredValue: real difference and use cases?",
            a: `
<p>
    Both <strong>useTransition</strong> and <strong>useDeferredValue</strong>
    are React concurrent features that help improve UI responsiveness.
    They allow you to mark certain updates as low priority so that
    urgent interactions like typing or clicking remain smooth.
</p>

<hr />

<h4>1. What problem do they solve?</h4>

<p>
    In large components, expensive renders can block the UI.
    These hooks allow React to delay non-urgent updates
    without freezing high-priority interactions.
</p>

<hr />

<h4>2. useTransition - you control the update</h4>

<p>
    useTransition lets you mark a state update as low priority.
    You explicitly wrap the update inside startTransition.
</p>

<pre><code>
import { useState, useTransition } from "react";

function Search() {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);

        startTransition(() => {
            setResults(expensiveFilter(value));
        });
    };

    return (
        <>
            <input value={text} onChange={handleChange} />
            {isPending && <p>Loading...</p>}
            <ResultList results={results} />
        </>
    );
}
</code></pre>

<p>
    Here, typing remains fast because filtering is marked as low priority.
</p>

<ul>
    <li>You decide which update is non-urgent</li>
    <li>Gives isPending state</li>
    <li>Used when you control the state update</li>
</ul>

<hr />

<h4>3. useDeferredValue - you defer a value</h4>

<p>
    useDeferredValue does not wrap state updates.
    Instead, it returns a deferred version of a value.
</p>

<pre><code>
import { useState, useDeferredValue } from "react";

function Search() {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);

    const results = expensiveFilter(deferredText);

    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <ResultList results={results} />
        </>
    );
}
</code></pre>

<p>
    React keeps text responsive and updates deferredText later
    when rendering time is available.
</p>

<ul>
    <li>You do not control the update directly</li>
    <li>No isPending flag</li>
    <li>Used when you want to defer rendering of a derived value</li>
</ul>

<hr />

<h4>4. Real difference in simple terms</h4>

<ul>
    <li>useTransition - delay a state update</li>
    <li>useDeferredValue - delay a value propagation</li>
</ul>

<p>
    useTransition is more explicit and gives loading control.
    useDeferredValue is simpler and works well when you already
    have a fast input state and want heavy calculations to lag slightly.
</p>

<hr />

<h4>5. When to use which?</h4>

<ul>
    <li>Large filtered lists - both can work</li>
    <li>Complex route changes - useTransition</li>
    <li>Derived expensive calculations - useDeferredValue</li>
</ul>

<hr />

<h4>Interview summary</h4>

<ul>
    <li>Both are concurrent features to keep UI responsive</li>
    <li>useTransition marks updates as low priority</li>
    <li>useDeferredValue delays value updates</li>
    <li>useTransition gives isPending, useDeferredValue does not</li>
</ul>

<p>
    In short - useTransition controls the update,
    useDeferredValue controls the value.
</p>
`,
        },

        {
            id: "m-006",
            q: "StrictMode renders effects twice in dev: why and how to handle?",
            a: `
<p>
    In React 18, when <strong>StrictMode</strong> is enabled in development,
    React intentionally runs certain lifecycle logic - including
    <code>useEffect</code> - twice.
</p>

<p>
    This only happens in <strong>development mode</strong>.
    It does not happen in production builds.
</p>

<hr />

<h4>1. Why does React do this?</h4>

<p>
    React double-invokes effects to help developers detect
    <strong>unsafe side effects</strong> and cleanup issues.
</p>

<ul>
    <li>It mounts the component</li>
    <li>Runs the effect</li>
    <li>Immediately unmounts the component</li>
    <li>Runs cleanup</li>
    <li>Mounts again and runs effect properly</li>
</ul>

<p>
    This exposes bugs like:
</p>

<ul>
    <li>Missing cleanup functions</li>
    <li>Subscriptions not being removed</li>
    <li>Timers not cleared</li>
    <li>APIs being called twice accidentally</li>
</ul>

<hr />

<h4>2. Example behavior</h4>

<pre><code>
useEffect(() => {
    console.log("Effect runs");

    return () => {
        console.log("Cleanup runs");
    };
}, []);
</code></pre>

<p>
    In development with StrictMode, you may see:
</p>

<pre><code>
Effect runs
Cleanup runs
Effect runs
</code></pre>

<p>
    This is expected behavior.
</p>

<hr />

<h4>3. Important clarification</h4>

<ul>
    <li>This happens only in development</li>
    <li>Production build runs effects normally once</li>
    <li>It is not a bug</li>
</ul>

<hr />

<h4>4. How to handle it properly</h4>

<p>
    The correct approach is not to disable StrictMode, but to
    write effects that are safe and idempotent.
</p>

<ul>
    <li>Always return cleanup functions for subscriptions</li>
    <li>Clear timers inside cleanup</li>
    <li>Avoid relying on effects running only once</li>
    <li>Make API calls resilient if needed</li>
</ul>

<p>
    Example with cleanup:
</p>

<pre><code>
useEffect(() => {
    const id = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => {
        clearInterval(id);
    };
}, []);
</code></pre>

<hr />

<h4>5. Should you disable StrictMode?</h4>

<p>
    No. StrictMode helps catch subtle bugs early.
    It is a development safety mechanism.
</p>

<p>
    Disabling it only hides problems instead of fixing them.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>StrictMode intentionally runs effects twice in development</li>
    <li>It helps detect unsafe side effects and missing cleanups</li>
    <li>Production builds are not affected</li>
    <li>Write clean, idempotent effects instead of disabling StrictMode</li>
</ul>
`,
        },

        {
            id: "m-007",
            q: "What is hydration and why can it fail?",
            a: `
<p>
    <strong>Hydration</strong> is the process where React attaches event
    listeners and makes a server-rendered HTML page interactive on the client.
</p>

<p>
    In Server-Side Rendering (SSR), the server sends fully rendered HTML to
    the browser. When the JavaScript bundle loads, React does not recreate
    the DOM from scratch - it reuses the existing HTML and connects it to
    React's internal virtual DOM. This process is called hydration.
</p>

<hr />

<h4>1. Why hydration is needed</h4>

<p>
    Without hydration, server-rendered HTML would be static and non-interactive.
    Hydration enables:
</p>

<ul>
    <li>Click handlers to work</li>
    <li>State updates to trigger re-renders</li>
    <li>Client-side navigation</li>
</ul>

<hr />

<h4>2. How hydration works</h4>

<pre><code>
// Server side
const html = renderToString(&lt;App /&gt;);

// Client side
hydrateRoot(document.getElementById("root"), &lt;App /&gt;);
</code></pre>

<p>
    React compares the existing DOM with what it expects to render and
    attaches listeners instead of replacing the entire markup.
</p>

<hr />

<h4>3. Why hydration can fail</h4>

<p>
    Hydration fails when the HTML generated on the server does not match
    what React renders on the client.
</p>

<p>
    Common causes:
</p>

<ul>
    <li>Using <code>Date.now()</code> or <code>Math.random()</code> during render</li>
    <li>Conditional rendering that depends on <code>window</code> or browser APIs</li>
    <li>Different data on server and client</li>
    <li>Locale-based formatting differences</li>
</ul>

<p>
    If the markup differs, React shows a hydration warning and may discard
    the server HTML, re-rendering the tree on the client.
</p>

<hr />

<h4>4. Example of mismatch problem</h4>

<pre><code>
function Clock() {
    return &lt;div&gt;{Date.now()}&lt;/div&gt;;
}
</code></pre>

<p>
    The server and client render different timestamps, so hydration fails
    due to mismatch.
</p>

<hr />

<h4>5. How to prevent hydration errors</h4>

<ul>
    <li>Avoid non-deterministic values during render</li>
    <li>Move browser-only logic inside <code>useEffect</code></li>
    <li>Ensure server and client receive the same data</li>
    <li>Use consistent formatting logic</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    Hydration is the process where React attaches interactivity to
    server-rendered HTML. It can fail when the server and client render
    different markup, usually due to non-deterministic values or
    browser-only logic during render.
</p>
`,
        },

        {
            id: "m-008",
            q: "What are common hydration mismatch causes and fixes?",
            a: `
<p>
    A <strong>hydration mismatch</strong> happens when the HTML generated on the server
    does not match what React renders on the client during hydration.
    React expects both outputs to be identical. If they differ, you get warnings
    in the console and sometimes unexpected UI behavior.
</p>

<hr />

<h4>1. Using browser-only APIs during render</h4>

<p>
    Accessing <code>window</code>, <code>document</code>, <code>localStorage</code>,
    or <code>navigator</code> directly inside the render phase can cause mismatch,
    because these do not exist on the server.
</p>

<pre><code>
const theme = localStorage.getItem("theme"); // problematic in SSR
</code></pre>

<p>
    <strong>Fix:</strong> Move such logic inside <code>useEffect</code> so it runs only on the client.
</p>

<hr />

<h4>2. Non-deterministic values during render</h4>

<p>
    Rendering values that change between server and client like:
</p>

<ul>
    <li><code>Date.now()</code></li>
    <li><code>Math.random()</code></li>
    <li>Auto-generated IDs without stability</li>
</ul>

<p>
    These produce different HTML on server and client.
</p>

<p>
    <strong>Fix:</strong> Generate such values inside <code>useEffect</code> or use
    stable IDs like <code>useId()</code> in React 18+.
</p>

<hr />

<h4>3. Conditional rendering based on client state</h4>

<p>
    Example: rendering different UI depending on screen size or user agent
    during initial render.
</p>

<pre><code>
if (window.innerWidth &lt; 768) {
    return &lt;MobileLayout /&gt;;
}
</code></pre>

<p>
    This causes mismatch because the server cannot know the real client width.
</p>

<p>
    <strong>Fix:</strong> Render a consistent fallback on the server, then adjust
    layout inside <code>useEffect</code>.
</p>

<hr />

<h4>4. Data not ready on server</h4>

<p>
    If server renders empty data but client fetches and renders populated data
    immediately, mismatch can happen.
</p>

<p>
    <strong>Fix:</strong> Ensure the same data is available during SSR, or use
    proper loading states consistently on both sides.
</p>

<hr />

<h4>5. Incorrect key usage in lists</h4>

<p>
    Using unstable keys can cause DOM structure differences between server and client.
</p>

<p>
    <strong>Fix:</strong> Always use stable, unique keys from data instead of array index
    when order can change.
</p>

<hr />

<h4>6. Third-party libraries manipulating DOM</h4>

<p>
    Some libraries mutate DOM directly before React hydrates,
    which breaks expected structure.
</p>

<p>
    <strong>Fix:</strong> Use libraries that support SSR, or initialize them inside
    <code>useEffect</code>.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Hydration mismatch occurs when server and client HTML differ</li>
    <li>Common causes are browser APIs, random values, unstable keys, and conditional rendering</li>
    <li>Fix by ensuring deterministic rendering and moving client-only logic to useEffect</li>
</ul>

<p>
    In short, the first render must be predictable and identical on both
    server and client.
</p>
`,
        },

        {
            id: "m-009",
            q: "What is Suspense used for today in real apps?",
            a: `
<p>
    Today, <strong>React Suspense</strong> is mainly used for handling
    <strong>lazy loading and asynchronous UI states</strong> in a declarative way.
    It allows you to show a fallback UI while some component or data is still loading.
</p>

<hr />

<h4>1. Code splitting with React.lazy</h4>

<p>
    The most common real-world use case of Suspense today is
    <strong>lazy loading components</strong> using <code>React.lazy</code>.
</p>

<pre><code>
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
    return (
        &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
            &lt;Dashboard /&gt;
        &lt;/Suspense&gt;
    );
}
</code></pre>

<p>
    Here, Suspense shows the fallback UI while the component bundle is being downloaded.
</p>

<hr />

<h4>2. Data fetching in frameworks</h4>

<p>
    In modern frameworks like Next.js with React Server Components,
    Suspense is used for <strong>streaming and async data fetching</strong>.
</p>

<p>
    However, in plain React apps, Suspense for data fetching is not fully stable
    unless you use libraries that integrate with it.
</p>

<hr />

<h4>3. With data libraries</h4>

<p>
    Some data libraries like React Query and Relay can integrate with Suspense
    to handle loading states automatically.
</p>

<p>
    Instead of writing manual loading logic, Suspense can control fallback UI
    while data resolves.
</p>

<hr />

<h4>4. What Suspense is NOT</h4>

<ul>
    <li>It is not a data fetching library</li>
    <li>It does not fetch data by itself</li>
    <li>It only controls how loading UI is shown</li>
</ul>

<hr />

<h4>5. Real-world summary</h4>

<ul>
    <li>Used for code splitting with React.lazy</li>
    <li>Used in modern frameworks for async UI streaming</li>
    <li>Works with libraries that support Suspense</li>
</ul>

<p>
    In most real apps today, Suspense is primarily used for lazy loading components,
    and more advanced async usage depends on the framework setup.
</p>

<hr />

<h4>Interview one-liner</h4>

<p>
    Suspense is used to declaratively handle loading states, most commonly for
    lazy-loaded components, and in modern frameworks for async data rendering.
</p>
`,
        },

        {
            id: "m-010",
            q: "Why Suspense for data fetching is not same as Suspense for code splitting?",
            a: `
<p>
    Suspense is a mechanism that lets React "wait" before rendering part of the UI.
    But Suspense for <strong>code splitting</strong> and Suspense for
    <strong>data fetching</strong> are not the same thing internally.
</p>

<hr />

<h4>1. Suspense for code splitting</h4>

<p>
    This is the most common and stable use case today.
    It works with <code>React.lazy</code> to load JavaScript bundles dynamically.
</p>

<pre><code>
const Profile = React.lazy(() => import("./Profile"));

&lt;Suspense fallback="Loading..."&gt;
    &lt;Profile /&gt;
&lt;/Suspense&gt;
</code></pre>

<p>
    Here, React pauses rendering until the component's code is downloaded.
    It is about <strong>loading JS files</strong>, not fetching API data.
</p>

<ul>
    <li>Fully supported in production</li>
    <li>Works in stable React</li>
    <li>Used for bundle optimization</li>
</ul>

<hr />

<h4>2. Suspense for data fetching</h4>

<p>
    Suspense for data fetching works differently. Instead of waiting for a JS file,
    React waits for a <strong>Promise that represents data</strong>.
</p>

<p>
    The idea is that a component "throws a Promise", and React catches it,
    shows the fallback, and retries rendering when the Promise resolves.
</p>

<pre><code>
function fetchUser() {
    if (!data) {
        throw promise;
    }
    return data;
}
</code></pre>

<p>
    This pattern is mainly used with:
</p>

<ul>
    <li>React Server Components</li>
    <li>Next.js App Router</li>
    <li>Special data frameworks that integrate with Suspense</li>
</ul>

<p>
    It is not the same as just wrapping <code>fetch()</code> inside Suspense.
    React itself does not automatically handle normal fetch calls.
</p>

<hr />

<h4>3. Key differences</h4>

<ul>
    <li>Code splitting waits for JavaScript bundles</li>
    <li>Data Suspense waits for Promises that represent data</li>
    <li>Code splitting is stable and widely used</li>
    <li>Data fetching Suspense requires framework support</li>
</ul>

<hr />

<h4>4. Important interview clarification</h4>

<p>
    Suspense for code splitting is a UI loading mechanism.
    Suspense for data fetching is a rendering control mechanism
    that integrates deeply with React's concurrent features.
</p>

<hr />

<h4>Interview-ready summary</h4>

<p>
    Suspense for code splitting pauses rendering while a component's code is loading,
    whereas Suspense for data fetching pauses rendering while asynchronous data resolves.
    The former is stable and common, while the latter requires specific framework support
    and works by throwing Promises during render.
</p>
`,
        },
    ],
};
