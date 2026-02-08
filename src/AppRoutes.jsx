// AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* =========================
   Base Pages
   ========================= */
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/notFound"));

/* =========================
   Quick Reference
   ========================= */
const QuickIndex = lazy(() => import("./pages/quick"));
const QuickJSX = lazy(() => import("./pages/quick/jsx"));
const QuickComponents = lazy(() => import("./pages/quick/components"));
const QuickProps = lazy(() => import("./pages/quick/props"));
const QuickState = lazy(() => import("./pages/quick/state"));
const QuickEvents = lazy(() => import("./pages/quick/events"));
const QuickListsKeys = lazy(() => import("./pages/quick/listsKeys"));
const QuickConditional = lazy(() => import("./pages/quick/conditional"));
const QuickUseEffect = lazy(() => import("./pages/quick/useEffect"));
const QuickHooks = lazy(() => import("./pages/quick/hooks"));
const QuickForms = lazy(() => import("./pages/quick/forms"));
const QuickStyling = lazy(() => import("./pages/quick/styling"));
const QuickPerformance = lazy(() => import("./pages/quick/performance"));

// react interview
const ReactInterview = lazy(() => import("./pages/reactInterview"));

/* =========================
   React Foundations
   ========================= */
const ReactIndex = lazy(() => import("./pages/placeholder"));
const WhyReact = lazy(() => import("./pages/placeholder"));
const ReactVsDOM = lazy(() => import("./pages/placeholder"));
const RenderingModel = lazy(() => import("./pages/placeholder"));
const VirtualDOM = lazy(() => import("./pages/placeholder"));
const Reconciliation = lazy(() => import("./pages/placeholder"));
const JSXInDepth = lazy(() => import("./pages/placeholder"));
const Components = lazy(() => import("./pages/placeholder"));
const ComponentTypes = lazy(() => import("./pages/placeholder"));

/* =========================
   Props, State & Data Flow
   ========================= */
const Props = lazy(() => import("./pages/placeholder"));
const PropsChildren = lazy(() => import("./pages/placeholder"));
const State = lazy(() => import("./pages/placeholder"));
const StateImmutability = lazy(() => import("./pages/placeholder"));
const StateBatching = lazy(() => import("./pages/placeholder"));
const DataFlow = lazy(() => import("./pages/placeholder"));
const LiftingState = lazy(() => import("./pages/placeholder"));
const DerivedState = lazy(() => import("./pages/placeholder"));

/* =========================
   Events & Interaction
   ========================= */
const Events = lazy(() => import("./pages/placeholder"));
const SyntheticEvents = lazy(() => import("./pages/placeholder"));
const Controlled = lazy(() => import("./pages/placeholder"));
const Uncontrolled = lazy(() => import("./pages/placeholder"));

/* =========================
   Lists & Conditional UI
   ========================= */
const ListsKeys = lazy(() => import("./pages/placeholder"));
const KeysExplained = lazy(() => import("./pages/placeholder"));
const ConditionalRendering = lazy(() => import("./pages/placeholder"));
const UIStates = lazy(() => import("./pages/placeholder"));

/* =========================
   Side Effects & Refs
   ========================= */
const UseEffect = lazy(() => import("./pages/placeholder"));
const UseEffectDeps = lazy(() => import("./pages/placeholder"));
const EffectCleanup = lazy(() => import("./pages/placeholder"));
const UseEffectBugs = lazy(() => import("./pages/placeholder"));
const Refs = lazy(() => import("./pages/placeholder"));
const UseRef = lazy(() => import("./pages/placeholder"));

/* =========================
   Hooks
   ========================= */
const HooksIndex = lazy(() => import("./pages/placeholder"));
const UseStateHook = lazy(() => import("./pages/placeholder"));
const UseEffectHook = lazy(() => import("./pages/placeholder"));
const UseRefHook = lazy(() => import("./pages/placeholder"));
const UseMemo = lazy(() => import("./pages/placeholder"));
const UseCallback = lazy(() => import("./pages/placeholder"));
const CustomHooks = lazy(() => import("./pages/placeholder"));
const HooksRules = lazy(() => import("./pages/placeholder"));

/* =========================
   Styling (styled-components)
   ========================= */
const StylingIndex = lazy(() => import("./pages/placeholder"));
const WhyStyled = lazy(() => import("./pages/placeholder"));
const ThemeTokens = lazy(() => import("./pages/placeholder"));
const GlobalStyles = lazy(() => import("./pages/placeholder"));
const Variants = lazy(() => import("./pages/placeholder"));
const Responsive = lazy(() => import("./pages/placeholder"));

