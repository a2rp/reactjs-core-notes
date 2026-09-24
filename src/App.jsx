import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import { Styled } from "./App.styled";
import AppRoutes from "./AppRoutes";
import SliderContent from "./components/sliderContent";
import Footer from "./components/footer";
import Breadcrumbs from "./components/breadcrumbs";
import GoToTop from "./components/goToTop";
import ScrollToTopOnRouteChange from "./components/scrollToTopOnRouteChange";

const THEME_KEY = "appTheme";

const App = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem(THEME_KEY);
        return saved === "light" ? "light" : "dark";
    });
    const mainScrollRef = useRef(null);

    useEffect(() => {
        const html = document.documentElement;
        if (theme === "light") html.setAttribute("data-theme", "light");
        else html.removeAttribute("data-theme");
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div className="menuIconSiteName">
                    <button type="button" className="menuIconWrapper" onClick={() => setMenuClicked((open) => !open)} aria-label="Open navigation" title="Open navigation">
                        <IoMenu />
                    </button>
                    <a className="siteIdentity" href={import.meta.env.BASE_URL} aria-label="ReactJS Core Notes home">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" />
                        <span>reactjs-core-notes</span>
                    </a>
                </div>
                <div className="themeToggleWrapper">
                    <button type="button" className={`themeToggle ${theme === "light" ? "isLight" : "isDark"}`} onClick={() => setTheme((current) => current === "light" ? "dark" : "light")} aria-label="Toggle theme" title="Toggle theme">
                        <span className="trackIcons"><span className="icon left"><FiMoon /></span><span className="icon right"><FiSun /></span></span>
                        <span className="ball" />
                    </button>
                </div>
            </Styled.Header>
            <Styled.Main ref={mainScrollRef}>
                <ScrollToTopOnRouteChange scrollRef={mainScrollRef} />
                <div className="appRoutesWrapper">
                    <div className="breadcrumbs"><Breadcrumbs /></div>
                    <AppRoutes />
                </div>
                <Styled.Footer><Footer /></Styled.Footer>
                <GoToTop scrollRef={mainScrollRef} />
                <div className={`sliderWrapper ${menuClicked ? "" : "hideSliderWrapper"}`}>
                    <div className="linksWrapper"><SliderContent handleNavClick={() => setMenuClicked(false)} /></div>
                    <button type="button" className="emptyWrapper" onClick={() => setMenuClicked(false)} aria-label="Close navigation" />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
