export const hooksDeep = {
    id: "hooks-deep",
    title: "Hooks Deep Dive",
    items: [
        {
            id: "hk-265",
            q: "useReducer: what is it and where is it useful?",
            a: "",
        },
        {
            id: "hk-266",
            q: "useState vs useReducer: how do you decide?",
            a: "",
        },
        {
            id: "hk-267",
            q: "useContext with useReducer: why do people combine them?",
            a: "",
        },
        {
            id: "hk-268",
            q: "useContext: common use cases in real apps?",
            a: "",
        },
        {
            id: "hk-269",
            q: "Client vs Server components: when to use which? (high level)",
            a: "",
        },
        {
            id: "hk-270",
            q: "Next.js Page Router vs App Router: basic difference?",
            a: "",
        },
        { id: "hk-271", q: "useMemo: what does it actually do?", a: "" },
        {
            id: "hk-272",
            q: "Can hooks be used inside class components?",
            a: "",
        },
        {
            id: "hk-273",
            q: "Updater function in setState: what is it and when is it needed?",
            a: "",
        },
        {
            id: "hk-274",
            q: "Lazy initial state in useState: why is it helpful?",
            a: "",
        },
        {
            id: "hk-275",
            q: "What types of values can useState hold?",
            a: "",
        },
        {
            id: "hk-276",
            q: "What breaks if you call hooks conditionally?",
            a: "",
        },
        {
            id: "hk-277",
            q: "Is useState synchronous? Explain batching.",
            a: "",
        },
        {
            id: "hk-278",
            q: "Explain useState internally (high level).",
            a: "",
        },
        {
            id: "hk-279",
            q: "Why use useReducer? What problem does it solve?",
            a: "",
        },
        {
            id: "hk-280",
            q: "How does useReducer work? Explain with an example idea.",
            a: "",
        },
        {
            id: "hk-281",
            q: "useReducer + useContext combo: how does it look?",
            a: "",
        },
        {
            id: "hk-282",
            q: "Can you dispatch multiple actions back-to-back in useReducer?",
            a: "",
        },
        {
            id: "hk-283",
            q: "How does useContext actually trigger rerenders?",
            a: "",
        },
        {
            id: "hk-284",
            q: "Multiple contexts in one component: good or bad?",
            a: "",
        },
        {
            id: "hk-285",
            q: "useContext pitfall with objects: what is it?",
            a: "",
        },
        {
            id: "hk-286",
            q: "What value do you get if there is no matching Provider?",
            a: "",
        },
        {
            id: "hk-287",
            q: "How dependency array changes useEffect behavior?",
            a: "",
        },
        {
            id: "hk-288",
            q: "How often does setup/cleanup run in useEffect?",
            a: "",
        },
        {
            id: "hk-289",
            q: "What happens if you return a Promise from useEffect?",
            a: "",
        },
        {
            id: "hk-290",
            q: "Multiple useEffect hooks: good practice or not?",
            a: "",
        },
        {
            id: "hk-291",
            q: "How to avoid infinite loops in useEffect?",
            a: "",
        },
        {
            id: "hk-292",
            q: "useLayoutEffect: where is it actually used?",
            a: "",
        },
        {
            id: "hk-293",
            q: "useLayoutEffect during SSR: what happens?",
            a: "",
        },
        {
            id: "hk-294",
            q: "Why not use useLayoutEffect for normal logic?",
            a: "",
        },
        {
            id: "hk-295",
            q: "Layout thrashing: how can useLayoutEffect cause it?",
            a: "",
        },
        {
            id: "hk-296",
            q: "useRef for DOM access: give a real example idea.",
            a: "",
        },
        {
            id: "hk-297",
            q: "useRef for persistent values across renders: how?",
            a: "",
        },
        { id: "hk-298", q: "Can useRef store previous value?", a: "" },
        { id: "hk-299", q: "Can refs be accessed in render?", a: "" },
        { id: "hk-300", q: "Most common useRef use cases?", a: "" },
        {
            id: "hk-301",
            q: "useImperativeHandle: what is it used for?",
            a: "",
        },
        {
            id: "hk-302",
            q: "When should you use useImperativeHandle?",
            a: "",
        },
        {
            id: "hk-303",
            q: "Can you use useImperativeHandle without forwardRef?",
            a: "",
        },
        {
            id: "hk-304",
            q: "useMemo vs useCallback: actual difference?",
            a: "",
        },
        {
            id: "hk-305",
            q: "Does useMemo stop rerenders? Explain properly.",
            a: "",
        },
        { id: "hk-306", q: "useCallback: why is it used?", a: "" },
        {
            id: "hk-307",
            q: "Custom hooks: what are they and how do you write them?",
            a: "",
        },
        {
            id: "hk-308",
            q: "React Fiber deep: how does it work? (high level)",
            a: "",
        },
        { id: "hk-309", q: "useId: what problem does it solve?", a: "" },
        { id: "hk-310", q: "useDeferredValue: what is it?", a: "" },
        {
            id: "hk-311",
            q: "useTransition vs useDeferredValue: difference?",
            a: "",
        },
        {
            id: "hk-312",
            q: "useSyncExternalStore: why does it exist?",
            a: "",
        },
        {
            id: "hk-313",
            q: "useInsertionEffect: what is it meant for?",
            a: "",
        },
        {
            id: "hk-314",
            q: "How do you share logic via custom hooks?",
            a: "",
        },
        { id: "hk-315", q: "useDebugValue: what is it used for?", a: "" },
        { id: "hk-316", q: "Cleanup in useEffect: best practices?", a: "" },
        {
            id: "hk-317",
            q: "useEffect vs useEvent (experimental): what’s the idea?",
            a: "",
        },
        {
            id: "hk-318",
            q: "Hooks best practices: practical checklist.",
            a: "",
        },

        // Added - common hook interview traps
        {
            id: "hk-319",
            q: "Why missing dependency array items is dangerous? (stale closures)",
            a: "",
        },
        {
            id: "hk-320",
            q: "Refs vs state: what should not go into state?",
            a: "",
        },
        {
            id: "hk-321",
            q: "How do you debounce input in React without making it messy?",
            a: "",
        },
    ],
};
