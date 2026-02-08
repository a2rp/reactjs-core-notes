import React from "react";
import { Styled } from "./styled";

const QuickForms = () => {
    return (
        <Styled.Wrapper>
            <header className="pageHeader">
                <h1>Forms</h1>
                <p className="intro">
                    Forms in React are usually controlled components: input
                    value lives in state, and onChange updates it. This gives
                    full control over validation, formatting, and submission.
                </p>

                <div className="chips">
                    <span className="chip">Core</span>
                    <span className="chip">Controlled</span>
                    <span className="chip">Validation</span>
                </div>
            </header>

            <section className="block">
                <h2>1) Controlled input</h2>
                <p>
                    Controlled means the input value comes from state. This is
                    the most common and predictable pattern.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Text input (controlled)</div>
                    <pre>
                        <code>{`import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleChange} placeholder="Name" />
      <div>Preview: {name}</div>
    </div>
  );
}`}</code>
                    </pre>
                </div>

                <p className="note">
                    Tip: Always provide a value. For optional strings, use ""
                    not undefined.
                </p>
            </section>

            <section className="block">
                <h2>2) One state object vs many states</h2>
                <p>
                    Both are valid. For small forms, multiple state variables
                    are fine. For larger forms, a single object can be cleaner.
                </p>

                <div className="grid2">
                    <div className="codeCard">
                        <div className="codeTitle">Many states</div>
                        <pre>
                            <code>{`const [email, setEmail] = useState("");
const [password, setPassword] = useState("");`}</code>
                        </pre>
                    </div>

                    <div className="codeCard">
                        <div className="codeTitle">Single object</div>
                        <pre>
                            <code>{`const [form, setForm] = useState({
  email: "",
  password: ""
});

const setField = (name, value) => {
  setForm((prev) => ({ ...prev, [name]: value }));
};`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className="block">
                <h2>3) Checkbox</h2>
                <p>
                    Use <code>checked</code> and <code>e.target.checked</code>.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Checkbox (controlled)</div>
                    <pre>
                        <code>{`const [agree, setAgree] = useState(false);

<input
  type="checkbox"
  checked={agree}
  onChange={(e) => setAgree(e.target.checked)}
/>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>4) Radio group</h2>
                <p>
                    Radios share the same name. Value determines which is
                    selected.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Radio group</div>
                    <pre>
                        <code>{`const [plan, setPlan] = useState("basic");

<label>
  <input
    type="radio"
    name="plan"
    value="basic"
    checked={plan === "basic"}
    onChange={(e) => setPlan(e.target.value)}
  />
  Basic
</label>

<label>
  <input
    type="radio"
    name="plan"
    value="pro"
    checked={plan === "pro"}
    onChange={(e) => setPlan(e.target.value)}
  />
  Pro
</label>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>5) Select</h2>
                <p>Select works like text input: value and onChange.</p>

                <div className="codeCard">
                    <div className="codeTitle">Select</div>
                    <pre>
                        <code>{`const [city, setCity] = useState("blr");

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="blr">Bangalore</option>
  <option value="bhp">Bhopal</option>
</select>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>6) Form submit</h2>
                <p>
                    Handle submit on the form element. Use{" "}
                    <code>e.preventDefault()</code>
                    to stop page reload.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Submit handler</div>
                    <pre>
                        <code>{`const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit", form);
};

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>7) Validation patterns</h2>
                <p>
                    Validation can be done on change, on blur, or on submit. A
                    common clean approach: validate on submit, and show errors.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Simple validate function</div>
                    <pre>
                        <code>{`const validate = (values) => {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Email is invalid";
  }

  if (values.password.length < 6) {
    errors.password = "Password must be 6+ chars";
  }

  return errors;
};`}</code>
                    </pre>
                </div>

                <div className="codeCard">
                    <div className="codeTitle">Validate on submit</div>
                    <pre>
                        <code>{`const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const nextErrors = validate(form);

  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) return;

  // submit safe
};`}</code>
                    </pre>
                </div>

                <p className="note">
                    Keep error display tied to field keys, not random strings.
                </p>
            </section>

            <section className="block">
                <h2>8) Debounce for search inputs</h2>
                <p>
                    For live search, debounce input so you do not call APIs on
                    every keystroke.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">
                        Debounce with setTimeout + cleanup
                    </div>
                    <pre>
                        <code>{`const [q, setQ] = useState("");

useEffect(() => {
  const id = setTimeout(() => {
    // call API or filter logic here
    console.log("search", q);
  }, 300);

  return () => clearTimeout(id);
}, [q]);`}</code>
                    </pre>
                </div>
            </section>

            <section className="block">
                <h2>9) Uncontrolled inputs (rare but useful)</h2>
                <p>
                    Uncontrolled inputs use refs instead of state. Useful for
                    very large forms or when you only need value on submit.
                </p>

                <div className="codeCard">
                    <div className="codeTitle">Uncontrolled with ref</div>
                    <pre>
                        <code>{`const inputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  const value = inputRef.current?.value || "";
  console.log(value);
};

<input ref={inputRef} />`}</code>
                    </pre>
                </div>

                <p className="note">
                    In most cases, controlled inputs are still the better
                    default.
                </p>
            </section>

            <section className="block">
                <h2>Quick checklist</h2>
                <div className="checklist">
                    <div className="row">
                        Use controlled inputs for predictable forms
                    </div>
                    <div className="row">Checkbox uses checked, not value</div>
                    <div className="row">
                        Handle submit on form and preventDefault
                    </div>
                    <div className="row">
                        Validate on submit and show field errors
                    </div>
                    <div className="row">
                        Debounce search inputs with cleanup
                    </div>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default QuickForms;
