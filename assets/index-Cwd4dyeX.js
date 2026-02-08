import{d as s,j as e}from"./index-B9wkDVEs.js";const r={Wrapper:s.div`
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
    `},a=()=>e.jsxs(r.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"Forms"}),e.jsx("p",{className:"intro",children:"Forms in React are usually controlled components: input value lives in state, and onChange updates it. This gives full control over validation, formatting, and submission."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"Core"}),e.jsx("span",{className:"chip",children:"Controlled"}),e.jsx("span",{className:"chip",children:"Validation"})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"1) Controlled input"}),e.jsx("p",{children:"Controlled means the input value comes from state. This is the most common and predictable pattern."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Text input (controlled)"}),e.jsx("pre",{children:e.jsx("code",{children:`import React, { useState } from "react";

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
}`})})]}),e.jsx("p",{className:"note",children:'Tip: Always provide a value. For optional strings, use "" not undefined.'})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"2) One state object vs many states"}),e.jsx("p",{children:"Both are valid. For small forms, multiple state variables are fine. For larger forms, a single object can be cleaner."}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Many states"}),e.jsx("pre",{children:e.jsx("code",{children:`const [email, setEmail] = useState("");
const [password, setPassword] = useState("");`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Single object"}),e.jsx("pre",{children:e.jsx("code",{children:`const [form, setForm] = useState({
  email: "",
  password: ""
});

const setField = (name, value) => {
  setForm((prev) => ({ ...prev, [name]: value }));
};`})})]})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"3) Checkbox"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"checked"})," and ",e.jsx("code",{children:"e.target.checked"}),"."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Checkbox (controlled)"}),e.jsx("pre",{children:e.jsx("code",{children:`const [agree, setAgree] = useState(false);

<input
  type="checkbox"
  checked={agree}
  onChange={(e) => setAgree(e.target.checked)}
/>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"4) Radio group"}),e.jsx("p",{children:"Radios share the same name. Value determines which is selected."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Radio group"}),e.jsx("pre",{children:e.jsx("code",{children:`const [plan, setPlan] = useState("basic");

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
</label>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"5) Select"}),e.jsx("p",{children:"Select works like text input: value and onChange."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Select"}),e.jsx("pre",{children:e.jsx("code",{children:`const [city, setCity] = useState("blr");

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="blr">Bangalore</option>
  <option value="bhp">Bhopal</option>
</select>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"6) Form submit"}),e.jsxs("p",{children:["Handle submit on the form element. Use"," ",e.jsx("code",{children:"e.preventDefault()"}),"to stop page reload."]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Submit handler"}),e.jsx("pre",{children:e.jsx("code",{children:`const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit", form);
};

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"7) Validation patterns"}),e.jsx("p",{children:"Validation can be done on change, on blur, or on submit. A common clean approach: validate on submit, and show errors."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Simple validate function"}),e.jsx("pre",{children:e.jsx("code",{children:`const validate = (values) => {
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
};`})})]}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Validate on submit"}),e.jsx("pre",{children:e.jsx("code",{children:`const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  const nextErrors = validate(form);

  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) return;

  // submit safe
};`})})]}),e.jsx("p",{className:"note",children:"Keep error display tied to field keys, not random strings."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"8) Debounce for search inputs"}),e.jsx("p",{children:"For live search, debounce input so you do not call APIs on every keystroke."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Debounce with setTimeout + cleanup"}),e.jsx("pre",{children:e.jsx("code",{children:`const [q, setQ] = useState("");

useEffect(() => {
  const id = setTimeout(() => {
    // call API or filter logic here
    console.log("search", q);
  }, 300);

  return () => clearTimeout(id);
}, [q]);`})})]})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"9) Uncontrolled inputs (rare but useful)"}),e.jsx("p",{children:"Uncontrolled inputs use refs instead of state. Useful for very large forms or when you only need value on submit."}),e.jsxs("div",{className:"codeCard",children:[e.jsx("div",{className:"codeTitle",children:"Uncontrolled with ref"}),e.jsx("pre",{children:e.jsx("code",{children:`const inputRef = useRef(null);

const handleSubmit = (e) => {
  e.preventDefault();
  const value = inputRef.current?.value || "";
  console.log(value);
};

<input ref={inputRef} />`})})]}),e.jsx("p",{className:"note",children:"In most cases, controlled inputs are still the better default."})]}),e.jsxs("section",{className:"block",children:[e.jsx("h2",{children:"Quick checklist"}),e.jsxs("div",{className:"checklist",children:[e.jsx("div",{className:"row",children:"Use controlled inputs for predictable forms"}),e.jsx("div",{className:"row",children:"Checkbox uses checked, not value"}),e.jsx("div",{className:"row",children:"Handle submit on form and preventDefault"}),e.jsx("div",{className:"row",children:"Validate on submit and show field errors"}),e.jsx("div",{className:"row",children:"Debounce search inputs with cleanup"})]})]})]});export{a as default};