/* =========================
   Performance
   ========================= */
const PerformanceIndex = lazy(() => import("./pages/placeholder"));
const WhyRerenders = lazy(() => import("./pages/placeholder"));
const ReactMemo = lazy(() => import("./pages/placeholder"));
const UseMemoPerf = lazy(() => import("./pages/placeholder"));
const UseCallbackPerf = lazy(() => import("./pages/placeholder"));
const WhenNotOptimize = lazy(() => import("./pages/placeholder"));

/* =========================
   Architecture
   ========================= */
const ArchitectureIndex = lazy(() => import("./pages/placeholder"));
const ContainerPresentational = lazy(() => import("./pages/placeholder"));
const LayoutPatterns = lazy(() => import("./pages/placeholder"));
const CompoundComponents = lazy(() => import("./pages/placeholder"));
const StatePlacement = lazy(() => import("./pages/placeholder"));

/* =========================
   Routing
   ========================= */
const RoutingIndex = lazy(() => import("./pages/placeholder"));
const RouterBasics = lazy(() => import("./pages/placeholder"));
const NestedRoutes = lazy(() => import("./pages/placeholder"));
const LayoutRoutes = lazy(() => import("./pages/placeholder"));
const NotFoundRoute = lazy(() => import("./pages/placeholder"));
const CodeSplitting = lazy(() => import("./pages/placeholder"));

/* =========================
   UI Patterns
   ========================= */
const PatternsIndex = lazy(() => import("./pages/placeholder"));
const LoadingPatterns = lazy(() => import("./pages/placeholder"));
const ErrorBoundaries = lazy(() => import("./pages/placeholder"));
const Modals = lazy(() => import("./pages/placeholder"));
const Drawers = lazy(() => import("./pages/placeholder"));
const ScrollRestoration = lazy(() => import("./pages/placeholder"));

/* =========================
   Fallback Loader
   ========================= */
