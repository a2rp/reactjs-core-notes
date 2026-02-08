import{d as O,r as c,u as D,j as e,F as H,a as E,b as U,c as A}from"./index-BN6OS7WO.js";const P={Wrapper:O.div`
        max-width: 1440px;
        margin: 0 auto;
        padding: 40px 20px 80px;
        color: var(--color-text-primary);

        .pageHeader {
            margin-bottom: 18px;
        }

        h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            max-width: 860px;
            margin-bottom: 12px;
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
            border-radius: 10px;
        }

        .qnaGrid {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 18px;
            margin-top: 18px;
        }

        .qnaListWrapper {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            overflow: hidden;
            height: calc(100vh - 220px);
            min-height: 520px;

            display: flex;
            flex-direction: column;
        }

        .listTop {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }

        .listTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            color: var(--color-text-primary);
            font-weight: 600;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border: 1px solid var(--color-border);
                border-radius: 10px;
                background: var(--color-surface-2);
                color: var(--color-text-secondary);
            }
        }

        .listMeta {
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .listBody {
            padding: 10px 0;
            /* overflow: auto; */
            overflow-y: auto;
            position: relative;
        }

        .qnaSection {
            padding: 8px 0 12px;
            border-bottom: 1px solid var(--color-border);
        }

        .qnaSection:last-child {
            border-bottom: none;
        }

        .sectionHeader {
            padding: 10px 14px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .sectionTitle {
            font-size: 12px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-weight: 700;
        }

        .sectionCount {
            font-size: 11px;
            color: var(--color-text-secondary);
        }

        .qnaList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .qnaItem {
            width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;

            display: flex;
            align-items: flex-start;
            gap: 10px;

            padding: 10px 14px;
            color: var(--color-text-secondary);

            transition: background 160ms ease;

            &:hover {
                background: var(--color-surface-2);
                color: var(--color-text-primary);
            }
        }

        .qnaItem.isActive {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            border-left: 3px solid var(--color-text-primary);
            padding-left: 11px;
        }

        .qIndex {
            flex: 0 0 auto;
            font-size: 12px;
            color: var(--color-text-secondary);
            opacity: 0.9;
            margin-top: 1px;
        }

        .qText {
            font-size: 13px;
            line-height: 1.45;
            color: inherit;
        }

        .content {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 14px;
            height: fit-content;
        }

        .contentCard {
            border-radius: 12px;
        }

        .contentTop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--color-border);
        }

        .contentMeta {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .badge {
            font-size: 12px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            white-space: nowrap;
        }

        .counter {
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .navButtons {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .navBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 34px;
            padding: 0 12px;
            border-radius: 10px;

            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);

            cursor: pointer;
            transition:
                transform 120ms ease,
                background 150ms ease;

            &:hover {
                background: var(--color-surface);
                transform: translateY(-1px);
            }

            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
                transform: none;
            }
        }

        .questionBlock {
            padding: 14px 2px 0;
        }

        .qTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .qIcon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .qLabel {
            font-size: 12px;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
            font-weight: 700;
        }

        .qTextBig {
            font-size: 16px;
            line-height: 1.65;
            color: var(--color-text-primary);
            padding: 12px 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
        }

        .answerBlock {
            margin-top: 14px;
            padding: 14px 2px 0;
        }

        .aTitle {
            font-size: 12px;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .aText {
            font-size: 14px;
            line-height: 1.8;
            color: var(--color-text-primary);

            p {
                margin-bottom: 12px;
            }

            ul {
                margin: 10px 0 14px 18px;
            }

            li {
                margin-bottom: 6px;
            }

            strong {
                font-weight: 700;
            }

            em {
                font-style: italic;
            }

            pre {
                margin-top: 12px;
                padding: 12px;
                background: var(--color-surface-2);
                border: 1px solid var(--color-border);
                overflow-x: auto;
                font-size: 13px;
            }

            code {
                font-family: Consolas, Monaco, monospace;
            }
        }

        .emptyAnswer {
            font-size: 13px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            padding: 12px 14px;
            border: 1px dashed var(--color-border);
            background: transparent;
            border-radius: 14px;
        }

        .hint {
            margin-top: 12px;
            font-size: 12px;
            color: var(--color-text-secondary);
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .qnaGrid {
                grid-template-columns: 1fr;
            }

            .qnaListWrapper {
                height: auto;
                min-height: auto;
            }
        }
    `},J={id:"core-react",title:"Core React",items:[{id:"core-001",q:"What is React, in simple terms?",a:`
            <p>
                React is a <strong>JavaScript library</strong> used to build
                user interfaces, especially for single-page applications.
            </p>

            <p>
                It lets you break the UI into <em>reusable components</em>
                and update the screen efficiently when data changes.
            </p>

            <ul>
                <li>Component-based architecture</li>
                <li>Declarative UI</li>
                <li>Virtual DOM for performance</li>
            </ul>

            <pre>
<code>
function Hello() {
    return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
</code>
            </pre>
        `},{id:"core-002",q:"How did React evolve over time? Quick history.",a:`<p>
    React was created at <strong>Facebook</strong> to solve a very real problem:
    complex UIs were becoming hard to keep in sync with data.
</p>

<p>
    Around <strong>2011</strong>, Facebook engineers (notably Jordan Walke)
    experimented with a new idea called <em>component-based UI</em>, where the
    UI updates automatically when data changes.
</p>

<ul>
    <li>
        <strong>2013</strong> – React was open-sourced. The idea of
        <em>Virtual DOM</em> and declarative UI was new and controversial.
    </li>
    <li>
        <strong>2015–2016</strong> – React gained popularity. Ecosystem grew
        with tools like React Router and Redux.
    </li>
    <li>
        <strong>2017</strong> – React 16 introduced <em>Fiber</em>, a new
        rendering engine focused on performance and smoother updates.
    </li>
    <li>
        <strong>2018</strong> – <em>Hooks</em> were announced, allowing state
        and lifecycle logic inside function components.
    </li>
    <li>
        <strong>2020+</strong> – Focus shifted to Concurrent Rendering,
        Suspense, Server Components, and better developer experience.
    </li>
</ul>

<p>
    Over time, React evolved from a UI experiment into a
    <strong>stable, flexible foundation</strong> for building large-scale web
    applications.
</p>

<p>
    Today, React emphasizes:
</p>

<ul>
    <li>Function components over classes</li>
    <li>Hooks for state and side effects</li>
    <li>Performance through smart rendering</li>
    <li>Compatibility with server rendering and modern frameworks</li>
</ul>
`},{id:"core-003",q:"What are the top features React is known for?",a:`<p>
    React is known for a few core ideas that together make building complex UIs
    predictable, scalable, and fast.
</p>

<h4>1. Component-based architecture</h4>
<p>
    React applications are built using <strong>components</strong>. Each
    component represents a small, reusable part of the UI.
</p>

<pre>
<code>
function Button({ label }) {
    return &lt;button&gt;{label}&lt;/button&gt;;
}
</code>
</pre>

<p>
    Components can be nested and reused across the app, which keeps code
    organized and maintainable.
</p>

<p><strong>Gotcha:</strong> Components should stay focused. Overloaded components
become hard to reason about.</p>

<hr />

<h4>2. Declarative UI</h4>
<p>
    In React, you describe <em>what the UI should look like</em> for a given
    state, not <em>how to update the DOM step by step</em>.
</p>

<pre>
<code>
function Status({ isOnline }) {
    return &lt;span&gt;{isOnline ? "Online" : "Offline"}&lt;/span&gt;;
}
</code>
</pre>

<p>
    When the data changes, React automatically updates the UI.
</p>

<p><strong>Gotcha:</strong> Avoid mixing imperative DOM logic with React state.
Let React control the UI.</p>

<hr />

<h4>3. Virtual DOM and efficient rendering</h4>
<p>
    React uses a <strong>Virtual DOM</strong>, which is a lightweight in-memory
    representation of the real DOM.
</p>

<p>
    When state changes:
</p>

<ul>
    <li>React creates a new Virtual DOM tree</li>
    <li>Compares it with the previous one (diffing)</li>
    <li>Updates only the changed parts in the real DOM</li>
</ul>

<p>
    This minimizes expensive DOM operations and improves performance.
</p>

<p><strong>Gotcha:</strong> Virtual DOM does not make everything fast automatically.
Bad component design can still cause performance issues.</p>

<hr />

<h4>4. One-way data flow</h4>
<p>
    Data in React flows <strong>from parent to child</strong> using props.
</p>

<pre>
<code>
function Parent() {
    return &lt;Child message="Hello" /&gt;;
}

function Child({ message }) {
    return &lt;p&gt;{message}&lt;/p&gt;;
}
</code>
</pre>

<p>
    This makes data flow predictable and easier to debug.
</p>

<p><strong>Gotcha:</strong> Excessive prop drilling can hurt readability.
Context or composition can help.</p>

<hr />

<h4>5. Hooks for state and side effects</h4>
<p>
    Hooks allow function components to use state, lifecycle logic, and other
    React features.
</p>

<pre>
<code>
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
            {count}
        &lt;/button&gt;
    );
}
</code>
</pre>

<p>
    Hooks replaced most class component use cases and encourage reusable logic.
</p>

<p><strong>Gotcha:</strong> Hooks must be called unconditionally and only at the
top level of a component.</p>

<hr />

<h4>6. Strong ecosystem and flexibility</h4>
<p>
    React focuses only on the UI layer. Everything else (routing, state
    management, data fetching) is handled by libraries.
</p>

<ul>
    <li>Routing: React Router</li>
    <li>Styling: styled-components, CSS modules</li>
    <li>State management: Context, Redux, Zustand</li>
</ul>

<p>
    This gives developers freedom to choose tools based on project needs.
</p>

<p><strong>Gotcha:</strong> Too many choices can confuse beginners. Consistent
project conventions are important.</p>

<hr />

<h4>Summary</h4>
<ul>
    <li>Reusable components</li>
    <li>Declarative UI model</li>
    <li>Virtual DOM for performance</li>
    <li>One-way data flow</li>
    <li>Hooks for modern logic reuse</li>
    <li>Large and flexible ecosystem</li>
</ul>

<p>
    These features together make React suitable for building large, interactive,
    and long-lived applications.
</p>
`},{id:"core-004",q:"What is JSX and why do we use it?",a:`<p>
    <strong>JSX</strong> stands for <em>JavaScript XML</em>. It is a syntax
    extension for JavaScript that lets you write UI code that looks similar to
    HTML inside JavaScript.
</p>

<p>
    JSX is <strong>not required</strong> to use React, but it makes UI code
    much easier to read, write, and maintain.
</p>

<hr />

<h4>Why do we use JSX?</h4>

<ul>
    <li>
        It makes UI code <strong>declarative</strong> and readable.
    </li>
    <li>
        UI structure and logic live in the <strong>same place</strong>.
    </li>
    <li>
        React can give better warnings and tooling support.
    </li>
</ul>

<p>
    Instead of manually creating elements with JavaScript, JSX lets you
    describe <em>what the UI should look like</em>.
</p>

<hr />

<h4>Basic JSX syntax</h4>

<pre>
<code>
const element = &lt;h1&gt;Hello React&lt;/h1&gt;;
</code>
</pre>

<p>
    Under the hood, JSX is converted into plain JavaScript:
</p>

<pre>
<code>
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);
</code>
</pre>

<p>
    This conversion is handled by tools like <strong>Babel</strong> during build
    time.
</p>

<hr />

<h4>Using JavaScript inside JSX</h4>

<p>
    You can embed JavaScript expressions inside JSX using curly braces
    <code>{ }</code>.
</p>

<pre>
<code>
const name = "Ashish";

return (
    &lt;h2&gt;Hello {name}!&lt;/h2&gt;
);
</code>
</pre>

<p>
    Any valid JavaScript expression works:
</p>

<ul>
    <li>Variables</li>
    <li>Function calls</li>
    <li>Ternary operators</li>
    <li>Logical && rendering</li>
</ul>

<hr />

<h4>JSX with components</h4>

<pre>
<code>
function Welcome(props) {
    return &lt;h3&gt;Welcome {props.user}&lt;/h3&gt;;
}

&lt;Welcome user="Developer" /&gt;
</code>
</pre>

<p>
    Component names must start with a <strong>capital letter</strong>.
</p>

<hr />

<h4>Common JSX gotchas (very important)</h4>

<ul>
    <li>
        <strong>JSX is not HTML</strong> – attributes are different.
        <ul>
            <li><code>class</code> → <code>className</code></li>
            <li><code>for</code> → <code>htmlFor</code></li>
        </ul>
    </li>

    <li>
        JSX must return <strong>a single parent element</strong>.
    </li>

    <li>
        You cannot use statements like <code>if</code> or <code>for</code>
        directly inside JSX.
    </li>

    <li>
        Use expressions instead:
        <pre>
<code>
{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}
</code>
        </pre>
    </li>

    <li>
        JSX automatically escapes values, which helps prevent
        <strong>XSS attacks</strong>.
    </li>
</ul>

<hr />

<h4>JSX and security</h4>

<p>
    JSX escapes all values before rendering, so it is safe by default.
    Raw HTML must be explicitly injected using
    <code>dangerouslySetInnerHTML</code>.
</p>

<hr />

<h4>In short (interview-friendly summary)</h4>

<ul>
    <li>JSX is a syntax extension, not a template engine</li>
    <li>It improves readability and developer experience</li>
    <li>JSX compiles to plain JavaScript</li>
    <li>It allows mixing UI structure with logic safely</li>
</ul>
`},{id:"core-005",q:"Element vs Component: what is the real difference?",a:`<p>
    In React, an <strong>Element</strong> and a <strong>Component</strong> are
    related but <em>not the same thing</em>.
</p>

<p>
    Think of it like this:
</p>

<ul>
    <li>
        A <strong>Component</strong> is a <em>blueprint</em> or function that
        describes what the UI should look like.
    </li>
    <li>
        An <strong>Element</strong> is the <em>actual object</em> React creates
        from that blueprint.
    </li>
</ul>

<hr />

<h4>1) What is a React Element?</h4>

<p>
    A React element is a <strong>plain JavaScript object</strong> that describes
    what should appear on the screen.
</p>

<pre>
<code>
const element = &lt;h1&gt;Hello React&lt;/h1&gt;;
</code>
</pre>

<p>
    Under the hood, JSX becomes:
</p>

<pre>
<code>
const element = React.createElement(
    "h1",
    null,
    "Hello React"
);
</code>
</pre>

<p>
    Important properties of elements:
</p>

<ul>
    <li>They are <strong>immutable</strong></li>
    <li>They are cheap to create</li>
    <li>They describe <em>what</em> the UI should be</li>
</ul>

<hr />

<h4>2) What is a React Component?</h4>

<p>
    A component is a <strong>function or class</strong> that returns React
    elements.
</p>

<pre>
<code>
function Greeting() {
    return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
</code>
</pre>

<p>
    Components:
</p>

<ul>
    <li>Can accept <strong>props</strong></li>
    <li>Can manage <strong>state</strong></li>
    <li>Can contain logic, hooks, and effects</li>
</ul>

<p>
    When you use a component like this:
</p>

<pre>
<code>
&lt;Greeting /&gt;
</code>
</pre>

<p>
    React <strong>calls the component</strong> and creates an element from it.
</p>

<hr />

<h4>3) Component → Element relationship</h4>

<p>
    This is the key idea interviewers look for:
</p>

<ul>
    <li>A <strong>component returns elements</strong></li>
    <li>Elements are the <strong>output</strong> of components</li>
</ul>

<pre>
<code>
function App() {
    return (
        &lt;div&gt;
            &lt;Greeting /&gt;
        &lt;/div&gt;
    );
}
</code>
</pre>

<p>
    Here:
</p>

<ul>
    <li><code>Greeting</code> is a component</li>
    <li><code>&lt;Greeting /&gt;</code> creates a React element</li>
    <li>The returned <code>&lt;h1&gt;</code> is also an element</li>
</ul>

<hr />

<h4>4) Common gotchas</h4>

<ul>
    <li>
        <strong>You cannot call an element like a function</strong>
        <pre>
<code>
// ❌ Wrong
element();
</code>
        </pre>
    </li>

    <li>
        <strong>Components must start with a capital letter</strong>
        <pre>
<code>
// ❌ Treated as HTML tag
&lt;greeting /&gt;

// ✅ Component
&lt;Greeting /&gt;
</code>
        </pre>
    </li>

    <li>
        <strong>Elements are immutable</strong>
        <pre>
<code>
// ❌ You cannot modify an element
element.props.title = "New Title";
</code>
        </pre>
    </li>
</ul>

<hr />

<h4>5) One-line interview answer</h4>

<p>
    A <strong>component</strong> is a reusable function or class that defines UI
    logic, while an <strong>element</strong> is the immutable object React
    creates to describe what should appear on the screen.
</p>
`},{id:"core-006",q:"How do you create a component in React?",a:`<p>
    In React, a <strong>component</strong> is a reusable piece of UI.
    The most common and recommended way today is using
    <strong>function components</strong>.
</p>

<h4>1. Function Component (Recommended)</h4>

<p>
    A function component is just a JavaScript function that
    <em>returns JSX</em>.
</p>

<pre>
<code>
function Greeting() {
    return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
</code>
</pre>

<p>
    You can then use it like a normal HTML tag:
</p>

<pre>
<code>
&lt;Greeting /&gt;
</code>
</pre>

<p>
    Function components can accept <strong>props</strong> and use
    <strong>Hooks</strong> like <code>useState</code> and
    <code>useEffect</code>.
</p>

<pre>
<code>
function Greeting({ name }) {
    return &lt;h1&gt;Hello {name}&lt;/h1&gt;;
}
</code>
</pre>

<hr />

<h4>2. Arrow Function Component</h4>

<p>
    This is just a shorter syntax, functionally the same:
</p>

<pre>
<code>
const Greeting = () =&gt; {
    return &lt;h1&gt;Hello React&lt;/h1&gt;;
};
</code>
</pre>

<p>
    For small components, developers often use implicit return:
</p>

<pre>
<code>
const Greeting = () =&gt; &lt;h1&gt;Hello React&lt;/h1&gt;;
</code>
</pre>

<hr />

<h4>3. Class Component (Legacy)</h4>

<p>
    Before Hooks, React used class components for state and lifecycle methods.
    They are still supported but <strong>not recommended for new code</strong>.
</p>

<pre>
<code>
class Greeting extends React.Component {
    render() {
        return &lt;h1&gt;Hello React&lt;/h1&gt;;
    }
}
</code>
</pre>

<p>
    Today, everything done with classes can be done more cleanly
    with function components and Hooks.
</p>

<hr />

<h4>Important Rules & Gotchas</h4>

<ul>
    <li>
        <strong>Component names must start with a capital letter</strong>.
        <br />
        <code>function greeting()</code> ❌
        <br />
        <code>function Greeting()</code> ✅
    </li>

    <li>
        A component must return a <strong>single root element</strong>.
        Use a wrapper or a React Fragment if needed.
    </li>

    <li>
        Components should be <strong>pure</strong>:
        same props → same UI output.
    </li>

    <li>
        Never call Hooks inside loops, conditions, or nested functions.
    </li>

    <li>
        JSX is optional, but almost all React code uses it for readability.
    </li>
</ul>

<hr />

<h4>Interview Tip</h4>

<p>
    If asked today, always say:
</p>

<blockquote>
    “We create components using function components with Hooks.
    Class components are mostly legacy.”
</blockquote>
`},{id:"core-007",q:"When would you still choose class components over function components?",a:`<p>
    In modern React, <strong>function components + Hooks</strong> are the default.
    But there are still a few real situations where you might pick a
    <strong>class component</strong> (or keep one) instead of rewriting.
</p>

<h3>When class components still make sense</h3>

<ul>
    <li>
        <strong>Legacy codebases:</strong> Big apps built before Hooks often have
        class components everywhere. Rewriting just for style is usually not
        worth the risk unless you are touching that area anyway.
    </li>
    <li>
        <strong>Error boundaries (classic approach):</strong> The commonly used
        error boundary pattern is class-based using
        <code>componentDidCatch</code> and <code>getDerivedStateFromError</code>.
        Many teams still keep a small class wrapper for this.
    </li>
    <li>
        <strong>Third-party libs still expecting classes:</strong> Rare now, but
        some older libraries and patterns integrate more easily with classes.
    </li>
    <li>
        <strong>Team constraints / migration strategy:</strong> If your team is
        in the middle of a migration, you might temporarily write classes for
        consistency with surrounding files.
    </li>
</ul>

<h3>Example 1: Classic Error Boundary (Class Component)</h3>

<pre><code>
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // log error to monitoring service
        console.log("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return &lt;div&gt;Something went wrong.&lt;/div&gt;;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
</code></pre>

<p>
    <strong>Usage:</strong>
</p>

<pre><code>
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

export default function Root() {
    return (
        &lt;ErrorBoundary&gt;
            &lt;App /&gt;
        &lt;/ErrorBoundary&gt;
    );
}
</code></pre>

<h3>Example 2: Same component as Function Component (modern style)</h3>

<p>
    Most UI components should be written like this:
</p>

<pre><code>
import React, { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() =&gt; {
        document.title = "Count: " + count;
    }, [count]);

    return (
        &lt;div&gt;
            &lt;div&gt;Count: {count}&lt;/div&gt;
            &lt;button onClick={() =&gt; setCount((c) =&gt; c + 1)}&gt;Inc&lt;/button&gt;
        &lt;/div&gt;
    );
}
</code></pre>

<h3>Gotchas and interview points</h3>

<ul>
    <li>
        <strong>No Hooks in classes:</strong> You cannot use Hooks inside class
        components. If your logic needs Hooks, class is a bad fit.
    </li>
    <li>
        <strong>Lifecycle vs Hooks mismatch:</strong> In classes you manage
        side-effects through lifecycle methods like
        <code>componentDidMount</code>, <code>componentDidUpdate</code>,
        <code>componentWillUnmount</code>. In function components it is usually
        <code>useEffect</code> (and sometimes <code>useLayoutEffect</code>).
    </li>
    <li>
        <strong>this binding issues:</strong> In classes, event handlers often
        need binding, or you must use class fields. Example:
        <code>this.handleClick = this.handleClick.bind(this)</code>
        (or <code>handleClick = () =&gt; {}</code>).
    </li>
    <li>
        <strong>Performance myths:</strong> Class components are not magically
        faster. Performance depends on rendering patterns, memoization, and
        state updates.
    </li>
    <li>
        <strong>Migration reality:</strong> In a real job, you often keep class
        components as-is and modernize only when you touch that feature area.
    </li>
</ul>

<h3>Simple decision rule</h3>

<ul>
    <li>
        <strong>New components:</strong> Use function components.
    </li>
    <li>
        <strong>Existing stable class components:</strong> Keep them unless you
        have a strong reason to refactor.
    </li>
    <li>
        <strong>Error boundary wrapper:</strong> A small class is still totally
        acceptable in many codebases.
    </li>
</ul>
`},{id:"core-008",q:"What is a PureComponent and how is it different?",a:`<p>
    A <strong>PureComponent</strong> is a React component that automatically
    implements a <em>shallow comparison</em> for props and state to decide
    whether it should re-render or not.
</p>

<p>
    In simple terms, React skips re-rendering a PureComponent if
    <strong>props and state look the same</strong> as before.
</p>

<hr />

<h3>How it works</h3>

<p>
    A PureComponent internally uses a shallow comparison, similar to writing
    <code>shouldComponentUpdate</code> by hand.
</p>

<pre>
<code>
nextProps === prevProps
nextState === prevState
</code>
</pre>

<p>
    If both comparisons return <strong>true</strong>, React assumes nothing
    changed and skips the render.
</p>

<hr />

<h3>Syntax</h3>

<p><strong>Class-based PureComponent</strong></p>

<pre>
<code>
import React from "react";

class UserCard extends React.PureComponent {
    render() {
        return (
            &lt;div&gt;
                &lt;h3&gt;{this.props.name}&lt;/h3&gt;
                &lt;p&gt;{this.props.age}&lt;/p&gt;
            &lt;/div&gt;
        );
    }
}

export default UserCard;
</code>
</pre>

<p>
    React also provides the same optimization for function components using
    <code>React.memo</code>.
</p>

<p><strong>Functional equivalent</strong></p>

<pre>
<code>
const UserCard = React.memo(function UserCard({ name, age }) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;{age}&lt;/p&gt;
        &lt;/div&gt;
    );
});
</code>
</pre>

<hr />

<h3>Example: When PureComponent helps</h3>

<pre>
<code>
&lt;UserCard name="Ashish" age={25} /&gt;
</code>
</pre>

<p>
    If the parent re-renders but passes the <strong>same values</strong>,
    PureComponent will not re-render.
</p>

<hr />

<h3>Gotchas (VERY important)</h3>

<p>
    PureComponent only does <strong>shallow comparison</strong>.
    This can cause bugs if you mutate objects or arrays.
</p>

<p><strong>❌ Problematic example</strong></p>

<pre>
<code>
this.state.user.age = 26;
this.setState({ user: this.state.user });
</code>
</pre>

<p>
    Even though the value changed, the object reference is the same.
    PureComponent thinks nothing changed and skips re-render.
</p>

<p><strong>✅ Correct approach (immutable update)</strong></p>

<pre>
<code>
this.setState({
    user: {
        ...this.state.user,
        age: 26
    }
});
</code>
</pre>

<hr />

<h3>When should you use PureComponent</h3>

<ul>
    <li>When props and state are simple (primitives or immutable objects)</li>
    <li>When a component re-renders frequently with same data</li>
    <li>For performance-sensitive UI parts (lists, cards, rows)</li>
</ul>

<hr />

<h3>When NOT to use PureComponent</h3>

<ul>
    <li>If you mutate objects or arrays</li>
    <li>If props contain deeply nested data that changes often</li>
    <li>If correctness is more important than optimization</li>
</ul>

<hr />

<h3>Interview takeaway</h3>

<p>
    <strong>PureComponent</strong> is an optimization, not a feature.
    It helps avoid unnecessary renders but can introduce subtle bugs
    if immutability rules are not followed.
</p>

<p>
    In modern React, <code>React.memo</code> is preferred over
    class-based PureComponent.
</p>
`},{id:"core-009",q:"What is state in React?",a:`<p>
    In React, <strong>state</strong> is a built-in object used to store data
    that <em>belongs to a component</em> and can change over time.
    When state changes, React automatically <strong>re-renders</strong>
    the component to reflect the new data on the screen.
</p>

<p>
    Think of state as the <strong>current condition of a component</strong>.
    If the data affects what the user sees and can change, it should probably
    live in state.
</p>

<hr />

<h4>Basic syntax (useState)</h4>

<pre>
<code>
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;button onClick={() => setCount(count + 1)}&gt;
            Count: {count}
        &lt;/button&gt;
    );
}
</code>
</pre>

<p>
    Here:
</p>

<ul>
    <li><code>count</code> is the current state value</li>
    <li><code>setCount</code> is the function used to update state</li>
    <li><code>useState(0)</code> sets the initial state</li>
</ul>

<hr />

<h4>Important characteristics of state</h4>

<ul>
    <li>State is <strong>local</strong> to a component by default</li>
    <li>State updates are <strong>asynchronous</strong></li>
    <li>Updating state triggers a <strong>re-render</strong></li>
    <li>State should be treated as <strong>immutable</strong></li>
</ul>

<hr />

<h4>Updating state correctly</h4>

<p>
    When the new state depends on the previous state, always use the
    <strong>functional updater</strong>.
</p>

<pre>
<code>
setCount(prevCount => prevCount + 1);
</code>
</pre>

<p>
    This avoids bugs caused by stale state values.
</p>

<hr />

<h4>State with objects</h4>

<pre>
<code>
const [user, setUser] = useState({
    name: "Ash",
    age: 25,
});

setUser(prev => ({
    ...prev,
    age: prev.age + 1,
}));
</code>
</pre>

<p>
    You must <strong>create a new object</strong>. Mutating the existing object
    will not trigger a re-render.
</p>

<hr />

<h4>Common gotchas (very important)</h4>

<ul>
    <li>
        ❌ <strong>Do not mutate state directly</strong>
        <pre><code>
user.age = 26; // wrong
setUser(user);
        </code></pre>
    </li>

    <li>
        ❌ <strong>Do not expect state to update immediately</strong>
        <pre><code>
setCount(count + 1);
console.log(count); // still old value
        </code></pre>
    </li>

    <li>
        ❌ <strong>Do not store derived values unnecessarily</strong><br />
        If something can be calculated from props or state, calculate it during render.
    </li>

    <li>
        ❌ <strong>Avoid too many independent states</strong><br />
        Group related values into a single state object.
    </li>
</ul>

<hr />

<h4>When to use state</h4>

<ul>
    <li>Form inputs</li>
    <li>Toggle states (open/close, show/hide)</li>
    <li>Fetched data</li>
    <li>User interactions</li>
    <li>UI-driven values</li>
</ul>

<p>
    If data does <strong>not change</strong> or does not affect rendering,
    it probably does not belong in state.
</p>

<hr />

<p>
    In short, <strong>state is the heart of interactivity in React</strong>.
    Understanding how to update and structure state correctly is critical
    for building reliable and performant React applications.
</p>
`},{id:"core-010",q:"What are props in React?",a:`
<p>
    In React, <strong>props</strong> (short for <em>properties</em>) are how
    data is <strong>passed from a parent component to a child component</strong>.
    Props make components reusable and configurable.
</p>

<p>
    Think of props as <strong>inputs to a component</strong>. The parent
    decides the values, and the child only consumes them.
</p>

<hr />

<h4>Basic example</h4>

<pre>
<code>
function Greeting({ name }) {
    return &lt;h2&gt;Hello {name}&lt;/h2&gt;;
}

&lt;Greeting name="Ashish" /&gt;
</code>
</pre>

<p>
    Here:
</p>

<ul>
    <li><code>name</code> is a prop</li>
    <li>The parent passes <code>"Ashish"</code></li>
    <li>The child reads it but does not change it</li>
</ul>

<hr />

<h4>Important rules about props</h4>

<ul>
    <li>
        <strong>Props are read-only</strong><br />
        A component must never modify its own props.
    </li>

    <li>
        <strong>Data flows one-way</strong><br />
        From parent → child, never the other way around.
    </li>

    <li>
        <strong>Props can be any JavaScript value</strong>
        <ul>
            <li>Strings, numbers, booleans</li>
            <li>Objects and arrays</li>
            <li>Functions (callbacks)</li>
            <li>JSX elements</li>
        </ul>
    </li>
</ul>

<hr />

<h4>Passing functions as props (very common)</h4>

<pre>
<code>
function Button({ onClick }) {
    return &lt;button onClick={onClick}&gt;Click&lt;/button&gt;;
}

function App() {
    const handleClick = () =&gt; {
        alert("Clicked");
    };

    return &lt;Button onClick={handleClick} /&gt;;
}
</code>
</pre>

<p>
    This is how <strong>child components communicate back</strong> to parents:
    by calling functions passed as props.
</p>

<hr />

<h4>Props vs State (quick contrast)</h4>

<ul>
    <li><strong>Props</strong>: passed from parent, read-only</li>
    <li><strong>State</strong>: owned by the component, can change</li>
</ul>

<p>
    If data is owned by the component → <strong>state</strong><br />
    If data is given to the component → <strong>props</strong>
</p>

<hr />

<h4>Common gotchas (important for interviews)</h4>

<ul>
    <li>
        ❌ Trying to modify props directly
        <pre><code>
props.name = "New Name"; // wrong
        </code></pre>
    </li>

    <li>
        ❌ Assuming props update immediately after parent state change<br />
        Props update only when the parent re-renders.
    </li>

    <li>
        ❌ Overusing props drilling (passing through many layers)<br />
        Use composition or Context when it gets messy.
    </li>
</ul>

<hr />

<h4>Default props</h4>

<p>
    You can provide default values if a prop is not passed.
</p>

<pre>
<code>
function Card({ title = "Untitled" }) {
    return &lt;h3&gt;{title}&lt;/h3&gt;;
}
</code>
</pre>

<hr />

<h4>One-line interview answer</h4>

<p>
    <strong>Props are read-only inputs passed from parent to child components
    that allow components to be reused and configured.</strong>
</p>
`},{id:"core-011",q:"State vs props: explain with a real example.",a:`
<p>
    In React, <strong>props</strong> and <strong>state</strong> are both used to
    manage data, but they serve very different purposes.
</p>

<hr />

<h4>High-level difference</h4>

<ul>
    <li>
        <strong>Props</strong> are data passed <em>from parent to child</em>.
        They are <strong>read-only</strong>.
    </li>
    <li>
        <strong>State</strong> is data managed <em>inside a component</em>.
        It can <strong>change over time</strong>.
    </li>
</ul>

<hr />

<h4>Think of it like this (mental model)</h4>

<ul>
    <li>
        <strong>Props</strong> = inputs given to a component
    </li>
    <li>
        <strong>State</strong> = internal memory of a component
    </li>
</ul>

<p>
    A component <strong>cannot change its props</strong>, but it
    <strong>can change its own state</strong>.
</p>

<hr />

<h4>Real example: Counter with a label</h4>

<p>
    Let’s say we want a reusable counter component that shows a label
    and lets the user increment a value.
</p>

<h4>Parent component (passes props)</h4>

<pre>
<code>
function App() {
    return (
        &lt;Counter label="Cart Items" /&gt;
    );
}
</code>
</pre>

<p>
    Here, <code>label</code> is a <strong>prop</strong>.
    The parent decides what the label should be.
</p>

<hr />

<h4>Child component (uses state)</h4>

<pre>
<code>
import { useState } from "react";

function Counter({ label }) {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;h3&gt;{label}&lt;/h3&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Add
            &lt;/button&gt;
        &lt;/div&gt;
    );
}
</code>
</pre>

<ul>
    <li>
        <code>label</code> → <strong>prop</strong> (comes from parent, read-only)
    </li>
    <li>
        <code>count</code> → <strong>state</strong> (managed by the component)
    </li>
</ul>

<p>
    Clicking the button updates <strong>state</strong>, not props.
</p>

<hr />

<h4>Key rules you must remember</h4>

<ul>
    <li>
        ❌ You cannot modify props inside a component
        <pre><code>
// ❌ Wrong
props.label = "New Label";
        </code></pre>
    </li>

    <li>
        ✅ State is updated using its setter function
        <pre><code>
setCount(prev => prev + 1);
        </code></pre>
    </li>

    <li>
        Props flow <strong>one-way</strong> (parent → child)
    </li>

    <li>
        State changes trigger <strong>re-renders</strong>
    </li>
</ul>

<hr />

<h4>Another real-world analogy</h4>

<ul>
    <li>
        Props are like <strong>function parameters</strong>
    </li>
    <li>
        State is like <strong>local variables that persist across renders</strong>
    </li>
</ul>

<hr />

<h4>Common interview gotchas</h4>

<ul>
    <li>
        If data is passed from a parent, it should be a <strong>prop</strong>
    </li>
    <li>
        If data changes due to user interaction, it should be <strong>state</strong>
    </li>
    <li>
        If multiple components need the same state, <strong>lift it up</strong>
        to the closest common parent
    </li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    <strong>Props</strong> are read-only inputs passed to a component,
    while <strong>state</strong> is internal, mutable data that controls
    how the component behaves and re-renders.
</p>
`},{id:"core-012",q:"React event handling vs HTML events: what changes?",a:`
<p>
    React event handling looks similar to HTML events, but under the hood,
    it works <strong>very differently</strong>.
</p>

<hr />

<h4>1. Event binding syntax</h4>

<p><strong>HTML</strong></p>
<pre><code>
<button onclick="handleClick()">Click</button>
</code></pre>

<p><strong>React</strong></p>
<pre><code>
<button onClick={handleClick}>Click</button>
</code></pre>

<ul>
    <li>HTML uses <code>onclick</code> (lowercase)</li>
    <li>React uses <code>onClick</code> (camelCase)</li>
    <li>React passes a function reference, not a string</li>
</ul>

<hr />

<h4>2. Inline JavaScript vs function reference</h4>

<p>
    In HTML, event handlers are strings evaluated by the browser.
    In React, handlers are real JavaScript functions.
</p>

<pre><code>
// React
function handleClick() {
    console.log("Clicked");
}
</code></pre>

<p>
    This avoids <strong>string evaluation</strong> and makes code safer
    and more predictable.
</p>

<hr />

<h4>3. Synthetic Events (big difference)</h4>

<p>
    React does not attach native DOM events directly to elements.
    Instead, it uses a <strong>SyntheticEvent</strong> system.
</p>

<ul>
    <li>Events are wrapped in a cross-browser object</li>
    <li>Same behavior across all browsers</li>
    <li>Better performance through event delegation</li>
</ul>

<pre><code>
function handleClick(e) {
    console.log(e.type);      // "click"
    console.log(e.target);   // clicked element
}
</code></pre>

<p>
    Under the hood, React attaches a small number of listeners at the root
    and manages events itself.
</p>

<hr />

<h4>4. Event pooling (important gotcha)</h4>

<p>
    Older versions of React reused event objects (event pooling).
    This meant you couldn’t access the event asynchronously.
</p>

<pre><code>
// Older React (problematic)
function handleClick(e) {
    setTimeout(() => {
        console.log(e.target); // ❌ null
    }, 1000);
}
</code></pre>

<p>
    In modern React (17+), event pooling was removed,
    but interviewers still ask about it.
</p>

<hr />

<h4>5. Preventing default behavior</h4>

<p><strong>HTML</strong></p>
<pre><code>
<a href="#" onclick="return false;">Link</a>
</code></pre>

<p><strong>React</strong></p>
<pre><code>
function handleSubmit(e) {
    e.preventDefault();
}
</code></pre>

<p>
    React follows the standard DOM API for preventing defaults.
</p>

<hr />

<h4>6. Passing arguments to handlers</h4>

<p><strong>React way</strong></p>
<pre><code>
<button onClick={() => handleClick(id)}>
    Click
</button>
</code></pre>

<p>
    You don’t pass arguments directly like in HTML.
    You wrap the call in a function.
</p>

<hr />

<h4>7. Event delegation (performance reason)</h4>

<p>
    In plain HTML, each element can have its own listener.
    In React, most events are handled via <strong>event delegation</strong>
    at the root level.
</p>

<ul>
    <li>Fewer event listeners</li>
    <li>Better memory usage</li>
    <li>Consistent behavior</li>
</ul>

<hr />

<h4>Quick comparison table (interview-friendly)</h4>

<ul>
    <li><strong>HTML:</strong> string-based handlers, direct DOM events</li>
    <li><strong>React:</strong> function-based handlers, SyntheticEvents</li>
    <li><strong>HTML:</strong> browser-specific quirks</li>
    <li><strong>React:</strong> cross-browser consistency</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    React uses <strong>camelCase event names</strong>, passes
    <strong>function references</strong>, and wraps native events inside
    <strong>SyntheticEvents</strong> to provide consistent, performant,
    cross-browser event handling.
</p>
`},{id:"core-013",q:"What are SyntheticEvents?",a:`
<p>
    <strong>SyntheticEvent</strong> is React’s <em>cross-browser wrapper</em>
    around the native browser event system.
</p>

<p>
    Instead of exposing raw browser events directly, React wraps them into a
    <strong>SyntheticEvent object</strong> that behaves consistently across
    all browsers.
</p>

<hr />

<h4>Why does React use SyntheticEvents?</h4>

<ul>
    <li>
        Different browsers implement events slightly differently.
    </li>
    <li>
        React normalizes these differences so developers get
        <strong>one consistent API</strong>.
    </li>
    <li>
        It allows React to manage events efficiently through
        <strong>event delegation</strong>.
    </li>
</ul>

<hr />

<h4>Example: SyntheticEvent in action</h4>

<pre>
<code>
function Clicker() {
    const handleClick = (event) => {
        console.log(event);          // SyntheticEvent
        console.log(event.target);   // DOM element
        console.log(event.type);     // "click"
    };

    return &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;;
}
</code>
</pre>

<p>
    Here, <code>event</code> is <strong>not</strong> the native browser event.
    It is a React <strong>SyntheticEvent</strong>.
</p>

<hr />

<h4>What does SyntheticEvent contain?</h4>

<p>
    A SyntheticEvent exposes the same properties you expect from native events:
</p>

<ul>
    <li><code>event.target</code></li>
    <li><code>event.currentTarget</code></li>
    <li><code>event.preventDefault()</code></li>
    <li><code>event.stopPropagation()</code></li>
    <li><code>event.type</code></li>
</ul>

<p>
    So for day-to-day usage, it feels just like a normal browser event.
</p>

<hr />

<h4>Event pooling (IMPORTANT interview point)</h4>

<p>
    In older versions of React (before React 17), SyntheticEvents were
    <strong>pooled</strong> for performance.
</p>

<p>
    That meant the event object was reused and cleared after the handler ran.
</p>

<pre>
<code>
// ❌ This used to break in older React versions
function handleClick(e) {
    setTimeout(() => {
        console.log(e.target); // null (event already released)
    }, 1000);
}
</code>
</pre>

<p>
    The workaround was:
</p>

<pre>
<code>
e.persist();
</code>
</pre>

<p>
    <strong>Good news:</strong> Since <strong>React 17+</strong>,
    event pooling was removed.
    SyntheticEvents are no longer reused, so this issue mostly no longer exists.
</p>

<hr />

<h4>Is SyntheticEvent slower than native events?</h4>

<p>
    No, not in practice.
</p>

<ul>
    <li>React uses event delegation (usually at the root)</li>
    <li>Fewer actual listeners are attached to the DOM</li>
    <li>Overall performance is predictable and efficient</li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    A <strong>SyntheticEvent</strong> is React’s cross-browser wrapper around
    native DOM events that provides a consistent API and enables efficient
    event handling through delegation.
</p>
`},{id:"core-014",q:"Inline conditional rendering: common patterns?",a:`
<p>
    <strong>Inline conditional rendering</strong> means deciding what UI to show
    <em>directly inside JSX</em> using JavaScript expressions, instead of
    separate if/else blocks.
</p>

<p>
    React does not allow statements like <code>if</code>, <code>for</code>, or
    <code>switch</code> directly inside JSX, so we rely on expressions.
</p>

<hr />

<h4>1. Ternary operator (most common)</h4>

<p>
    Used when you have <strong>two clear UI outcomes</strong>.
</p>

<pre><code>
{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}
</code></pre>

<p><strong>Good for:</strong></p>
<ul>
    <li>Auth states</li>
    <li>Loading vs loaded UI</li>
    <li>Simple on/off decisions</li>
</ul>

<p><strong>Gotcha:</strong> Nested ternaries quickly become unreadable.</p>

<hr />

<h4>2. Logical AND (&&) rendering</h4>

<p>
    Used when you want to render something <strong>only if a condition is true</strong>,
    and render nothing otherwise.
</p>

<pre><code>
{isAdmin && &lt;AdminPanel /&gt;}
</code></pre>

<p><strong>Important rule:</strong></p>
<ul>
    <li>If the condition is <code>false</code>, React renders nothing</li>
</ul>

<p><strong>⚠️ Common pitfall</strong></p>

<pre><code>
{count && &lt;span&gt;Count: {count}&lt;/span&gt;}
</code></pre>

<p>
    If <code>count</code> is <code>0</code>, nothing will render.
</p>

<p><strong>Safer version:</strong></p>

<pre><code>
{count &gt; 0 && &lt;span&gt;Count: {count}&lt;/span&gt;}
</code></pre>

<hr />

<h4>3. Early return (cleanest for complex logic)</h4>

<p>
    Instead of cramming logic into JSX, return early from the component.
</p>

<pre><code>
function Profile({ user }) {
    if (!user) {
        return &lt;Login /&gt;;
    }

    return &lt;Dashboard user={user} /&gt;;
}
</code></pre>

<p>
    This keeps JSX clean and avoids deep conditional nesting.
</p>

<hr />

<h4>4. Rendering via variables</h4>

<p>
    Assign JSX to a variable before returning.
</p>

<pre><code>
let content;

if (isLoading) {
    content = &lt;Spinner /&gt;;
} else {
    content = &lt;DataView /&gt;;
}

return &lt;div&gt;{content}&lt;/div&gt;;
</code></pre>

<p><strong>Good for:</strong></p>
<ul>
    <li>Multiple conditions</li>
    <li>Readable logic</li>
    <li>Avoiding nested JSX</li>
</ul>

<hr />

<h4>5. Switch-like rendering (map or object)</h4>

<p>
    Useful when you have <strong>multiple states</strong>.
</p>

<pre><code>
const views = {
    loading: &lt;Spinner /&gt;,
    error: &lt;ErrorMessage /&gt;,
    success: &lt;Result /&gt;,
};

return views[status] || null;
</code></pre>

<p>
    This is often cleaner than long if/else chains.
</p>

<hr />

<h4>6. Conditional class rendering</h4>

<pre><code>
&lt;div className={isActive ? "item active" : "item"} /&gt;
</code></pre>

<p>
    Or using logical AND:
</p>

<pre><code>
&lt;div className={\`item \${isActive && "active"}\`} /&gt;
</code></pre>

<hr />

<h4>What NOT to do</h4>

<ul>
    <li>❌ Nested ternaries inside JSX</li>
    <li>❌ Complex logic directly inside JSX</li>
    <li>❌ Relying on truthy values like <code>0</code> or <code>""</code></li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Ternary for two outcomes</li>
    <li>&& for simple conditional display</li>
    <li>Early return for clean logic</li>
    <li>Variables or maps for complex conditions</li>
</ul>

<p>
    <strong>Rule of thumb:</strong>  
    If JSX starts looking messy, move the logic outside.
</p>
`},{id:"core-015",q:"What is the key prop and why does it matter?",a:`
<p>
    The <strong>key</strong> prop is a special attribute used by React when
    rendering <em>lists of elements</em>. It helps React uniquely identify
    each item so it can efficiently update, reorder, or remove items
    without breaking the UI.
</p>

<hr />

<h4>Why does React need keys?</h4>

<p>
    When a list changes (add, remove, reorder items), React needs a way to
    figure out:
</p>

<ul>
    <li>Which item stayed the same</li>
    <li>Which item moved</li>
    <li>Which item was added or removed</li>
</ul>

<p>
    The <strong>key</strong> gives React a stable identity for each element.
    Without keys, React falls back to using the index, which often causes
    bugs.
</p>

<hr />

<h4>Basic example</h4>

<pre>
<code>
const users = ["Ash", "Neha", "Ravi"];

return (
    &lt;ul&gt;
        {users.map((name) =&gt; (
            &lt;li key={name}&gt;{name}&lt;/li&gt;
        ))}
    &lt;/ul&gt;
);
</code>
</pre>

<p>
    Here, <code>name</code> is used as the key because it is unique and stable.
</p>

<hr />

<h4>What happens if you don’t use keys?</h4>

<p>
    React will still render the list, but you may see:
</p>

<ul>
    <li>Incorrect item updates</li>
    <li>Input fields losing focus</li>
    <li>Wrong state sticking to wrong items</li>
    <li>Subtle UI bugs that are hard to debug</li>
</ul>

<p>
    React will also show a warning:
</p>

<pre>
<code>
Warning: Each child in a list should have a unique "key" prop.
</code>
</pre>

<hr />

<h4>Why using array index as key is risky</h4>

<p>
    Using index as key works <em>only</em> if the list never changes order,
    items are never added or removed.
</p>

<p><strong>❌ Problematic example</strong></p>

<pre>
<code>
{items.map((item, index) =&gt; (
    &lt;Row key={index} value={item} /&gt;
))}
</code>
</pre>

<p>
    If an item is inserted at the top, all indices shift, and React thinks
    every row changed — state and DOM get mismatched.
</p>

<p><strong>✅ Better approach</strong></p>

<pre>
<code>
{items.map((item) =&gt; (
    &lt;Row key={item.id} value={item} /&gt;
))}
</code>
</pre>

<hr />

<h4>Rules for choosing a good key</h4>

<ul>
    <li>Must be <strong>unique among siblings</strong></li>
    <li>Must be <strong>stable</strong> (should not change over time)</li>
    <li>Should come from your data (id, uuid, database key)</li>
    <li>Not generated randomly on each render</li>
</ul>

<p>
    <strong>Never do this:</strong>
</p>

<pre>
<code>
key={Math.random()}
</code>
</pre>

<p>
    This forces React to re-create every item on every render.
</p>

<hr />

<h4>Important clarification</h4>

<ul>
    <li>
        <strong>key is not passed as a prop</strong> to the component.
    </li>
    <li>
        It is used internally by React during reconciliation.
    </li>
</ul>

<pre>
<code>
function Item(props) {
    console.log(props.key); // undefined
}
</code>
</pre>

<hr />

<h4>One-line interview answer</h4>

<p>
    The <strong>key</strong> prop helps React identify list items uniquely so it
    can efficiently update the DOM and avoid incorrect UI updates during
    re-renders.
</p>
`},{id:"core-016",q:"What is the Virtual DOM?",a:`
<p>
    The <strong>Virtual DOM</strong> is a lightweight, in-memory
    <em>JavaScript representation</em> of the real DOM.
    React uses it to figure out <strong>what actually changed</strong>
    in the UI before touching the browser DOM.
</p>

<p>
    Instead of updating the real DOM every time state changes,
    React updates the Virtual DOM first.
</p>

<hr />

<h4>Why do we need a Virtual DOM?</h4>

<p>
    Direct DOM operations are <strong>slow and expensive</strong>.
    Re-rendering large DOM trees repeatedly can kill performance.
</p>

<p>
    React solves this by:
</p>

<ul>
    <li>Keeping a virtual copy of the UI in memory</li>
    <li>Comparing old vs new virtual trees</li>
    <li>Updating only the parts that actually changed</li>
</ul>

<hr />

<h4>How it works (step by step)</h4>

<ol>
    <li>State or props change</li>
    <li>React creates a <strong>new Virtual DOM tree</strong></li>
    <li>React compares it with the previous Virtual DOM (diffing)</li>
    <li>Only the differences are applied to the real DOM</li>
</ol>

<p>
    This process is often called <strong>reconciliation</strong>.
</p>

<hr />

<h4>Simple mental model</h4>

<p>
    Think of it like:
</p>

<ul>
    <li>
        Virtual DOM = <em>rough draft</em>
    </li>
    <li>
        Real DOM = <em>final printed version</em>
    </li>
</ul>

<p>
    You edit the draft many times, but print only what actually changed.
</p>

<hr />

<h4>Example</h4>

<pre>
<code>
function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;span&gt;{count}&lt;/span&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                +
            &lt;/button&gt;
        &lt;/div&gt;
    );
}
</code>
</pre>

<p>
    When <code>count</code> changes:
</p>

<ul>
    <li>React does NOT re-render the whole page</li>
    <li>Only the <code>&lt;span&gt;</code> text node updates</li>
</ul>

<hr />

<h4>Important gotchas (interview gold)</h4>

<ul>
    <li>
        ❌ Virtual DOM is <strong>not faster than the real DOM by default</strong>
        <br />
        It is faster because React batches and minimizes updates.
    </li>

    <li>
        ❌ Virtual DOM does NOT mean “no re-renders”
        <br />
        Components still re-render; React just updates DOM smartly.
    </li>

    <li>
        ❌ Bad component design can still cause performance issues
        <br />
        (unnecessary re-renders, wrong keys, prop drilling).
    </li>

    <li>
        ✅ Keys play a big role in Virtual DOM efficiency
        <br />
        Wrong keys = wrong diffing = wasted DOM updates.
    </li>
</ul>

<hr />

<h4>Virtual DOM vs Real DOM (quick)</h4>

<ul>
    <li>Virtual DOM → JavaScript objects</li>
    <li>Real DOM → Browser UI tree</li>
    <li>Virtual DOM → Fast to compare</li>
    <li>Real DOM → Expensive to update</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    The Virtual DOM is an in-memory representation of the UI that React uses
    to efficiently calculate and apply the minimum number of changes to the
    real DOM.
</p>
`},{id:"core-017",q:"How does Virtual DOM update the real DOM efficiently?",a:`
<p>
    React updates the real DOM efficiently by using a <strong>Virtual DOM</strong>
    and a process called <strong>diffing + reconciliation</strong>.
</p>

<p>
    Instead of directly touching the browser DOM on every change, React first
    works with a <em>lightweight in-memory representation</em> of the UI.
</p>

<hr />

<h4>Step-by-step: what actually happens</h4>

<ol>
    <li>
        <strong>State or props change</strong><br />
        A state update happens using <code>setState</code> or <code>useState</code>.
    </li>

    <li>
        <strong>New Virtual DOM tree is created</strong><br />
        React re-runs the component function and creates a
        <em>new Virtual DOM tree</em>.
    </li>

    <li>
        <strong>Diffing (comparison)</strong><br />
        React compares the new Virtual DOM with the previous one to find
        differences.
    </li>

    <li>
        <strong>Minimal updates are calculated</strong><br />
        React figures out the <em>smallest set of changes</em> needed.
    </li>

    <li>
        <strong>Batch update to real DOM</strong><br />
        Only the changed nodes are updated in the real DOM.
    </li>
</ol>

<hr />

<h4>Simple example</h4>

<pre>
<code>
function Counter({ count }) {
    return &lt;h1&gt;Count: {count}&lt;/h1&gt;;
}
</code>
</pre>

<p>
    If <code>count</code> changes from <strong>1</strong> to <strong>2</strong>:
</p>

<ul>
    <li>React does NOT rebuild the whole page</li>
    <li>Only the text inside <code>&lt;h1&gt;</code> is updated</li>
</ul>

<hr />

<h4>Why this is faster than manual DOM updates</h4>

<ul>
    <li>
        Real DOM operations are <strong>slow</strong>
    </li>
    <li>
        Virtual DOM operations are <strong>cheap JavaScript comparisons</strong>
    </li>
    <li>
        Updates are <strong>batched</strong>, not applied one-by-one
    </li>
</ul>

<p>
    This avoids layout thrashing, repaint storms, and unnecessary reflows.
</p>

<hr />

<h4>Important optimization rules React uses</h4>

<ul>
    <li>
        Elements with different types produce different trees
    </li>
    <li>
        Same type elements are reused and only props are compared
    </li>
    <li>
        <strong>Keys</strong> help React identify list item changes efficiently
    </li>
</ul>

<pre>
<code>
items.map(item => (
    &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
))
</code>
</pre>

<hr />

<h4>Very common gotchas (interview favorite)</h4>

<ul>
    <li>
        <strong>Virtual DOM does NOT mean React is always fast</strong><br />
        Bad component design can still cause unnecessary re-renders.
    </li>

    <li>
        <strong>Missing or wrong keys</strong><br />
        Using array index as key can cause incorrect updates.
    </li>

    <li>
        <strong>Mutating state objects</strong><br />
        React relies on reference changes. Mutation breaks diffing logic.
    </li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    React updates the real DOM efficiently by comparing the new Virtual DOM
    with the previous one, calculating the minimal set of changes, and applying
    only those updates to the real DOM in a batched way.
</p>
`},{id:"core-018",q:"Shadow DOM vs Virtual DOM: what is the difference?",a:`
<p>
    <strong>Shadow DOM</strong> and <strong>Virtual DOM</strong> solve
    <em>completely different problems</em>, even though their names sound similar.
</p>

<p>
    One is a <strong>browser feature</strong>, the other is a
    <strong>JavaScript abstraction</strong>.
</p>

<hr />

<h4>1) What is Shadow DOM?</h4>

<p>
    <strong>Shadow DOM</strong> is a browser technology that provides
    <em>encapsulation</em> for HTML and CSS.
</p>

<p>
    It allows a component to have its own isolated DOM tree so that:
</p>

<ul>
    <li>Styles do not leak in or out</li>
    <li>Markup is hidden from the main document</li>
    <li>Component internals are protected</li>
</ul>

<pre>
<code>
const shadowRoot = element.attachShadow({ mode: "open" });
shadowRoot.innerHTML = \`
    &lt;style&gt;
        button { color: red; }
    &lt;/style&gt;
    &lt;button&gt;Click&lt;/button&gt;
\`;
</code>
</pre>

<p>
    Shadow DOM is heavily used in <strong>Web Components</strong>.
</p>

<p><strong>Key idea:</strong> Shadow DOM is about
<strong>style and DOM isolation</strong>.</p>

<hr />

<h4>2) What is Virtual DOM?</h4>

<p>
    <strong>Virtual DOM</strong> is a lightweight
    <em>in-memory representation</em> of the real DOM used by React.
</p>

<p>
    React keeps a virtual copy of the UI, compares changes (diffing),
    and updates only what changed in the real DOM.
</p>

<pre>
<code>
const element = &lt;h1&gt;Hello&lt;/h1&gt;;
// React stores this as a plain JS object
</code>
</pre>

<p>
    When state or props change:
</p>

<ul>
    <li>React creates a new Virtual DOM tree</li>
    <li>Diffs it with the previous tree</li>
    <li>Updates minimal real DOM nodes</li>
</ul>

<p><strong>Key idea:</strong> Virtual DOM is about
<strong>efficient rendering and performance</strong>.</p>

<hr />

<h4>3) Core differences (side by side)</h4>

<table border="1" cellpadding="6" cellspacing="0">
    <tr>
        <th>Aspect</th>
        <th>Shadow DOM</th>
        <th>Virtual DOM</th>
    </tr>
    <tr>
        <td>What it is</td>
        <td>Browser feature</td>
        <td>JavaScript abstraction</td>
    </tr>
    <tr>
        <td>Main goal</td>
        <td>Encapsulation</td>
        <td>Efficient updates</td>
    </tr>
    <tr>
        <td>Who provides it</td>
        <td>Browser</td>
        <td>React (and similar libs)</td>
    </tr>
    <tr>
        <td>Style isolation</td>
        <td>Yes</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Performance optimization</td>
        <td>No</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Used in</td>
        <td>Web Components</td>
        <td>React, Vue (conceptually)</td>
    </tr>
</table>

<hr />

<h4>4) Common confusion (important interview point)</h4>

<p>
    ❌ Shadow DOM does <strong>not</strong> make rendering faster.<br />
    ❌ Virtual DOM does <strong>not</strong> isolate styles.
</p>

<p>
    They are often confused because of the word “DOM”, but they solve
    <em>orthogonal problems</em>.
</p>

<hr />

<h4>5) Can React use Shadow DOM?</h4>

<p>
    React does <strong>not use Shadow DOM by default</strong>.
</p>

<p>
    However, React can render <em>inside</em> a Shadow DOM if you explicitly
    mount it there (advanced use cases).
</p>

<p>
    Most React apps rely on:
</p>

<ul>
    <li>Virtual DOM for rendering efficiency</li>
    <li>CSS conventions or CSS-in-JS for styling isolation</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    <strong>Shadow DOM</strong> is a browser feature for DOM and CSS isolation,
    while <strong>Virtual DOM</strong> is a React technique for efficiently
    updating the UI by minimizing real DOM operations.
</p>
`},{id:"core-019",q:"What is React Fiber?",a:`
<p>
    <strong>React Fiber</strong> is the <em>internal re-implementation</em> of
    React’s core rendering algorithm, introduced in <strong>React 16</strong>.
</p>

<p>
    Its main purpose is to make React rendering <strong>interruptible</strong>,
    <strong>prioritized</strong>, and <strong>more responsive</strong>,
    especially for large and complex applications.
</p>

<hr />

<h4>Why was Fiber needed?</h4>

<p>
    Before Fiber, React used a <strong>stack-based, synchronous</strong>
    rendering model.
</p>

<ul>
    <li>Once rendering started, it could not be paused</li>
    <li>Large updates could block the main thread</li>
    <li>UI could freeze during heavy renders</li>
</ul>

<p>
    This caused issues like:
</p>

<ul>
    <li>Laggy interactions</li>
    <li>Janky animations</li>
    <li>Poor responsiveness on slower devices</li>
</ul>

<hr />

<h4>What Fiber changes conceptually</h4>

<p>
    Fiber breaks rendering work into <strong>small units</strong> that can be:
</p>

<ul>
    <li>Paused</li>
    <li>Resumed later</li>
    <li>Abandoned if no longer needed</li>
    <li>Prioritized based on importance</li>
</ul>

<p>
    This allows React to:
</p>

<ul>
    <li>Handle high-priority updates first (user input)</li>
    <li>Delay low-priority work (background UI updates)</li>
    <li>Keep the UI responsive</li>
</ul>

<hr />

<h4>What is a “Fiber” node?</h4>

<p>
    A <strong>Fiber</strong> is a JavaScript object that represents a unit of
    work for a component.
</p>

<p>
    Each Fiber node stores:
</p>

<ul>
    <li>Component type</li>
    <li>Props</li>
    <li>State</li>
    <li>Effect tags (what needs to change)</li>
    <li>Links to parent, child, and sibling fibers</li>
</ul>

<p>
    Together, these nodes form the <strong>Fiber tree</strong>.
</p>

<hr />

<h4>How Fiber enables new features</h4>

<p>
    Fiber is what made these possible:
</p>

<ul>
    <li>Concurrent rendering</li>
    <li>Suspense</li>
    <li>startTransition</li>
    <li>Better error boundaries</li>
    <li>Smoother updates and animations</li>
</ul>

<p>
    Important: <strong>Fiber itself is not a feature you use directly</strong>.
    It is the engine that enables modern React features.
</p>

<hr />

<h4>Very common interview misconception</h4>

<p>
    ❌ <strong>“Fiber is a replacement for Virtual DOM”</strong>
</p>

<p>
    ✅ Correct understanding:
</p>

<ul>
    <li>Virtual DOM describes <em>what</em> changed</li>
    <li>Fiber controls <em>how and when</em> those changes are processed</li>
</ul>

<p>
    Fiber works <strong>with</strong> the Virtual DOM, not instead of it.
</p>

<hr />

<h4>Performance reality check</h4>

<p>
    Fiber does <strong>not</strong> automatically make apps faster.
</p>

<ul>
    <li>Bad component structure still causes slow apps</li>
    <li>Unnecessary re-renders still hurt performance</li>
</ul>

<p>
    Fiber improves <strong>responsiveness</strong>, not raw render speed.
</p>

<hr />

<h4>One-line interview answer</h4>

<p>
    <strong>React Fiber</strong> is React’s internal rendering engine that
    allows rendering work to be split, paused, prioritized, and resumed,
    enabling concurrent rendering and smoother user experiences.
</p>
`},{id:"core-020",q:"What was Fiber created to solve?",a:`
<p>
    <strong>React Fiber</strong> was created to solve one core problem:
    <em>React’s old rendering engine was too synchronous and blocking</em>
    for modern, complex user interfaces.
</p>

<p>
    Before Fiber, once React started rendering, it had to
    <strong>finish the entire update in one go</strong>.
    During this time, the browser could not respond to user input,
    animations could stutter, and the UI could feel frozen.
</p>

<hr />

<h4>The problem before Fiber</h4>

<p>
    The old reconciler (pre-React 16) had these limitations:
</p>

<ul>
    <li>Rendering work could not be paused once started</li>
    <li>Large updates blocked the main thread</li>
    <li>No way to prioritize important updates</li>
    <li>Animations and input felt laggy during heavy renders</li>
</ul>

<p>
    Example problem:
</p>

<pre><code>
setState(bigUpdate);
setState(showTooltip);
</code></pre>

<p>
    Even though the tooltip update is urgent,
    React would process everything together,
    making the UI feel slow.
</p>

<hr />

<h4>What Fiber introduced (the real solution)</h4>

<p>
    Fiber re-architected React’s rendering engine so that rendering work can be:
</p>

<ul>
    <li><strong>Split into small units</strong></li>
    <li><strong>Paused and resumed</strong></li>
    <li><strong>Abandoned if no longer needed</strong></li>
    <li><strong>Prioritized</strong> based on importance</li>
</ul>

<p>
    This allows React to cooperate with the browser instead of blocking it.
</p>

<hr />

<h4>Key goals Fiber was built to achieve</h4>

<ul>
    <li>Smoother animations</li>
    <li>Responsive user input (typing, clicking)</li>
    <li>Better handling of large component trees</li>
    <li>Foundation for Concurrent Rendering</li>
</ul>

<hr />

<h4>How Fiber changes the mental model</h4>

<p>
    Instead of thinking:
</p>

<blockquote>
    “Render everything now”
</blockquote>

<p>
    React Fiber allows:
</p>

<blockquote>
    “Render what matters now, rest later”
</blockquote>

<p>
    High-priority updates (like input)
    can interrupt low-priority work (like data lists).
</p>

<hr />

<h4>What Fiber is NOT</h4>

<ul>
    <li>Fiber is <strong>not a feature you directly use</strong></li>
    <li>It does not automatically make bad code fast</li>
    <li>It is not the same as Concurrent Mode (but enables it)</li>
</ul>

<p>
    Fiber is an <strong>internal architecture change</strong>,
    not an API.
</p>

<hr />

<h4>Interview one-liner (very important)</h4>

<p>
    <strong>
        React Fiber was created to make rendering interruptible,
        prioritizable, and non-blocking, enabling smoother UIs
        and future features like Concurrent Rendering.
    </strong>
</p>
`},{id:"core-021",q:"Controlled components: what and why?",a:`
<p>
    A <strong>controlled component</strong> is a form element whose value is
    <strong>fully controlled by React state</strong>, not by the DOM.
</p>

<p>
    In a controlled component:
</p>

<ul>
    <li>The input value comes from React <strong>state</strong></li>
    <li>Every change updates state via an <strong>onChange</strong> handler</li>
    <li>React is the <strong>single source of truth</strong></li>
</ul>

<hr />

<h4>Basic example (controlled input)</h4>

<pre><code>
import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");

    return (
        &lt;input
            type="text"
            value={name}
            onChange={(e) =&gt; setName(e.target.value)}
        /&gt;
    );
}
</code></pre>

<p>
    Here:
</p>

<ul>
    <li><code>value</code> is driven by React state</li>
    <li>User typing triggers <code>onChange</code></li>
    <li>State update causes re-render</li>
</ul>

<hr />

<h4>Why are controlled components used?</h4>

<p>
    Controlled components make form behavior <strong>predictable</strong>
    and easy to manage.
</p>

<ul>
    <li>
        <strong>Validation:</strong> You can validate on every keystroke
    </li>
    <li>
        <strong>Instant UI logic:</strong> Enable/disable buttons, show errors
    </li>
    <li>
        <strong>One data flow:</strong> UI always reflects application state
    </li>
    <li>
        <strong>Easy reset:</strong> Reset form by resetting state
    </li>
</ul>

<hr />

<h4>Controlled vs uncontrolled (quick contrast)</h4>

<ul>
    <li>
        <strong>Controlled:</strong> React state controls the input value
    </li>
    <li>
        <strong>Uncontrolled:</strong> DOM manages its own state via refs
    </li>
</ul>

<p>
    Controlled = React-driven<br />
    Uncontrolled = DOM-driven
</p>

<hr />

<h4>Multiple controlled fields (common pattern)</h4>

<pre><code>
function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        &lt;&gt;
            &lt;input
                name="email"
                value={form.email}
                onChange={handleChange}
            /&gt;

            &lt;input
                name="password"
                value={form.password}
                onChange={handleChange}
            /&gt;
        &lt;/&gt;
    );
}
</code></pre>

<hr />

<h4>Common gotchas (interview favorites)</h4>

<ul>
    <li>
        ❌ Forgetting <code>onChange</code> makes the input read-only
    </li>

    <li>
        ❌ Mixing <code>value</code> with <code>defaultValue</code>
        <br />
        (Choose one approach)
    </li>

    <li>
        ❌ Heavy forms with many controlled inputs can cause
        performance issues if not optimized
    </li>

    <li>
        ❌ Setting state on every keystroke without debounce in large forms
    </li>
</ul>

<hr />

<h4>When should you use controlled components?</h4>

<ul>
    <li>Forms with validation</li>
    <li>Dynamic UI logic based on input</li>
    <li>When form data must sync with app state</li>
    <li>Most production forms</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    A controlled component is a form element whose value is managed by React
    state, giving predictable behavior, easy validation, and a single source
    of truth.
</p>
`},{id:"core-022",q:"Uncontrolled components: what and when?",a:`
<p>
    An <strong>uncontrolled component</strong> is a form element where
    <strong>React does NOT control the input value</strong>.
    Instead, the value is stored and managed directly by the
    <strong>DOM itself</strong>.
</p>

<p>
    React only reads the value <em>when needed</em>, usually via a
    <code>ref</code>.
</p>

<hr />

<h4>Basic example (uncontrolled input)</h4>

<pre>
<code>
import { useRef } from "react";

function LoginForm() {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        alert(inputRef.current.value);
    };

    return (
        &lt;div&gt;
            &lt;input ref={inputRef} placeholder="Username" /&gt;
            &lt;button onClick={handleSubmit}&gt;Submit&lt;/button&gt;
        &lt;/div&gt;
    );
}
</code>
</pre>

<p>
    Here:
</p>

<ul>
    <li>The input manages its own value</li>
    <li>React does not re-render on every keystroke</li>
    <li>Value is read directly from the DOM using a ref</li>
</ul>

<hr />

<h4>Uncontrolled vs Controlled (core difference)</h4>

<ul>
    <li>
        <strong>Controlled:</strong> value comes from React state
    </li>
    <li>
        <strong>Uncontrolled:</strong> value comes from the DOM
    </li>
</ul>

<p>
    Controlled example (for comparison):
</p>

<pre>
<code>
const [value, setValue] = useState("");

&lt;input value={value} onChange={e => setValue(e.target.value)} /&gt;
</code>
</pre>

<hr />

<h4>When should you use uncontrolled components?</h4>

<ul>
    <li>
        Simple forms where you only need the value on submit
    </li>
    <li>
        Large or performance-sensitive forms
        (avoid re-render on every keystroke)
    </li>
    <li>
        Integrating with <strong>non-React libraries</strong>
        that expect direct DOM access
    </li>
    <li>
        File inputs (very common uncontrolled use case)
    </li>
</ul>

<hr />

<h4>File input (classic uncontrolled example)</h4>

<pre>
<code>
function Upload() {
    const fileRef = useRef(null);

    const handleUpload = () => {
        console.log(fileRef.current.files[0]);
    };

    return (
        &lt;&gt;
            &lt;input type="file" ref={fileRef} /&gt;
            &lt;button onClick={handleUpload}&gt;Upload&lt;/button&gt;
        &lt;/&gt;
    );
}
</code>
</pre>

<p>
    File inputs <strong>cannot be fully controlled</strong> by React,
    so refs are the correct approach.
</p>

<hr />

<h4>Gotchas (important)</h4>

<ul>
    <li>
        ❌ Harder to validate in real-time
    </li>
    <li>
        ❌ Harder to reset programmatically
    </li>
    <li>
        ❌ Not ideal when UI must react instantly to input changes
    </li>
    <li>
        ⚠ You must manually read values using refs
    </li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    <strong>Uncontrolled components</strong> let the DOM manage form state.
    React accesses values via refs instead of state, making them simpler and
    sometimes more performant, but less flexible than controlled components.
</p>
`},{id:"core-023",q:"createElement vs cloneElement: where do they fit?",a:`
<p>
    <strong>createElement</strong> and <strong>cloneElement</strong> are both
    low-level React APIs used to work with React elements, but they solve
    <em>very different problems</em>.
</p>

<hr />

<h4>1. React.createElement – creating elements from scratch</h4>

<p>
    <code>React.createElement</code> is what React uses internally to create
    elements. JSX is just syntactic sugar on top of this function.
</p>

<p>
    Whenever you write JSX:
</p>

<pre><code>
const el = &lt;h1&gt;Hello&lt;/h1&gt;;
</code></pre>

<p>
    It gets compiled into:
</p>

<pre><code>
const el = React.createElement("h1", null, "Hello");
</code></pre>

<p>
    <strong>Where it fits:</strong>
</p>

<ul>
    <li>Used internally by React</li>
    <li>Used by JSX compilation (Babel)</li>
    <li>Rarely written manually in modern apps</li>
</ul>

<p>
    You might still see it in:
</p>

<ul>
    <li>Libraries that generate elements dynamically</li>
    <li>Very low-level abstractions</li>
    <li>Code that avoids JSX intentionally</li>
</ul>

<p><strong>Key point:</strong> <code>createElement</code> creates a
<strong>brand new element</strong>.</p>

<hr />

<h4>2. React.cloneElement – copying and extending an existing element</h4>

<p>
    <code>React.cloneElement</code> is used when you already have a React
    element and want to <strong>modify or extend its props</strong>.
</p>

<p>
    It does <em>not</em> re-render or re-create the component logic.
    It only creates a new element based on an existing one.
</p>

<pre><code>
const child = &lt;Button color="blue" /&gt;;

const cloned = React.cloneElement(child, {
    color: "red",
    disabled: true,
});
</code></pre>

<p>
    The original element stays unchanged. The cloned one has new props.
</p>

<p>
    <strong>Where it fits:</strong>
</p>

<ul>
    <li>Wrapper components</li>
    <li>Component composition patterns</li>
    <li>Injecting props into <code>children</code></li>
</ul>

<hr />

<h4>3. Real-world example: injecting props into children</h4>

<pre><code>
function Form({ children }) {
    return React.Children.map(children, child =>
        React.cloneElement(child, {
            className: "form-input",
        })
    );
}
</code></pre>

<p>
    Here:
</p>

<ul>
    <li>You don’t know what the child is</li>
    <li>You don’t want to re-create it</li>
    <li>You only want to add or override props</li>
</ul>

<p>
    This is a legitimate use of <code>cloneElement</code>.
</p>

<hr />

<h4>4. Important differences (interview gold)</h4>

<table>
    <thead>
        <tr>
            <th align="left">Aspect</th>
            <th align="left">createElement</th>
            <th align="left">cloneElement</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Purpose</td>
            <td>Create a new element</td>
            <td>Copy an existing element</td>
        </tr>
        <tr>
            <td>Input</td>
            <td>Type + props + children</td>
            <td>Existing React element</td>
        </tr>
        <tr>
            <td>JSX related</td>
            <td>JSX compiles to this</td>
            <td>JSX does NOT compile to this</td>
        </tr>
        <tr>
            <td>Common usage</td>
            <td>Internal / low-level</td>
            <td>Composition / children manipulation</td>
        </tr>
        <tr>
            <td>Everyday app code</td>
            <td>Almost never</td>
            <td>Occasionally</td>
        </tr>
    </tbody>
</table>

<hr />

<h4>5. Gotchas you should mention in interviews</h4>

<ul>
    <li>
        <strong>Elements are immutable</strong><br />
        Both APIs return new elements; they never mutate existing ones.
    </li>
    <li>
        <strong>cloneElement can be overused</strong><br />
        Excessive use can make component trees harder to understand.
        Prefer explicit props or render props when possible.
    </li>
    <li>
        <strong>cloneElement does not merge deep props</strong><br />
        Props are shallow-merged. Be careful with objects like <code>style</code>.
    </li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    <strong>createElement</strong> is the low-level API behind JSX for creating
    elements, while <strong>cloneElement</strong> is used to copy an existing
    element and inject or override props, usually in composition patterns.
</p>
`},{id:"core-024",q:"What does lifting state up mean in practice?",a:`<p>
        <strong>Lifting state up</strong> means moving shared state to the
        <em>closest common parent</em> component so that multiple child
        components can access and update the same data in a consistent way.
    </p>

    <p>
        In practice, you do this when <strong>two or more components need to
        stay in sync</strong> based on the same piece of data.
    </p>

    <hr />

    <h4>Why do we need to lift state up?</h4>

    <p>
        React follows <strong>one-way data flow</strong>. A child component
        cannot directly change another sibling’s state.
    </p>

    <p>
        So instead of duplicating state in multiple places (which causes bugs),
        you keep the state in the parent and pass it down via <strong>props</strong>.
    </p>

    <hr />

    <h4>Problem example (wrong approach)</h4>

    <p>
        Two inputs should always show the same value, but each keeps its own state:
    </p>

    <pre><code>
function InputA() {
    const [text, setText] = useState("");
    return &lt;input value={text} onChange={e => setText(e.target.value)} /&gt;;
}

function InputB() {
    const [text, setText] = useState("");
    return &lt;input value={text} onChange={e => setText(e.target.value)} /&gt;;
}
</code></pre>

    <p>
        ❌ These inputs are <strong>out of sync</strong>.
    </p>

    <hr />

    <h4>Correct approach: lift state up</h4>

    <p>
        Move the state to the parent and pass it down:
    </p>

    <pre><code>
function Parent() {
    const [text, setText] = useState("");

    return (
        &lt;&gt;
            &lt;InputA value={text} onChange={setText} /&gt;
            &lt;InputB value={text} onChange={setText} /&gt;
        &lt;/&gt;
    );
}

function InputA({ value, onChange }) {
    return (
        &lt;input
            value={value}
            onChange={e => onChange(e.target.value)}
        /&gt;
    );
}

function InputB({ value, onChange }) {
    return (
        &lt;input
            value={value}
            onChange={e => onChange(e.target.value)}
        /&gt;
    );
}
</code></pre>

    <p>
        ✅ Now both inputs stay perfectly in sync.
    </p>

    <hr />

    <h4>What actually changed?</h4>

    <ul>
        <li>State moved from children → parent</li>
        <li>Children became <strong>controlled components</strong></li>
        <li>Parent became the <strong>single source of truth</strong></li>
    </ul>

    <hr />

    <h4>Real-world examples</h4>

    <ul>
        <li>Form fields that affect each other</li>
        <li>Tabs + tab content</li>
        <li>Filters + filtered list</li>
        <li>Checkbox controlling multiple sections</li>
        <li>Search input + results list</li>
    </ul>

    <hr />

    <h4>Common gotchas</h4>

    <ul>
        <li>
            ❌ Lifting state too high (top-level App) when only a small subtree needs it
        </li>
        <li>
            ❌ Passing too many props down (prop drilling)
        </li>
        <li>
            ❌ Forgetting to memoize callbacks in deep trees
        </li>
    </ul>

    <p>
        If prop drilling becomes painful, consider:
    </p>

    <ul>
        <li>Composition</li>
        <li>Context API</li>
        <li>State libraries (only when needed)</li>
    </ul>

    <hr />

    <h4>One-line interview answer</h4>

    <blockquote>
        Lifting state up means moving shared state to the nearest common parent
        so multiple components can stay in sync using props and callbacks.
    </blockquote>
`},{id:"core-025",q:"What are Higher-Order Components (HOCs)?",a:`
<p>
    A <strong>Higher-Order Component (HOC)</strong> is a function that
    <strong>takes a component as input</strong> and
    <strong>returns a new enhanced component</strong>.
</p>

<p>
    In simple words, an HOC is used to <em>reuse component logic</em>
    without duplicating code.
</p>

<hr />

<h4>Basic definition (interview-friendly)</h4>

<p>
    A Higher-Order Component is a function:
</p>

<pre>
<code>
const EnhancedComponent = hoc(OriginalComponent);
</code>
</pre>

<p>
    It does not modify the original component.
    Instead, it <strong>wraps</strong> it and adds extra behavior.
</p>

<hr />

<h4>Simple example</h4>

<p>
    Let’s say we want to log whenever a component renders.
</p>

<pre>
<code>
function withLogger(WrappedComponent) {
    return function EnhancedComponent(props) {
        console.log("Component rendered");
        return &lt;WrappedComponent {...props} /&gt;;
    };
}
</code>
</pre>

<p>
    Usage:
</p>

<pre>
<code>
function Profile(props) {
    return &lt;div&gt;User Profile&lt;/div&gt;;
}

export default withLogger(Profile);
</code>
</pre>

<p>
    Here:
</p>

<ul>
    <li><code>withLogger</code> is the HOC</li>
    <li><code>Profile</code> is the wrapped component</li>
    <li>The returned component adds logging behavior</li>
</ul>

<hr />

<h4>Why HOCs were used</h4>

<ul>
    <li>Code reuse across multiple components</li>
    <li>Cross-cutting concerns (auth, logging, permissions)</li>
    <li>Sharing logic before Hooks existed</li>
</ul>

<p>
    Common real-world HOC use cases:
</p>

<ul>
    <li>Authentication checks</li>
    <li>Access control / role-based UI</li>
    <li>Analytics tracking</li>
    <li>Error boundaries (earlier patterns)</li>
</ul>

<hr />

<h4>Example: Auth-protected component</h4>

<pre>
<code>
function withAuth(WrappedComponent) {
    return function(props) {
        if (!props.isLoggedIn) {
            return &lt;div&gt;Access denied&lt;/div&gt;;
        }
        return &lt;WrappedComponent {...props} /&gt;;
    };
}
</code>
</pre>

<hr />

<h4>Important rules & gotchas</h4>

<ul>
    <li>
        <strong>HOCs must be pure</strong><br />
        Same input component → same output component.
    </li>

    <li>
        <strong>Props must be forwarded</strong><br />
        Forgetting <code>{...props}</code> breaks the wrapped component.
    </li>

    <li>
        <strong>Refs are NOT passed automatically</strong><br />
        You need <code>forwardRef</code> to support refs.
    </li>

    <li>
        <strong>Debugging can get harder</strong><br />
        Component tree becomes deeply nested.
    </li>
</ul>

<hr />

<h4>HOCs vs Hooks (modern reality)</h4>

<p>
    Today, <strong>Hooks replace most HOC use cases</strong>.
</p>

<p>
    Example:
</p>

<ul>
    <li>HOC → <code>withAuth(Component)</code></li>
    <li>Hook → <code>useAuth()</code></li>
</ul>

<p>
    Hooks are:
</p>

<ul>
    <li>Easier to read</li>
    <li>Composable</li>
    <li>Less wrapper nesting</li>
</ul>

<p>
    But HOCs still exist in:
</p>

<ul>
    <li>Older codebases</li>
    <li>Some libraries (Redux <code>connect</code>)</li>
    <li>Error boundary patterns</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    A Higher-Order Component is a function that takes a component and returns a
    new component with added behavior, commonly used for logic reuse before
    Hooks became available.
</p>
`},{id:"core-026",q:"What is the children prop used for?",a:`
<p>
    The <strong>children</strong> prop is a special prop in React that represents
    <em>whatever is placed between a component’s opening and closing tags</em>.
</p>

<p>
    It allows components to be <strong>composable</strong>, meaning a component
    can wrap, layout, or decorate other content without knowing it in advance.
</p>

<hr />

<h4>Basic example</h4>

<pre>
<code>
function Card(props) {
    return (
        &lt;div className="card"&gt;
            {props.children}
        &lt;/div&gt;
    );
}

&lt;Card&gt;
    &lt;h2&gt;Title&lt;/h2&gt;
    &lt;p&gt;Some content&lt;/p&gt;
&lt;/Card&gt;
</code>
</pre>

<p>
    Everything inside <code>&lt;Card&gt;...&lt;/Card&gt;</code> is passed automatically
    as <code>props.children</code>.
</p>

<hr />

<h4>Why children is important</h4>

<ul>
    <li>
        Enables <strong>layout components</strong> (Card, Modal, Page, Sidebar)
    </li>
    <li>
        Promotes <strong>composition over inheritance</strong>
    </li>
    <li>
        Makes components <strong>reusable and flexible</strong>
    </li>
</ul>

<hr />

<h4>Children can be anything</h4>

<p>
    The <code>children</code> prop is not limited to JSX elements.
</p>

<ul>
    <li>Single element</li>
    <li>Multiple elements</li>
    <li>Text</li>
    <li>Numbers</li>
    <li>Fragments</li>
    <li>Functions (render props)</li>
</ul>

<pre>
<code>
&lt;Box&gt;Hello&lt;/Box&gt;

&lt;Box&gt;
    &lt;span&gt;A&lt;/span&gt;
    &lt;span&gt;B&lt;/span&gt;
&lt;/Box&gt;
</code>
</pre>

<hr />

<h4>Children as a function (render props pattern)</h4>

<pre>
<code>
function MouseTracker({ children }) {
    const position = { x: 10, y: 20 };
    return children(position);
}

&lt;MouseTracker&gt;
    {(pos) =&gt; &lt;div&gt;X: {pos.x}, Y: {pos.y}&lt;/div&gt;}
&lt;/MouseTracker&gt;
</code>
</pre>

<p>
    Here, <code>children</code> is a <strong>function</strong> that receives data
    from the parent component.
</p>

<hr />

<h4>Common real-world use cases</h4>

<ul>
    <li>Layout wrappers (Page, Container)</li>
    <li>Modals and dialogs</li>
    <li>Tabs and accordions</li>
    <li>Error boundaries</li>
    <li>Permission/auth wrappers</li>
</ul>

<pre>
<code>
&lt;AuthGuard&gt;
    &lt;Dashboard /&gt;
&lt;/AuthGuard&gt;
</code>
</pre>

<hr />

<h4>Gotchas (important for interviews)</h4>

<ul>
    <li>
        <strong>children is optional</strong> – it can be undefined
    </li>
    <li>
        Don’t assume children is always an array
    </li>
    <li>
        Use <code>React.Children</code> utilities when manipulating children
    </li>
</ul>

<pre>
<code>
React.Children.map(children, child =&gt; child)
</code>
</pre>

<hr />

<h4>One-line interview answer</h4>

<p>
    The <strong>children prop</strong> lets a component receive and render
    nested content, enabling flexible composition and reusable layout patterns
    in React.
</p>
`},{id:"core-027",q:"How do you write comments inside JSX?",a:`
<p>
    In React, comments inside JSX are written using
    <strong>JavaScript comment syntax</strong>, wrapped inside
    curly braces.
</p>

<hr />

<h4>Basic JSX comment syntax</h4>

<p>
    JSX does not support HTML comments like
    <code>&lt;!-- comment --&gt;</code>.
    Instead, you must use JavaScript comments.
</p>

<pre>
<code>
{
    /* This is a JSX comment */
}
</code>
</pre>

<p>
    This works because JSX allows JavaScript expressions
    inside <code>{ }</code>.
</p>

<hr />

<h4>Comment inside JSX markup</h4>

<pre>
<code>
return (
    &lt;div&gt;
        {/* Header section */}
        &lt;h1&gt;Dashboard&lt;/h1&gt;

        {/* Content section */}
        &lt;p&gt;Welcome back&lt;/p&gt;
    &lt;/div&gt;
);
</code>
</pre>

<hr />

<h4>Comment inside props or inline JSX</h4>

<p>
    You can also comment near props or inline expressions.
</p>

<pre>
<code>
&lt;Button
    label="Save"
    {/* disabled={isDisabled} */}
/&gt;
</code>
</pre>

<hr />

<h4>Comments outside JSX</h4>

<p>
    Outside JSX, normal JavaScript comments work as usual.
</p>

<pre>
<code>
// Single line comment

/*
Multi line
comment
*/
function App() {
    return &lt;div&gt;App&lt;/div&gt;;
}
</code>
</pre>

<hr />

<h4>Common mistakes - very important</h4>

<ul>
    <li>
        ❌ HTML comments do not work in JSX
        <pre><code>
&lt;!-- This will break JSX --&gt;
        </code></pre>
    </li>

    <li>
        ❌ JavaScript comments without curly braces
        <pre><code>
&lt;div&gt;
    // wrong
&lt;/div&gt;
        </code></pre>
    </li>

    <li>
        ✅ Always wrap JSX comments inside <code>{ }</code>
    </li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    JSX comments are written using JavaScript comment syntax
    inside curly braces, because JSX only understands
    JavaScript expressions.
</p>
`},{id:"core-028",q:"What is reconciliation in React?",a:`
<p>
    <strong>Reconciliation</strong> is the process React uses to
    <strong>compare the previous UI state with the new UI state</strong>
    and decide what needs to change in the real DOM.
</p>

<p>
    In simple words, reconciliation answers one question:
</p>

<p>
    <em>"What is the minimum set of changes required to update the screen?"</em>
</p>

<hr />

<h4>Why reconciliation exists</h4>

<p>
    Direct DOM manipulation is slow and expensive.
    React avoids this by:
</p>

<ul>
    <li>Keeping a Virtual DOM in memory</li>
    <li>Re-rendering components when state or props change</li>
    <li>Comparing old and new Virtual DOM trees</li>
    <li>Updating only the changed parts of the real DOM</li>
</ul>

<p>
    This comparison process is called <strong>reconciliation</strong>.
</p>

<hr />

<h4>How reconciliation works (high level)</h4>

<ul>
    <li>State or props change</li>
    <li>React creates a new Virtual DOM tree</li>
    <li>React compares it with the previous Virtual DOM</li>
    <li>Differences are calculated using the diffing algorithm</li>
    <li>Only necessary DOM updates are applied</li>
</ul>

<hr />

<h4>Important assumptions React makes</h4>

<p>
    To keep reconciliation fast, React makes a few assumptions:
</p>

<ul>
    <li>
        Elements of different types produce different trees
    </li>
    <li>
        Elements with the same type are compared recursively
    </li>
    <li>
        Keys help identify elements in lists
    </li>
</ul>

<hr />

<h4>Example</h4>

<pre>
<code>
function App({ loggedIn }) {
    return (
        &lt;div&gt;
            {loggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}
        &lt;/div&gt;
    );
}
</code>
</pre>

<p>
    If <code>loggedIn</code> changes:
</p>

<ul>
    <li>React compares old and new Virtual DOM</li>
    <li>Sees that component type changed</li>
    <li>Unmounts <code>Login</code></li>
    <li>Mounts <code>Dashboard</code></li>
</ul>

<hr />

<h4>Role of keys in reconciliation</h4>

<p>
    Keys tell React <strong>which list items changed, moved, or were removed</strong>.
</p>

<pre>
<code>
items.map(item => (
    &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
));
</code>
</pre>

<p>
    Without stable keys, React may:
</p>

<ul>
    <li>Re-render more elements than needed</li>
    <li>Lose component state</li>
    <li>Cause UI bugs</li>
</ul>

<hr />

<h4>Common gotchas</h4>

<ul>
    <li>
        Using array index as key can break reconciliation
    </li>
    <li>
        Mutating state objects can confuse change detection
    </li>
    <li>
        Returning different component types unnecessarily causes remounts
    </li>
    <li>
        Over-rendering parent components triggers child reconciliation
    </li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    Reconciliation is the process where React compares the previous and new
    Virtual DOM trees to efficiently update only the changed parts of the
    real DOM.
</p>
`},{id:"core-029",q:"Does React.lazy work with named exports? If not, what’s the workaround?",a:`
<p>
    <strong>No</strong>, <code>React.lazy</code> does <strong>not</strong> work
    directly with <strong>named exports</strong>.
</p>

<p>
    <code>React.lazy</code> expects the dynamically imported module to have a
    <strong>default export</strong>.
</p>

<hr />

<h4>Why React.lazy fails with named exports</h4>

<p>
    When you write:
</p>

<pre><code>
const MyComp = React.lazy(() =>
    import("./MyComponent")
);
</code></pre>

<p>
    React internally expects the imported module to look like:
</p>

<pre><code>
{
    default: Component
}
</code></pre>

<p>
    But if your file exports like this:
</p>

<pre><code>
export const MyComponent = () => {
    return &lt;div&gt;Hello&lt;/div&gt;;
};
</code></pre>

<p>
    There is <strong>no default export</strong>, so React.lazy cannot find
    <code>module.default</code> and it breaks.
</p>

<hr />

<h4>Workaround 1 - Re-export as default (recommended)</h4>

<p>
    The simplest and cleanest solution is to add a default export.
</p>

<pre><code>
const MyComponent = () => {
    return &lt;div&gt;Hello&lt;/div&gt;;
};

export default MyComponent;
</code></pre>

<p>
    Then lazy loading works normally:
</p>

<pre><code>
const MyComponent = React.lazy(() =>
    import("./MyComponent")
);
</code></pre>

<hr />

<h4>Workaround 2 - Map named export to default (very common in interviews)</h4>

<p>
    If you cannot change the export style, you can transform the import:
</p>

<pre><code>
const MyComponent = React.lazy(() =>
    import("./MyComponent").then(module => ({
        default: module.MyComponent
    }))
);
</code></pre>

<p>
    Here you are <strong>manually converting</strong> a named export into a
    default export shape that React.lazy understands.
</p>

<hr />

<h4>Important gotchas</h4>

<ul>
    <li>
        React.lazy works <strong>only with default exports</strong>
    </li>
    <li>
        Named exports are fine, but must be mapped manually
    </li>
    <li>
        This pattern is very common in route-based code splitting
    </li>
    <li>
        Always wrap lazy components inside <code>Suspense</code>
    </li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    React.lazy does not support named exports directly. It expects a default
    export, so the workaround is either exporting default or mapping the named
    export to default using a <code>.then()</code>.
</p>
`},{id:"core-030",q:"Why do we use className instead of class in JSX?",a:`
<p>
    In JSX, we use <strong>className</strong> instead of <strong>class</strong>
    because <strong>class</strong> is a reserved keyword in JavaScript.
</p>

<p>
    Since JSX is closer to JavaScript than HTML, React follows JavaScript rules
    and avoids naming conflicts.
</p>

<hr />

<h4>The core reason</h4>

<ul>
    <li>
        <strong>class</strong> is used in JavaScript to define ES6 classes
    </li>
    <li>
        JSX gets compiled into JavaScript function calls
    </li>
    <li>
        Using <strong>class</strong> would clash with JavaScript syntax
    </li>
</ul>

<p>
    So React introduced <strong>className</strong> as the JSX-friendly
    alternative.
</p>

<hr />

<h4>Example</h4>

<p><strong>Wrong</strong></p>

<pre>
<code>
&lt;div class="card"&gt;Hello&lt;/div&gt;
</code>
</pre>

<p><strong>Correct</strong></p>

<pre>
<code>
&lt;div className="card"&gt;Hello&lt;/div&gt;
</code>
</pre>

<p>
    After compilation, React correctly applies the class to the real DOM.
</p>

<hr />

<h4>Is this only for class?</h4>

<p>
    No. JSX uses several JavaScript-friendly attribute names.
</p>

<ul>
    <li>class - className</li>
    <li>for - htmlFor</li>
    <li>tabindex - tabIndex</li>
    <li>readonly - readOnly</li>
</ul>

<p>
    This keeps JSX consistent with DOM property names.
</p>

<hr />

<h4>Common misconception</h4>

<p>
    React does <strong>not</strong> rename the attribute in the final HTML.
    The browser still receives a normal <code>class</code> attribute.
</p>

<p>
    <strong>className</strong> exists only in JSX and JavaScript.
</p>

<hr />

<h4>One-line interview answer</h4>

<p>
    We use <strong>className</strong> instead of <strong>class</strong> in JSX
    because JSX follows JavaScript rules, and <strong>class</strong> is a
    reserved keyword in JavaScript.
</p>
`},{id:"core-031",q:"What are React Fragments?",a:`
<p>
    <strong>React Fragments</strong> let you group multiple elements together
    <em>without adding an extra node to the DOM</em>.
</p>

<p>
    In React, a component must return a single parent element.
    Fragments solve this requirement without adding unnecessary wrapper divs.
</p>

<hr />

<h4>Basic example</h4>

<pre><code>
function UserInfo() {
    return (
        <>
            <h3>User Details</h3>
            <p>Name: Ash</p>
            <p>Role: Developer</p>
        </>
    );
}
</code></pre>

<p>
    The empty angle brackets <code>&lt;&gt;&lt;/&gt;</code> are
    the short syntax for a Fragment.
</p>

<hr />

<h4>Equivalent long syntax</h4>

<pre><code>
import React from "react";

function UserInfo() {
    return (
        <React.Fragment>
            <h3>User Details</h3>
            <p>Name: Ash</p>
            <p>Role: Developer</p>
        </React.Fragment>
    );
}
</code></pre>

<p>
    Both syntaxes do the same thing.
</p>

<hr />

<h4>Why Fragments are useful</h4>

<ul>
    <li>No extra divs in the DOM</li>
    <li>Cleaner HTML output</li>
    <li>Better CSS and layout control</li>
    <li>Avoids breaking flex, grid, and table layouts</li>
</ul>

<p>
    Extra wrapper elements can cause styling bugs,
    especially with flexbox, grid, or table structures.
</p>

<hr />

<h4>Fragment in lists</h4>

<p>
    Fragments are often used when rendering lists where
    you do not want extra DOM nodes.
</p>

<pre><code>
items.map(item => (
    <React.Fragment key={item.id}>
        <dt>{item.title}</dt>
        <dd>{item.value}</dd>
    </React.Fragment>
));
</code></pre>

<p>
    Note that the short syntax <code>&lt;&gt;&lt;/&gt;</code>
    <strong>cannot accept a key</strong>.
</p>

<hr />

<h4>Common gotchas</h4>

<ul>
    <li>
        Short fragment syntax does not support keys
    </li>
    <li>
        Use <code>React.Fragment</code> when a key is required
    </li>
    <li>
        Fragments do not accept props
    </li>
    <li>
        Fragments are not visible in the DOM tree
    </li>
</ul>

<hr />

<h4>Interview one-liner</h4>

<p>
    React Fragments allow grouping multiple elements
    without adding extra nodes to the DOM,
    keeping markup clean and layouts predictable.
</p>
`},{id:"core-032",q:"Why are fragments better than extra div wrappers?",a:`<p>
    React <strong>Fragments</strong> let you group multiple elements
    without adding extra nodes to the DOM. They solve a very real
    layout and performance problem caused by unnecessary wrapper divs.
</p>

<hr />

<h4>Problem with extra div wrappers</h4>

<p>
    Without fragments, React forces you to wrap multiple elements
    inside a container div.
</p>

<pre>
<code>
return (
    &lt;div&gt;
        &lt;h1&gt;Title&lt;/h1&gt;
        &lt;p&gt;Description&lt;/p&gt;
    &lt;/div&gt;
);
</code>
</pre>

<p>
    That extra div:
</p>

<ul>
    <li>Pollutes the DOM</li>
    <li>Breaks CSS layouts like flex and grid</li>
    <li>Messes with semantic HTML</li>
    <li>Adds unnecessary nesting</li>
</ul>

<hr />

<h4>How fragments solve this</h4>

<p>
    Fragments allow returning multiple elements without creating
    a real DOM node.
</p>

<pre>
<code>
return (
    &lt;React.Fragment&gt;
        &lt;h1&gt;Title&lt;/h1&gt;
        &lt;p&gt;Description&lt;/p&gt;
    &lt;/React.Fragment&gt;
);
</code>
</pre>

<p>
    Or using the short syntax:
</p>

<pre>
<code>
return (
    &lt;&gt;
        &lt;h1&gt;Title&lt;/h1&gt;
        &lt;p&gt;Description&lt;/p&gt;
    &lt;/&gt;
);
</code>
</pre>

<hr />

<h4>Why fragments are better</h4>

<ul>
    <li>No extra DOM elements</li>
    <li>Cleaner HTML output</li>
    <li>Better CSS layout control</li>
    <li>Improved semantics</li>
    <li>Less DOM depth and noise</li>
</ul>

<hr />

<h4>Real world example</h4>

<p>
    Consider rendering table rows. A div inside table is invalid HTML.
</p>

<p><strong>Wrong</strong></p>

<pre>
<code>
&lt;table&gt;
    &lt;tbody&gt;
        &lt;div&gt;
            &lt;tr&gt;&lt;td&gt;Row&lt;/td&gt;&lt;/tr&gt;
        &lt;/div&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</code>
</pre>

<p><strong>Correct with Fragment</strong></p>

<pre>
<code>
&lt;table&gt;
    &lt;tbody&gt;
        &lt;&gt;
            &lt;tr&gt;&lt;td&gt;Row&lt;/td&gt;&lt;/tr&gt;
        &lt;/&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
</code>
</pre>

<hr />

<h4>Important gotchas</h4>

<ul>
    <li>Fragments do not accept props like className or style</li>
    <li>Short syntax cannot accept keys</li>
    <li>Use &lt;React.Fragment key="id"&gt; when mapping lists</li>
</ul>

<hr />

<h4>One line interview answer</h4>

<p>
    Fragments are better than extra div wrappers because they group
    elements without adding unnecessary DOM nodes, keeping the markup
    clean, semantic, and layout friendly.
</p>
`},{id:"core-033",q:"What are portals and when are they useful?",a:`
<p>
    <strong>Portals</strong> provide a way to render a React component
    <em>outside of its parent DOM hierarchy</em>, while still keeping it
    part of the same React component tree.
</p>

<p>
    In simple terms, portals let React say:
    render this UI somewhere else in the DOM, but keep React logic intact.
</p>

<hr />

<h4>Basic idea</h4>

<p>
    Normally, a component renders inside its parent DOM node.
    With portals, you can render it into a different DOM node entirely.
</p>

<pre>
<code>
ReactDOM.createPortal(child, container)
</code>
</pre>

<ul>
    <li><code>child</code> - the JSX you want to render</li>
    <li><code>container</code> - a DOM element outside the parent tree</li>
</ul>

<hr />

<h4>Basic example</h4>

<p>
    HTML:
</p>

<pre>
<code>
&lt;div id="root"&gt;&lt;/div&gt;
&lt;div id="modal-root"&gt;&lt;/div&gt;
</code>
</pre>

<p>
    React component using a portal:
</p>

<pre>
<code>
import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal(
        &lt;div className="modal"&gt;
            {children}
        &lt;/div&gt;,
        document.getElementById("modal-root")
    );
}
</code>
</pre>

<p>
    Even though the modal renders outside <code>#root</code>,
    it still behaves like a normal React component.
</p>

<hr />

<h4>Most common real-world use cases</h4>

<ul>
    <li>
        <strong>Modals and dialogs</strong> -
        avoids z-index and overflow issues
    </li>
    <li>
        <strong>Tooltips and popovers</strong> -
        prevents clipping inside parent containers
    </li>
    <li>
        <strong>Dropdown menus</strong> -
        renders above everything safely
    </li>
    <li>
        <strong>Global overlays</strong> -
        loaders, alerts, confirmations
    </li>
</ul>

<hr />

<h4>Why portals are needed</h4>

<p>
    Many layout problems happen because of:
</p>

<ul>
    <li><code>overflow: hidden</code></li>
    <li><code>position: relative</code> parents</li>
    <li>stacking context and z-index fights</li>
</ul>

<p>
    Portals solve this by rendering the UI
    outside those constraints.
</p>

<hr />

<h4>Important behavior (interview favorite)</h4>

<p>
    Even though a portal renders elsewhere in the DOM:
</p>

<ul>
    <li>Events still <strong>bubble through React tree</strong></li>
    <li>Context still works</li>
    <li>State and props behave normally</li>
</ul>

<p>
    Event bubbling follows the <strong>React component tree</strong>,
    not the DOM tree.
</p>

<hr />

<h4>Common gotchas</h4>

<ul>
    <li>
        Portals do <strong>not</strong> escape React logic -
        only DOM placement changes
    </li>
    <li>
        Styling must be handled carefully -
        global styles or scoped styles may be needed
    </li>
    <li>
        Accessibility matters -
        focus trapping and aria roles are your responsibility
    </li>
</ul>

<hr />

<h4>When NOT to use portals</h4>

<ul>
    <li>Normal layout components</li>
    <li>Content that does not need to escape parent boundaries</li>
    <li>Simple UI where z-index and overflow are not issues</li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    Portals allow React components to render outside their parent DOM
    hierarchy, which is especially useful for modals, tooltips,
    and overlays that must escape layout constraints.
</p>
`},{id:"core-034",q:"Stateless vs stateful components: meaning today?",a:`
<p>
    Earlier in React, components were often classified as
    <strong>stateless</strong> and <strong>stateful</strong>. Today, this
    distinction still exists conceptually, but the meaning has evolved
    significantly.
</p>

<hr />

<h4>Old meaning (pre-Hooks era)</h4>

<p>
    Before Hooks:
</p>

<ul>
    <li>
        <strong>Stateless components</strong> were simple function components
        that only received props and returned JSX.
    </li>
    <li>
        <strong>Stateful components</strong> were class components that managed
        state using <code>this.state</code> and lifecycle methods.
    </li>
</ul>

<pre><code>
// Stateless (old meaning)
function Title({ text }) {
    return &lt;h1&gt;{text}&lt;/h1&gt;;
}
</code></pre>

<pre><code>
// Stateful (old meaning)
class Counter extends React.Component {
    state = { count: 0 };

    render() {
        return &lt;div&gt;{this.state.count}&lt;/div&gt;;
    }
}
</code></pre>

<p>
    This distinction made sense when only class components could hold state.
</p>

<hr />

<h4>Modern meaning (Hooks era - today)</h4>

<p>
    With Hooks, <strong>function components can manage state</strong>.
    So the old class-based definition is no longer accurate.
</p>

<p>
    Today, the terms are used more <strong>conceptually</strong>:
</p>

<ul>
    <li>
        <strong>Stateless component</strong> - a component that does not manage
        its own state and is driven entirely by props.
    </li>
    <li>
        <strong>Stateful component</strong> - a component that owns and manages
        state using hooks like <code>useState</code>, <code>useReducer</code>,
        or <code>useContext</code>.
    </li>
</ul>

<hr />

<h4>Stateless component (modern example)</h4>

<pre><code>
function UserName({ name }) {
    return &lt;span&gt;{name}&lt;/span&gt;;
}
</code></pre>

<p>
    This component:
</p>

<ul>
    <li>Does not hold internal state</li>
    <li>Renders purely based on props</li>
    <li>Is easy to test and reuse</li>
</ul>

<hr />

<h4>Stateful component (modern example)</h4>

<pre><code>
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;
            Count: {count}
        &lt;/button&gt;
    );
}
</code></pre>

<p>
    This component:
</p>

<ul>
    <li>Owns state</li>
    <li>Controls user interaction</li>
    <li>Triggers re-renders on state updates</li>
</ul>

<hr />

<h4>Important interview clarification</h4>

<p>
    <strong>Stateless does NOT mean function component</strong>.
    <br />
    <strong>Stateful does NOT mean class component</strong>.
</p>

<p>
    Both stateless and stateful components today are usually
    <strong>function components</strong>.
</p>

<hr />

<h4>Why this distinction still matters</h4>

<ul>
    <li>
        Helps in component design - separate data logic from UI
    </li>
    <li>
        Encourages reusable, predictable components
    </li>
    <li>
        Makes performance optimization easier
        (stateless components are easier to memoize)
    </li>
</ul>

<hr />

<h4>Common best practice</h4>

<p>
    A common pattern is:
</p>

<ul>
    <li>
        <strong>Stateful components</strong> at higher levels
        (pages, containers)
    </li>
    <li>
        <strong>Stateless components</strong> at lower levels
        (buttons, labels, cards)
    </li>
</ul>

<hr />

<h4>One-line interview answer</h4>

<p>
    Today, stateless and stateful describe whether a component manages its own
    state, not whether it is a class or function. With Hooks, both are usually
    function components.
</p>
`},{id:"core-035",q:"How do you validate props in React?",a:`
<p>
    In React, <strong>props validation</strong> is used to ensure that a component
    receives the correct type and shape of data from its parent.
    This helps catch bugs early and makes components more predictable.
</p>

<p>
    React itself does not enforce prop types at runtime, but it provides a
    built-in utility called <strong>PropTypes</strong> for validation during
    development.
</p>

<hr />

<h4>1. Using PropTypes (classic and still valid)</h4>

<p>
    PropTypes is a separate package that allows you to define expected types
    for each prop.
</p>

<pre><code>
import PropTypes from "prop-types";

function UserCard({ name, age }) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
        &lt;/div&gt;
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
</code></pre>

<p>
    If the wrong type is passed, React shows a <strong>warning in the console</strong>
    in development mode.
</p>

<hr />

<h4>2. Common PropTypes validators</h4>

<ul>
    <li><code>PropTypes.string</code></li>
    <li><code>PropTypes.number</code></li>
    <li><code>PropTypes.bool</code></li>
    <li><code>PropTypes.array</code></li>
    <li><code>PropTypes.object</code></li>
    <li><code>PropTypes.func</code></li>
    <li><code>PropTypes.node</code> - anything renderable</li>
    <li><code>PropTypes.element</code> - a React element</li>
</ul>

<hr />

<h4>3. Validating arrays and object shapes</h4>

<p>
    You can validate complex structures using <code>arrayOf</code> and
    <code>shape</code>.
</p>

<pre><code>
UserCard.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        isAdmin: PropTypes.bool
    })
};
</code></pre>

<p>
    This is very useful for catching API response mismatches.
</p>

<hr />

<h4>4. Default props</h4>

<p>
    You can define default values for props using <code>defaultProps</code>.
</p>

<pre><code>
UserCard.defaultProps = {
    age: 18
};
</code></pre>

<p>
    If the parent does not pass the prop, React uses the default value.
</p>

<hr />

<h4>5. PropTypes limitations (important interview point)</h4>

<ul>
    <li>PropTypes only run in <strong>development</strong></li>
    <li>No runtime enforcement in production</li>
    <li>No compile-time safety</li>
    <li>Does not prevent bugs, only warns</li>
</ul>

<hr />

<h4>6. Modern approach - TypeScript</h4>

<p>
    In modern React projects, <strong>TypeScript</strong> is preferred over
    PropTypes because it provides:
</p>

<ul>
    <li>Compile-time type checking</li>
    <li>Better IDE autocomplete</li>
    <li>Stronger refactoring safety</li>
</ul>

<pre><code>
type UserCardProps = {
    name: string;
    age?: number;
};

function UserCard({ name, age = 18 }: UserCardProps) {
    return &lt;div&gt;{name} - {age}&lt;/div&gt;;
}
</code></pre>

<hr />

<h4>7. Interview-ready summary</h4>

<ul>
    <li>PropTypes validate props during development</li>
    <li>They help catch incorrect data passed to components</li>
    <li>They do not run in production</li>
    <li>TypeScript is preferred for modern React apps</li>
</ul>

<p>
    In real projects today, PropTypes are mostly used in legacy codebases,
    while TypeScript is the standard choice for prop validation.
</p>
`},{id:"core-036",q:"What are the advantages of React?",a:""},{id:"core-037",q:"What are common limitations or pain points in React?",a:""},{id:"core-038",q:"Static type checking in React: what are the recommended options?",a:""},{id:"core-039",q:"What does react-dom do and why is it separate from react?",a:""},{id:"core-040",q:"What is ReactDOMServer used for?",a:""},{id:"core-041",q:"How to use innerHTML in React safely?",a:""},{id:"core-042",q:"How do you style components in React? Common approaches.",a:""},{id:"core-043",q:"How are events ‘different’ in React under the hood?",a:""},{id:"core-044",q:"What problems happen when you use array index as key?",a:""},{id:"core-045",q:"Ways to conditionally render UI in React?",a:""},{id:"core-046",q:"Why is spreading props on DOM elements risky?",a:""},{id:"core-047",q:"How do you memoize things in React? (components, values, functions)",a:""},{id:"core-048",q:"Server-side rendering (SSR): how does it work in React?",a:""},{id:"core-049",q:"How do you enable production mode and why does it matter?",a:""},{id:"core-050",q:"Do hooks replace HOCs and render props fully? What’s the real answer?",a:""},{id:"core-051",q:"What is a switching component pattern?",a:""},{id:"core-052",q:"What are mixins and why are they basically dead in React?",a:""},{id:"core-053",q:"Pointer events in React: what’s supported?",a:""},{id:"core-054",q:"Why should React component names start with capital letters?",a:""},{id:"core-055",q:"Custom DOM attributes: are they supported? Any rules?",a:""},{id:"core-056",q:"How do you loop/render lists inside JSX?",a:""},{id:"core-057",q:"How do you access props inside JSX attribute strings correctly?",a:""},{id:"core-058",q:"PropTypes: how do you define array of shape?",a:""},{id:"core-059",q:"How do you conditionally apply className?",a:""},{id:"core-060",q:"React vs ReactDOM: what’s the difference?",a:""},{id:"core-061",q:"How do you use label properly in React?",a:""},{id:"core-062",q:"How do you merge multiple inline style objects?",a:""},{id:"core-063",q:"How to rerender/update UI on browser resize?",a:""},{id:"core-064",q:"How to pretty print JSON in React UI?",a:""},{id:"core-065",q:"Why can’t you update props from inside a component?",a:""},{id:"core-066",q:"How do you auto-focus an input on page load?",a:""},{id:"core-067",q:"How can you find React version at runtime in the browser?",a:""},{id:"core-068",q:"How do you integrate Google Analytics with React Router?",a:""},{id:"core-069",q:"Vendor prefixes in inline styles: how to handle?",a:""},{id:"core-070",q:"ES6 import/export patterns for components?",a:""},{id:"core-071",q:"Any exceptions to React component naming rules?",a:""},{id:"core-072",q:"Can you use async/await in plain React components?",a:""},{id:"core-073",q:"Common folder structures for React apps?",a:""},{id:"core-074",q:"Popular animation libraries used with React?",a:""},{id:"core-075",q:"CSS modules: why do people like them?",a:""},{id:"core-076",q:"Popular React-specific linters and why they matter?",a:""},{id:"core-077",q:"How does React decide what to re-render after state changes?",a:""},{id:"core-078",q:"Props drilling: what is it and what are clean fixes?",a:""},{id:"core-079",q:"Derived state: when is it okay and when is it a trap?",a:""},{id:"core-080",q:"When is it okay to keep state local vs shared state?",a:""},{id:"core-081",q:"How would you handle global app state without Redux?",a:""},{id:"core-082",q:"What are common React performance smells you look for?",a:""}]},F={id:"modern-react",title:"Modern React (React 18+)",items:[{id:"m-001",q:"What changed in React 18 that interviewers care about?",a:""},{id:"m-002",q:"Automatic batching: what is it and why does it matter?",a:""},{id:"m-003",q:"Concurrent rendering: explain like you’re not selling a course.",a:""},{id:"m-004",q:"What is startTransition and when would you use it?",a:""},{id:"m-005",q:"useTransition vs useDeferredValue: real difference and use cases?",a:""},{id:"m-006",q:"StrictMode renders effects twice in dev: why and how to handle?",a:""},{id:"m-007",q:"What is hydration and why can it fail?",a:""},{id:"m-008",q:"What are common hydration mismatch causes and fixes?",a:""},{id:"m-009",q:"What is Suspense used for today in real apps?",a:""},{id:"m-010",q:"Why Suspense for data fetching is not same as Suspense for code splitting?",a:""}]},N={id:"react-router",title:"React Router",items:[{id:"rr-079",q:"What is React Router and what problem does it solve?",a:""},{id:"rr-080",q:"React Router vs history library: how are they related?",a:""},{id:"rr-081",q:"Main building blocks of React Router v6?",a:""},{id:"rr-082",q:"push vs replace navigation: what’s the difference?",a:""},{id:"rr-083",q:"How do you navigate programmatically in React Router?",a:""},{id:"rr-084",q:"How do you read query params in React Router?",a:""},{id:"rr-085",q:"Why does the ‘Router may have only one child’ warning happen?",a:""},{id:"rr-086",q:"How do you pass params/state while navigating?",a:""},{id:"rr-087",q:"How do you create a default route and a NotFound route?",a:""},{id:"rr-088",q:"How do you access history/navigation objects in Router?",a:""},{id:"rr-089",q:"How do you auto-redirect after login?",a:""},{id:"rr-090",q:"What were the benefits people liked in React Router v4?",a:""},{id:"rr-091",q:"How do you protect routes (auth guard) in React Router v6?",a:""},{id:"rr-092",q:"Nested routes: when is it clean and when is it overkill?",a:""},{id:"rr-093",q:"How do you handle scroll restoration on route change?",a:""}]},j={id:"data-fetching",title:"Data Fetching and Server State",items:[{id:"df-001",q:"Where do you fetch data in React and why?",a:""},{id:"df-002",q:"AbortController: how do you cancel fetch on unmount?",a:""},{id:"df-003",q:"How do you avoid race conditions in async requests?",a:""},{id:"df-004",q:"Loading and error UI patterns you always implement?",a:""},{id:"df-005",q:"What is server state vs client state?",a:""},{id:"df-006",q:"React Query (TanStack Query): why would you use it?",a:""},{id:"df-007",q:"Caching, stale time, refetching: what do they mean?",a:""},{id:"df-008",q:"Optimistic updates: what are they and how do you do them safely?",a:""}]},L={id:"i18n",title:"React Internationalization",items:[{id:"i18n-091",q:"What is React Intl?",a:""},{id:"i18n-092",q:"Key features of React Intl?",a:""},{id:"i18n-093",q:"Two main formatting approaches in React Intl?",a:""},{id:"i18n-094",q:"How to use FormattedMessage as placeholder text?",a:""},{id:"i18n-095",q:"How do you get current locale in React Intl?",a:""},{id:"i18n-096",q:"How do you format dates with React Intl?",a:""}]},B={id:"testing",title:"React Testing",items:[{id:"test-097",q:"What is Shallow rendering? When is it used?",a:""},{id:"test-098",q:"What is TestRenderer in React?",a:""},{id:"test-099",q:"What does ReactTestUtils provide?",a:""},{id:"test-100",q:"What is Jest and why is it popular?",a:""},{id:"test-101",q:"Jest vs Jasmine: what are the practical advantages?",a:""},{id:"test-102",q:"Show a very simple Jest test example: what should it look like?",a:""},{id:"test-103",q:"React Testing Library: why do teams prefer it over enzyme-style tests?",a:""},{id:"test-104",q:"Unit vs integration tests in React: what do you prioritize?",a:""},{id:"test-105",q:"How do you test async UI (loading, success, error states)?",a:""},{id:"test-106",q:"What should NOT be tested in React UI tests?",a:""}]},X={id:"redux",title:"React Redux and State Libraries",items:[{id:"redux-103",q:"What is Flux?",a:""},{id:"redux-104",q:"What is Redux?",a:""},{id:"redux-105",q:"Core principles of Redux?",a:""},{id:"redux-106",q:"Redux downsides compared to Flux?",a:""},{id:"redux-107",q:"mapStateToProps vs mapDispatchToProps: difference?",a:""},{id:"redux-108",q:"Can you dispatch an action inside a reducer?",a:""},{id:"redux-109",q:"Access Redux store outside a component: how and when?",a:""},{id:"redux-110",q:"Drawbacks of MVW pattern?",a:""},{id:"redux-111",q:"Redux and RxJS: any similarities or overlaps?",a:""},{id:"redux-112",q:"How do you reset Redux state?",a:""},{id:"redux-113",q:"React Context vs Redux: when to use which?",a:""},{id:"redux-114",q:"Why are reducers called reducers?",a:""},{id:"redux-115",q:"How do you do AJAX requests in Redux apps?",a:""},{id:"redux-116",q:"Should component local state always go to Redux store?",a:""},{id:"redux-117",q:"Proper way to access Redux store in app code?",a:""},{id:"redux-118",q:"Component vs container: what does it mean in Redux world?",a:""},{id:"redux-119",q:"Why use constants for action types?",a:""},{id:"redux-120",q:"Different ways to write mapDispatchToProps?",a:""},{id:"redux-121",q:"What is ownProps in mapStateToProps/mapDispatchToProps?",a:""},{id:"redux-122",q:"How do you structure top-level Redux folders?",a:""},{id:"redux-123",q:"What is Redux Saga?",a:""},{id:"redux-124",q:"Mental model of Redux Saga: how to think about it?",a:""},{id:"redux-125",q:"call vs put in Redux Saga?",a:""},{id:"redux-126",q:"What is Redux Thunk?",a:""},{id:"redux-127",q:"Redux Saga vs Thunk: when to prefer which?",a:""},{id:"redux-128",q:"What is Redux DevTools?",a:""},{id:"redux-129",q:"Key features of Redux DevTools?",a:""},{id:"redux-130",q:"What are selectors in Redux and why use them?",a:""},{id:"redux-131",q:"What is Redux Form?",a:""},{id:"redux-132",q:"Main features of Redux Form?",a:""},{id:"redux-133",q:"How to apply multiple middlewares in Redux?",a:""},{id:"redux-134",q:"How do you set initial state in Redux?",a:""},{id:"redux-135",q:"Relay vs Redux: what’s the difference?",a:""},{id:"redux-136",q:"What is an action in Redux?",a:""},{id:"redux-137",q:"Flux vs Redux: what’s the difference in approach?",a:""},{id:"redux-138",q:"MobX: what is it and how is it different from Redux?",a:""},{id:"redux-139",q:"What is Redux Toolkit and why is it preferred now?",a:""},{id:"redux-140",q:"Zustand/Recoil/Jotai: when do these make sense?",a:""}]},V={id:"react-native",title:"React Native",items:[{id:"rn-139",q:"React vs React Native: what changes?",a:""},{id:"rn-140",q:"How do you test React Native apps?",a:""},{id:"rn-141",q:"How do you log in React Native?",a:""},{id:"rn-142",q:"How do you debug React Native apps?",a:""}]},z={id:"libraries",title:"React Libraries and Integrations",items:[{id:"lib-143",q:"What is Reselect and why do people use it?",a:""},{id:"lib-144",q:"What is Flow?",a:""},{id:"lib-145",q:"Flow vs PropTypes: difference?",a:""},{id:"lib-146",q:"How do you use Font Awesome icons in React?",a:""},{id:"lib-147",q:"What is React DevTools and what can it do?",a:""},{id:"lib-148",q:"Why does DevTools not work on local file opened in browser?",a:""},{id:"lib-149",q:"How do you use Polymer/web components with React?",a:""},{id:"lib-150",q:"React vs Vue: where does React win or lose?",a:""},{id:"lib-151",q:"React vs Angular: big differences?",a:""},{id:"lib-152",q:"Why does the React tab sometimes not show in DevTools?",a:""},{id:"lib-153",q:"What are styled-components?",a:""},{id:"lib-154",q:"Give a simple styled-components example.",a:""},{id:"lib-155",q:"What is Relay?",a:""},{id:"lib-156",q:"Reselect: main features recap.",a:""},{id:"lib-157",q:"Give a basic example where Reselect makes sense.",a:""},{id:"lib-158",q:"MUI vs Tailwind vs styled-components: how do you choose?",a:""},{id:"lib-159",q:"When do you build your own component library vs using one?",a:""}]},G={id:"a11y-security",title:"Accessibility and Security",items:[{id:"as-001",q:"Accessibility basics: what do you always do in UI?",a:""},{id:"as-002",q:"Keyboard navigation: common issues and fixes?",a:""},{id:"as-003",q:"ARIA: when to use it and when NOT to use it?",a:""},{id:"as-004",q:"XSS risks in React: what is safe by default and what is not?",a:""},{id:"as-005",q:"dangerouslySetInnerHTML: when is it unavoidable and how to sanitize?",a:""},{id:"as-006",q:"Where do you store tokens - cookies vs localStorage - why?",a:""}]},Y={id:"tooling",title:"Tooling and Build",items:[{id:"tl-001",q:"Vite vs CRA: why is Vite faster in dev?",a:""},{id:"tl-002",q:"How do you handle environment variables in Vite?",a:""},{id:"tl-003",q:"Bundle size: how do you analyze and reduce it?",a:""},{id:"tl-004",q:"Tree shaking: what is it and how to keep it working?",a:""},{id:"tl-005",q:"Code splitting: where should you split and why?",a:""},{id:"tl-006",q:"How do you do lazy loading correctly with routes?",a:""},{id:"tl-007",q:"Source maps: when to enable/disable in prod?",a:""},{id:"tl-008",q:"How do you handle base path deployment (GitHub pages)?",a:""}]},K={id:"advanced",title:"Advanced and Misc",items:[{id:"adv-158",q:"Can Redux be used without React?",a:""},{id:"adv-159",q:"Do you need a specific build tool for Redux?",a:""},{id:"adv-160",q:"How do Redux Form initial values update from state?",a:""},{id:"adv-161",q:"How can PropTypes accept multiple types for one prop?",a:""},{id:"adv-162",q:"Can you import an SVG as a React component?",a:""},{id:"adv-163",q:"What is render hijacking?",a:""},{id:"adv-164",q:"How do you pass numbers as props safely?",a:""},{id:"adv-165",q:"Should all state live in Redux? When is local state better?",a:""},{id:"adv-166",q:"What was registerServiceWorker used for in CRA?",a:""},{id:"adv-167",q:"What is React.memo and when should you use it?",a:""},{id:"adv-168",q:"What is React.lazy and where does it help?",a:""},{id:"adv-169",q:"How do you prevent unnecessary re-renders with setState patterns?",a:""},{id:"adv-170",q:"How do you render arrays, strings, and numbers in JSX?",a:""},{id:"adv-171",q:"How to ensure hooks rules are followed in a project?",a:""},{id:"adv-172",q:"componentDidCatch signature and how error boundaries work?",a:""},{id:"adv-173",q:"When do error boundaries NOT catch errors?",a:""},{id:"adv-174",q:"What happens with uncaught errors in React apps?",a:""},{id:"adv-175",q:"Where should error boundaries be placed in the tree?",a:""},{id:"adv-176",q:"What is the benefit of component stack traces from boundaries?",a:""},{id:"adv-177",q:"What are defaultProps and how do they work?",a:""},{id:"adv-178",q:"What is displayName and why would you set it?",a:""},{id:"adv-179",q:"Browser support story for React apps: what matters today?",a:""},{id:"adv-180",q:"What is code splitting and how do you do it?",a:""},{id:"adv-181",q:"What are keyed fragments and why would you use them?",a:""},{id:"adv-182",q:"Does React support all HTML attributes? Any caveats?",a:""},{id:"adv-183",q:"When do props default to true in JSX?",a:""},{id:"adv-184",q:"What is Next.js and why do people use it?",a:""},{id:"adv-185",q:"How do you pass event handlers correctly to children?",a:""},{id:"adv-186",q:"How to prevent a function from firing multiple times?",a:""},{id:"adv-187",q:"How does JSX help prevent injection attacks?",a:""},{id:"adv-188",q:"How do you update rendered elements in React?",a:""},{id:"adv-189",q:"How do you communicate props are read-only?",a:""},{id:"adv-190",q:"When is using index as key actually safe?",a:""},{id:"adv-191",q:"Do keys need to be globally unique?",a:""},{id:"adv-192",q:"What is the popular choice for form handling in React today?",a:""},{id:"adv-193",q:"Formik vs Redux Form: why do people prefer Formik?",a:""},{id:"adv-194",q:"Why is inheritance not required in React?",a:""},{id:"adv-195",q:"Can you use web components in React apps?",a:""},{id:"adv-196",q:"What is dynamic import and why is it useful?",a:""},{id:"adv-197",q:"What are loadable components?",a:""},{id:"adv-198",q:"What is Suspense in React?",a:""},{id:"adv-199",q:"Route-based code splitting: how does it work?",a:""},{id:"adv-200",q:"Context default value: what is it used for?",a:""},{id:"adv-201",q:"What is the diffing algorithm in React (high level)?",a:""},{id:"adv-202",q:"What rules does diffing rely on?",a:""},{id:"adv-203",q:"When do you need refs (real cases)?",a:""},{id:"adv-204",q:"Do render props need to be named 'render'?",a:""},{id:"adv-205",q:"Render props with PureComponent: what problems can happen?",a:""},{id:"adv-206",q:"What is windowing/virtualization technique?",a:""},{id:"adv-207",q:"How do you print falsy values intentionally in JSX?",a:""},{id:"adv-208",q:"Portals: what is the most common real use case?",a:""},{id:"adv-209",q:"Uncontrolled component default values: how to set them?",a:""},{id:"adv-210",q:"What is your favorite React stack? What would you pick and why?",a:""},{id:"adv-211",q:"Real DOM vs Virtual DOM: explain like an interviewer.",a:""},{id:"adv-212",q:"How do you add Bootstrap to a React app?",a:""},{id:"adv-213",q:"Name a few big apps/sites that use React.",a:""},{id:"adv-214",q:"Is CSS-in-JS recommended? When yes, when no?",a:""},{id:"adv-215",q:"Do you need to convert all class components to hooks?",a:""},{id:"adv-216",q:"Fetching data with hooks: best patterns?",a:""},{id:"adv-217",q:"Do hooks cover all use cases of classes?",a:""},{id:"adv-218",q:"Hooks stable release: what does that mean practically?",a:""},{id:"adv-219",q:"Why does useState return array destructuring?",a:""},{id:"adv-220",q:"What sources influenced hooks design?",a:""},{id:"adv-221",q:"How do you access imperative APIs of web components?",a:""},{id:"adv-222",q:"Formik: what is it and where is it useful?",a:""},{id:"adv-223",q:"Middleware choices for async in Redux apps?",a:""},{id:"adv-224",q:"Can browsers understand JSX directly?",a:""},{id:"adv-225",q:"Explain React data flow clearly.",a:""},{id:"adv-226",q:"Concurrent rendering: what is it?",a:""},{id:"adv-227",q:"Async mode vs concurrent mode: what changed?",a:""},{id:"adv-228",q:"Can you use javascript: URLs in React? Any risks?",a:""},{id:"adv-229",q:"Why is ESLint plugin for hooks important?",a:""},{id:"adv-230",q:"Imperative vs declarative: explain using React examples.",a:""},{id:"adv-231",q:"TypeScript with React: benefits and tradeoffs.",a:""},{id:"adv-232",q:"How to keep user authenticated on refresh using Context API?",a:""},{id:"adv-233",q:"New JSX transform: what changed?",a:""},{id:"adv-234",q:"New JSX transform vs old transform: difference?",a:""},{id:"adv-235",q:"What are React Server Components (high level)?",a:""},{id:"adv-236",q:"What is prop drilling and how do you avoid it?",a:""},{id:"adv-237",q:"useState vs useRef: when to use which?",a:""},{id:"adv-238",q:"What is a wrapper component?",a:""},{id:"adv-239",q:"useEffect vs useLayoutEffect: practical difference?",a:""},{id:"adv-240",q:"Functional vs class components: differences that matter in interviews.",a:""},{id:"adv-241",q:"What is StrictMode and why does it double-render in dev?",a:""},{id:"adv-242",q:"Why is StrictMode useful?",a:""},{id:"adv-243",q:"JSX rules: key rules every dev must know.",a:""},{id:"adv-244",q:"Why must JSX return a single parent node?",a:""},{id:"adv-245",q:"Why should you not mutate arrays directly in state?",a:""},{id:"adv-246",q:"Capture phase events: what are they?",a:""},{id:"adv-247",q:"How does React update the screen after state changes?",a:""},{id:"adv-248",q:"How does React batch state updates?",a:""},{id:"adv-249",q:"Can we disable automatic batching?",a:""},{id:"adv-250",q:"What is hydration in React?",a:""},{id:"adv-251",q:"Update objects inside state: safe patterns?",a:""},{id:"adv-252",q:"Update nested objects: what is the best way?",a:""},{id:"adv-253",q:"Update arrays in state: preferred approaches?",a:""},{id:"adv-254",q:"Immer: how does it help with state updates?",a:""},{id:"adv-255",q:"Why are immutable updates important?",a:""},{id:"adv-256",q:"Preferred vs non-preferred array operations in state updates?",a:""},{id:"adv-257",q:"Defining nested components inside components: what can go wrong?",a:""},{id:"adv-258",q:"Can keys be used for non-list items? When does it help?",a:""},{id:"adv-259",q:"Guidelines for writing reducers (good style)?",a:""},{id:"adv-260",q:"What causes unnecessary rerenders in Context and how to reduce them?",a:""},{id:"adv-261",q:"useMemo/useCallback overuse: why it can backfire?",a:""},{id:"adv-262",q:"When should you use virtualization (react-window etc.)?",a:""},{id:"adv-263",q:"How do you handle large forms without lag?",a:""}]},Q={id:"hooks-deep",title:"Hooks Deep Dive",items:[{id:"hk-265",q:"useReducer: what is it and where is it useful?",a:""},{id:"hk-266",q:"useState vs useReducer: how do you decide?",a:""},{id:"hk-267",q:"useContext with useReducer: why do people combine them?",a:""},{id:"hk-268",q:"useContext: common use cases in real apps?",a:""},{id:"hk-269",q:"Client vs Server components: when to use which? (high level)",a:""},{id:"hk-270",q:"Next.js Page Router vs App Router: basic difference?",a:""},{id:"hk-271",q:"useMemo: what does it actually do?",a:""},{id:"hk-272",q:"Can hooks be used inside class components?",a:""},{id:"hk-273",q:"Updater function in setState: what is it and when is it needed?",a:""},{id:"hk-274",q:"Lazy initial state in useState: why is it helpful?",a:""},{id:"hk-275",q:"What types of values can useState hold?",a:""},{id:"hk-276",q:"What breaks if you call hooks conditionally?",a:""},{id:"hk-277",q:"Is useState synchronous? Explain batching.",a:""},{id:"hk-278",q:"Explain useState internally (high level).",a:""},{id:"hk-279",q:"Why use useReducer? What problem does it solve?",a:""},{id:"hk-280",q:"How does useReducer work? Explain with an example idea.",a:""},{id:"hk-281",q:"useReducer + useContext combo: how does it look?",a:""},{id:"hk-282",q:"Can you dispatch multiple actions back-to-back in useReducer?",a:""},{id:"hk-283",q:"How does useContext actually trigger rerenders?",a:""},{id:"hk-284",q:"Multiple contexts in one component: good or bad?",a:""},{id:"hk-285",q:"useContext pitfall with objects: what is it?",a:""},{id:"hk-286",q:"What value do you get if there is no matching Provider?",a:""},{id:"hk-287",q:"How dependency array changes useEffect behavior?",a:""},{id:"hk-288",q:"How often does setup/cleanup run in useEffect?",a:""},{id:"hk-289",q:"What happens if you return a Promise from useEffect?",a:""},{id:"hk-290",q:"Multiple useEffect hooks: good practice or not?",a:""},{id:"hk-291",q:"How to avoid infinite loops in useEffect?",a:""},{id:"hk-292",q:"useLayoutEffect: where is it actually used?",a:""},{id:"hk-293",q:"useLayoutEffect during SSR: what happens?",a:""},{id:"hk-294",q:"Why not use useLayoutEffect for normal logic?",a:""},{id:"hk-295",q:"Layout thrashing: how can useLayoutEffect cause it?",a:""},{id:"hk-296",q:"useRef for DOM access: give a real example idea.",a:""},{id:"hk-297",q:"useRef for persistent values across renders: how?",a:""},{id:"hk-298",q:"Can useRef store previous value?",a:""},{id:"hk-299",q:"Can refs be accessed in render?",a:""},{id:"hk-300",q:"Most common useRef use cases?",a:""},{id:"hk-301",q:"useImperativeHandle: what is it used for?",a:""},{id:"hk-302",q:"When should you use useImperativeHandle?",a:""},{id:"hk-303",q:"Can you use useImperativeHandle without forwardRef?",a:""},{id:"hk-304",q:"useMemo vs useCallback: actual difference?",a:""},{id:"hk-305",q:"Does useMemo stop rerenders? Explain properly.",a:""},{id:"hk-306",q:"useCallback: why is it used?",a:""},{id:"hk-307",q:"Custom hooks: what are they and how do you write them?",a:""},{id:"hk-308",q:"React Fiber deep: how does it work? (high level)",a:""},{id:"hk-309",q:"useId: what problem does it solve?",a:""},{id:"hk-310",q:"useDeferredValue: what is it?",a:""},{id:"hk-311",q:"useTransition vs useDeferredValue: difference?",a:""},{id:"hk-312",q:"useSyncExternalStore: why does it exist?",a:""},{id:"hk-313",q:"useInsertionEffect: what is it meant for?",a:""},{id:"hk-314",q:"How do you share logic via custom hooks?",a:""},{id:"hk-315",q:"useDebugValue: what is it used for?",a:""},{id:"hk-316",q:"Cleanup in useEffect: best practices?",a:""},{id:"hk-317",q:"useEffect vs useEvent (experimental): what’s the idea?",a:""},{id:"hk-318",q:"Hooks best practices: practical checklist.",a:""},{id:"hk-319",q:"Why missing dependency array items is dangerous? (stale closures)",a:""},{id:"hk-320",q:"Refs vs state: what should not go into state?",a:""},{id:"hk-321",q:"How do you debounce input in React without making it messy?",a:""}]},$={id:"legacy-classes",title:"Legacy and Class Component Topics (merged)",items:[{id:"cl-001",q:"Why should you not update state directly?",a:""},{id:"cl-002",q:"Why pass a callback/updater function to setState?",a:""},{id:"cl-003",q:"How to bind event handlers in class components?",a:""},{id:"cl-004",q:"How to pass parameters to event handlers safely?",a:""},{id:"cl-005",q:"What are refs and why are they used?",a:""},{id:"cl-006",q:"How do you create refs in class components?",a:""},{id:"cl-007",q:"What are forward refs?",a:""},{id:"cl-008",q:"Callback refs vs findDOMNode: which is better and why?",a:""},{id:"cl-009",q:"Why are string refs considered legacy?",a:""},{id:"cl-010",q:"React lifecycle phases: what are they?",a:""},{id:"cl-011",q:"List important lifecycle methods and their usage.",a:""},{id:"cl-012",q:"How do you proxy props in HOC patterns?",a:""},{id:"cl-013",q:"What is context in React (classic explanation)?",a:""},{id:"cl-014",q:"Why use super(props) in constructor?",a:""},{id:"cl-015",q:"How to set state using dynamic key names?",a:""},{id:"cl-016",q:"Common mistake: function called on every render. Why?",a:""},{id:"cl-017",q:"Error boundaries in React v16: what are they?",a:""},{id:"cl-018",q:"How was error handling different before v16?",a:""},{id:"cl-019",q:"Purpose of render method in react-dom?",a:""},{id:"cl-020",q:"What happens if you call setState in constructor?",a:""},{id:"cl-021",q:"Is it good to call setState in componentWillMount?",a:""},{id:"cl-022",q:"What happens if you set initial state from props?",a:""},{id:"cl-023",q:"Decorators in React: what are they about?",a:""},{id:"cl-024",q:"What is CRA and what benefits did it provide?",a:""},{id:"cl-025",q:"Mounting lifecycle order: what runs first?",a:""},{id:"cl-026",q:"Which lifecycle methods got deprecated and why?",a:""},{id:"cl-027",q:"getDerivedStateFromProps: what does it do?",a:""},{id:"cl-028",q:"getSnapshotBeforeUpdate: where is it useful?",a:""},{id:"cl-029",q:"Recommended naming conventions for components?",a:""},{id:"cl-030",q:"Recommended method ordering inside class components?",a:""},{id:"cl-031",q:"Why pass a function to setState (updater) is safer?",a:""},{id:"cl-032",q:"Why is isMounted an anti-pattern? What’s better?",a:""},{id:"cl-033",q:"Constructor vs getInitialState: what’s the story?",a:""},{id:"cl-034",q:"Force re-render without setState: can you?",a:""},{id:"cl-035",q:"super() vs super(props): practical difference?",a:""},{id:"cl-036",q:"setState vs replaceState: difference?",a:""},{id:"cl-037",q:"How to listen to state changes in React?",a:""},{id:"cl-038",q:"Best way to remove an item from array state?",a:""},{id:"cl-039",q:"Can you use React without rendering HTML?",a:""},{id:"cl-040",q:"Ways to update objects in state safely?",a:""},{id:"cl-041",q:"How to add polyfills in CRA apps?",a:""},{id:"cl-042",q:"How to run CRA with HTTPS locally?",a:""},{id:"cl-043",q:"How to avoid relative imports in CRA?",a:""},{id:"cl-044",q:"How to update a component every second?",a:""},{id:"cl-045",q:"Why constructor runs only once?",a:""},{id:"cl-046",q:"How to define constants in React codebase?",a:""},{id:"cl-047",q:"How to trigger click programmatically?",a:""},{id:"cl-048",q:"Where should you make AJAX calls in class lifecycle?",a:""},{id:"cl-049",q:"What are render props?",a:""},{id:"cl-050",q:"How to dispatch an action on load in Redux apps?",a:""},{id:"cl-051",q:"How to use connect from React Redux?",a:""},{id:"cl-052",q:"What does @ symbol mean in connect decorator style?",a:""},{id:"cl-053",q:"How to use TypeScript in CRA apps?",a:""},{id:"cl-054",q:"Do statics work on ES6 classes? Any caveats?",a:""},{id:"cl-055",q:"Why inline ref callbacks are not recommended?",a:""},{id:"cl-056",q:"HOC factory implementations: what does it mean?",a:""},{id:"cl-057",q:"Class field declarations syntax in React classes?",a:""},{id:"cl-058",q:"Why error boundaries don’t catch event handler errors?",a:""},{id:"cl-059",q:"try/catch vs error boundaries: difference?",a:""},{id:"cl-060",q:"What is the minimum method required in class component?",a:""},{id:"cl-061",q:"Possible return types from render method?",a:""},{id:"cl-062",q:"Main purpose of constructor in React class components?",a:""},{id:"cl-063",q:"Is constructor mandatory in class components?",a:""},{id:"cl-064",q:"Why not call setState in componentWillUnmount?",a:""},{id:"cl-065",q:"getDerivedStateFromError: what does it do?",a:""},{id:"cl-066",q:"Method order on re-render: what runs and when?",a:""},{id:"cl-067",q:"Methods invoked during error handling in React?",a:""},{id:"cl-068",q:"unmountComponentAtNode: what is it used for?",a:""},{id:"cl-069",q:"Limitations of HOCs?",a:""},{id:"cl-070",q:"How to debug forwardRefs in DevTools?",a:""},{id:"cl-071",q:"Are arrow functions in render a bad idea? Why?",a:""},{id:"cl-072",q:"Does React merge state updates? Explain.",a:""},{id:"cl-073",q:"Passing args to handlers: best approaches?",a:""},{id:"cl-074",q:"How to prevent component from rendering?",a:""},{id:"cl-075",q:"Context usage example (classic interview style).",a:""},{id:"cl-076",q:"contextType: what is it and how does it work?",a:""},{id:"cl-077",q:"What is a context consumer?",a:""},{id:"cl-078",q:"Context performance pitfalls and how to fix them?",a:""},{id:"cl-079",q:"forwardRef in HOCs: why and how?",a:""},{id:"cl-080",q:"Is ref available for all components? Any limits?",a:""},{id:"cl-081",q:"Why extra care is needed for forwardRef in libraries?",a:""},{id:"cl-082",q:"How to write class components without ES6 classes?",a:""},{id:"cl-083",q:"Can you use React without JSX?",a:""},{id:"cl-084",q:"How do you create HOC using render props approach?",a:""},{id:"cl-085",q:"What is react-scripts?",a:""},{id:"cl-086",q:"Features of create-react-app (CRA)?",a:""},{id:"cl-087",q:"renderToNodeStream: what was it used for?",a:""},{id:"cl-088",q:"How to scaffold Redux quickly with CRA?",a:""},{id:"cl-089",q:"What is state mutation and how do you prevent it?",a:""}]},Z=[J,F,N,j,L,B,X,V,z,G,Y,K,Q,$],ee=()=>{const f=c.useRef(null),y=c.useRef(null),u=c.useRef({scrollContent:!1}),[g,R]=D(),{flatQuestions:s,sectionsMeta:q,totalQuestions:l,idToIndex:k}=c.useMemo(()=>{const t=[],o=[],a={};return Z.forEach(n=>{const d=t.length;n.items.forEach(p=>{const h={sectionId:n.id,sectionTitle:n.title,id:p.id,q:p.q,a:p.a||""};a[h.id]=t.length,t.push(h)}),o.push({id:n.id,title:n.title,startIndex:d,count:n.items.length})}),{flatQuestions:t,sectionsMeta:o,totalQuestions:t.length,idToIndex:a}},[]),w=()=>{const t=g.get("q");if(!t)return 0;const o=k[t];return typeof o=="number"&&o>=0&&o<l?o:0},[r,v]=c.useState(()=>w()),i=l>0?s[r]:void 0,C=()=>{const t=f.current;t&&t.scrollIntoView({behavior:"smooth",block:"start"})},b=()=>{const t=y.current;if(!t)return;const o=t.querySelector(`[data-q-idx="${r}"]`);if(!o)return;const a=t.getBoundingClientRect(),n=o.getBoundingClientRect(),d=t.scrollTop,p=n.top-a.top-a.height/2+n.height/2;t.scrollTo({top:d+p,behavior:"smooth"})},x=t=>{const o=s[t];o&&R(a=>{const n=new URLSearchParams(a);return n.set("q",o.id),n},{replace:!0})},m=(t,o={scrollContent:!0})=>{if(!l)return;const a=Math.max(0,Math.min(l-1,t));u.current={scrollContent:!!o.scrollContent},v(a),x(a)},S=t=>{m(t,{scrollContent:!0})},I=()=>{m(r-1,{scrollContent:!0})},M=()=>{m(r+1,{scrollContent:!0})};c.useEffect(()=>{if(!s.length)return;g.get("q")||x(r),window.requestAnimationFrame(()=>{b()})},[s.length]),c.useEffect(()=>{if(!s.length)return;const t=w();t!==r&&(u.current={scrollContent:!1},v(t))},[g,s.length]),c.useEffect(()=>{if(!s.length)return;const{scrollContent:t}=u.current||{scrollContent:!1};window.requestAnimationFrame(()=>{b(),t&&C(),u.current={scrollContent:!1}})},[r,s.length]);const T=()=>q.map(t=>{const o=t.startIndex,a=o+t.count,n=s.slice(o,a);return e.jsxs("div",{className:"qnaSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("div",{className:"sectionTitle",children:t.title}),e.jsxs("div",{className:"sectionCount",children:[t.count," questions"]})]}),e.jsx("ul",{className:"qnaList",children:n.map((d,p)=>{const h=o+p,W=h===r;return e.jsx("li",{children:e.jsxs("button",{type:"button",className:`qnaItem ${W?"isActive":""}`,onClick:()=>S(h),title:d.q,"data-q-idx":h,"data-q-id":d.id,children:[e.jsxs("span",{className:"qIndex",children:[h+1,"."]}),e.jsx("span",{className:"qText",children:d.q})]})},d.id)})})]},t.id)});return e.jsxs(P.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"React Interview QnA"}),e.jsx("p",{className:"intro",children:"Crisp interview-style questions with practical answers and follow-ups. Use this for fast revision before interviews."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"QnA"}),e.jsx("span",{className:"chip",children:"Follow ups"}),e.jsx("span",{className:"chip",children:"Revision"})]})]}),e.jsxs("div",{className:"qnaGrid",children:[e.jsxs("div",{className:"qnaListWrapper",children:[e.jsxs("div",{className:"listTop",children:[e.jsxs("div",{className:"listTitle",children:[e.jsx("span",{className:"icon",children:e.jsx(H,{})}),"All Questions"]}),e.jsxs("div",{className:"listMeta",children:["Total: ",l]})]}),e.jsx("div",{className:"listBody",ref:y,children:T()})]}),e.jsx("div",{className:"content",ref:f,children:e.jsxs("div",{className:"contentCard",children:[e.jsxs("div",{className:"contentTop",children:[e.jsxs("div",{className:"contentMeta",children:[e.jsx("span",{className:"badge",children:(i==null?void 0:i.sectionTitle)||"React"}),e.jsxs("span",{className:"counter",children:[l?r+1:0," /"," ",l]})]}),e.jsxs("div",{className:"navButtons",children:[e.jsxs("button",{type:"button",className:"navBtn",onClick:I,disabled:r===0,"aria-label":"Previous question",title:"Previous question",children:[e.jsx(E,{}),"Prev"]}),e.jsxs("button",{type:"button",className:"navBtn",onClick:M,disabled:!l||r===l-1,"aria-label":"Next question",title:"Next question",children:["Next",e.jsx(U,{})]})]})]}),e.jsxs("div",{className:"questionBlock",children:[e.jsxs("div",{className:"qTitle",children:[e.jsx("span",{className:"qIcon",children:e.jsx(A,{})}),e.jsx("span",{className:"qLabel",children:"Question"})]}),e.jsx("div",{className:"qTextBig",children:(i==null?void 0:i.q)||""})]}),e.jsxs("div",{className:"answerBlock",children:[e.jsx("div",{className:"aTitle",children:"Answer"}),i!=null&&i.a?e.jsx("div",{className:"aText",dangerouslySetInnerHTML:{__html:i.a}}):e.jsx("div",{className:"emptyAnswer",children:"Answer not added yet. Add it later in data.js"})]}),e.jsx("div",{className:"hint",children:"Tip: URL stores current question, so refresh keeps your spot."})]})})]})]})};export{ee as default};
