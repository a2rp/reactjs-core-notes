export const coreReact = {
    id: "core-react",
    title: "Core React",
    items: [
        {
            id: "core-001",
            q: "What is React, in simple terms?",
            a: `
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
        `,
        },
        {
            id: "core-002",
            q: "How did React evolve over time? Quick history.",
            a: `<p>
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
`,
        },
        {
            id: "core-003",
            q: "What are the top features React is known for?",
            a: `<p>
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
`,
        },
        {
            id: "core-004",
            q: "What is JSX and why do we use it?",
            a: `<p>
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
`,
        },
        {
            id: "core-005",
            q: "Element vs Component: what is the real difference?",
            a: `<p>
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
`,
        },
        {
            id: "core-006",
            q: "How do you create a component in React?",
            a: `<p>
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
`,
        },
        {
            id: "core-007",
            q: "When would you still choose class components over function components?",
            a: `<p>
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
`,
        },
        {
            id: "core-008",
            q: "What is a PureComponent and how is it different?",
            a: `<p>
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
`,
        },
        {
            id: "core-009",
            q: "What is state in React?",
            a: `<p>
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
`,
        },
        {
            id: "core-010",
            q: "What are props in React?",
            a: `
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
`,
        },

        {
            id: "core-011",
            q: "State vs props: explain with a real example.",
            a: `
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
    Let's say we want a reusable counter component that shows a label
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
`,
        },
        {
            id: "core-012",
            q: "React event handling vs HTML events: what changes?",
            a: `
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
    This meant you couldn't access the event asynchronously.
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
    You don't pass arguments directly like in HTML.
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
`,
        },

        {
            id: "core-013",
            q: "What are SyntheticEvents?",
            a: `
<p>
    <strong>SyntheticEvent</strong> is React's <em>cross-browser wrapper</em>
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
    A <strong>SyntheticEvent</strong> is React's cross-browser wrapper around
    native DOM events that provides a consistent API and enables efficient
    event handling through delegation.
</p>
`,
        },
        {
            id: "core-014",
            q: "Inline conditional rendering: common patterns?",
            a: `
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
`,
        },

        {
            id: "core-015",
            q: "What is the key prop and why does it matter?",
            a: `
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

<h4>What happens if you don't use keys?</h4>

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
`,
        },
        {
            id: "core-016",
            q: "What is the Virtual DOM?",
            a: `
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
`,
        },
        {
            id: "core-017",
            q: "How does Virtual DOM update the real DOM efficiently?",
            a: `
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
`,
        },

        {
            id: "core-018",
            q: "Shadow DOM vs Virtual DOM: what is the difference?",
            a: `
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
`,
        },
        {
            id: "core-019",
            q: "What is React Fiber?",
            a: `
<p>
    <strong>React Fiber</strong> is the <em>internal re-implementation</em> of
    React's core rendering algorithm, introduced in <strong>React 16</strong>.
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
    <strong>React Fiber</strong> is React's internal rendering engine that
    allows rendering work to be split, paused, prioritized, and resumed,
    enabling concurrent rendering and smoother user experiences.
</p>
`,
        },

        {
            id: "core-020",
            q: "What was Fiber created to solve?",
            a: `
<p>
    <strong>React Fiber</strong> was created to solve one core problem:
    <em>React's old rendering engine was too synchronous and blocking</em>
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
    Fiber re-architected React's rendering engine so that rendering work can be:
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
`,
        },
        {
            id: "core-021",
            q: "Controlled components: what and why?",
            a: `
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
`,
        },

        {
            id: "core-022",
            q: "Uncontrolled components: what and when?",
            a: `
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
`,
        },
        {
            id: "core-023",
            q: "createElement vs cloneElement: where do they fit?",
            a: `
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
    <li>You don't know what the child is</li>
    <li>You don't want to re-create it</li>
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
`,
        },
        {
            id: "core-024",
            q: "What does lifting state up mean in practice?",
            a: `<p>
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
        cannot directly change another sibling's state.
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
`,
        },
        {
            id: "core-025",
            q: "What are Higher-Order Components (HOCs)?",
            a: `
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
    Let's say we want to log whenever a component renders.
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
`,
        },
        {
            id: "core-026",
            q: "What is the children prop used for?",
            a: `
<p>
    The <strong>children</strong> prop is a special prop in React that represents
    <em>whatever is placed between a component's opening and closing tags</em>.
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
        Don't assume children is always an array
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
`,
        },
        {
            id: "core-027",
            q: "How do you write comments inside JSX?",
            a: `
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
`,
        },
        {
            id: "core-028",
            q: "What is reconciliation in React?",
            a: `
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
`,
        },
        {
            id: "core-029",
            q: "Does React.lazy work with named exports? If not, what's the workaround?",
            a: `
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
`,
        },
        {
            id: "core-030",
            q: "Why do we use className instead of class in JSX?",
            a: `
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
`,
        },
        {
            id: "core-031",
            q: "What are React Fragments?",
            a: `
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
`,
        },
        {
            id: "core-032",
            q: "Why are fragments better than extra div wrappers?",
            a: `<p>
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
`,
        },
        {
            id: "core-033",
            q: "What are portals and when are they useful?",
            a: `
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
`,
        },
        {
            id: "core-034",
            q: "Stateless vs stateful components: meaning today?",
            a: `
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
`,
        },

        {
            id: "core-035",
            q: "How do you validate props in React?",
            a: `
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
`,
        },

        {
            id: "core-036",
            q: "What are the advantages of React?",
            a: `
<p>
    React is popular because it makes building complex user interfaces
    <strong>predictable</strong>, <strong>reusable</strong>, and
    <strong>scalable</strong>.
</p>

<p>
    It focuses only on the UI layer, but provides powerful patterns that
    help manage state and rendering efficiently.
</p>

<hr />

<h4>1. Component-based architecture</h4>

<p>
    React applications are built using small, reusable components.
    Each component manages its own logic and UI, which improves
    maintainability and code organization.
</p>

<ul>
    <li>Encourages reusability</li>
    <li>Improves separation of concerns</li>
    <li>Makes large applications easier to manage</li>
</ul>

<hr />

<h4>2. Declarative UI</h4>

<p>
    React follows a declarative approach. You describe <strong>what</strong>
    the UI should look like for a given state, and React updates the DOM accordingly.
</p>

<pre><code>
function Greeting({ name }) {
    return &lt;h1&gt;Hello, {name}&lt;/h1&gt;;
}
</code></pre>

<p>
    This reduces manual DOM manipulation and makes UI logic easier to reason about.
</p>

<hr />

<h4>3. Efficient rendering model</h4>

<p>
    React minimizes DOM updates using reconciliation and batching.
    Instead of reloading the entire page, it updates only the parts
    that actually changed.
</p>

<ul>
    <li>Better performance for dynamic UIs</li>
    <li>Optimized diffing algorithm</li>
</ul>

<hr />

<h4>4. One-way data flow</h4>

<p>
    Data flows from parent to child via props.
    This makes state changes more predictable and easier to debug.
</p>

<ul>
    <li>Improves application stability</li>
    <li>Reduces unexpected side effects</li>
</ul>

<hr />

<h4>5. Strong ecosystem and flexibility</h4>

<p>
    React provides flexibility in choosing libraries for routing,
    state management, and data fetching.
</p>

<ul>
    <li>Routing - React Router</li>
    <li>State management - Context API, Redux</li>
    <li>Data fetching - React Query, SWR</li>
</ul>

<hr />

<h4>6. Cross-platform development</h4>

<p>
    React concepts extend to React Native for building mobile applications.
    This allows developers to reuse knowledge across platforms.
</p>

<hr />

<h4>7. Large community and industry adoption</h4>

<p>
    React has strong community support, extensive documentation,
    and wide industry usage, making it a stable long-term choice.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Reusable component-based architecture</li>
    <li>Declarative and predictable UI updates</li>
    <li>Efficient rendering and performance optimizations</li>
    <li>One-way data flow</li>
    <li>Strong ecosystem and cross-platform support</li>
</ul>

<p>
    React's main advantage is that it simplifies building scalable
    and maintainable user interfaces while remaining flexible.
</p>
`,
        },

        {
            id: "core-037",
            q: "What are common limitations or pain points in React?",
            a: `
<p>
    React is powerful and widely adopted, but like any technology,
    it has some real-world limitations and pain points that developers
    should understand.
</p>

<hr />

<h4>1. React is only the UI layer</h4>

<p>
    React focuses only on building user interfaces. It does not include
    built-in solutions for routing, state management, data fetching,
    or form handling.
</p>

<p>
    Developers must choose additional libraries such as React Router,
    Redux, or React Query. While this flexibility is powerful, it can
    also create decision fatigue and inconsistency across projects.
</p>

<hr />

<h4>2. State management complexity in large apps</h4>

<p>
    Local component state is simple, but as applications grow,
    managing shared state across many components becomes complex.
</p>

<ul>
    <li>Prop drilling across multiple layers</li>
    <li>Overusing Context leading to re-render issues</li>
    <li>Complex global state logic</li>
</ul>

<p>
    Without proper architecture, state management can become difficult
    to maintain.
</p>

<hr />

<h4>3. Performance pitfalls</h4>

<p>
    React is efficient, but developers can easily introduce
    unnecessary re-renders.
</p>

<ul>
    <li>Creating new object or function references on every render</li>
    <li>Incorrect or unstable keys in lists</li>
    <li>Large component trees without memoization</li>
</ul>

<p>
    React does not automatically optimize everything.
    Developers must understand rendering behavior.
</p>

<hr />

<h4>4. Boilerplate and architectural decisions</h4>

<p>
    In medium to large projects, codebases can become filled with
    custom hooks, providers, wrappers, and abstraction layers.
</p>

<p>
    If patterns are not clearly defined, the codebase may feel fragmented.
</p>

<hr />

<h4>5. SEO and SSR complexity</h4>

<p>
    By default, React apps are single-page applications.
    This can affect SEO unless server-side rendering or
    static rendering is used.
</p>

<p>
    Frameworks like Next.js are commonly used to solve this.
</p>

<hr />

<h4>6. Ecosystem volatility</h4>

<p>
    React core is stable, but the surrounding ecosystem
    evolves rapidly. Tooling, bundlers, and recommended
    patterns can change frequently.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>React is only the view layer</li>
    <li>Scaling state management requires good architecture</li>
    <li>Performance issues can occur if patterns are misused</li>
    <li>SSR and SEO require additional setup</li>
</ul>

<p>
    React is powerful, but it requires strong architectural
    decisions to scale effectively.
</p>
`,
        },
        {
            id: "core-038",
            q: "Static type checking in React: what are the recommended options?",
            a: `
<p>
    Static type checking in React helps catch errors <strong>before runtime</strong>.
    It ensures that props, state, function parameters, and API data follow the expected structure.
    This improves reliability and refactoring safety.
</p>

<hr />

<h4>1. TypeScript - the modern standard</h4>

<p>
    <strong>TypeScript</strong> is the most recommended and widely adopted option
    for static type checking in React today.
</p>

<p>
    It provides compile-time validation, better IDE autocomplete,
    safer refactoring, and improved developer experience.
</p>

<pre><code>
type UserCardProps = {
    name: string;
    age?: number;
    isAdmin: boolean;
};

function UserCard({ name, age, isAdmin }: UserCardProps) {
    return (
        &lt;div&gt;
            &lt;h3&gt;{name}&lt;/h3&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
            {isAdmin && &lt;span&gt;Admin&lt;/span&gt;}
        &lt;/div&gt;
    );
}
</code></pre>

<p>
    If the wrong type is passed, TypeScript shows an error during development
    before the code even runs.
</p>

<hr />

<h4>2. Flow - older alternative</h4>

<p>
    <strong>Flow</strong> is another static type checker originally developed by Facebook.
</p>

<ul>
    <li>Provides compile-time type checking</li>
    <li>Similar concept to TypeScript</li>
    <li>Less commonly used today compared to TypeScript</li>
</ul>

<p>
    In most modern React projects, TypeScript has largely replaced Flow.
</p>

<hr />

<h4>3. How static typing differs from PropTypes</h4>

<ul>
    <li>TypeScript and Flow check types at compile-time</li>
    <li>PropTypes only show warnings in development</li>
    <li>PropTypes do not prevent runtime issues in production</li>
</ul>

<p>
    Static typing is stronger because it prevents incorrect code from compiling.
</p>

<hr />

<h4>4. Important practical note</h4>

<p>
    Static typing protects your code structure, but it does not validate external
    API data at runtime.
</p>

<p>
    For API validation, libraries like Zod or Yup are commonly used alongside TypeScript.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>TypeScript is the recommended option for static type checking in React</li>
    <li>Flow exists but is less common today</li>
    <li>Static typing catches errors before runtime</li>
    <li>PropTypes are not true static type checking</li>
</ul>

<p>
    In modern React applications, TypeScript is considered the standard approach
    for static type safety.
</p>
`,
        },

        {
            id: "core-039",
            q: "What does react-dom do and why is it separate from react?",
            a: `
<p>
    The <strong>react</strong> package contains the core React library. It includes
    the logic for creating components, managing state, hooks, and the reconciliation
    algorithm.
</p>

<p>
    The <strong>react-dom</strong> package is responsible for rendering React
    components into the browser DOM.
</p>

<hr />

<h4>1. What does react-dom actually do?</h4>

<p>
    react-dom connects React to the browser environment. It provides methods
    that allow React elements to be rendered into real DOM nodes.
</p>

<pre><code>
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(&lt;App /&gt;);
</code></pre>

<p>
    Here, <code>createRoot</code> and <code>render</code> come from react-dom.
    React itself does not know anything about the browser DOM.
</p>

<hr />

<h4>2. Why is react-dom separate from react?</h4>

<ul>
    <li>React core is platform-independent.</li>
    <li>Different platforms have different renderers.</li>
    <li>This separation keeps React flexible and reusable.</li>
</ul>

<p>
    For example:
</p>

<ul>
    <li><strong>react-dom</strong> renders to the browser DOM</li>
    <li><strong>react-native</strong> renders to native mobile components</li>
    <li><strong>react-three-fiber</strong> renders to WebGL</li>
</ul>

<p>
    Because React is separated from the rendering layer, it can work across
    multiple platforms without changing its core logic.
</p>

<hr />

<h4>3. Interview-level understanding</h4>

<p>
    React handles the virtual DOM and reconciliation logic, while react-dom
    handles updating the real browser DOM.
</p>

<p>
    This separation follows the renderer pattern - React defines what should
    happen, and react-dom defines how it gets applied in the browser.
</p>

<hr />

<h4>4. One-line summary</h4>

<p>
    react contains the core UI logic and reconciliation engine, while react-dom
    is the browser-specific renderer that mounts and updates components in the DOM.
</p>
`,
        },

        {
            id: "core-040",
            q: "What is ReactDOMServer used for?",
            a: `
<p>
    <strong>ReactDOMServer</strong> is used for <strong>server-side rendering - SSR</strong>
    in React applications. It allows React components to be rendered into
    HTML strings on the server instead of the browser.
</p>

<p>
    Instead of sending an empty HTML file and letting JavaScript build the UI
    in the browser, the server sends already-rendered HTML.
</p>

<hr />

<h4>1. Why use ReactDOMServer?</h4>

<ul>
    <li>Better SEO - search engines can read fully rendered HTML</li>
    <li>Faster first contentful paint - quicker initial load perception</li>
    <li>Improved performance on slower devices</li>
</ul>

<hr />

<h4>2. Common ReactDOMServer methods</h4>

<p>
    ReactDOMServer provides methods like:
</p>

<pre><code>
import ReactDOMServer from "react-dom/server";

const htmlString = ReactDOMServer.renderToString(&lt;App /&gt;);
</code></pre>

<p>
    This converts a React component tree into an HTML string.
</p>

<hr />

<h4>3. renderToString vs renderToStaticMarkup</h4>

<ul>
    <li>
        <strong>renderToString</strong> - includes extra React attributes
        required for hydration on the client
    </li>
    <li>
        <strong>renderToStaticMarkup</strong> - generates plain HTML without
        React-specific data attributes
    </li>
</ul>

<hr />

<h4>4. Hydration - important concept</h4>

<p>
    After server rendering, the browser loads JavaScript and React
    attaches event listeners to the existing HTML. This process is called
    <strong>hydration</strong>.
</p>

<pre><code>
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document.getElementById("root"), &lt;App /&gt;);
</code></pre>

<p>
    Hydration makes the static HTML interactive again.
</p>

<hr />

<h4>5. Modern usage</h4>

<p>
    In real-world projects, developers usually do not call ReactDOMServer
    manually. Frameworks like Next.js and Remix handle server rendering internally.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>ReactDOMServer renders React components to HTML on the server</li>
    <li>Used for SSR - SEO and performance improvements</li>
    <li>Works together with hydration on the client</li>
    <li>Common in frameworks like Next.js</li>
</ul>

<p>
    In short, ReactDOMServer enables server-side rendering by converting
    React components into HTML strings before they reach the browser.
</p>
`,
        },

        {
            id: "core-041",
            q: "How to use innerHTML in React safely?",
            a: `
<p>
    In React, you should never directly use <code>element.innerHTML</code>
    like you would in plain JavaScript. React provides a special prop called
    <strong>dangerouslySetInnerHTML</strong> for rendering raw HTML.
</p>

<p>
    It is called "dangerous" because inserting raw HTML can expose your
    application to <strong>XSS - Cross Site Scripting</strong> attacks.
</p>

<hr />

<h4>1. Basic usage of dangerouslySetInnerHTML</h4>

<p>
    To render HTML content, you must pass an object with a property named
    <code>__html</code>.
</p>

<pre><code>
function Content({ html }) {
    return (
        &lt;div
            dangerouslySetInnerHTML={{ __html: html }}
        /&gt;
    );
}
</code></pre>

<p>
    React requires the object wrapper intentionally to make you aware
    that you are injecting raw HTML.
</p>

<hr />

<h4>2. Why is it dangerous?</h4>

<p>
    If the HTML string comes from user input or an untrusted API,
    it may contain malicious scripts.
</p>

<pre><code>
const html = "&lt;img src=x onerror=alert('Hacked') /&gt;";
</code></pre>

<p>
    If injected directly, this could execute JavaScript inside the browser.
    That is an XSS vulnerability.
</p>

<hr />

<h4>3. How to use it safely</h4>

<ul>
    <li>Never inject raw user input directly</li>
    <li>Sanitize the HTML before rendering</li>
    <li>Use a trusted sanitization library like DOMPurify</li>
</ul>

<pre><code>
import DOMPurify from "dompurify";

function SafeContent({ html }) {
    const clean = DOMPurify.sanitize(html);

    return (
        &lt;div dangerouslySetInnerHTML={{ __html: clean }} /&gt;
    );
}
</code></pre>

<p>
    Sanitization removes dangerous scripts and attributes.
</p>

<hr />

<h4>4. When should you use it?</h4>

<ul>
    <li>Rendering CMS content</li>
    <li>Rendering markdown converted to HTML</li>
    <li>Displaying formatted rich text from trusted sources</li>
</ul>

<p>
    In most normal UI cases, you should avoid it and use JSX instead.
</p>

<hr />

<h4>5. Interview-ready summary</h4>

<ul>
    <li>React does not allow direct innerHTML usage</li>
    <li>Use dangerouslySetInnerHTML with an object containing __html</li>
    <li>It can cause XSS vulnerabilities</li>
    <li>Always sanitize untrusted HTML before rendering</li>
</ul>

<p>
    The safest rule is - avoid raw HTML unless absolutely necessary,
    and sanitize everything that comes from outside your control.
</p>
`,
        },

        {
            id: "core-042",
            q: "How do you style components in React? Common approaches.",
            a: `
<p>
    In React, styling components can be done in multiple ways depending on
    project size, team preference, and scalability needs.
    React itself does not enforce any styling method, so you can choose
    what fits your architecture.
</p>

<hr />

<h4>1. Plain CSS (traditional approach)</h4>

<p>
    The simplest way is using regular CSS files and importing them into
    your component.
</p>

<pre><code>
import "./button.css";

function Button() {
    return &lt;button className="btn"&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    This works well for small projects but can lead to global namespace
    conflicts in larger applications.
</p>

<hr />

<h4>2. CSS Modules</h4>

<p>
    CSS Modules scope styles locally to the component and avoid class
    name collisions.
</p>

<pre><code>
import styles from "./Button.module.css";

function Button() {
    return &lt;button className={styles.btn}&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    The class names are automatically generated and isolated.
</p>

<hr />

<h4>3. Inline styles</h4>

<p>
    You can pass a JavaScript object directly to the style prop.
</p>

<pre><code>
function Button() {
    return (
        &lt;button style={{ backgroundColor: "black", color: "white" }}&gt;
            Click
        &lt;/button&gt;
    );
}
</code></pre>

<p>
    Inline styles are useful for dynamic values but do not support
    pseudo-classes like :hover or media queries.
</p>

<hr />

<h4>4. Styled-components (CSS-in-JS)</h4>

<p>
    Styled-components allow writing actual CSS inside JavaScript and
    create scoped, reusable styled components.
</p>

<pre><code>
import styled from "styled-components";

const Button = styled.button\`
    background: black;
    color: white;
    padding: 8px 16px;
\`;

function App() {
    return &lt;Button&gt;Click&lt;/Button&gt;;
}
</code></pre>

<p>
    This approach keeps styles close to the component and supports
    dynamic props and theming.
</p>

<hr />

<h4>5. Utility-first frameworks (Tailwind CSS)</h4>

<p>
    Utility-first libraries like Tailwind apply styles directly using
    predefined class utilities.
</p>

<pre><code>
function Button() {
    return &lt;button className="bg-black text-white px-4 py-2"&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    This avoids writing custom CSS but can make JSX look crowded.
</p>

<hr />

<h4>6. UI Component Libraries</h4>

<p>
    Libraries like Material UI, Ant Design, and Chakra UI provide
    pre-styled components that you can customize.
</p>

<p>
    These are useful for building dashboards and enterprise apps quickly.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>React supports multiple styling approaches</li>
    <li>Plain CSS and CSS Modules are simple and effective</li>
    <li>Inline styles are good for dynamic values</li>
    <li>Styled-components allow scoped and dynamic styling</li>
    <li>Utility frameworks and UI libraries speed up development</li>
</ul>

<p>
    In real-world projects, CSS Modules, styled-components, or Tailwind
    are commonly used depending on the team's architecture decisions.
</p>
`,
        },

        {
            id: "core-043",
            q: "How are events 'different' in React under the hood?",
            a: `
<p>
    Events in React are not attached directly to DOM elements the same way
    as native JavaScript events. React uses a system called the
    <strong>Synthetic Event System</strong> to handle events consistently
    across browsers.
</p>

<hr />

<h4>1. Synthetic Events instead of native DOM events</h4>

<p>
    In normal JavaScript, events come directly from the browser:
</p>

<pre><code>
button.addEventListener("click", handler);
</code></pre>

<p>
    In React, when you write:
</p>

<pre><code>
&lt;button onClick={handleClick}&gt;Click&lt;/button&gt;
</code></pre>

<p>
    React wraps the native browser event inside a
    <strong>SyntheticEvent</strong> object.
    This object normalizes event behavior across different browsers.
</p>

<hr />

<h4>2. Event delegation at the root</h4>

<p>
    React does not attach separate event listeners to every DOM node.
    Instead, it attaches a single listener at the root and uses
    <strong>event delegation</strong>.
</p>

<ul>
    <li>One top-level listener per event type</li>
    <li>React determines which component should handle it</li>
    <li>This improves performance for large trees</li>
</ul>

<p>
    This is why React event handling is efficient even with many components.
</p>

<hr />

<h4>3. Consistent cross-browser behavior</h4>

<p>
    Different browsers historically handled events differently.
    React's SyntheticEvent ensures properties like:
</p>

<ul>
    <li>event.target</li>
    <li>event.preventDefault()</li>
    <li>event.stopPropagation()</li>
</ul>

<p>
    behave consistently everywhere.
</p>

<hr />

<h4>4. Event pooling - historical note</h4>

<p>
    In older versions of React, SyntheticEvent objects were pooled and reused
    for performance reasons. This meant you could not access event properties
    asynchronously without calling <code>event.persist()</code>.
</p>

<p>
    In modern React versions, event pooling has been removed,
    so this is no longer an issue.
</p>

<hr />

<h4>5. Key differences from native events</h4>

<ul>
    <li>Uses SyntheticEvent wrapper</li>
    <li>Uses root-level event delegation</li>
    <li>Normalizes behavior across browsers</li>
    <li>Modern React no longer pools events</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    React events are handled using a SyntheticEvent system that wraps
    native DOM events, uses event delegation at the root for performance,
    and normalizes behavior across browsers. This makes event handling
    consistent and efficient compared to direct DOM listeners.
</p>
`,
        },

        {
            id: "core-044",
            q: "What problems happen when you use array index as key?",
            a: `
<p>
    In React, the <strong>key</strong> prop helps React identify which items
    in a list have changed, been added, or removed.
</p>

<p>
    Using the <strong>array index as key</strong> may seem harmless, but it can
    cause subtle UI bugs when the list order changes.
</p>

<hr />

<h4>1. Wrong component reuse after reordering</h4>

<p>
    React uses keys to match previous elements with new ones during reconciliation.
    If you use the index as key and reorder the list, React may reuse the wrong
    component instance.
</p>

<pre><code>
{items.map((item, index) => (
    &lt;ListItem key={index} value={item} /&gt;
))}
</code></pre>

<p>
    If an item moves from position 3 to position 1, its key changes from 3 to 1.
    React thinks it is a completely different item.
</p>

<hr />

<h4>2. Input state bugs</h4>

<p>
    This becomes very visible with controlled inputs inside lists.
    When items are inserted or removed, input values may appear to
    "jump" to the wrong row.
</p>

<ul>
    <li>Typing in one input updates another</li>
    <li>Focus suddenly shifts</li>
    <li>Checkbox states mix up</li>
</ul>

<hr />

<h4>3. Performance degradation</h4>

<p>
    React may re-render more items than necessary because it cannot
    properly track which items are stable.
</p>

<p>
    Stable unique keys allow React to minimize DOM operations.
</p>

<hr />

<h4>4. When is index safe to use?</h4>

<p>
    Using index as key is acceptable only when:
</p>

<ul>
    <li>The list is static</li>
    <li>Items are never reordered</li>
    <li>Items are never inserted or removed</li>
</ul>

<p>
    In real-world apps, those conditions are rarely guaranteed.
</p>

<hr />

<h4>Better approach</h4>

<p>
    Always use a stable unique identifier:
</p>

<pre><code>
{items.map((item) => (
    &lt;ListItem key={item.id} value={item} /&gt;
))}
</code></pre>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Index as key breaks React's reconciliation when list order changes</li>
    <li>Can cause incorrect component reuse</li>
    <li>Leads to input state and UI bugs</li>
    <li>Only safe for static, non-changing lists</li>
</ul>

<p>
    In production apps, always prefer a stable unique key over array index.
</p>
`,
        },

        {
            id: "core-045",
            q: "Ways to conditionally render UI in React?",
            a: `
<p>
    In React, conditional rendering means showing different UI elements
    depending on state, props, or any logical condition.
</p>

<p>
    Since JSX is just JavaScript, we can use normal JS logic inside it.
</p>

<hr />

<h4>1. if statement (outside JSX)</h4>

<p>
    Useful when rendering completely different UI blocks.
</p>

<pre><code>
function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return &lt;h2&gt;Welcome back!&lt;/h2&gt;;
    }

    return &lt;h2&gt;Please sign in.&lt;/h2&gt;;
}
</code></pre>

<p>
    This approach is clean when logic is large or when returning early.
</p>

<hr />

<h4>2. Ternary operator - condition ? A : B</h4>

<p>
    Most common way to render one of two UI elements.
</p>

<pre><code>
{isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;}
</code></pre>

<p>
    Best for short inline conditions.
</p>

<hr />

<h4>3. Logical AND - condition && UI</h4>

<p>
    Useful when you only want to render something if the condition is true.
</p>

<pre><code>
{isAdmin && &lt;button&gt;Delete&lt;/button&gt;}
</code></pre>

<p>
    Important - if the left side evaluates to 0, React will render 0.
    So be careful with numeric conditions.
</p>

<hr />

<h4>4. Logical OR - fallback rendering</h4>

<pre><code>
{username || "Guest"}
</code></pre>

<p>
    This renders a fallback value if the left side is falsy.
</p>

<hr />

<h4>5. Using variables to store JSX</h4>

<p>
    You can assign JSX to a variable before returning.
</p>

<pre><code>
let content;

if (isLoading) {
    content = &lt;Spinner /&gt;;
} else {
    content = &lt;Profile /&gt;;
}

return &lt;div&gt;{content}&lt;/div&gt;;
</code></pre>

<hr />

<h4>6. Immediately Invoked Function Expression - IIFE</h4>

<p>
    Useful when more complex logic is needed inside JSX.
</p>

<pre><code>
{
    (() =&gt; {
        if (role === "admin") return &lt;AdminPanel /&gt;;
        if (role === "user") return &lt;UserPanel /&gt;;
        return &lt;GuestPanel /&gt;;
    })()
}
</code></pre>

<hr />

<h4>7. Switch statement</h4>

<pre><code>
switch (status) {
    case "success":
        return &lt;Success /&gt;;
    case "error":
        return &lt;Error /&gt;;
    default:
        return &lt;Loading /&gt;;
}
</code></pre>

<p>
    Good when multiple conditions exist.
</p>

<hr />

<h4>8. Rendering null to hide UI</h4>

<pre><code>
if (!isVisible) return null;
</code></pre>

<p>
    Returning null means render nothing.
</p>

<hr />

<h4>Common mistakes</h4>

<ul>
    <li>Using complex nested ternaries - reduces readability</li>
    <li>Using index as key while conditionally rendering lists</li>
    <li>Forgetting that 0 and empty string can render</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Use if for large blocks</li>
    <li>Use ternary for two-way conditions</li>
    <li>Use && for simple show or hide</li>
    <li>Return null to render nothing</li>
    <li>Avoid deeply nested ternaries</li>
</ul>

<p>
    In practice, clean conditional rendering improves readability
    and reduces unnecessary component re-renders.
</p>
`,
        },

        {
            id: "core-046",
            q: "Why is spreading props on DOM elements risky?",
            a: `
<p>
    Spreading props on DOM elements using <code>{...props}</code> can be convenient,
    but it can also introduce subtle bugs and unexpected behavior if not used carefully.
</p>

<hr />

<h4>1. Unknown or invalid DOM attributes</h4>

<p>
    When you spread all props directly onto a DOM element, you might accidentally
    pass props that are not valid HTML attributes.
</p>

<pre><code>
function Button(props) {
    return &lt;button {...props}&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    If someone passes a custom prop like <code>isPrimary</code>, it will also be
    forwarded to the DOM:
</p>

<pre><code>
&lt;Button isPrimary={true} /&gt;
</code></pre>

<p>
    This can cause React warnings or unexpected attributes in the rendered HTML.
</p>

<hr />

<h4>2. Leaking internal implementation details</h4>

<p>
    Sometimes components accept internal-only props that should not reach the DOM.
    Spreading blindly makes it harder to control what actually gets rendered.
</p>

<p>
    This reduces clarity and makes the component less predictable.
</p>

<hr />

<h4>3. Overriding important attributes accidentally</h4>

<p>
    Spread order matters. If you mix explicit props and spread props,
    you can unintentionally override values.
</p>

<pre><code>
&lt;button type="button" {...props}&gt;
</code></pre>

<p>
    If <code>props</code> contains <code>type="submit"</code>, it will override
    your intended value.
</p>

<hr />

<h4>4. Security concerns in some cases</h4>

<p>
    If untrusted data is spread into a DOM element, it may introduce unwanted
    attributes like event handlers or malformed data.
</p>

<p>
    While React escapes text content by default, blindly forwarding props
    increases the surface area for mistakes.
</p>

<hr />

<h4>5. Better pattern - explicit destructuring</h4>

<p>
    A safer approach is to destructure known props and forward only the rest
    intentionally.
</p>

<pre><code>
function Button({ isPrimary, ...rest }) {
    return &lt;button {...rest}&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    This way, internal props stay internal, and only valid DOM props are forwarded.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Spreading props may pass invalid HTML attributes to the DOM</li>
    <li>It can leak internal component props</li>
    <li>Spread order can override important attributes</li>
    <li>Explicit destructuring is safer and clearer</li>
</ul>

<p>
    Spreading props is powerful, but it should be used intentionally, not blindly.
</p>
`,
        },

        {
            id: "core-047",
            q: "How do you memoize things in React? (components, values, functions)",
            a: `
<p>
    In React, <strong>memoization</strong> is used to avoid unnecessary
    recalculations and re-renders. It helps improve performance by
    reusing previously computed results when inputs have not changed.
</p>

<p>
    In React, you typically memoize three things:
</p>

<ul>
    <li>Components</li>
    <li>Values</li>
    <li>Functions</li>
</ul>

<hr />

<h4>1. Memoizing Components - React.memo</h4>

<p>
    <code>React.memo</code> prevents a component from re-rendering
    if its props have not changed.
</p>

<pre><code>
import React from "react";

const UserCard = React.memo(function UserCard({ name }) {
    console.log("Rendered");
    return &lt;div&gt;{name}&lt;/div&gt;;
});
</code></pre>

<p>
    React.memo performs a shallow comparison of props.
    If props are the same reference and values, re-render is skipped.
</p>

<p>
    Important: If you pass new object or function references every render,
    memo will not help.
</p>

<hr />

<h4>2. Memoizing Values - useMemo</h4>

<p>
    <code>useMemo</code> is used to memoize expensive computed values.
</p>

<pre><code>
import { useMemo } from "react";

function Example({ numbers }) {
    const total = useMemo(() => {
        console.log("Calculating...");
        return numbers.reduce((sum, n) => sum + n, 0);
    }, [numbers]);

    return &lt;div&gt;Total: {total}&lt;/div&gt;;
}
</code></pre>

<p>
    The function runs only when dependencies change.
</p>

<p>
    Use useMemo when:
</p>

<ul>
    <li>The computation is expensive</li>
    <li>The value is passed to a memoized child component</li>
</ul>

<hr />

<h4>3. Memoizing Functions - useCallback</h4>

<p>
    <code>useCallback</code> memoizes a function reference.
    It is useful when passing callbacks to memoized children.
</p>

<pre><code>
import { useCallback } from "react";

function Parent() {
    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return &lt;Child onClick={handleClick} /&gt;;
}
</code></pre>

<p>
    Without useCallback, a new function would be created on every render,
    causing memoized children to re-render.
</p>

<hr />

<h4>4. React.memo vs useMemo vs useCallback</h4>

<ul>
    <li><strong>React.memo</strong> - memoizes a component</li>
    <li><strong>useMemo</strong> - memoizes a computed value</li>
    <li><strong>useCallback</strong> - memoizes a function</li>
</ul>

<hr />

<h4>5. Important interview pitfalls</h4>

<ul>
    <li>Memoization does not automatically improve performance</li>
    <li>Overusing useMemo and useCallback can make code harder to read</li>
    <li>Shallow comparison means object and array references matter</li>
    <li>Measure before optimizing</li>
</ul>

<hr />

<h4>6. Interview-ready summary</h4>

<ul>
    <li>Use React.memo to prevent unnecessary component re-renders</li>
    <li>Use useMemo to memoize expensive computed values</li>
    <li>Use useCallback to memoize function references</li>
    <li>Only optimize when necessary</li>
</ul>

<p>
    Memoization in React is about controlling re-renders and avoiding
    unnecessary work, but it should be used thoughtfully, not blindly.
</p>
`,
        },

        {
            id: "core-048",
            q: "Server-side rendering (SSR): how does it work in React?",
            a: `
<p>
    <strong>Server-side rendering - SSR</strong> is a technique where React
    renders the initial HTML on the <strong>server</strong> instead of in the
    browser. The fully rendered HTML is sent to the client, and then React
    "hydrates" it to make it interactive.
</p>

<hr />

<h4>1. How SSR works step by step</h4>

<ul>
    <li>User requests a page from the server</li>
    <li>The server runs React code and renders the component tree to HTML</li>
    <li>The server sends that HTML to the browser</li>
    <li>The browser displays the HTML immediately</li>
    <li>React JavaScript loads and attaches event listeners - this is called hydration</li>
</ul>

<p>
    After hydration, the app behaves like a normal React application.
</p>

<hr />

<h4>2. What does React use for SSR?</h4>

<p>
    React provides APIs like <code>renderToString</code> and
    <code>renderToPipeableStream</code> from <code>react-dom/server</code>.
</p>

<pre><code>
import { renderToString } from "react-dom/server";
import App from "./App";

const html = renderToString(&lt;App /&gt;);
</code></pre>

<p>
    Frameworks like <strong>Next.js</strong> handle this process automatically.
</p>

<hr />

<h4>3. Hydration - important concept</h4>

<p>
    Hydration means React attaches event listeners to the already-rendered HTML.
    Instead of re-rendering everything from scratch, React reuses the server HTML
    and makes it interactive.
</p>

<hr />

<h4>4. Advantages of SSR</h4>

<ul>
    <li>Better SEO - search engines receive complete HTML</li>
    <li>Faster initial content display</li>
    <li>Improved performance perception for users</li>
</ul>

<hr />

<h4>5. Limitations and trade-offs</h4>

<ul>
    <li>More complex setup</li>
    <li>Server load increases</li>
    <li>Hydration mismatch errors can occur if server and client output differ</li>
</ul>

<p>
    A hydration mismatch happens when the HTML rendered on the server does not
    match what React expects on the client.
</p>

<hr />

<h4>6. Interview-ready summary</h4>

<ul>
    <li>SSR renders HTML on the server instead of the browser</li>
    <li>The browser receives ready-to-display HTML</li>
    <li>React hydrates the markup to add interactivity</li>
    <li>Used for SEO and faster initial load</li>
</ul>

<p>
    In real-world projects, SSR is usually handled by frameworks like Next.js
    rather than implemented manually.
</p>
`,
        },

        {
            id: "core-049",
            q: "How do you enable production mode and why does it matter?",
            a: `
<p>
    Production mode in React is enabled when you build your application
    using a production build command. In production mode, React removes
    development-only checks, warnings, and extra debugging code.
</p>

<hr />

<h4>1. How to enable production mode</h4>

<p>
    In modern React projects using Vite, Create React App, or similar tools,
    production mode is automatically enabled when you run the build command.
</p>

<pre><code>
npm run build
</code></pre>

<p>
    This generates an optimized production bundle. When deployed,
    React runs in production mode automatically.
</p>

<hr />

<h4>2. What changes in production mode</h4>

<ul>
    <li>Development warnings are removed</li>
    <li>Extra validation logic is stripped out</li>
    <li>Code is minified and optimized</li>
    <li>Smaller bundle size</li>
    <li>Faster rendering performance</li>
</ul>

<p>
    For example, PropTypes validation and detailed error messages
    only run in development mode.
</p>

<hr />

<h4>3. Why it matters</h4>

<p>
    Running React in development mode in production can significantly
    slow down your app because React performs additional checks to
    help developers debug issues.
</p>

<p>
    Production mode ensures:
</p>

<ul>
    <li>Better performance</li>
    <li>Smaller JavaScript bundle</li>
    <li>No unnecessary console warnings</li>
    <li>Cleaner user experience</li>
</ul>

<hr />

<h4>4. Important interview point</h4>

<p>
    You do not manually toggle production mode in React code.
    It is controlled by the build tool and the NODE_ENV value
    during bundling.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Production mode is enabled via the build command</li>
    <li>It removes development checks and warnings</li>
    <li>It reduces bundle size and improves performance</li>
    <li>You should always deploy a production build</li>
</ul>

<p>
    In real projects, you never deploy the development server.
    Always build and deploy the optimized production bundle.
</p>
`,
        },

        {
            id: "core-050",
            q: "Do hooks replace HOCs and render props fully? What's the real answer?",
            a: `
<p>
    Hooks changed how we share logic in React, but they did not magically
    delete Higher-Order Components HOCs or render props from existence.
    The real answer is more nuanced.
</p>

<hr />

<h4>1. What problem were HOCs and render props solving?</h4>

<p>
    Before hooks, functional components had no state or lifecycle.
    So we needed patterns to reuse logic between components.
</p>

<ul>
    <li>HOCs wrapped components to inject props</li>
    <li>Render props passed a function to share dynamic logic</li>
</ul>

<p>
    Both patterns allowed logic reuse, but often made component trees
    harder to read and reason about.
</p>

<hr />

<h4>2. What hooks improved</h4>

<p>
    Hooks allow logic reuse without changing component hierarchy.
    You extract shared logic into a custom hook instead of wrapping components.
</p>

<pre><code>
function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
</code></pre>

<p>
    Now any component can reuse this logic without extra wrappers.
</p>

<hr />

<h4>3. Do hooks fully replace HOCs?</h4>

<p>
    In most new codebases, yes for logic reuse.
</p>

<p>
    However, HOCs are still useful in some scenarios:
</p>

<ul>
    <li>Library-level APIs where wrapping components is intentional</li>
    <li>Decorating components with additional behavior</li>
    <li>Backward compatibility in older projects</li>
</ul>

<hr />

<h4>4. Do hooks fully replace render props?</h4>

<p>
    For sharing stateful logic, hooks are generally cleaner and preferred.
</p>

<p>
    But render props are still valid when:
</p>

<ul>
    <li>You need dynamic rendering controlled by the consumer</li>
    <li>You want explicit inversion of control via a function</li>
</ul>

<hr />

<h4>5. Important limitation</h4>

<p>
    Hooks only work inside function components and custom hooks.
    They cannot be used inside class components.
</p>

<p>
    So in legacy class-based systems, HOCs still matter.
</p>

<hr />

<h4>6. The real interview-ready answer</h4>

<ul>
    <li>Hooks replaced most use cases of HOCs and render props for logic reuse</li>
    <li>They simplify component trees and improve readability</li>
    <li>HOCs and render props are still valid patterns, not obsolete</li>
    <li>Modern React code prefers custom hooks</li>
</ul>

<p>
    So the real answer is not "hooks killed HOCs".
    The real answer is that hooks made logic reuse simpler and more ergonomic,
    but older patterns still have niche and legacy relevance.
</p>
`,
        },

        {
            id: "core-051",
            q: "What is a switching component pattern?",
            a: `
<p>
    The <strong>switching component pattern</strong> is a React pattern where a single
    component decides which UI to render based on a condition, type, or state value.
</p>

<p>
    Instead of scattering conditional logic across multiple places, the switching
    component centralizes the decision of <em>which component should be rendered</em>.
</p>

<hr />

<h4>1. Basic idea</h4>

<p>
    A switching component typically receives a <code>type</code> or <code>variant</code>
    prop and renders different components depending on that value.
</p>

<pre><code>
function StatusMessage({ status }) {
    switch (status) {
        case "loading":
            return &lt;LoadingSpinner /&gt;;
        case "error":
            return &lt;ErrorMessage /&gt;;
        case "success":
            return &lt;SuccessMessage /&gt;;
        default:
            return null;
    }
}
</code></pre>

<p>
    Here, <code>StatusMessage</code> acts as a switching component.
</p>

<hr />

<h4>2. Object map variation - cleaner for scalability</h4>

<p>
    Instead of using <code>switch</code>, you can use a mapping object.
</p>

<pre><code>
const components = {
    loading: LoadingSpinner,
    error: ErrorMessage,
    success: SuccessMessage
};

function StatusMessage({ status }) {
    const Component = components[status];
    return Component ? &lt;Component /&gt; : null;
}
</code></pre>

<p>
    This approach avoids long switch statements and scales better.
</p>

<hr />

<h4>3. When is this useful?</h4>

<ul>
    <li>Rendering different layouts based on user role</li>
    <li>Handling UI states - loading, error, empty, success</li>
    <li>Rendering different form types based on config</li>
    <li>Feature flags and conditional UI branches</li>
</ul>

<hr />

<h4>4. Why it is considered a pattern</h4>

<p>
    It improves:
</p>

<ul>
    <li>Separation of concerns</li>
    <li>Readability</li>
    <li>Maintainability</li>
    <li>Extensibility when new variants are added</li>
</ul>

<p>
    Instead of deeply nested ternaries inside JSX, the switching logic stays isolated.
</p>

<hr />

<h4>5. Common mistake</h4>

<ul>
    <li>Putting heavy logic inside the switch block</li>
    <li>Making the switching component too large</li>
    <li>Not handling a default case</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>A switching component renders different components based on a condition</li>
    <li>It centralizes UI branching logic</li>
    <li>It improves maintainability compared to nested conditionals</li>
    <li>Often implemented using switch or object mapping</li>
</ul>

<p>
    In real-world apps, switching components are commonly used for handling
    UI states and role-based rendering cleanly.
</p>
`,
        },

        {
            id: "core-052",
            q: "What are mixins and why are they basically dead in React?",
            a: `
<p>
    <strong>Mixins</strong> were a way to share reusable behavior between multiple
    components in early React - especially when using <strong>createClass</strong>.
    They allowed you to inject lifecycle methods and logic into different components.
</p>

<hr />

<h4>1. What problem were mixins trying to solve?</h4>

<p>
    Before hooks and modern composition patterns, developers needed a way to
    reuse logic like subscriptions, timers, or common state behavior across
    multiple components.
</p>

<pre><code>
const TimerMixin = {
    componentDidMount() {
        this.timer = setInterval(() =&gt; {
            console.log("tick");
        }, 1000);
    },
    componentWillUnmount() {
        clearInterval(this.timer);
    }
};

const MyComponent = React.createClass({
    mixins: [TimerMixin],
    render() {
        return &lt;div&gt;Timer running&lt;/div&gt;;
    }
});
</code></pre>

<p>
    The mixin automatically merged its lifecycle methods into the component.
</p>

<hr />

<h4>2. Why were mixins problematic?</h4>

<ul>
    <li>Implicit dependencies - hard to see where behavior was coming from</li>
    <li>Name collisions between lifecycle methods</li>
    <li>Harder debugging and reasoning about data flow</li>
    <li>Hidden coupling between components</li>
</ul>

<p>
    If two mixins defined the same lifecycle method, React merged them in ways
    that were not always obvious.
</p>

<hr />

<h4>3. Why are mixins basically dead?</h4>

<p>
    React moved away from <strong>createClass</strong> and introduced
    <strong>ES6 class components</strong>, which did not support mixins.
</p>

<p>
    Later, React introduced better patterns for logic reuse:
</p>

<ul>
    <li>Higher-Order Components - HOCs</li>
    <li>Render Props</li>
    <li>Custom Hooks - the modern standard</li>
</ul>

<hr />

<h4>4. Modern replacement - Custom Hooks</h4>

<pre><code>
function useTimer() {
    useEffect(() =&gt; {
        const id = setInterval(() =&gt; {
            console.log("tick");
        }, 1000);
        return () =&gt; clearInterval(id);
    }, []);
}
</code></pre>

<p>
    Hooks are explicit, composable, and easier to reason about compared to mixins.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Mixins were used in createClass to share reusable logic</li>
    <li>They caused hidden dependencies and name collisions</li>
    <li>Not supported in ES6 class components</li>
    <li>Replaced by HOCs, render props, and now custom hooks</li>
</ul>

<p>
    In modern React, mixins are obsolete and should not be used.
</p>
`,
        },

        {
            id: "core-053",
            q: "Pointer events in React: what's supported?",
            a: `
<p>
    React supports <strong>Pointer Events</strong> as part of its synthetic event system.
    Pointer events unify mouse, touch, and pen input into a single event model.
</p>

<p>
    Instead of handling separate mouse and touch events, pointer events allow
    you to write one consistent handler that works across devices.
</p>

<hr />

<h4>1. What are Pointer Events?</h4>

<p>
    Pointer events represent input from:
</p>

<ul>
    <li>Mouse</li>
    <li>Touch</li>
    <li>Stylus / Pen</li>
</ul>

<p>
    They provide additional properties like <code>pointerType</code>,
    <code>pressure</code>, and <code>isPrimary</code>.
</p>

<hr />

<h4>2. Pointer events supported in React</h4>

<p>
    React supports the following pointer event handlers:
</p>

<ul>
    <li><code>onPointerDown</code></li>
    <li><code>onPointerUp</code></li>
    <li><code>onPointerMove</code></li>
    <li><code>onPointerEnter</code></li>
    <li><code>onPointerLeave</code></li>
    <li><code>onPointerOver</code></li>
    <li><code>onPointerOut</code></li>
    <li><code>onPointerCancel</code></li>
    <li><code>onGotPointerCapture</code></li>
    <li><code>onLostPointerCapture</code></li>
</ul>

<hr />

<h4>3. Example usage</h4>

<pre><code>
function Box() {
    const handlePointerDown = (e) =&gt; {
        console.log("Pointer type:", e.pointerType);
        console.log("Pressure:", e.pressure);
    };

    return (
        &lt;div
            style={{ width: 200, height: 200, background: "gray" }}
            onPointerDown={handlePointerDown}
        &gt;
            Press me
        &lt;/div&gt;
    );
}
</code></pre>

<p>
    The <code>pointerType</code> value can be "mouse", "touch", or "pen".
</p>

<hr />

<h4>4. Why use pointer events instead of mouse and touch events?</h4>

<ul>
    <li>One unified event system for all input types</li>
    <li>Less duplicate logic</li>
    <li>Better support for modern devices</li>
    <li>Provides extra data like pressure and tilt</li>
</ul>

<hr />

<h4>5. Important interview notes</h4>

<ul>
    <li>Pointer events are part of React's synthetic event system</li>
    <li>They work consistently across supported browsers</li>
    <li>They replace the need for separate mouse and touch handlers in most cases</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    React supports pointer events such as onPointerDown, onPointerMove, and
    onPointerUp, which unify mouse, touch, and pen input into a single API.
    They simplify cross-device interaction handling in modern applications.
</p>
`,
        },

        {
            id: "core-054",
            q: "Why should React component names start with capital letters?",
            a: `
<p>
    In React, component names must start with a <strong>capital letter</strong>
    because React uses this convention to distinguish between
    <strong>custom components</strong> and <strong>built-in HTML elements</strong>.
</p>

<hr />

<h4>1. How React differentiates elements</h4>

<p>
    When JSX is compiled, React checks the first letter of a tag:
</p>

<ul>
    <li>Lowercase - treated as a native HTML tag like 'div', 'span', 'button'</li>
    <li>Uppercase - treated as a React component</li>
</ul>

<pre><code>
function MyComponent() {
    return &lt;div&gt;Hello&lt;/div&gt;;
}

&lt;MyComponent /&gt;   // Valid - React treats it as a component
&lt;mycomponent /&gt;   // Invalid - React treats it as a DOM tag
</code></pre>

<hr />

<h4>2. What actually happens behind the scenes</h4>

<p>
    JSX is converted to 'React.createElement'. During this process:
</p>

<ul>
    <li>'div' becomes a string - React.createElement('div')</li>
    <li>'MyComponent' becomes a variable reference - React.createElement(MyComponent)</li>
</ul>

<p>
    If the name starts with lowercase, React assumes it is a string
    and tries to render it as a real DOM element.
</p>

<hr />

<h4>3. Why this rule exists</h4>

<ul>
    <li>It keeps JSX parsing simple and predictable</li>
    <li>It avoids ambiguity between DOM elements and custom components</li>
    <li>It enforces a consistent naming convention across projects</li>
</ul>

<hr />

<h4>4. Common mistake</h4>

<pre><code>
function header() {
    return &lt;h1&gt;Title&lt;/h1&gt;;
}

&lt;header /&gt;  // React thinks this is an HTML &lt;header&gt; tag
</code></pre>

<p>
    This will not behave as a custom component.
    Rename it to 'Header' to fix it.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>React treats lowercase tags as DOM elements</li>
    <li>Uppercase names are treated as custom components</li>
    <li>This rule is required because JSX compiles differently for strings vs variables</li>
</ul>

<p>
    So React component names must start with a capital letter
    to ensure they are recognized as components and not HTML tags.
</p>
`,
        },

        {
            id: "core-055",
            q: "Custom DOM attributes: are they supported? Any rules?",
            a: `
<p>
    Yes, React supports <strong>custom DOM attributes</strong>, but there are
    important rules depending on whether you are passing them to
    <strong>built-in HTML elements</strong> or <strong>custom components</strong>.
</p>

<hr />

<h4>1. Custom attributes on HTML elements</h4>

<p>
    In modern React versions 16+, unknown attributes are passed directly to the DOM.
    This means you can add custom attributes without React stripping them out.
</p>

<pre><code>
&lt;div data-id="123" custom-attr="hello"&gt;&lt;/div&gt;
</code></pre>

<p>
    React will render both attributes in the DOM.
</p>

<hr />

<h4>2. Recommended way - use data-* attributes</h4>

<p>
    The standard and recommended approach is to use <code>data-*</code> attributes.
    They are valid HTML and safe for storing custom metadata.
</p>

<pre><code>
&lt;div data-user-id="42" data-role="admin"&gt;&lt;/div&gt;
</code></pre>

<p>
    These are commonly used for testing, analytics, and storing small metadata.
</p>

<hr />

<h4>3. Custom attributes on React components</h4>

<p>
    If you pass a custom prop to a React component, it will NOT automatically
    appear in the DOM unless you explicitly forward it.
</p>

<pre><code>
function Box(props) {
    return &lt;div {...props}&gt;Content&lt;/div&gt;;
}

&lt;Box customAttr="test" /&gt;
</code></pre>

<p>
    Here, <code>customAttr</code> will appear in the DOM because we spread props.
    Without spreading, it would stay inside the component only.
</p>

<hr />

<h4>4. Invalid attribute warnings</h4>

<p>
    React will warn if you pass invalid attributes that are not valid HTML and
    not intended as custom attributes.
</p>

<ul>
    <li>Lowercase custom attributes are passed through</li>
    <li>Invalid known attributes may trigger warnings</li>
</ul>

<hr />

<h4>5. Special cases</h4>

<ul>
    <li>Use <code>className</code> instead of class</li>
    <li>Use <code>htmlFor</code> instead of for</li>
    <li>Use camelCase for DOM properties like <code>tabIndex</code></li>
</ul>

<hr />

<h4>Important practical rule</h4>

<ul>
    <li>Use data-* for custom metadata</li>
    <li>Avoid random non-standard attributes unless necessary</li>
    <li>Forward props carefully to avoid leaking unwanted attributes</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    React supports custom DOM attributes in modern versions. The recommended
    approach is to use data-* attributes. Custom props on React components
    must be explicitly forwarded to reach the DOM.
</p>
`,
        },

        {
            id: "core-056",
            q: "How do you loop/render lists inside JSX?",
            a: `
<p>
    In React, you render lists inside JSX using JavaScript array methods,
    most commonly <strong>map()</strong>. React does not have a special
    template loop like some frameworks. You simply use JavaScript.
</p>

<hr />

<h4>1. Using map() - the standard way</h4>

<p>
    The <code>map()</code> method transforms each item in an array into
    a React element.
</p>

<pre><code>
function UserList() {
    const users = ["Ash", "Ravi", "Neha"];

    return (
        &lt;ul&gt;
            {users.map((user, index) =&gt; (
                &lt;li key={index}&gt;{user}&lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}
</code></pre>

<p>
    Each iteration returns JSX, and React renders the resulting array
    of elements.
</p>

<hr />

<h4>2. Why the key prop is important</h4>

<p>
    When rendering lists, React requires a <strong>key</strong> prop.
    Keys help React identify which items changed, were added, or removed.
</p>

<ul>
    <li>Keys must be unique among siblings</li>
    <li>Keys should be stable - not randomly generated</li>
    <li>Prefer database IDs over array indexes</li>
</ul>

<pre><code>
{users.map(user =&gt; (
    &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
))}
</code></pre>

<hr />

<h4>3. Why index as key is not ideal</h4>

<p>
    Using array index as key can cause UI bugs if the list changes order,
    items are inserted, or removed. React may reuse DOM nodes incorrectly.
</p>

<ul>
    <li>Safe only for static lists</li>
    <li>Not recommended for dynamic or sortable lists</li>
</ul>

<hr />

<h4>4. Other ways to render conditionally inside lists</h4>

<p>
    You can combine <code>map()</code> with conditional rendering.
</p>

<pre><code>
{users.map(user =&gt;
    user.isActive ? (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
    ) : null
)}
</code></pre>

<p>
    Returning <code>null</code> means nothing will be rendered.
</p>

<hr />

<h4>5. Interview-ready summary</h4>

<ul>
    <li>Use map() to render lists in JSX</li>
    <li>Always provide a stable and unique key</li>
    <li>Avoid using index as key in dynamic lists</li>
    <li>React uses keys for efficient reconciliation</li>
</ul>

<p>
    In short, list rendering in React is just JavaScript array mapping,
    but keys are critical for correct UI updates.
</p>
`,
        },

        {
            id: "core-057",
            q: "How do you access props inside JSX attribute strings correctly?",
            a: `
<p>
    In JSX, you access props inside attributes using <strong>curly braces { }</strong>.
    Curly braces allow you to inject JavaScript expressions into JSX.
</p>

<hr />

<h4>1. Basic usage inside attributes</h4>

<p>
    If you want to use a prop value inside an attribute, wrap it in curly braces.
</p>

<pre><code>
function User({ name }) {
    return &lt;h1 title={name}&gt;Hello&lt;/h1&gt;;
}
</code></pre>

<p>
    Here, <code>{name}</code> is evaluated as JavaScript, not a string.
</p>

<hr />

<h4>2. Incorrect way - treating it like plain HTML</h4>

<pre><code>
&lt;h1 title="name"&gt;Hello&lt;/h1&gt;
</code></pre>

<p>
    This passes the literal string "name", not the variable.
</p>

<hr />

<h4>3. Mixing strings with props</h4>

<p>
    If you want to combine text and props, use template literals inside braces.
</p>

<pre><code>
function User({ name }) {
    return &lt;h1 title={\`User: \${name}\`}&gt;Hello&lt;/h1&gt;;
}
</code></pre>

<p>
    Or concatenate manually:
</p>

<pre><code>
&lt;h1 title={"User: " + name}&gt;Hello&lt;/h1&gt;
</code></pre>

<hr />

<h4>4. Boolean and non-string attributes</h4>

<p>
    For boolean attributes, you must also use curly braces.
</p>

<pre><code>
function Button({ disabled }) {
    return &lt;button disabled={disabled}&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    JSX attributes are not plain HTML strings. They expect JavaScript values.
</p>

<hr />

<h4>5. Important rule to remember</h4>

<ul>
    <li>Use double quotes for plain strings</li>
    <li>Use curly braces for JavaScript expressions</li>
    <li>Never wrap variables in quotes</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    In JSX, props are accessed inside attributes using curly braces { }.
    If you use quotes, React treats it as a literal string.
    For dynamic values or expressions, always wrap them in braces.
</p>
`,
        },

        {
            id: "core-058",
            q: "PropTypes: how do you define array of shape?",
            a: `
<p>
    In React, if a prop is expected to be an <strong>array of objects</strong>,
    you can validate its structure using <code>PropTypes.arrayOf</code> together
    with <code>PropTypes.shape</code>.
</p>

<p>
    This ensures that every object inside the array follows a specific structure.
</p>

<hr />

<h4>1. Basic syntax</h4>

<pre><code>
import PropTypes from "prop-types";

function UsersList({ users }) {
    return (
        &lt;ul&gt;
            {users.map(user =&gt; (
                &lt;li key={user.id}&gt;
                    {user.name} - {user.role}
                &lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string
        })
    ).isRequired
};
</code></pre>

<hr />

<h4>2. What is happening here</h4>

<ul>
    <li><code>arrayOf</code> ensures the prop is an array</li>
    <li><code>shape</code> defines the structure of each object</li>
    <li><code>isRequired</code> ensures the prop must be passed</li>
</ul>

<p>
    If any object inside the array does not match the defined shape,
    React will show a warning in development mode.
</p>

<hr />

<h4>3. Strict object validation</h4>

<p>
    If you want to ensure that no extra keys are allowed,
    you can use <code>PropTypes.exact</code> instead of <code>shape</code>.
</p>

<pre><code>
users: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    })
)
</code></pre>

<p>
    <code>exact</code> throws a warning if additional unexpected properties are present.
</p>

<hr />

<h4>4. Important limitation</h4>

<ul>
    <li>PropTypes only run in development</li>
    <li>No runtime enforcement in production</li>
    <li>No compile-time safety</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Use <code>PropTypes.arrayOf</code> to validate arrays</li>
    <li>Use <code>PropTypes.shape</code> to validate object structure</li>
    <li>Combine both for array of objects</li>
    <li>Use <code>exact</code> for stricter validation</li>
</ul>

<p>
    In modern projects, TypeScript is preferred, but PropTypes are still
    common in legacy or JavaScript-only codebases.
</p>
`,
        },

        {
            id: "core-059",
            q: "How do you conditionally apply className?",
            a: `
<p>
    In React, you often need to apply a class conditionally based on
    state, props, or some computed value. Since <code>className</code>
    accepts a string, you can build that string dynamically.
</p>

<hr />

<h4>1. Using a ternary operator</h4>

<p>
    The most common and straightforward way is using a ternary expression.
</p>

<pre><code>
function Button({ isActive }) {
    return (
        &lt;button
            className={isActive ? "btn btn-active" : "btn"}
        &gt;
            Click me
        &lt;/button&gt;
    );
}
</code></pre>

<p>
    If <code>isActive</code> is true, the active class is added.
</p>

<hr />

<h4>2. Using logical AND operator</h4>

<p>
    You can conditionally append a class using the && operator.
</p>

<pre><code>
function Card({ highlighted }) {
    return (
        &lt;div
            className={
                "card " + (highlighted && "card-highlight")
            }
        &gt;
            Content
        &lt;/div&gt;
    );
}
</code></pre>

<p>
    If <code>highlighted</code> is false, the expression returns false,
    which React ignores when rendering.
</p>

<hr />

<h4>3. Template literals</h4>

<p>
    Template strings make it easier to combine multiple conditions.
</p>

<pre><code>
function Item({ isSelected }) {
    return (
        &lt;li
            className={
                \`item \${isSelected ? "selected" : ""}\`
            }
        &gt;
            List Item
        &lt;/li&gt;
    );
}
</code></pre>

<hr />

<h4>4. Using a helper library - classnames</h4>

<p>
    In larger applications, the <code>classnames</code> library is commonly used
    to make conditional class logic cleaner.
</p>

<pre><code>
import classNames from "classnames";

function Alert({ type }) {
    const classes = classNames("alert", {
        "alert-success": type === "success",
        "alert-error": type === "error"
    });

    return &lt;div className={classes}&gt;Message&lt;/div&gt;;
}
</code></pre>

<p>
    This approach keeps the JSX readable when multiple conditions are involved.
</p>

<hr />

<h4>Common mistakes</h4>

<ul>
    <li>Forgetting to include the base class</li>
    <li>Accidentally adding extra spaces</li>
    <li>Using complex inline logic that reduces readability</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Use ternary for simple conditions</li>
    <li>Use && for single optional classes</li>
    <li>Use template literals for combining classes</li>
    <li>Use classnames library for complex conditional logic</li>
</ul>

<p>
    Conditional className handling is just string construction based on state or props.
</p>
`,
        },

        {
            id: "core-060",
            q: "React vs ReactDOM: what's the difference?",
            a: `
<p>
    <strong>React</strong> and <strong>ReactDOM</strong> are two separate
    packages that work together, but they have different responsibilities.
</p>

<hr />

<h4>1. What is React?</h4>

<p>
    The <strong>react</strong> package contains the core logic of React.
    It provides:
</p>

<ul>
    <li>Component creation</li>
    <li>Hooks like useState and useEffect</li>
    <li>Element creation and reconciliation logic</li>
    <li>Context API and other core features</li>
</ul>

<p>
    React itself does not know anything about the browser DOM.
    It only describes what the UI should look like.
</p>

<hr />

<h4>2. What is ReactDOM?</h4>

<p>
    The <strong>react-dom</strong> package is responsible for rendering
    React components into the browser DOM.
</p>

<pre><code>
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(&lt;App /&gt;);
</code></pre>

<p>
    ReactDOM takes the virtual representation created by React
    and updates the real browser DOM.
</p>

<hr />

<h4>3. Why are they separate?</h4>

<p>
    React is platform-independent. It can work with different renderers:
</p>

<ul>
    <li>react-dom - for web browsers</li>
    <li>react-native - for mobile apps</li>
    <li>react-three-fiber - for 3D rendering</li>
</ul>

<p>
    Keeping React separate allows the same core logic to work
    across multiple platforms.
</p>

<hr />

<h4>4. Key difference in one sentence</h4>

<ul>
    <li>React defines components and manages rendering logic.</li>
    <li>ReactDOM connects React to the browser DOM.</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    React contains the core library for building components and managing UI logic,
    while ReactDOM is the renderer that updates the actual browser DOM.
    They are separated to keep React platform-independent.
</p>
`,
        },

        {
            id: "core-061",
            q: "How do you use label properly in React?",
            a: `
<p>
    In React, a <strong>label</strong> is used to describe an input element
    and improve accessibility. Properly connecting a label to its input
    ensures screen readers work correctly and clicking the label focuses
    the input.
</p>

<hr />

<h4>1. Using htmlFor instead of for</h4>

<p>
    In regular HTML, we use the <code>for</code> attribute.
    In React, we must use <code>htmlFor</code> because
    <code>for</code> is a reserved JavaScript keyword.
</p>

<pre><code>
function FormExample() {
    return (
        &lt;div&gt;
            &lt;label htmlFor="email"&gt;Email&lt;/label&gt;
            &lt;input id="email" type="email" /&gt;
        &lt;/div&gt;
    );
}
</code></pre>

<p>
    The value of <code>htmlFor</code> must match the input's <code>id</code>.
</p>

<hr />

<h4>2. Why proper label usage matters</h4>

<ul>
    <li>Improves accessibility for screen readers</li>
    <li>Clicking the label focuses the input</li>
    <li>Better form usability</li>
    <li>Required for WCAG compliance</li>
</ul>

<hr />

<h4>3. Wrapping input inside label</h4>

<p>
    Another valid pattern is wrapping the input inside the label.
    In this case, <code>htmlFor</code> is not required.
</p>

<pre><code>
function CheckboxExample() {
    return (
        &lt;label&gt;
            &lt;input type="checkbox" /&gt;
            Accept Terms
        &lt;/label&gt;
    );
}
</code></pre>

<p>
    This automatically associates the label with the input.
</p>

<hr />

<h4>4. Common mistakes</h4>

<ul>
    <li>Using <code>for</code> instead of <code>htmlFor</code></li>
    <li>Forgetting to match id and htmlFor</li>
    <li>Using placeholder instead of label</li>
</ul>

<p>
    A placeholder is not a replacement for a label.
    Labels should always be visible for accessibility.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Use htmlFor instead of for in React</li>
    <li>Match htmlFor with the input id</li>
    <li>Wrapping input inside label is also valid</li>
    <li>Proper labels improve accessibility and UX</li>
</ul>

<p>
    In professional applications, using labels correctly is important
    not just for forms, but for accessibility standards and usability.
</p>
`,
        },

        {
            id: "core-062",
            q: "How do you merge multiple inline style objects?",
            a: `
<p>
    In React, inline styles are passed as JavaScript objects.
    If you need to combine multiple style objects, you can merge them
    before passing them to the <code>style</code> prop.
</p>

<hr />

<h4>1. Using the spread operator - recommended approach</h4>

<p>
    The most common and clean way is using the JavaScript spread operator.
</p>

<pre><code>
const baseStyle = {
    padding: "10px",
    backgroundColor: "black",
    color: "white"
};

const dangerStyle = {
    backgroundColor: "red"
};

const mergedStyle = {
    ...baseStyle,
    ...dangerStyle
};

function Button() {
    return &lt;button style={mergedStyle}&gt;Delete&lt;/button&gt;;
}
</code></pre>

<p>
    If multiple objects contain the same property, the later one overrides
    the previous value.
</p>

<hr />

<h4>2. Merging directly inside JSX</h4>

<p>
    You can also merge them inline without creating a separate variable.
</p>

<pre><code>
&lt;button
    style={{
        ...baseStyle,
        ...dangerStyle
    }}
&gt;
    Delete
&lt;/button&gt;
</code></pre>

<hr />

<h4>3. Using Object.assign</h4>

<p>
    Another way is using <code>Object.assign</code>, although it is less common today.
</p>

<pre><code>
const mergedStyle = Object.assign({}, baseStyle, dangerStyle);
</code></pre>

<p>
    The first argument should be an empty object to avoid mutating
    the original style objects.
</p>

<hr />

<h4>4. Conditional style merging</h4>

<p>
    Often you merge styles based on a condition.
</p>

<pre><code>
const style = {
    ...baseStyle,
    ...(isActive && { border: "2px solid white" })
};
</code></pre>

<p>
    This pattern keeps components flexible without repeating style logic.
</p>

<hr />

<h4>Important notes</h4>

<ul>
    <li>Later properties override earlier ones</li>
    <li>Avoid mutating original style objects</li>
    <li>For complex styling logic, consider CSS classes or styled-components</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    You merge multiple inline style objects using the spread operator or
    Object.assign. The spread operator is preferred because it is cleaner,
    more readable, and does not mutate existing objects.
</p>
`,
        },

        {
            id: "core-063",
            q: "How to rerender/update UI on browser resize?",
            a: `
<p>
    In React, the UI does not automatically re-render when the browser window
    resizes unless the resize affects component state.
</p>

<p>
    To update the UI on browser resize, you need to listen to the
    <strong>"resize"</strong> event and update state manually.
</p>

<hr />

<h4>1. Basic approach using useEffect</h4>

<p>
    The common pattern is to attach a resize event listener inside
    <code>useEffect</code> and update state whenever the window size changes.
</p>

<pre><code>
import { useState, useEffect } from "react";

function WindowSizeTracker() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return &lt;div&gt;Window width: {width}px&lt;/div&gt;;
}
</code></pre>

<p>
    When <code>setWidth</code> runs, React re-renders the component with the new value.
</p>

<hr />

<h4>2. Tracking both width and height</h4>

<pre><code>
function useWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return size;
}
</code></pre>

<p>
    This is usually extracted into a custom hook like <code>useWindowSize</code>
    so multiple components can reuse it.
</p>

<hr />

<h4>3. Important performance note</h4>

<p>
    The resize event can fire many times per second.
    In complex UIs, you may want to throttle or debounce the handler
    to avoid excessive re-renders.
</p>

<ul>
    <li>Use <code>requestAnimationFrame</code></li>
    <li>Use a debounce utility</li>
    <li>Or rely on CSS media queries when possible</li>
</ul>

<hr />

<h4>4. Prefer CSS when possible</h4>

<p>
    If the goal is purely layout-based responsiveness,
    CSS media queries are often better than JavaScript listeners.
</p>

<p>
    JavaScript resize handling is mainly needed when logic
    depends on actual window dimensions.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>React does not rerender on resize automatically</li>
    <li>Use <code>window.addEventListener("resize")</code> inside <code>useEffect</code></li>
    <li>Update state to trigger re-render</li>
    <li>Always clean up the event listener</li>
    <li>Prefer CSS media queries for layout-only changes</li>
</ul>

<p>
    In short, you rerender on browser resize by updating component state
    in response to the window "resize" event.
</p>
`,
        },

        {
            id: "core-064",
            q: "How to pretty print JSON in React UI?",
            a: `
<p>
    Pretty printing JSON in React means formatting JSON data so that it is
    readable in the UI with proper indentation and structure.
    This is commonly needed for debugging tools, API viewers,
    admin dashboards, or developer panels.
</p>

<hr />

<h4>1. Using JSON.stringify with spacing</h4>

<p>
    The simplest way to pretty print JSON is by using
    <code>JSON.stringify(value, null, 2)</code>.
</p>

<pre><code>
const data = {
    name: "Ash",
    role: "Developer",
    skills: ["React", "Node", "MongoDB"]
};

function JsonViewer() {
    return (
        &lt;pre&gt;
            {JSON.stringify(data, null, 2)}
        &lt;/pre&gt;
    );
}
</code></pre>

<p>
    The third parameter 2 means indent with 2 spaces.
    This makes the JSON readable with proper formatting.
</p>

<hr />

<h4>2. Why use &lt;pre&gt; tag?</h4>

<p>
    The &lt;pre&gt; element preserves whitespace and indentation.
    Without it, the JSON would collapse into a single line.
</p>

<hr />

<h4>3. Styling for better readability</h4>

<p>
    You can improve readability by adding background, padding,
    and monospace font styling.
</p>

<pre><code>
&lt;pre
    style={{
        background: "#111",
        color: "#fff",
        padding: "12px",
        borderRadius: "8px",
        overflowX: "auto"
    }}
&gt;
    {JSON.stringify(data, null, 2)}
&lt;/pre&gt;
</code></pre>

<hr />

<h4>4. Handling dynamic API data</h4>

<p>
    When displaying API responses, always ensure the value is valid JSON
    before calling stringify.
</p>

<pre><code>
{data && (
    &lt;pre&gt;
        {JSON.stringify(data, null, 2)}
    &lt;/pre&gt;
)}
</code></pre>

<hr />

<h4>5. Using third-party JSON viewers</h4>

<p>
    For advanced formatting, expandable trees, and better UX,
    libraries like <code>react-json-view</code> can be used.
</p>

<ul>
    <li>Collapsible nodes</li>
    <li>Editable JSON</li>
    <li>Better visual structure</li>
</ul>

<hr />

<h4>Common mistakes</h4>

<ul>
    <li>Rendering raw objects directly without stringify</li>
    <li>Forgetting &lt;pre&gt; so formatting breaks</li>
    <li>Rendering huge JSON without scroll container</li>
</ul>

<hr />

<h4>Interview summary</h4>

<ul>
    <li>Use JSON.stringify(data, null, 2) for indentation</li>
    <li>Wrap it inside a &lt;pre&gt; tag to preserve spacing</li>
    <li>Use a JSON viewer library for advanced use cases</li>
</ul>

<p>
    Pretty printing JSON in React is mainly about formatting it
    using JSON.stringify and preserving whitespace in the UI.
</p>
`,
        },

        {
            id: "core-065",
            q: "Why can't you update props from inside a component?",
            a: `
<p>
    In React, <strong>props are read-only</strong>. A component cannot modify
    the props it receives from its parent.
</p>

<p>
    This is because React follows a <strong>one-way data flow</strong> model,
    where data moves from parent to child. The child can use the data,
    but it cannot change it directly.
</p>

<hr />

<h4>1. Props are controlled by the parent</h4>

<p>
    Props belong to the parent component. The child only receives a copy of
    those values as inputs.
</p>

<pre><code>
function Child({ count }) {
    count = count + 1; // Not allowed - this does not update parent state
    return &lt;div&gt;{count}&lt;/div&gt;;
}
</code></pre>

<p>
    Even if you try to modify a prop variable inside the component,
    it will not update the parent or trigger a re-render correctly.
</p>

<hr />

<h4>2. React components must stay pure</h4>

<p>
    React expects function components to behave like pure functions.
    For the same props, the component should return the same UI.
</p>

<ul>
    <li>No side effects inside render</li>
    <li>No mutation of input values</li>
</ul>

<p>
    Mutating props would break this predictable behavior.
</p>

<hr />

<h4>3. Correct way to change prop-driven data</h4>

<p>
    If a child needs to update something, the parent must pass a callback
    function as a prop.
</p>

<pre><code>
function Parent() {
    const [count, setCount] = useState(0);

    return (
        &lt;Child count={count} onIncrement={() =&gt; setCount(count + 1)} /&gt;
    );
}

function Child({ count, onIncrement }) {
    return (
        &lt;button onClick={onIncrement}&gt;
            {count}
        &lt;/button&gt;
    );
}
</code></pre>

<p>
    Here, the child does not change the prop directly.
    It calls a function provided by the parent.
</p>

<hr />

<h4>4. Why this design is important</h4>

<ul>
    <li>Keeps data flow predictable</li>
    <li>Makes debugging easier</li>
    <li>Avoids accidental state mutation</li>
    <li>Improves component reusability</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Props are immutable</li>
    <li>They are owned by the parent</li>
    <li>Children cannot modify them directly</li>
    <li>Updates must happen through parent state via callbacks</li>
</ul>

<p>
    In short, props are read-only because React enforces one-way data flow
    and predictable component behavior.
</p>
`,
        },

        {
            id: "core-066",
            q: "How do you auto-focus an input on page load?",
            a: `
<p>
    In React, you can auto-focus an input when the component mounts.
    There are two common approaches depending on how much control you need.
</p>

<hr />

<h4>1. Using the autoFocus attribute - simple approach</h4>

<p>
    React provides a built-in <code>autoFocus</code> attribute that works
    similar to the native HTML autofocus attribute.
</p>

<pre><code>
function LoginForm() {
    return (
        &lt;input type="text" autoFocus placeholder="Enter username" /&gt;
    );
}
</code></pre>

<p>
    This works well for simple cases where the input is rendered immediately.
</p>

<hr />

<h4>2. Using useRef and useEffect - recommended for real apps</h4>

<p>
    In more controlled scenarios, especially when inputs are conditionally
    rendered, using <code>useRef</code> is the better approach.
</p>

<pre><code>
import { useEffect, useRef } from "react";

function LoginForm() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return &lt;input ref={inputRef} type="text" placeholder="Enter username" /&gt;;
}
</code></pre>

<p>
    The empty dependency array ensures the focus runs only once when the
    component mounts.
</p>

<hr />

<h4>3. When to prefer useRef over autoFocus</h4>

<ul>
    <li>When the input is rendered conditionally</li>
    <li>When you need to re-focus after state updates</li>
    <li>When building modals or dynamic forms</li>
</ul>

<hr />

<h4>Common mistake</h4>

<p>
    If the input is not mounted yet when the effect runs, focus will fail.
    Always ensure the element exists before calling <code>focus()</code>.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Use autoFocus for simple cases</li>
    <li>Use useRef + useEffect for controlled focus behavior</li>
    <li>useRef is more reliable in dynamic UI scenarios</li>
</ul>

<p>
    In real-world applications, useRef is the preferred and more predictable
    way to auto-focus inputs.
</p>
`,
        },

        {
            id: "core-067",
            q: "How can you find React version at runtime in the browser?",
            a: `
<p>
    You can find the React version at runtime in the browser in multiple ways,
    depending on whether you are in development or production mode.
</p>

<hr />

<h4>1. Using React.version (direct method)</h4>

<p>
    React exposes its version via the <code>React.version</code> property.
</p>

<pre><code>
import React from "react";

console.log(React.version);
</code></pre>

<p>
    This logs the current React version being used in the application.
</p>

<p>
    You can also access it directly in the browser console if React is available globally:
</p>

<pre><code>
window.React.version
</code></pre>

<hr />

<h4>2. Using React DevTools</h4>

<p>
    If you have <strong>React Developer Tools</strong> installed in your browser,
    open DevTools and go to the React tab. The React version is displayed
    at the top of the panel.
</p>

<p>
    This is the most practical way during development.
</p>

<hr />

<h4>3. Checking package.json</h4>

<p>
    Although not strictly runtime, you can check the installed version inside
    <code>package.json</code>:
</p>

<pre><code>
"dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
}
</code></pre>

<hr />

<h4>Important note</h4>

<ul>
    <li><code>React.version</code> works in both development and production builds</li>
    <li>React DevTools is development-friendly and easier to inspect</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    You can find the React version at runtime by logging <code>React.version</code>
    in the browser console or by checking it in React DevTools. The version is
    exposed directly by the React library.
</p>
`,
        },

        {
            id: "core-068",
            q: "How do you integrate Google Analytics with React Router?",
            a: `
<p>
    In a React application that uses <strong>React Router</strong>, page
    navigation does not reload the browser. That means Google Analytics
    will not automatically detect route changes like in traditional
    multi-page websites.
</p>

<p>
    To integrate Google Analytics correctly, we need to manually track
    route changes whenever the URL changes.
</p>

<hr />

<h4>1. Install Google Analytics (GA4)</h4>

<p>
    First, add the GA script inside <code>index.html</code>.
</p>

<pre><code>
&lt;script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"&gt;&lt;/script&gt;
&lt;script&gt;
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "G-XXXXXXX");
&lt;/script&gt;
</code></pre>

<p>
    Replace <code>G-XXXXXXX</code> with your actual measurement ID.
</p>

<hr />

<h4>2. Track route changes using useLocation</h4>

<p>
    React Router provides a hook called <code>useLocation</code> that gives
    access to the current URL. We can listen for changes and trigger
    a page view event.
</p>

<pre><code>
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AnalyticsTracker() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag("config", "G-XXXXXXX", {
                page_path: location.pathname,
            });
        }
    }, [location]);

    return null;
}
</code></pre>

<hr />

<h4>3. Add tracker inside Router</h4>

<p>
    Place the tracking component inside your Router so it runs
    whenever the route changes.
</p>

<pre><code>
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        &lt;BrowserRouter&gt;
            &lt;AnalyticsTracker /&gt;
            &lt;AppRoutes /&gt;
        &lt;/BrowserRouter&gt;
    );
}
</code></pre>

<hr />

<h4>4. Why this is necessary</h4>

<ul>
    <li>React Router changes URL without full page reload</li>
    <li>Google Analytics only auto-detects full reloads</li>
    <li>We must manually send page_view events on route change</li>
</ul>

<hr />

<h4>5. Alternative approach - react-ga package</h4>

<p>
    Instead of manually calling <code>gtag</code>, you can use
    libraries like <code>react-ga4</code> which simplify tracking.
</p>

<pre><code>
import ReactGA from "react-ga4";

ReactGA.initialize("G-XXXXXXX");

useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
}, [location]);
</code></pre>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Add GA script in index.html</li>
    <li>Use useLocation from React Router</li>
    <li>Trigger gtag page view inside useEffect</li>
    <li>Tracking must be manual in SPAs</li>
</ul>

<p>
    In React Router applications, analytics integration requires
    listening to route changes and manually sending page view events
    because there is no full page reload.
</p>
`,
        },

        {
            id: "core-069",
            q: "Vendor prefixes in inline styles: how to handle?",
            a: `
<p>
    In React, inline styles are written as JavaScript objects, not regular CSS.
    Because of that, vendor-prefixed properties must follow JavaScript naming rules.
</p>

<p>
    Instead of writing CSS like <code>-webkit-transition</code>, you use
    camelCase property names in React.
</p>

<hr />

<h4>1. How vendor prefixes work in React inline styles</h4>

<p>
    React expects style properties in camelCase. Vendor prefixes must also follow
    camelCase rules, and some require capitalization.
</p>

<pre><code>
const boxStyle = {
    WebkitTransition: "all 0.3s ease",
    MozTransition: "all 0.3s ease",
    msTransition: "all 0.3s ease"
};

function Box() {
    return &lt;div style={boxStyle}&gt;Hover me&lt;/div&gt;;
}
</code></pre>

<p>
    Important:
</p>

<ul>
    <li><code>Webkit</code> starts with a capital W</li>
    <li><code>Moz</code> starts with a capital M</li>
    <li><code>ms</code> stays lowercase</li>
</ul>

<hr />

<h4>2. Do we still need vendor prefixes today?</h4>

<p>
    In modern browsers, most common CSS properties no longer require vendor prefixes.
    For standard UI work, you rarely need to manually add them.
</p>

<hr />

<h4>3. Recommended approach in real projects</h4>

<p>
    Instead of handling vendor prefixes manually in inline styles, it is better to:
</p>

<ul>
    <li>Use regular CSS with Autoprefixer</li>
    <li>Use CSS-in-JS libraries like styled-components</li>
    <li>Let build tools handle cross-browser compatibility</li>
</ul>

<p>
    Most bundlers automatically add necessary prefixes during build time.
</p>

<hr />

<h4>4. Important limitation of inline styles</h4>

<ul>
    <li>No support for pseudo-classes like :hover</li>
    <li>No media queries</li>
    <li>Harder to maintain for complex styling</li>
</ul>

<p>
    This is one reason inline styles are usually reserved for dynamic styling,
    while full styling is handled using CSS or styled-components.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Inline styles use camelCase property names</li>
    <li>Vendor prefixes must follow camelCase - Webkit, Moz, ms</li>
    <li>Modern build tools usually handle prefixes automatically</li>
    <li>Inline styles are not ideal for complex styling needs</li>
</ul>

<p>
    In modern React projects, manual vendor prefixing is rarely required because
    tooling handles it automatically.
</p>
`,
        },

        {
            id: "core-070",
            q: "ES6 import/export patterns for components?",
            a: `
<p>
    In React projects, ES6 modules are used to organize components and share
    them across files. Understanding <strong>default exports</strong> and
    <strong>named exports</strong> is important for clean architecture and
    avoiding common import mistakes.
</p>

<hr />

<h4>1. Default export (most common for components)</h4>

<p>
    A file can have only one default export. This is the most common pattern
    for exporting React components.
</p>

<pre><code>
function Button() {
    return &lt;button&gt;Click&lt;/button&gt;;
}

export default Button;
</code></pre>

<p>
    Importing a default export:
</p>

<pre><code>
import Button from "./Button";
</code></pre>

<p>
    You can rename the imported variable because it is default:
</p>

<pre><code>
import MyButton from "./Button";
</code></pre>

<hr />

<h4>2. Named exports</h4>

<p>
    Named exports allow multiple exports from the same file.
</p>

<pre><code>
export function Button() {
    return &lt;button&gt;Click&lt;/button&gt;;
}

export function Icon() {
    return &lt;span&gt;Icon&lt;/span&gt;;
}
</code></pre>

<p>
    Importing named exports:
</p>

<pre><code>
import { Button, Icon } from "./components";
</code></pre>

<p>
    Names must match exactly unless you rename them using 'as'.
</p>

<pre><code>
import { Button as PrimaryButton } from "./components";
</code></pre>

<hr />

<h4>3. Exporting at the bottom</h4>

<p>
    Many projects define components first and export at the bottom for cleaner structure.
</p>

<pre><code>
function Button() {
    return &lt;button&gt;Click&lt;/button&gt;;
}

export { Button };
</code></pre>

<hr />

<h4>4. Combining default and named exports</h4>

<p>
    A file can have one default export and multiple named exports.
</p>

<pre><code>
export function Icon() {
    return &lt;span&gt;Icon&lt;/span&gt;;
}

function Button() {
    return &lt;button&gt;Click&lt;/button&gt;;
}

export default Button;
</code></pre>

<pre><code>
import Button, { Icon } from "./Button";
</code></pre>

<hr />

<h4>5. Re-exporting pattern</h4>

<p>
    To keep imports clean, many projects use an index file to re-export components.
</p>

<pre><code>
// components/index.js
export { default as Button } from "./Button";
export { default as Card } from "./Card";
</code></pre>

<pre><code>
import { Button, Card } from "./components";
</code></pre>

<p>
    This improves folder-level organization and avoids long import paths.
</p>

<hr />

<h4>6. Common interview pitfalls</h4>

<ul>
    <li>Only one default export per file</li>
    <li>Named imports must use curly braces</li>
    <li>Wrong import type causes runtime errors</li>
    <li>Default import name can be changed, named cannot unless using 'as'</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Default export is most common for React components</li>
    <li>Named exports are useful for utilities and multiple exports</li>
    <li>Index re-export pattern keeps imports clean</li>
    <li>Understanding import differences avoids common runtime errors</li>
</ul>

<p>
    In most modern React codebases, components are default exported,
    while hooks, helpers, and constants are often named exports.
</p>
`,
        },

        {
            id: "core-071",
            q: "Any exceptions to React component naming rules?",
            a: `
<p>
    React components must follow certain naming conventions, mainly that
    component names must start with a <strong>capital letter</strong>.
    This is how React distinguishes custom components from native HTML tags.
</p>

<hr />

<h4>1. Why capitalization matters</h4>

<p>
    In JSX, lowercase names are treated as built-in DOM elements.
    Uppercase names are treated as custom React components.
</p>

<pre><code>
function MyButton() {
    return &lt;button&gt;Click&lt;/button&gt;;
}

// Correct usage
&lt;MyButton /&gt;

// Incorrect - treated as a native element
&lt;myButton /&gt;
</code></pre>

<p>
    If you use lowercase for a component, React will assume it is a
    regular HTML tag and will not render your component.
</p>

<hr />

<h4>2. Exception - Custom elements (Web Components)</h4>

<p>
    When using custom Web Components, lowercase with a dash is valid.
    For example:
</p>

<pre><code>
&lt;my-widget&gt;&lt;/my-widget&gt;
</code></pre>

<p>
    According to HTML rules, custom elements must contain a dash.
    React allows this because it is treated as a valid DOM element,
    not a React component.
</p>

<hr />

<h4>3. Exception - Built-in HTML tags</h4>

<p>
    Standard HTML tags like:
</p>

<ul>
    <li>div</li>
    <li>span</li>
    <li>button</li>
</ul>

<p>
    must remain lowercase because they are native DOM elements.
</p>

<hr />

<h4>4. Variable assignment rule</h4>

<p>
    If you assign a component to a variable, the variable must also
    be capitalized when used in JSX.
</p>

<pre><code>
const Component = MyButton;

// Correct
&lt;Component /&gt;
</code></pre>

<hr />

<h4>5. Important interview clarification</h4>

<ul>
    <li>All React components must start with a capital letter</li>
    <li>Lowercase names are treated as DOM elements</li>
    <li>Custom Web Components are allowed if they contain a dash</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    React components must be capitalized. The only practical exception is
    when using native HTML elements or custom Web Components that contain
    a dash, which React treats as regular DOM elements rather than
    React components.
</p>
`,
        },

        {
            id: "core-072",
            q: "Can you use async/await in plain React components?",
            a: `
<p>
    Yes, you can use <strong>async/await</strong> in React, but not directly
    inside the component body during rendering.
</p>

<p>
    React components must remain <strong>pure and synchronous</strong> while
    rendering. That means you cannot make the component function itself async.
</p>

<hr />

<h4>1. What you cannot do</h4>

<p>
    You cannot mark a component as async like this:
</p>

<pre><code>
async function MyComponent() {
    const data = await fetch('/api/data');
    return &lt;div&gt;Hello&lt;/div&gt;;
}
</code></pre>

<p>
    React does not wait for async components in normal rendering.
    The component must return JSX immediately.
</p>

<hr />

<h4>2. Correct way - use async inside useEffect</h4>

<p>
    The correct approach is to use async logic inside a side effect.
</p>

<pre><code>
import { useEffect, useState } from 'react';

function MyComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/data');
            const json = await res.json();
            setData(json);
        }

        fetchData();
    }, []);

    return &lt;div&gt;{data ? 'Loaded' : 'Loading...'}&lt;/div&gt;;
}
</code></pre>

<p>
    Here, rendering stays synchronous, and async work happens after mount.
</p>

<hr />

<h4>3. Why React components cannot be async</h4>

<ul>
    <li>Rendering must be predictable</li>
    <li>React needs JSX immediately</li>
    <li>Async functions return Promises, not JSX</li>
</ul>

<p>
    If a component returns a Promise, React cannot render it normally.
</p>

<hr />

<h4>4. Important note - async inside useEffect</h4>

<p>
    You should not directly make the useEffect callback async:
</p>

<pre><code>
useEffect(async () => {
    // not recommended
}, []);
</code></pre>

<p>
    Instead, define an inner async function and call it.
</p>

<hr />

<h4>5. What about Suspense and Server Components?</h4>

<p>
    In React Server Components and Suspense-based data frameworks,
    async components are allowed. But in plain client-side React,
    components must stay synchronous.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>You cannot make a normal React component async</li>
    <li>Async logic should be placed inside useEffect or event handlers</li>
    <li>Rendering must remain synchronous</li>
    <li>Server Components are an exception</li>
</ul>

<p>
    In plain React, async/await is used inside effects or handlers,
    not in the component function itself.
</p>
`,
        },

        {
            id: "core-073",
            q: "Common folder structures for React apps?",
            a: `
<p>
    There is no single "correct" folder structure in React. The structure depends
    on project size, team preferences, and scalability requirements.
    However, some patterns are widely used in production applications.
</p>

<hr />

<h4>1. By type - small project structure</h4>

<p>
    This is common in beginner or small projects where files are grouped by type.
</p>

<pre><code>
src/
  components/
  pages/
  hooks/
  utils/
  services/
  App.jsx
  main.jsx
</code></pre>

<ul>
    <li>Easy to understand initially</li>
    <li>Works well for small apps</li>
    <li>Becomes messy as the app grows</li>
</ul>

<hr />

<h4>2. Feature-based structure - recommended for scalable apps</h4>

<p>
    In this approach, everything related to a feature stays inside one folder.
    This improves maintainability and reduces cross-folder jumping.
</p>

<pre><code>
src/
  features/
    auth/
      components/
      hooks/
      services/
      authSlice.js
    dashboard/
      components/
      hooks/
      dashboardAPI.js
  shared/
    ui/
    hooks/
    utils/
  AppRoutes.jsx
  main.jsx
</code></pre>

<ul>
    <li>Scales better in large teams</li>
    <li>Keeps related logic together</li>
    <li>Preferred in real-world production apps</li>
</ul>

<hr />

<h4>3. Atomic or UI-driven structure</h4>

<p>
    Used in design-heavy systems where components are grouped by UI complexity.
</p>

<pre><code>
src/
  components/
    atoms/
    molecules/
    organisms/
  layouts/
  pages/
</code></pre>

<p>
    This is common in design systems and component libraries.
</p>

<hr />

<h4>4. Hybrid structure - most practical</h4>

<p>
    Many professional apps combine feature-based structure with shared folders.
</p>

<ul>
    <li>features - business logic modules</li>
    <li>shared - reusable UI and utilities</li>
    <li>app - routing and providers</li>
</ul>

<hr />

<h4>Important principles</h4>

<ul>
    <li>Keep related code close together</li>
    <li>Avoid deeply nested folders</li>
    <li>Do not over-engineer early</li>
    <li>Let the structure evolve with project size</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Small apps use type-based folders</li>
    <li>Large apps prefer feature-based structure</li>
    <li>Hybrid structure is common in production</li>
    <li>Folder structure should support scalability and maintainability</li>
</ul>

<p>
    In modern production React applications, feature-based or hybrid
    structures are considered best practice.
</p>
`,
        },

        {
            id: "core-074",
            q: "Popular animation libraries used with React?",
            a: `
<p>
    Animations in React can be handled using CSS, but for complex and
    production-grade interactions, developers often use dedicated
    <strong>animation libraries</strong>.
</p>

<p>
    These libraries help manage transitions, layout animations,
    gestures, and performance optimizations more easily.
</p>

<hr />

<h4>1. Framer Motion</h4>

<p>
    <strong>Framer Motion</strong> is one of the most popular animation
    libraries in modern React apps.
</p>

<ul>
    <li>Declarative animation API</li>
    <li>Simple props like <code>initial</code>, <code>animate</code>, <code>exit</code></li>
    <li>Layout animations built-in</li>
    <li>Gesture support - drag, hover, tap</li>
</ul>

<pre><code>
import { motion } from "framer-motion";

function Box() {
    return (
        &lt;motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        /&gt;
    );
}
</code></pre>

<p>
    Best for UI transitions, page animations, and interactive components.
</p>

<hr />

<h4>2. React Spring</h4>

<p>
    <strong>React Spring</strong> is physics-based. Instead of fixed duration,
    animations feel more natural using spring dynamics.
</p>

<ul>
    <li>Great for complex gesture-based animations</li>
    <li>Smooth physics-driven transitions</li>
    <li>More flexible but slightly more complex API</li>
</ul>

<hr />

<h4>3. GSAP with React</h4>

<p>
    <strong>GSAP</strong> is a powerful JavaScript animation library that can
    be used inside React using refs.
</p>

<ul>
    <li>High performance timeline-based animations</li>
    <li>Fine-grained control</li>
    <li>Common in large production and marketing sites</li>
</ul>

<p>
    GSAP is not React-specific, but works very well with it.
</p>

<hr />

<h4>4. React Transition Group</h4>

<p>
    <strong>React Transition Group</strong> helps manage enter and exit
    transitions for components.
</p>

<ul>
    <li>Works well with CSS animations</li>
    <li>Lightweight</li>
    <li>Often used for simple fade or slide transitions</li>
</ul>

<hr />

<h4>5. CSS-only animations</h4>

<p>
    For small interactions like hover effects or simple fades,
    plain CSS transitions or keyframes are often enough.
</p>

<ul>
    <li>Less bundle size</li>
    <li>No extra dependency</li>
    <li>Good for micro-interactions</li>
</ul>

<hr />

<h4>Important practical note</h4>

<ul>
    <li>For UI-heavy apps - Framer Motion is very common.</li>
    <li>For physics-heavy interactions - React Spring.</li>
    <li>For marketing or timeline control - GSAP.</li>
    <li>For simple transitions - CSS or React Transition Group.</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    Popular animation libraries in React include Framer Motion,
    React Spring, GSAP, and React Transition Group. The choice depends
    on whether you need simple transitions, physics-based motion,
    or complex timeline animations.
</p>
`,
        },

        {
            id: "core-075",
            q: "CSS modules: why do people like them?",
            a: `
<p>
    CSS Modules are popular because they solve one of the biggest problems in
    traditional CSS - <strong>global scope collisions</strong>.
</p>

<p>
    In normal CSS, class names are global. This means two components can
    accidentally use the same class name and override each other.
    CSS Modules prevent that by scoping styles locally to the component.
</p>

<hr />

<h4>1. Local scope by default</h4>

<p>
    When using CSS Modules, each class name is automatically transformed into
    a unique name behind the scenes.
</p>

<pre><code>
// Button.module.css
.primary {
    background: blue;
    color: white;
}
</code></pre>

<pre><code>
import styles from "./Button.module.css";

function Button() {
    return &lt;button className={styles.primary}&gt;Click&lt;/button&gt;;
}
</code></pre>

<p>
    The generated class might look like:
</p>

<pre><code>
.primary_x7f3a2
</code></pre>

<p>
    This guarantees no accidental conflicts.
</p>

<hr />

<h4>2. No global naming headaches</h4>

<p>
    With plain CSS, developers often use naming conventions like BEM to avoid
    collisions. CSS Modules remove that mental overhead.
</p>

<ul>
    <li>No need for long class names</li>
    <li>No fear of overriding another component</li>
    <li>No manual namespace management</li>
</ul>

<hr />

<h4>3. Better maintainability in large apps</h4>

<p>
    Since styles are tied directly to the component file, it is easier to:
</p>

<ul>
    <li>Understand where a style is used</li>
    <li>Delete unused styles safely</li>
    <li>Refactor without breaking unrelated components</li>
</ul>

<hr />

<h4>4. Still just CSS</h4>

<p>
    CSS Modules do not introduce a new styling language.
    You still write normal CSS syntax.
</p>

<p>
    This makes adoption simple compared to CSS-in-JS libraries.
</p>

<hr />

<h4>5. Works well with build tools</h4>

<p>
    Modern bundlers like Vite and Webpack support CSS Modules out of the box.
    No heavy configuration required.
</p>

<hr />

<h4>6. Limitations to know</h4>

<ul>
    <li>Not dynamic like CSS-in-JS</li>
    <li>Cannot use JavaScript logic inside styles</li>
    <li>Theming requires additional setup</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>CSS Modules provide local scoping of class names</li>
    <li>They prevent global CSS conflicts</li>
    <li>They improve maintainability in large projects</li>
    <li>They keep standard CSS syntax</li>
</ul>

<p>
    People like CSS Modules because they combine the simplicity of plain CSS
    with the safety of scoped styles.
</p>
`,
        },

        {
            id: "core-076",
            q: "Popular React-specific linters and why they matter?",
            a: `
<p>
    Linters help enforce consistent coding standards and catch common mistakes
    before they become runtime bugs. In React projects, certain
    <strong>React-specific lint rules</strong> are extremely important because
    they prevent subtle rendering and hook-related issues.
</p>

<hr />

<h4>1. ESLint</h4>

<p>
    <strong>ESLint</strong> is the base linter used in most modern React projects.
    It analyzes your JavaScript or TypeScript code and reports potential problems.
</p>

<p>
    On its own, ESLint is generic. The power comes from plugins.
</p>

<hr />

<h4>2. eslint-plugin-react</h4>

<p>
    This plugin adds React-specific rules such as:
</p>

<ul>
    <li>Detecting unused React variables</li>
    <li>Ensuring proper JSX usage</li>
    <li>Preventing invalid prop usage</li>
    <li>Enforcing consistent component naming</li>
</ul>

<p>
    It helps maintain clean and predictable component structure.
</p>

<hr />

<h4>3. eslint-plugin-react-hooks</h4>

<p>
    This is one of the most important React linters today.
</p>

<ul>
    <li>Enforces the Rules of Hooks</li>
    <li>Ensures hooks are not called conditionally</li>
    <li>Validates dependency arrays in useEffect</li>
</ul>

<pre><code>
// Example of rule catching missing dependency
useEffect(() => {
    console.log(count);
}, []); // ESLint warns: missing dependency 'count'
</code></pre>

<p>
    Without this plugin, many hook bugs go unnoticed until production.
</p>

<hr />

<h4>4. eslint-plugin-jsx-a11y</h4>

<p>
    This plugin enforces accessibility best practices in JSX.
</p>

<ul>
    <li>Requires alt attributes on images</li>
    <li>Prevents invalid ARIA usage</li>
    <li>Ensures interactive elements are keyboard accessible</li>
</ul>

<p>
    Accessibility issues are easy to ignore, and this plugin prevents that.
</p>

<hr />

<h4>5. TypeScript ESLint integration</h4>

<p>
    When using TypeScript, <code>@typescript-eslint</code> works alongside ESLint
    to enforce type-safe and consistent patterns.
</p>

<hr />

<h4>Why React-specific linters matter</h4>

<ul>
    <li>Catch hook dependency bugs early</li>
    <li>Prevent invalid JSX patterns</li>
    <li>Improve accessibility</li>
    <li>Maintain consistent structure across teams</li>
    <li>Reduce production bugs caused by small mistakes</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    Popular React-specific linters include eslint-plugin-react,
    eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y.
    They matter because they enforce correct hook usage,
    prevent JSX mistakes, and improve accessibility,
    significantly reducing runtime bugs.
</p>
`,
        },

        // Added - practical core topics
        {
            id: "core-077",
            q: "How does React decide what to re-render after state changes?",
            a: `
<p>
    When state changes in React, it does not blindly re-render the entire DOM.
    Instead, React follows a structured process to determine exactly what
    needs to update.
</p>

<hr />

<h4>1. State update triggers a re-render of that component</h4>

<p>
    When you call <code>setState</code> or a state updater from
    <code>useState</code>, React schedules a re-render of that specific component.
</p>

<pre><code>
const [count, setCount] = useState(0);

setCount(1); // triggers re-render of this component
</code></pre>

<p>
    React re-executes the component function to generate a new virtual UI tree.
</p>

<hr />

<h4>2. React creates a new virtual DOM tree</h4>

<p>
    During re-render, React builds a new virtual DOM representation
    of the component and its children.
</p>

<p>
    This is just a lightweight JavaScript object structure,
    not actual DOM updates yet.
</p>

<hr />

<h4>3. Reconciliation - diffing old vs new virtual DOM</h4>

<p>
    React compares the previous virtual DOM tree with the new one.
    This comparison process is called <strong>reconciliation</strong>.
</p>

<ul>
    <li>If element types are the same, React updates only changed props</li>
    <li>If element types differ, React replaces that subtree</li>
    <li>For lists, React uses keys to track identity</li>
</ul>

<hr />

<h4>4. Only changed nodes are updated in the real DOM</h4>

<p>
    After diffing, React calculates the minimal set of changes
    and applies them to the actual DOM.
</p>

<p>
    This makes UI updates efficient instead of repainting everything.
</p>

<hr />

<h4>5. What about child components?</h4>

<p>
    By default, when a parent re-renders, all of its children also re-render.
</p>

<p>
    However, React can skip child re-renders if:
</p>

<ul>
    <li><code>React.memo</code> is used</li>
    <li>Props are shallowly equal</li>
    <li>State inside child has not changed</li>
</ul>

<hr />

<h4>6. Important performance detail</h4>

<p>
    React does not compare deep object equality.
    It relies on reference equality for props and state.
</p>

<p>
    That is why immutability is important. If you mutate an object
    without changing its reference, React may not detect a change.
</p>

<hr />

<h4>7. Interview-ready summary</h4>

<ul>
    <li>State update triggers component re-render</li>
    <li>React builds a new virtual DOM</li>
    <li>It diffs old vs new tree using reconciliation</li>
    <li>Only changed nodes are updated in the real DOM</li>
    <li>Child re-renders can be skipped using React.memo</li>
</ul>

<p>
    In short, React re-renders at the component level,
    then intelligently updates only the necessary DOM parts
    using its diffing algorithm.
</p>
`,
        },

        {
            id: "core-078",
            q: "Props drilling: what is it and what are clean fixes?",
            a: `
<p>
    <strong>Props drilling</strong> happens when you pass props from a parent
    component down through multiple intermediate components just to reach
    a deeply nested child.
</p>

<p>
    Those intermediate components may not even use the prop - they just
    forward it further down the tree.
</p>

<hr />

<h4>1. What props drilling looks like</h4>

<pre><code>
function App() {
    const user = { name: "Ash" };
    return &lt;Layout user={user} /&gt;;
}

function Layout({ user }) {
    return &lt;Sidebar user={user} /&gt;;
}

function Sidebar({ user }) {
    return &lt;Profile user={user} /&gt;;
}

function Profile({ user }) {
    return &lt;div&gt;Hello {user.name}&lt;/div&gt;;
}
</code></pre>

<p>
    Here, <code>Layout</code> and <code>Sidebar</code> do not need the user,
    but they must pass it down anyway.
</p>

<hr />

<h4>2. Why props drilling becomes a problem</h4>

<ul>
    <li>Unnecessary coupling between components</li>
    <li>Harder refactoring when component structure changes</li>
    <li>Cluttered props lists</li>
    <li>Harder readability in large trees</li>
</ul>

<p>
    In small apps this is fine. In large apps it becomes messy.
</p>

<hr />

<h4>3. Clean fixes</h4>

<h5>- 1. React Context</h5>

<p>
    Context lets you share values without manually passing props
    through every level.
</p>

<pre><code>
const UserContext = React.createContext(null);

function App() {
    const user = { name: "Ash" };

    return (
        &lt;UserContext.Provider value={user}&gt;
            &lt;Layout /&gt;
        &lt;/UserContext.Provider&gt;
    );
}

function Profile() {
    const user = React.useContext(UserContext);
    return &lt;div&gt;Hello {user.name}&lt;/div&gt;;
}
</code></pre>

<p>
    Now intermediate components do not need to forward the prop.
</p>

<hr />

<h5>- 2. Component composition</h5>

<p>
    Sometimes drilling happens because structure is wrong.
    You can move the child component closer to where the data exists.
</p>

<pre><code>
function App() {
    const user = { name: "Ash" };

    return (
        &lt;Layout&gt;
            &lt;Profile user={user} /&gt;
        &lt;/Layout&gt;
    );
}
</code></pre>

<p>
    This avoids passing user through Layout internally.
</p>

<hr />

<h5>- 3. State management libraries</h5>

<p>
    For large apps, tools like Redux, Zustand, or similar global
    state solutions can reduce deep prop passing.
</p>

<hr />

<h4>4. Important interview clarification</h4>

<p>
    Props drilling is not automatically bad.
    It only becomes a problem when the tree gets deep and the
    intermediate components do not care about the prop.
</p>

<p>
    Avoid overusing Context for everything - it can cause unnecessary
    re-renders if not structured carefully.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Props drilling means passing props through many layers</li>
    <li>It increases coupling and reduces readability</li>
    <li>Context, composition, or state libraries are clean fixes</li>
    <li>Use Context carefully to avoid performance issues</li>
</ul>

<p>
    In real projects, good component design often reduces props
    drilling before it even becomes a problem.
</p>
`,
        },

        {
            id: "core-079",
            q: "Derived state: when is it okay and when is it a trap?",
            a: `
<p>
    <strong>Derived state</strong> means storing a value in state that can be
    calculated from props or other state values.
</p>

<p>
    It sounds convenient, but in many cases it creates duplication and
    synchronization bugs.
</p>

<hr />

<h4>1. What is derived state?</h4>

<p>
    Derived state is when you copy something from props into state,
    or compute something and store it instead of calculating it during render.
</p>

<pre><code>
function Example({ count }) {
    const [double, setDouble] = React.useState(count * 2);
    return &lt;div&gt;{double}&lt;/div&gt;;
}
</code></pre>

<p>
    Here, "double" is derived from "count".
</p>

<hr />

<h4>2. Why derived state is often a trap</h4>

<ul>
    <li>It duplicates data</li>
    <li>It can get out of sync</li>
    <li>You now have two sources of truth</li>
</ul>

<p>
    If the parent updates "count", the state "double" will not automatically
    update unless you add extra logic.
</p>

<pre><code>
useEffect(() => {
    setDouble(count * 2);
}, [count]);
</code></pre>

<p>
    Now you are managing synchronization manually, which increases complexity.
</p>

<hr />

<h4>3. Better approach - compute during render</h4>

<p>
    In most cases, you should compute derived values directly inside render.
</p>

<pre><code>
function Example({ count }) {
    const double = count * 2;
    return &lt;div&gt;{double}&lt;/div&gt;;
}
</code></pre>

<p>
    This avoids duplication and guarantees consistency.
</p>

<hr />

<h4>4. When derived state is okay</h4>

<ul>
    <li>When you need to store previous props for comparison</li>
    <li>When you intentionally create a local editable copy of props</li>
    <li>When expensive computation needs memoization</li>
</ul>

<p>
    Example: form editing where initial value comes from props.
</p>

<pre><code>
function Form({ initialName }) {
    const [name, setName] = React.useState(initialName);
    return (
        &lt;input value={name} onChange={e => setName(e.target.value)} /&gt;
    );
}
</code></pre>

<p>
    Here we intentionally create a controlled local state copy.
</p>

<hr />

<h4>5. Rule of thumb</h4>

<ul>
    <li>If it can be computed from props or state - do not store it</li>
    <li>Avoid duplicating the same data in multiple places</li>
    <li>Prefer a single source of truth</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<p>
    Derived state is usually a trap because it duplicates data and creates
    synchronization issues. It is safe only when you intentionally need a local
    copy or previous value tracking. Otherwise, compute values directly during render.
</p>
`,
        },

        {
            id: "core-080",
            q: "When is it okay to keep state local vs shared state?",
            a: `
<p>
    Deciding between <strong>local state</strong> and <strong>shared state</strong>
    is about scope and responsibility. The rule is simple -
    keep state as close as possible to where it is used.
</p>

<hr />

<h4>1. Keep state local when</h4>

<ul>
    <li>The state is used by only one component</li>
    <li>The state does not affect siblings</li>
    <li>The state is UI-specific - like toggles, modals, input fields</li>
    <li>No other part of the app needs to react to it</li>
</ul>

<pre><code>
function Toggle() {
    const [open, setOpen] = React.useState(false);

    return (
        &lt;button onClick={() => setOpen(!open)}&gt;
            {open ? "Open" : "Closed"}
        &lt;/button&gt;
    );
}
</code></pre>

<p>
    Here, the state belongs only to this component.
    Lifting it up would add unnecessary complexity.
</p>

<hr />

<h4>2. Share state when</h4>

<ul>
    <li>Multiple components depend on the same data</li>
    <li>Updating in one place should update others</li>
    <li>The data represents global app state - auth, theme, cart, user info</li>
    <li>You notice prop drilling across many levels</li>
</ul>

<p>
    In such cases, lift state to the nearest common ancestor or use
    Context or a state library if it becomes widely shared.
</p>

<hr />

<h4>3. Practical mental model</h4>

<ul>
    <li>Local UI behavior - keep it local</li>
    <li>Cross-component coordination - lift it</li>
    <li>App-wide data - centralize it</li>
</ul>

<p>
    Over-sharing state makes components tightly coupled.
    Over-localizing state makes coordination difficult.
</p>

<hr />

<h4>4. Common mistake</h4>

<p>
    Many developers move state to global too early.
    This increases complexity and reduces component reusability.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Keep state local by default</li>
    <li>Lift state when multiple components need it</li>
    <li>Use global state only when truly app-wide</li>
    <li>State should live at the lowest common owner</li>
</ul>

<p>
    In real projects, good state placement is one of the biggest factors
    in keeping a React codebase clean and maintainable.
</p>
`,
        },

        {
            id: "core-081",
            q: "How would you handle global app state without Redux?",
            a: `
<p>
    Global app state can be managed in React without Redux using built-in
    APIs and lightweight libraries. In many modern projects, Redux is not
    required unless the application is very large or has complex state flows.
</p>

<hr />

<h4>1. React Context API</h4>

<p>
    The most common built-in solution is <strong>Context API</strong>.
    It allows you to share state across the component tree without prop drilling.
</p>

<pre><code>
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        &lt;AuthContext.Provider value={{ user, setUser }}&gt;
            {children}
        &lt;/AuthContext.Provider&gt;
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
</code></pre>

<p>
    This works well for authentication state, theme state, or small shared data.
</p>

<hr />

<h4>2. Context + useReducer for structured state</h4>

<p>
    If state transitions are complex, you can combine Context with
    <code>useReducer</code> to mimic Redux-style predictable updates.
</p>

<pre><code>
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        default:
            return state;
    }
}
</code></pre>

<p>
    This keeps updates centralized and easier to debug.
</p>

<hr />

<h4>3. Lightweight state libraries</h4>

<p>
    Instead of Redux, many projects use simpler libraries such as:
</p>

<ul>
    <li>Zustand - minimal and hook-based</li>
    <li>Jotai - atomic state model</li>
    <li>Recoil - state graph model</li>
</ul>

<p>
    These require much less boilerplate compared to Redux.
</p>

<hr />

<h4>4. Server state vs UI state separation</h4>

<p>
    Often what people store in Redux is actually server data.
    Libraries like React Query or SWR handle caching, syncing,
    and background updates much better than manual global state.
</p>

<hr />

<h4>5. When Redux is still useful</h4>

<ul>
    <li>Very large applications</li>
    <li>Complex cross-feature state dependencies</li>
    <li>Strict predictability and middleware needs</li>
</ul>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Context API is the built-in global state solution</li>
    <li>Context + useReducer can replace Redux patterns</li>
    <li>Lightweight libraries like Zustand reduce boilerplate</li>
    <li>Server state should usually be handled separately</li>
</ul>

<p>
    In modern React apps, Redux is optional. Most global state needs
    can be handled with Context, reducers, and specialized libraries.
</p>
`,
        },

        {
            id: "core-082",
            q: "What are common React performance smells you look for?",
            a: `
<p>
    In React, performance issues usually do not come from React itself,
    but from how components are structured and how state is managed.
    I look for common patterns that cause unnecessary re-renders or heavy work.
</p>

<hr />

<h4>1. Unnecessary re-renders</h4>

<p>
    A very common smell is components re-rendering even when their visible output
    has not changed.
</p>

<ul>
    <li>Inline object props - <code>style={{}}</code></li>
    <li>Inline arrow functions - <code>onClick={() => doSomething()}</code></li>
    <li>Parent re-renders causing deep child re-renders</li>
</ul>

<p>
    Because objects and functions get recreated on every render, React sees them
    as new references and triggers updates.
</p>

<hr />

<h4>2. Missing or incorrect keys in lists</h4>

<p>
    Using index as a key or unstable keys can cause incorrect DOM reuse,
    extra renders, or UI glitches.
</p>

<pre><code>
{items.map((item, index) => (
    &lt;li key={index}&gt;{item.name}&lt;/li&gt;
))}
</code></pre>

<p>
    Keys should be stable and unique.
</p>

<hr />

<h4>3. Large components doing too much</h4>

<p>
    A component managing too much state or logic becomes harder to optimize.
    Breaking it into smaller memoized components often improves performance.
</p>

<hr />

<h4>4. Heavy computations inside render</h4>

<p>
    Expensive calculations inside the component body run on every render.
</p>

<pre><code>
const filtered = bigList.filter(item => expensiveCheck(item));
</code></pre>

<p>
    If the data does not change frequently, it should be memoized using
    <code>useMemo</code>.
</p>

<hr />

<h4>5. Uncontrolled global state updates</h4>

<p>
    Updating high-level state that many components depend on can trigger
    widespread re-renders.
</p>

<p>
    State should be placed as close as possible to where it is needed.
</p>

<hr />

<h4>6. Missing memoization where necessary</h4>

<ul>
    <li>Not using <code>React.memo</code> for pure components</li>
    <li>Not using <code>useCallback</code> for stable callbacks</li>
    <li>Not using <code>useMemo</code> for expensive derived data</li>
</ul>

<p>
    However, memoization itself can become a smell if used everywhere
    without measurement.
</p>

<hr />

<h4>7. Large uncontrolled lists without virtualization</h4>

<p>
    Rendering thousands of DOM nodes at once is a performance smell.
    Libraries like react-window or react-virtualized should be used
    for large datasets.
</p>

<hr />

<h4>8. Excessive context usage</h4>

<p>
    Updating a context value re-renders all consumers.
    If the context holds frequently changing values,
    it can become a hidden performance issue.
</p>

<hr />

<h4>Interview-ready summary</h4>

<ul>
    <li>Unnecessary re-renders due to unstable references</li>
    <li>Incorrect keys in lists</li>
    <li>Heavy computations inside render</li>
    <li>Large components with misplaced state</li>
    <li>Rendering huge lists without virtualization</li>
</ul>

<p>
    React performance smells are usually about excessive rendering,
    unstable references, and misplaced state rather than React itself.
</p>
`,
        },
    ],
};