function PageLoader() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
            }}
        >
            Loading…
        </div>
    );
}

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Base */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* react interview */}
                <Route path="/react-interview" element={<ReactInterview />} />

                {/* Quick Reference */}
                <Route path="/quick" element={<QuickIndex />} />
                <Route path="/quick/jsx" element={<QuickJSX />} />
                <Route path="/quick/components" element={<QuickComponents />} />
                <Route path="/quick/props" element={<QuickProps />} />
                <Route path="/quick/state" element={<QuickState />} />
                <Route path="/quick/events" element={<QuickEvents />} />
                <Route path="/quick/lists-keys" element={<QuickListsKeys />} />
                <Route
                    path="/quick/conditional-rendering"
                    element={<QuickConditional />}
                />
                <Route path="/quick/useeffect" element={<QuickUseEffect />} />
                <Route path="/quick/hooks" element={<QuickHooks />} />
                <Route path="/quick/forms" element={<QuickForms />} />
                <Route path="/quick/styling" element={<QuickStyling />} />
                <Route
                    path="/quick/performance"
                    element={<QuickPerformance />}
                />

                {/* React Core */}
                <Route path="/react" element={<ReactIndex />} />
                <Route path="/react/why-react" element={<WhyReact />} />
                <Route path="/react/react-vs-dom" element={<ReactVsDOM />} />
                <Route
                    path="/react/rendering-model"
                    element={<RenderingModel />}
                />
                <Route path="/react/virtual-dom" element={<VirtualDOM />} />
                <Route
                    path="/react/reconciliation"
                    element={<Reconciliation />}
                />
                <Route path="/react/jsx" element={<JSXInDepth />} />
                <Route path="/react/components" element={<Components />} />
                <Route
                    path="/react/component-types"
                    element={<ComponentTypes />}
                />

                {/* Props & State */}
                <Route path="/react/props" element={<Props />} />
                <Route
                    path="/react/props-children"
                    element={<PropsChildren />}
                />
                <Route path="/react/state" element={<State />} />
                <Route
                    path="/react/state-immutability"
                    element={<StateImmutability />}
                />
                <Route
                    path="/react/state-batching"
                    element={<StateBatching />}
                />
                <Route path="/react/data-flow" element={<DataFlow />} />
                <Route path="/react/lifting-state" element={<LiftingState />} />
                <Route path="/react/derived-state" element={<DerivedState />} />

                {/* Events */}
                <Route path="/react/events" element={<Events />} />
                <Route
                    path="/react/synthetic-events"
                    element={<SyntheticEvents />}
                />
                <Route
                    path="/react/controlled-components"
                    element={<Controlled />}
                />
                <Route
                    path="/react/uncontrolled-components"
                    element={<Uncontrolled />}
                />

                {/* Lists */}
                <Route path="/react/lists-and-keys" element={<ListsKeys />} />
                <Route
                    path="/react/keys-explained"
                    element={<KeysExplained />}
                />
                <Route
                    path="/react/conditional-rendering"
                    element={<ConditionalRendering />}
                />
                <Route path="/react/ui-states" element={<UIStates />} />

                {/* Effects & Refs */}
                <Route path="/react/useeffect" element={<UseEffect />} />
                <Route
                    path="/react/useeffect-dependencies"
                    element={<UseEffectDeps />}
                />
                <Route
                    path="/react/effect-cleanup"
                    element={<EffectCleanup />}
                />
                <Route
                    path="/react/common-useeffect-bugs"
                    element={<UseEffectBugs />}
                />
                <Route path="/react/refs" element={<Refs />} />
                <Route path="/react/useref" element={<UseRef />} />

                {/* Hooks */}
                <Route path="/hooks" element={<HooksIndex />} />
                <Route path="/hooks/usestate" element={<UseStateHook />} />
                <Route path="/hooks/useeffect" element={<UseEffectHook />} />
                <Route path="/hooks/useref" element={<UseRefHook />} />
                <Route path="/hooks/usememo" element={<UseMemo />} />
                <Route path="/hooks/usecallback" element={<UseCallback />} />
                <Route path="/hooks/custom-hooks" element={<CustomHooks />} />
                <Route path="/hooks/rules-of-hooks" element={<HooksRules />} />

                {/* Styling */}
                <Route path="/styling" element={<StylingIndex />} />
                <Route
                    path="/styling/why-styled-components"
                    element={<WhyStyled />}
                />
                <Route path="/styling/theme-tokens" element={<ThemeTokens />} />
                <Route
                    path="/styling/global-styles"
                    element={<GlobalStyles />}
                />
                <Route
                    path="/styling/component-variants"
                    element={<Variants />}
                />
                <Route path="/styling/responsive" element={<Responsive />} />

                {/* Performance */}
                <Route path="/performance" element={<PerformanceIndex />} />
                <Route
                    path="/performance/why-rerenders"
                    element={<WhyRerenders />}
                />
                <Route path="/performance/react-memo" element={<ReactMemo />} />
                <Route path="/performance/usememo" element={<UseMemoPerf />} />
                <Route
                    path="/performance/usecallback"
                    element={<UseCallbackPerf />}
                />
                <Route
                    path="/performance/when-not-to-optimize"
                    element={<WhenNotOptimize />}
                />

                {/* Architecture */}
                <Route path="/architecture" element={<ArchitectureIndex />} />
                <Route
                    path="/architecture/container-presentational"
                    element={<ContainerPresentational />}
                />
                <Route
                    path="/architecture/layout-patterns"
                    element={<LayoutPatterns />}
                />
                <Route
                    path="/architecture/compound-components"
                    element={<CompoundComponents />}
                />
                <Route
                    path="/architecture/state-placement"
                    element={<StatePlacement />}
                />

                {/* Routing */}
                <Route path="/routing" element={<RoutingIndex />} />
                <Route
                    path="/routing/react-router-basics"
                    element={<RouterBasics />}
                />
                <Route
                    path="/routing/nested-routes"
                    element={<NestedRoutes />}
                />
                <Route
                    path="/routing/layout-routes"
                    element={<LayoutRoutes />}
                />
                <Route path="/routing/not-found" element={<NotFoundRoute />} />
                <Route
                    path="/routing/code-splitting"
                    element={<CodeSplitting />}
                />

                {/* Patterns */}
                <Route path="/patterns" element={<PatternsIndex />} />
                <Route
                    path="/patterns/loading-patterns"
                    element={<LoadingPatterns />}
                />
                <Route
                    path="/patterns/error-boundaries"
                    element={<ErrorBoundaries />}
                />
                <Route path="/patterns/modals" element={<Modals />} />
                <Route path="/patterns/drawers" element={<Drawers />} />
                <Route
                    path="/patterns/scroll-restoration"
                    element={<ScrollRestoration />}
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
