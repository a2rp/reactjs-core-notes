import{d as j,r as h,u as N,j as e,F as I,a as A,b as M,c as D}from"./index-B0yqN1dR.js";const E={Wrapper:j.div`
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
            line-height: 1.75;
            color: var(--color-text-primary);
            padding: 12px 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            white-space: pre-wrap;
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
    `},F=[{id:"core-react",title:"Core React",items:[{id:"core-001",q:"What is React, in simple terms?",a:""},{id:"core-002",q:"How did React evolve over time? Quick history.",a:""},{id:"core-003",q:"What are the top features React is known for?",a:""},{id:"core-004",q:"What is JSX and why do we use it?",a:""},{id:"core-005",q:"Element vs Component: what is the real difference?",a:""},{id:"core-006",q:"How do you create a component in React?",a:""},{id:"core-007",q:"When would you still choose class components over function components?",a:""},{id:"core-008",q:"What is a PureComponent and how is it different?",a:""},{id:"core-009",q:"What is state in React?",a:""},{id:"core-010",q:"What are props in React?",a:""},{id:"core-011",q:"State vs props: explain with a real example.",a:""},{id:"core-012",q:"React event handling vs HTML events: what changes?",a:""},{id:"core-013",q:"What are SyntheticEvents?",a:""},{id:"core-014",q:"Inline conditional rendering: common patterns?",a:""},{id:"core-015",q:"What is the key prop and why does it matter?",a:""},{id:"core-016",q:"What is the Virtual DOM?",a:""},{id:"core-017",q:"How does Virtual DOM update the real DOM efficiently?",a:""},{id:"core-018",q:"Shadow DOM vs Virtual DOM: what is the difference?",a:""},{id:"core-019",q:"What is React Fiber?",a:""},{id:"core-020",q:"What was Fiber created to solve?",a:""},{id:"core-021",q:"Controlled components: what and why?",a:""},{id:"core-022",q:"Uncontrolled components: what and when?",a:""},{id:"core-023",q:"createElement vs cloneElement: where do they fit?",a:""},{id:"core-024",q:"What does lifting state up mean in practice?",a:""},{id:"core-025",q:"What are Higher-Order Components (HOCs)?",a:""},{id:"core-026",q:"What is the children prop used for?",a:""},{id:"core-027",q:"How do you write comments inside JSX?",a:""},{id:"core-028",q:"What is reconciliation in React?",a:""},{id:"core-029",q:"Does React.lazy work with named exports? If not, what’s the workaround?",a:""},{id:"core-030",q:"Why do we use className instead of class in JSX?",a:""},{id:"core-031",q:"What are React Fragments?",a:""},{id:"core-032",q:"Why are fragments better than extra div wrappers?",a:""},{id:"core-033",q:"What are portals and when are they useful?",a:""},{id:"core-034",q:"Stateless vs stateful components: meaning today?",a:""},{id:"core-035",q:"How do you validate props in React?",a:""},{id:"core-036",q:"What are the advantages of React?",a:""},{id:"core-037",q:"What are common limitations or pain points in React?",a:""},{id:"core-038",q:"Static type checking in React: what are the recommended options?",a:""},{id:"core-039",q:"What does react-dom do and why is it separate from react?",a:""},{id:"core-040",q:"What is ReactDOMServer used for?",a:""},{id:"core-041",q:"How to use innerHTML in React safely?",a:""},{id:"core-042",q:"How do you style components in React? Common approaches.",a:""},{id:"core-043",q:"How are events ‘different’ in React under the hood?",a:""},{id:"core-044",q:"What problems happen when you use array index as key?",a:""},{id:"core-045",q:"Ways to conditionally render UI in React?",a:""},{id:"core-046",q:"Why is spreading props on DOM elements risky?",a:""},{id:"core-047",q:"How do you memoize things in React? (components, values, functions)",a:""},{id:"core-048",q:"Server-side rendering (SSR): how does it work in React?",a:""},{id:"core-049",q:"How do you enable production mode and why does it matter?",a:""},{id:"core-050",q:"Do hooks replace HOCs and render props fully? What’s the real answer?",a:""},{id:"core-051",q:"What is a switching component pattern?",a:""},{id:"core-052",q:"What are mixins and why are they basically dead in React?",a:""},{id:"core-053",q:"Pointer events in React: what’s supported?",a:""},{id:"core-054",q:"Why should React component names start with capital letters?",a:""},{id:"core-055",q:"Custom DOM attributes: are they supported? Any rules?",a:""},{id:"core-056",q:"How do you loop/render lists inside JSX?",a:""},{id:"core-057",q:"How do you access props inside JSX attribute strings correctly?",a:""},{id:"core-058",q:"PropTypes: how do you define array of shape?",a:""},{id:"core-059",q:"How do you conditionally apply className?",a:""},{id:"core-060",q:"React vs ReactDOM: what’s the difference?",a:""},{id:"core-061",q:"How do you use label properly in React?",a:""},{id:"core-062",q:"How do you merge multiple inline style objects?",a:""},{id:"core-063",q:"How to rerender/update UI on browser resize?",a:""},{id:"core-064",q:"How to pretty print JSON in React UI?",a:""},{id:"core-065",q:"Why can’t you update props from inside a component?",a:""},{id:"core-066",q:"How do you auto-focus an input on page load?",a:""},{id:"core-067",q:"How can you find React version at runtime in the browser?",a:""},{id:"core-068",q:"How do you integrate Google Analytics with React Router?",a:""},{id:"core-069",q:"Vendor prefixes in inline styles: how to handle?",a:""},{id:"core-070",q:"ES6 import/export patterns for components?",a:""},{id:"core-071",q:"Any exceptions to React component naming rules?",a:""},{id:"core-072",q:"Can you use async/await in plain React components?",a:""},{id:"core-073",q:"Common folder structures for React apps?",a:""},{id:"core-074",q:"Popular animation libraries used with React?",a:""},{id:"core-075",q:"CSS modules: why do people like them?",a:""},{id:"core-076",q:"Popular React-specific linters and why they matter?",a:""},{id:"core-077",q:"How does React decide what to re-render after state changes?",a:""},{id:"core-078",q:"Props drilling: what is it and what are clean fixes?",a:""},{id:"core-079",q:"Derived state: when is it okay and when is it a trap?",a:""},{id:"core-080",q:"When is it okay to keep state local vs shared state?",a:""},{id:"core-081",q:"How would you handle global app state without Redux?",a:""},{id:"core-082",q:"What are common React performance smells you look for?",a:""}]},{id:"modern-react",title:"Modern React (React 18+)",items:[{id:"m-001",q:"What changed in React 18 that interviewers care about?",a:""},{id:"m-002",q:"Automatic batching: what is it and why does it matter?",a:""},{id:"m-003",q:"Concurrent rendering: explain like you’re not selling a course.",a:""},{id:"m-004",q:"What is startTransition and when would you use it?",a:""},{id:"m-005",q:"useTransition vs useDeferredValue: real difference and use cases?",a:""},{id:"m-006",q:"StrictMode renders effects twice in dev: why and how to handle?",a:""},{id:"m-007",q:"What is hydration and why can it fail?",a:""},{id:"m-008",q:"What are common hydration mismatch causes and fixes?",a:""},{id:"m-009",q:"What is Suspense used for today in real apps?",a:""},{id:"m-010",q:"Why Suspense for data fetching is not same as Suspense for code splitting?",a:""}]},{id:"react-router",title:"React Router",items:[{id:"rr-079",q:"What is React Router and what problem does it solve?",a:""},{id:"rr-080",q:"React Router vs history library: how are they related?",a:""},{id:"rr-081",q:"Main building blocks of React Router v6?",a:""},{id:"rr-082",q:"push vs replace navigation: what’s the difference?",a:""},{id:"rr-083",q:"How do you navigate programmatically in React Router?",a:""},{id:"rr-084",q:"How do you read query params in React Router?",a:""},{id:"rr-085",q:"Why does the ‘Router may have only one child’ warning happen?",a:""},{id:"rr-086",q:"How do you pass params/state while navigating?",a:""},{id:"rr-087",q:"How do you create a default route and a NotFound route?",a:""},{id:"rr-088",q:"How do you access history/navigation objects in Router?",a:""},{id:"rr-089",q:"How do you auto-redirect after login?",a:""},{id:"rr-090",q:"What were the benefits people liked in React Router v4?",a:""},{id:"rr-091",q:"How do you protect routes (auth guard) in React Router v6?",a:""},{id:"rr-092",q:"Nested routes: when is it clean and when is it overkill?",a:""},{id:"rr-093",q:"How do you handle scroll restoration on route change?",a:""}]},{id:"data-fetching",title:"Data Fetching and Server State",items:[{id:"df-001",q:"Where do you fetch data in React and why?",a:""},{id:"df-002",q:"AbortController: how do you cancel fetch on unmount?",a:""},{id:"df-003",q:"How do you avoid race conditions in async requests?",a:""},{id:"df-004",q:"Loading and error UI patterns you always implement?",a:""},{id:"df-005",q:"What is server state vs client state?",a:""},{id:"df-006",q:"React Query (TanStack Query): why would you use it?",a:""},{id:"df-007",q:"Caching, stale time, refetching: what do they mean?",a:""},{id:"df-008",q:"Optimistic updates: what are they and how do you do them safely?",a:""}]},{id:"i18n",title:"React Internationalization",items:[{id:"i18n-091",q:"What is React Intl?",a:""},{id:"i18n-092",q:"Key features of React Intl?",a:""},{id:"i18n-093",q:"Two main formatting approaches in React Intl?",a:""},{id:"i18n-094",q:"How to use FormattedMessage as placeholder text?",a:""},{id:"i18n-095",q:"How do you get current locale in React Intl?",a:""},{id:"i18n-096",q:"How do you format dates with React Intl?",a:""}]},{id:"testing",title:"React Testing",items:[{id:"test-097",q:"What is Shallow rendering? When is it used?",a:""},{id:"test-098",q:"What is TestRenderer in React?",a:""},{id:"test-099",q:"What does ReactTestUtils provide?",a:""},{id:"test-100",q:"What is Jest and why is it popular?",a:""},{id:"test-101",q:"Jest vs Jasmine: what are the practical advantages?",a:""},{id:"test-102",q:"Show a very simple Jest test example: what should it look like?",a:""},{id:"test-103",q:"React Testing Library: why do teams prefer it over enzyme-style tests?",a:""},{id:"test-104",q:"Unit vs integration tests in React: what do you prioritize?",a:""},{id:"test-105",q:"How do you test async UI (loading, success, error states)?",a:""},{id:"test-106",q:"What should NOT be tested in React UI tests?",a:""}]},{id:"redux",title:"React Redux and State Libraries",items:[{id:"redux-103",q:"What is Flux?",a:""},{id:"redux-104",q:"What is Redux?",a:""},{id:"redux-105",q:"Core principles of Redux?",a:""},{id:"redux-106",q:"Redux downsides compared to Flux?",a:""},{id:"redux-107",q:"mapStateToProps vs mapDispatchToProps: difference?",a:""},{id:"redux-108",q:"Can you dispatch an action inside a reducer?",a:""},{id:"redux-109",q:"Access Redux store outside a component: how and when?",a:""},{id:"redux-110",q:"Drawbacks of MVW pattern?",a:""},{id:"redux-111",q:"Redux and RxJS: any similarities or overlaps?",a:""},{id:"redux-112",q:"How do you reset Redux state?",a:""},{id:"redux-113",q:"React Context vs Redux: when to use which?",a:""},{id:"redux-114",q:"Why are reducers called reducers?",a:""},{id:"redux-115",q:"How do you do AJAX requests in Redux apps?",a:""},{id:"redux-116",q:"Should component local state always go to Redux store?",a:""},{id:"redux-117",q:"Proper way to access Redux store in app code?",a:""},{id:"redux-118",q:"Component vs container: what does it mean in Redux world?",a:""},{id:"redux-119",q:"Why use constants for action types?",a:""},{id:"redux-120",q:"Different ways to write mapDispatchToProps?",a:""},{id:"redux-121",q:"What is ownProps in mapStateToProps/mapDispatchToProps?",a:""},{id:"redux-122",q:"How do you structure top-level Redux folders?",a:""},{id:"redux-123",q:"What is Redux Saga?",a:""},{id:"redux-124",q:"Mental model of Redux Saga: how to think about it?",a:""},{id:"redux-125",q:"call vs put in Redux Saga?",a:""},{id:"redux-126",q:"What is Redux Thunk?",a:""},{id:"redux-127",q:"Redux Saga vs Thunk: when to prefer which?",a:""},{id:"redux-128",q:"What is Redux DevTools?",a:""},{id:"redux-129",q:"Key features of Redux DevTools?",a:""},{id:"redux-130",q:"What are selectors in Redux and why use them?",a:""},{id:"redux-131",q:"What is Redux Form?",a:""},{id:"redux-132",q:"Main features of Redux Form?",a:""},{id:"redux-133",q:"How to apply multiple middlewares in Redux?",a:""},{id:"redux-134",q:"How do you set initial state in Redux?",a:""},{id:"redux-135",q:"Relay vs Redux: what’s the difference?",a:""},{id:"redux-136",q:"What is an action in Redux?",a:""},{id:"redux-137",q:"Flux vs Redux: what’s the difference in approach?",a:""},{id:"redux-138",q:"MobX: what is it and how is it different from Redux?",a:""},{id:"redux-139",q:"What is Redux Toolkit and why is it preferred now?",a:""},{id:"redux-140",q:"Zustand/Recoil/Jotai: when do these make sense?",a:""}]},{id:"react-native",title:"React Native",items:[{id:"rn-139",q:"React vs React Native: what changes?",a:""},{id:"rn-140",q:"How do you test React Native apps?",a:""},{id:"rn-141",q:"How do you log in React Native?",a:""},{id:"rn-142",q:"How do you debug React Native apps?",a:""}]},{id:"libraries",title:"React Libraries and Integrations",items:[{id:"lib-143",q:"What is Reselect and why do people use it?",a:""},{id:"lib-144",q:"What is Flow?",a:""},{id:"lib-145",q:"Flow vs PropTypes: difference?",a:""},{id:"lib-146",q:"How do you use Font Awesome icons in React?",a:""},{id:"lib-147",q:"What is React DevTools and what can it do?",a:""},{id:"lib-148",q:"Why does DevTools not work on local file opened in browser?",a:""},{id:"lib-149",q:"How do you use Polymer/web components with React?",a:""},{id:"lib-150",q:"React vs Vue: where does React win or lose?",a:""},{id:"lib-151",q:"React vs Angular: big differences?",a:""},{id:"lib-152",q:"Why does the React tab sometimes not show in DevTools?",a:""},{id:"lib-153",q:"What are styled-components?",a:""},{id:"lib-154",q:"Give a simple styled-components example.",a:""},{id:"lib-155",q:"What is Relay?",a:""},{id:"lib-156",q:"Reselect: main features recap.",a:""},{id:"lib-157",q:"Give a basic example where Reselect makes sense.",a:""},{id:"lib-158",q:"MUI vs Tailwind vs styled-components: how do you choose?",a:""},{id:"lib-159",q:"When do you build your own component library vs using one?",a:""}]},{id:"a11y-security",title:"Accessibility and Security",items:[{id:"as-001",q:"Accessibility basics: what do you always do in UI?",a:""},{id:"as-002",q:"Keyboard navigation: common issues and fixes?",a:""},{id:"as-003",q:"ARIA: when to use it and when NOT to use it?",a:""},{id:"as-004",q:"XSS risks in React: what is safe by default and what is not?",a:""},{id:"as-005",q:"dangerouslySetInnerHTML: when is it unavoidable and how to sanitize?",a:""},{id:"as-006",q:"Where do you store tokens - cookies vs localStorage - why?",a:""}]},{id:"tooling",title:"Tooling and Build",items:[{id:"tl-001",q:"Vite vs CRA: why is Vite faster in dev?",a:""},{id:"tl-002",q:"How do you handle environment variables in Vite?",a:""},{id:"tl-003",q:"Bundle size: how do you analyze and reduce it?",a:""},{id:"tl-004",q:"Tree shaking: what is it and how to keep it working?",a:""},{id:"tl-005",q:"Code splitting: where should you split and why?",a:""},{id:"tl-006",q:"How do you do lazy loading correctly with routes?",a:""},{id:"tl-007",q:"Source maps: when to enable/disable in prod?",a:""},{id:"tl-008",q:"How do you handle base path deployment (GitHub pages)?",a:""}]},{id:"advanced",title:"Advanced and Misc",items:[{id:"adv-158",q:"Can Redux be used without React?",a:""},{id:"adv-159",q:"Do you need a specific build tool for Redux?",a:""},{id:"adv-160",q:"How do Redux Form initial values update from state?",a:""},{id:"adv-161",q:"How can PropTypes accept multiple types for one prop?",a:""},{id:"adv-162",q:"Can you import an SVG as a React component?",a:""},{id:"adv-163",q:"What is render hijacking?",a:""},{id:"adv-164",q:"How do you pass numbers as props safely?",a:""},{id:"adv-165",q:"Should all state live in Redux? When is local state better?",a:""},{id:"adv-166",q:"What was registerServiceWorker used for in CRA?",a:""},{id:"adv-167",q:"What is React.memo and when should you use it?",a:""},{id:"adv-168",q:"What is React.lazy and where does it help?",a:""},{id:"adv-169",q:"How do you prevent unnecessary re-renders with setState patterns?",a:""},{id:"adv-170",q:"How do you render arrays, strings, and numbers in JSX?",a:""},{id:"adv-171",q:"How to ensure hooks rules are followed in a project?",a:""},{id:"adv-172",q:"componentDidCatch signature and how error boundaries work?",a:""},{id:"adv-173",q:"When do error boundaries NOT catch errors?",a:""},{id:"adv-174",q:"What happens with uncaught errors in React apps?",a:""},{id:"adv-175",q:"Where should error boundaries be placed in the tree?",a:""},{id:"adv-176",q:"What is the benefit of component stack traces from boundaries?",a:""},{id:"adv-177",q:"What are defaultProps and how do they work?",a:""},{id:"adv-178",q:"What is displayName and why would you set it?",a:""},{id:"adv-179",q:"Browser support story for React apps: what matters today?",a:""},{id:"adv-180",q:"What is code splitting and how do you do it?",a:""},{id:"adv-181",q:"What are keyed fragments and why would you use them?",a:""},{id:"adv-182",q:"Does React support all HTML attributes? Any caveats?",a:""},{id:"adv-183",q:"When do props default to true in JSX?",a:""},{id:"adv-184",q:"What is Next.js and why do people use it?",a:""},{id:"adv-185",q:"How do you pass event handlers correctly to children?",a:""},{id:"adv-186",q:"How to prevent a function from firing multiple times?",a:""},{id:"adv-187",q:"How does JSX help prevent injection attacks?",a:""},{id:"adv-188",q:"How do you update rendered elements in React?",a:""},{id:"adv-189",q:"How do you communicate props are read-only?",a:""},{id:"adv-190",q:"When is using index as key actually safe?",a:""},{id:"adv-191",q:"Do keys need to be globally unique?",a:""},{id:"adv-192",q:"What is the popular choice for form handling in React today?",a:""},{id:"adv-193",q:"Formik vs Redux Form: why do people prefer Formik?",a:""},{id:"adv-194",q:"Why is inheritance not required in React?",a:""},{id:"adv-195",q:"Can you use web components in React apps?",a:""},{id:"adv-196",q:"What is dynamic import and why is it useful?",a:""},{id:"adv-197",q:"What are loadable components?",a:""},{id:"adv-198",q:"What is Suspense in React?",a:""},{id:"adv-199",q:"Route-based code splitting: how does it work?",a:""},{id:"adv-200",q:"Context default value: what is it used for?",a:""},{id:"adv-201",q:"What is the diffing algorithm in React (high level)?",a:""},{id:"adv-202",q:"What rules does diffing rely on?",a:""},{id:"adv-203",q:"When do you need refs (real cases)?",a:""},{id:"adv-204",q:"Do render props need to be named 'render'?",a:""},{id:"adv-205",q:"Render props with PureComponent: what problems can happen?",a:""},{id:"adv-206",q:"What is windowing/virtualization technique?",a:""},{id:"adv-207",q:"How do you print falsy values intentionally in JSX?",a:""},{id:"adv-208",q:"Portals: what is the most common real use case?",a:""},{id:"adv-209",q:"Uncontrolled component default values: how to set them?",a:""},{id:"adv-210",q:"What is your favorite React stack? What would you pick and why?",a:""},{id:"adv-211",q:"Real DOM vs Virtual DOM: explain like an interviewer.",a:""},{id:"adv-212",q:"How do you add Bootstrap to a React app?",a:""},{id:"adv-213",q:"Name a few big apps/sites that use React.",a:""},{id:"adv-214",q:"Is CSS-in-JS recommended? When yes, when no?",a:""},{id:"adv-215",q:"Do you need to convert all class components to hooks?",a:""},{id:"adv-216",q:"Fetching data with hooks: best patterns?",a:""},{id:"adv-217",q:"Do hooks cover all use cases of classes?",a:""},{id:"adv-218",q:"Hooks stable release: what does that mean practically?",a:""},{id:"adv-219",q:"Why does useState return array destructuring?",a:""},{id:"adv-220",q:"What sources influenced hooks design?",a:""},{id:"adv-221",q:"How do you access imperative APIs of web components?",a:""},{id:"adv-222",q:"Formik: what is it and where is it useful?",a:""},{id:"adv-223",q:"Middleware choices for async in Redux apps?",a:""},{id:"adv-224",q:"Can browsers understand JSX directly?",a:""},{id:"adv-225",q:"Explain React data flow clearly.",a:""},{id:"adv-226",q:"Concurrent rendering: what is it?",a:""},{id:"adv-227",q:"Async mode vs concurrent mode: what changed?",a:""},{id:"adv-228",q:"Can you use javascript: URLs in React? Any risks?",a:""},{id:"adv-229",q:"Why is ESLint plugin for hooks important?",a:""},{id:"adv-230",q:"Imperative vs declarative: explain using React examples.",a:""},{id:"adv-231",q:"TypeScript with React: benefits and tradeoffs.",a:""},{id:"adv-232",q:"How to keep user authenticated on refresh using Context API?",a:""},{id:"adv-233",q:"New JSX transform: what changed?",a:""},{id:"adv-234",q:"New JSX transform vs old transform: difference?",a:""},{id:"adv-235",q:"What are React Server Components (high level)?",a:""},{id:"adv-236",q:"What is prop drilling and how do you avoid it?",a:""},{id:"adv-237",q:"useState vs useRef: when to use which?",a:""},{id:"adv-238",q:"What is a wrapper component?",a:""},{id:"adv-239",q:"useEffect vs useLayoutEffect: practical difference?",a:""},{id:"adv-240",q:"Functional vs class components: differences that matter in interviews.",a:""},{id:"adv-241",q:"What is StrictMode and why does it double-render in dev?",a:""},{id:"adv-242",q:"Why is StrictMode useful?",a:""},{id:"adv-243",q:"JSX rules: key rules every dev must know.",a:""},{id:"adv-244",q:"Why must JSX return a single parent node?",a:""},{id:"adv-245",q:"Why should you not mutate arrays directly in state?",a:""},{id:"adv-246",q:"Capture phase events: what are they?",a:""},{id:"adv-247",q:"How does React update the screen after state changes?",a:""},{id:"adv-248",q:"How does React batch state updates?",a:""},{id:"adv-249",q:"Can we disable automatic batching?",a:""},{id:"adv-250",q:"What is hydration in React?",a:""},{id:"adv-251",q:"Update objects inside state: safe patterns?",a:""},{id:"adv-252",q:"Update nested objects: what is the best way?",a:""},{id:"adv-253",q:"Update arrays in state: preferred approaches?",a:""},{id:"adv-254",q:"Immer: how does it help with state updates?",a:""},{id:"adv-255",q:"Why are immutable updates important?",a:""},{id:"adv-256",q:"Preferred vs non-preferred array operations in state updates?",a:""},{id:"adv-257",q:"Defining nested components inside components: what can go wrong?",a:""},{id:"adv-258",q:"Can keys be used for non-list items? When does it help?",a:""},{id:"adv-259",q:"Guidelines for writing reducers (good style)?",a:""},{id:"adv-260",q:"What causes unnecessary rerenders in Context and how to reduce them?",a:""},{id:"adv-261",q:"useMemo/useCallback overuse: why it can backfire?",a:""},{id:"adv-262",q:"When should you use virtualization (react-window etc.)?",a:""},{id:"adv-263",q:"How do you handle large forms without lag?",a:""}]},{id:"hooks-deep",title:"Hooks Deep Dive",items:[{id:"hk-265",q:"useReducer: what is it and where is it useful?",a:""},{id:"hk-266",q:"useState vs useReducer: how do you decide?",a:""},{id:"hk-267",q:"useContext with useReducer: why do people combine them?",a:""},{id:"hk-268",q:"useContext: common use cases in real apps?",a:""},{id:"hk-269",q:"Client vs Server components: when to use which? (high level)",a:""},{id:"hk-270",q:"Next.js Page Router vs App Router: basic difference?",a:""},{id:"hk-271",q:"useMemo: what does it actually do?",a:""},{id:"hk-272",q:"Can hooks be used inside class components?",a:""},{id:"hk-273",q:"Updater function in setState: what is it and when is it needed?",a:""},{id:"hk-274",q:"Lazy initial state in useState: why is it helpful?",a:""},{id:"hk-275",q:"What types of values can useState hold?",a:""},{id:"hk-276",q:"What breaks if you call hooks conditionally?",a:""},{id:"hk-277",q:"Is useState synchronous? Explain batching.",a:""},{id:"hk-278",q:"Explain useState internally (high level).",a:""},{id:"hk-279",q:"Why use useReducer? What problem does it solve?",a:""},{id:"hk-280",q:"How does useReducer work? Explain with an example idea.",a:""},{id:"hk-281",q:"useReducer + useContext combo: how does it look?",a:""},{id:"hk-282",q:"Can you dispatch multiple actions back-to-back in useReducer?",a:""},{id:"hk-283",q:"How does useContext actually trigger rerenders?",a:""},{id:"hk-284",q:"Multiple contexts in one component: good or bad?",a:""},{id:"hk-285",q:"useContext pitfall with objects: what is it?",a:""},{id:"hk-286",q:"What value do you get if there is no matching Provider?",a:""},{id:"hk-287",q:"How dependency array changes useEffect behavior?",a:""},{id:"hk-288",q:"How often does setup/cleanup run in useEffect?",a:""},{id:"hk-289",q:"What happens if you return a Promise from useEffect?",a:""},{id:"hk-290",q:"Multiple useEffect hooks: good practice or not?",a:""},{id:"hk-291",q:"How to avoid infinite loops in useEffect?",a:""},{id:"hk-292",q:"useLayoutEffect: where is it actually used?",a:""},{id:"hk-293",q:"useLayoutEffect during SSR: what happens?",a:""},{id:"hk-294",q:"Why not use useLayoutEffect for normal logic?",a:""},{id:"hk-295",q:"Layout thrashing: how can useLayoutEffect cause it?",a:""},{id:"hk-296",q:"useRef for DOM access: give a real example idea.",a:""},{id:"hk-297",q:"useRef for persistent values across renders: how?",a:""},{id:"hk-298",q:"Can useRef store previous value?",a:""},{id:"hk-299",q:"Can refs be accessed in render?",a:""},{id:"hk-300",q:"Most common useRef use cases?",a:""},{id:"hk-301",q:"useImperativeHandle: what is it used for?",a:""},{id:"hk-302",q:"When should you use useImperativeHandle?",a:""},{id:"hk-303",q:"Can you use useImperativeHandle without forwardRef?",a:""},{id:"hk-304",q:"useMemo vs useCallback: actual difference?",a:""},{id:"hk-305",q:"Does useMemo stop rerenders? Explain properly.",a:""},{id:"hk-306",q:"useCallback: why is it used?",a:""},{id:"hk-307",q:"Custom hooks: what are they and how do you write them?",a:""},{id:"hk-308",q:"React Fiber deep: how does it work? (high level)",a:""},{id:"hk-309",q:"useId: what problem does it solve?",a:""},{id:"hk-310",q:"useDeferredValue: what is it?",a:""},{id:"hk-311",q:"useTransition vs useDeferredValue: difference?",a:""},{id:"hk-312",q:"useSyncExternalStore: why does it exist?",a:""},{id:"hk-313",q:"useInsertionEffect: what is it meant for?",a:""},{id:"hk-314",q:"How do you share logic via custom hooks?",a:""},{id:"hk-315",q:"useDebugValue: what is it used for?",a:""},{id:"hk-316",q:"Cleanup in useEffect: best practices?",a:""},{id:"hk-317",q:"useEffect vs useEvent (experimental): what’s the idea?",a:""},{id:"hk-318",q:"Hooks best practices: practical checklist.",a:""},{id:"hk-319",q:"Why missing dependency array items is dangerous? (stale closures)",a:""},{id:"hk-320",q:"Refs vs state: what should not go into state?",a:""},{id:"hk-321",q:"How do you debounce input in React without making it messy?",a:""}]},{id:"legacy-classes",title:"Legacy and Class Component Topics (merged)",items:[{id:"cl-001",q:"Why should you not update state directly?",a:""},{id:"cl-002",q:"Why pass a callback/updater function to setState?",a:""},{id:"cl-003",q:"How to bind event handlers in class components?",a:""},{id:"cl-004",q:"How to pass parameters to event handlers safely?",a:""},{id:"cl-005",q:"What are refs and why are they used?",a:""},{id:"cl-006",q:"How do you create refs in class components?",a:""},{id:"cl-007",q:"What are forward refs?",a:""},{id:"cl-008",q:"Callback refs vs findDOMNode: which is better and why?",a:""},{id:"cl-009",q:"Why are string refs considered legacy?",a:""},{id:"cl-010",q:"React lifecycle phases: what are they?",a:""},{id:"cl-011",q:"List important lifecycle methods and their usage.",a:""},{id:"cl-012",q:"How do you proxy props in HOC patterns?",a:""},{id:"cl-013",q:"What is context in React (classic explanation)?",a:""},{id:"cl-014",q:"Why use super(props) in constructor?",a:""},{id:"cl-015",q:"How to set state using dynamic key names?",a:""},{id:"cl-016",q:"Common mistake: function called on every render. Why?",a:""},{id:"cl-017",q:"Error boundaries in React v16: what are they?",a:""},{id:"cl-018",q:"How was error handling different before v16?",a:""},{id:"cl-019",q:"Purpose of render method in react-dom?",a:""},{id:"cl-020",q:"What happens if you call setState in constructor?",a:""},{id:"cl-021",q:"Is it good to call setState in componentWillMount?",a:""},{id:"cl-022",q:"What happens if you set initial state from props?",a:""},{id:"cl-023",q:"Decorators in React: what are they about?",a:""},{id:"cl-024",q:"What is CRA and what benefits did it provide?",a:""},{id:"cl-025",q:"Mounting lifecycle order: what runs first?",a:""},{id:"cl-026",q:"Which lifecycle methods got deprecated and why?",a:""},{id:"cl-027",q:"getDerivedStateFromProps: what does it do?",a:""},{id:"cl-028",q:"getSnapshotBeforeUpdate: where is it useful?",a:""},{id:"cl-029",q:"Recommended naming conventions for components?",a:""},{id:"cl-030",q:"Recommended method ordering inside class components?",a:""},{id:"cl-031",q:"Why pass a function to setState (updater) is safer?",a:""},{id:"cl-032",q:"Why is isMounted an anti-pattern? What’s better?",a:""},{id:"cl-033",q:"Constructor vs getInitialState: what’s the story?",a:""},{id:"cl-034",q:"Force re-render without setState: can you?",a:""},{id:"cl-035",q:"super() vs super(props): practical difference?",a:""},{id:"cl-036",q:"setState vs replaceState: difference?",a:""},{id:"cl-037",q:"How to listen to state changes in React?",a:""},{id:"cl-038",q:"Best way to remove an item from array state?",a:""},{id:"cl-039",q:"Can you use React without rendering HTML?",a:""},{id:"cl-040",q:"Ways to update objects in state safely?",a:""},{id:"cl-041",q:"How to add polyfills in CRA apps?",a:""},{id:"cl-042",q:"How to run CRA with HTTPS locally?",a:""},{id:"cl-043",q:"How to avoid relative imports in CRA?",a:""},{id:"cl-044",q:"How to update a component every second?",a:""},{id:"cl-045",q:"Why constructor runs only once?",a:""},{id:"cl-046",q:"How to define constants in React codebase?",a:""},{id:"cl-047",q:"How to trigger click programmatically?",a:""},{id:"cl-048",q:"Where should you make AJAX calls in class lifecycle?",a:""},{id:"cl-049",q:"What are render props?",a:""},{id:"cl-050",q:"How to dispatch an action on load in Redux apps?",a:""},{id:"cl-051",q:"How to use connect from React Redux?",a:""},{id:"cl-052",q:"What does @ symbol mean in connect decorator style?",a:""},{id:"cl-053",q:"How to use TypeScript in CRA apps?",a:""},{id:"cl-054",q:"Do statics work on ES6 classes? Any caveats?",a:""},{id:"cl-055",q:"Why inline ref callbacks are not recommended?",a:""},{id:"cl-056",q:"HOC factory implementations: what does it mean?",a:""},{id:"cl-057",q:"Class field declarations syntax in React classes?",a:""},{id:"cl-058",q:"Why error boundaries don’t catch event handler errors?",a:""},{id:"cl-059",q:"try/catch vs error boundaries: difference?",a:""},{id:"cl-060",q:"What is the minimum method required in class component?",a:""},{id:"cl-061",q:"Possible return types from render method?",a:""},{id:"cl-062",q:"Main purpose of constructor in React class components?",a:""},{id:"cl-063",q:"Is constructor mandatory in class components?",a:""},{id:"cl-064",q:"Why not call setState in componentWillUnmount?",a:""},{id:"cl-065",q:"getDerivedStateFromError: what does it do?",a:""},{id:"cl-066",q:"Method order on re-render: what runs and when?",a:""},{id:"cl-067",q:"Methods invoked during error handling in React?",a:""},{id:"cl-068",q:"unmountComponentAtNode: what is it used for?",a:""},{id:"cl-069",q:"Limitations of HOCs?",a:""},{id:"cl-070",q:"How to debug forwardRefs in DevTools?",a:""},{id:"cl-071",q:"Are arrow functions in render a bad idea? Why?",a:""},{id:"cl-072",q:"Does React merge state updates? Explain.",a:""},{id:"cl-073",q:"Passing args to handlers: best approaches?",a:""},{id:"cl-074",q:"How to prevent component from rendering?",a:""},{id:"cl-075",q:"Context usage example (classic interview style).",a:""},{id:"cl-076",q:"contextType: what is it and how does it work?",a:""},{id:"cl-077",q:"What is a context consumer?",a:""},{id:"cl-078",q:"Context performance pitfalls and how to fix them?",a:""},{id:"cl-079",q:"forwardRef in HOCs: why and how?",a:""},{id:"cl-080",q:"Is ref available for all components? Any limits?",a:""},{id:"cl-081",q:"Why extra care is needed for forwardRef in libraries?",a:""},{id:"cl-082",q:"How to write class components without ES6 classes?",a:""},{id:"cl-083",q:"Can you use React without JSX?",a:""},{id:"cl-084",q:"How do you create HOC using render props approach?",a:""},{id:"cl-085",q:"What is react-scripts?",a:""},{id:"cl-086",q:"Features of create-react-app (CRA)?",a:""},{id:"cl-087",q:"renderToNodeStream: what was it used for?",a:""},{id:"cl-088",q:"How to scaffold Redux quickly with CRA?",a:""},{id:"cl-089",q:"What is state mutation and how do you prevent it?",a:""}]}],L=()=>{const w=h.useRef(null),y=h.useRef(null),[q,g]=N(),{flatQuestions:d,sectionsMeta:b,totalQuestions:u,idToIndex:R}=h.useMemo(()=>{const a=[],t=[],i={};return F.forEach(o=>{const n=a.length;o.items.forEach(c=>{const l={sectionId:o.id,sectionTitle:o.title,id:c.id,q:c.q,a:c.a||""};i[l.id]=a.length,a.push(l)}),t.push({id:o.id,title:o.title,startIndex:n,count:o.items.length})}),{flatQuestions:a,sectionsMeta:t,totalQuestions:a.length,idToIndex:i}},[]),f=()=>{const a=q.get("q");if(!a)return 0;const t=R[a];return typeof t=="number"&&t>=0&&t<u?t:0},[s,v]=h.useState(()=>f()),r=d[s],k=()=>{const a=w.current;a&&a.scrollIntoView({behavior:"smooth",block:"start"})},p=()=>{const a=y.current;if(!a)return;const t=a.querySelector(`[data-q-idx="${s}"]`);if(!t)return;const i=a.getBoundingClientRect(),o=t.getBoundingClientRect(),n=a.scrollTop,c=o.top-i.top-i.height/2+o.height/2;a.scrollTo({top:n+c,behavior:"smooth"})},x=a=>{const t=d[a];t&&g(i=>{const o=new URLSearchParams(i);return o.set("q",t.id),o},{replace:!0})},m=(a,t={scrollContent:!0})=>{const i=Math.max(0,Math.min(u-1,a));v(i),x(i),window.requestAnimationFrame(()=>{p(),t.scrollContent&&k()})},W=a=>{m(a,{scrollContent:!0})},H=()=>{m(s-1,{scrollContent:!0})},S=()=>{m(s+1,{scrollContent:!0})};h.useEffect(()=>{if(!d.length)return;q.get("q")||x(s),window.requestAnimationFrame(()=>{p()})},[d.length]),h.useEffect(()=>{if(!d.length)return;const a=f();a!==s&&(v(a),window.requestAnimationFrame(()=>{p()}))},[q,d.length]);const C=()=>b.map(a=>{const t=a.startIndex,i=t+a.count,o=d.slice(t,i);return e.jsxs("div",{className:"qnaSection",children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsx("div",{className:"sectionTitle",children:a.title}),e.jsxs("div",{className:"sectionCount",children:[a.count," questions"]})]}),e.jsx("ul",{className:"qnaList",children:o.map((n,c)=>{const l=t+c,T=l===s;return e.jsx("li",{children:e.jsxs("button",{type:"button",className:`qnaItem ${T?"isActive":""}`,onClick:()=>W(l),title:n.q,"data-q-idx":l,"data-q-id":n.id,children:[e.jsxs("span",{className:"qIndex",children:[l+1,"."]}),e.jsx("span",{className:"qText",children:n.q})]})},n.id)})})]},a.id)});return h.useEffect(()=>{d.length&&window.requestAnimationFrame(()=>{p()})},[s,d.length]),e.jsxs(E.Wrapper,{children:[e.jsxs("header",{className:"pageHeader",children:[e.jsx("h1",{children:"React Interview QnA"}),e.jsx("p",{className:"intro",children:"Crisp interview-style questions with practical answers and follow-ups. Use this for fast revision before interviews."}),e.jsxs("div",{className:"chips",children:[e.jsx("span",{className:"chip",children:"QnA"}),e.jsx("span",{className:"chip",children:"Follow ups"}),e.jsx("span",{className:"chip",children:"Revision"})]})]}),e.jsxs("div",{className:"qnaGrid",children:[e.jsxs("div",{className:"qnaListWrapper",children:[e.jsxs("div",{className:"listTop",children:[e.jsxs("div",{className:"listTitle",children:[e.jsx("span",{className:"icon",children:e.jsx(I,{})}),"All Questions"]}),e.jsxs("div",{className:"listMeta",children:["Total: ",u]})]}),e.jsx("div",{className:"listBody",ref:y,children:C()})]}),e.jsx("div",{className:"content",ref:w,children:e.jsxs("div",{className:"contentCard",children:[e.jsxs("div",{className:"contentTop",children:[e.jsxs("div",{className:"contentMeta",children:[e.jsx("span",{className:"badge",children:(r==null?void 0:r.sectionTitle)||"React"}),e.jsxs("span",{className:"counter",children:[s+1," / ",u]})]}),e.jsxs("div",{className:"navButtons",children:[e.jsxs("button",{type:"button",className:"navBtn",onClick:H,disabled:s===0,"aria-label":"Previous question",title:"Previous question",children:[e.jsx(A,{}),"Prev"]}),e.jsxs("button",{type:"button",className:"navBtn",onClick:S,disabled:s===u-1,"aria-label":"Next question",title:"Next question",children:["Next",e.jsx(M,{})]})]})]}),e.jsxs("div",{className:"questionBlock",children:[e.jsxs("div",{className:"qTitle",children:[e.jsx("span",{className:"qIcon",children:e.jsx(D,{})}),e.jsx("span",{className:"qLabel",children:"Question"})]}),e.jsx("div",{className:"qTextBig",children:(r==null?void 0:r.q)||""})]}),e.jsxs("div",{className:"answerBlock",children:[e.jsx("div",{className:"aTitle",children:"Answer"}),r!=null&&r.a?e.jsx("div",{className:"aText",children:r.a}):e.jsx("div",{className:"emptyAnswer",children:"Answer not added yet. Add it later in data.js"})]}),e.jsx("div",{className:"hint",children:"Tip: URL stores current question, so refresh keeps your spot."})]})})]})]})};export{L as default};
