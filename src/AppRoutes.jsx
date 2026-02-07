// AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import {
    FiHome,
    FiWifi,
    FiBriefcase,
    FiInfo,
    FiMapPin,
    FiDollarSign,
    FiStar,
    FiHelpCircle,
    FiUser,
    FiPhone,
    FiUsers,
    FiShield,
    FiFileText,
} from "react-icons/fi";

/* Lazy pages */
const Home = lazy(() => import("./pages/home"));
const Internet = lazy(() => import("./pages/broadband"));
const Business = lazy(() => import("./pages/placeholder"));
const HowItWorks = lazy(() => import("./pages/placeholder"));
const Coverage = lazy(() => import("./pages/placeholder"));
const Pricing = lazy(() => import("./pages/placeholder"));
const Reviews = lazy(() => import("./pages/placeholder"));
const Support = lazy(() => import("./pages/placeholder"));
const Account = lazy(() => import("./pages/placeholder"));
const About = lazy(() => import("./pages/placeholder"));
const Contact = lazy(() => import("./pages/placeholder"));
const Careers = lazy(() => import("./pages/placeholder"));
const Privacy = lazy(() => import("./pages/placeholder"));
const Terms = lazy(() => import("./pages/placeholder"));
const NotFound = lazy(() => import("./pages/placeholder"));

/* Central nav config */
export const routeLinks = [
    { key: "home", label: "Home", path: "/", icon: FiHome },

    {
        key: "internet",
        label: "Home Broadband",
        path: "/broadband",
        icon: FiWifi,
    },
    {
        key: "business",
        label: "Business Solutions",
        path: "/business",
        icon: FiBriefcase,
    },
    {
        key: "howItWorks",
        label: "How AirNova Works",
        path: "/how-airnova-works",
        icon: FiInfo,
    },
    {
        key: "coverage",
        label: "Service Areas",
        path: "/service-areas",
        icon: FiMapPin,
    },
    { key: "pricing", label: "Plans", path: "/plans", icon: FiDollarSign },
    {
        key: "reviews",
        label: "Customer Stories",
        path: "/customer-stories",
        icon: FiStar,
    },

    { key: "support", label: "Support", path: "/support", icon: FiHelpCircle },
    { key: "account", label: "My Account", path: "/account", icon: FiUser },

    { key: "about", label: "About", path: "/about", icon: FiUsers },
    { key: "contact", label: "Contact", path: "/contact", icon: FiPhone },
];

export const legalLinks = [
    {
        key: "privacy",
        label: "Privacy Policy",
        path: "/legal/privacy",
        icon: FiShield,
    },
    { key: "terms", label: "Terms", path: "/legal/terms", icon: FiFileText },
];

/* MUI fallback */
function PageLoader() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress size={42} thickness={4} />
        </div>
    );
}

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/broadband" element={<Internet />} />
                <Route path="/business" element={<Business />} />
                <Route path="/how-airnova-works" element={<HowItWorks />} />
                <Route path="/service-areas" element={<Coverage />} />
                <Route path="/plans" element={<Pricing />} />
                <Route path="/customer-stories" element={<Reviews />} />
                <Route path="/support" element={<Support />} />

                <Route path="/account" element={<Account />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />

                <Route path="/legal/privacy" element={<Privacy />} />
                <Route path="/legal/terms" element={<Terms />} />

                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
