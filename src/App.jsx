import React, { useEffect, useState } from "react";
import { Styled } from "./App.styled";
import { IoMenu } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import AppRoutes from "./AppRoutes";
import { NavLink } from "react-router-dom";
import SliderContent from "./components/sliderContent";
import Footer from "./components/footer";

const THEME_KEY = "appTheme"; // "dark" | "light"

const App = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    // Theme state: default "dark"
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem(THEME_KEY);
        return saved === "light" ? "light" : "dark";
    });

    const handleMenuClicked = () => {
        setMenuClicked((prev) => !prev);
    };

    // Apply theme to <html> and persist
    useEffect(() => {
        const html = document.documentElement;

        if (theme === "light") {
            html.setAttribute("data-theme", "light");
        } else {
            html.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    const handleToggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const handleNavClick = () => {
        setMenuClicked(false);
    };

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <div className="menuIconSiteName">
                    <div
                        className="menuIconWrapper"
                        onClick={handleMenuClicked}
                    >
                        <IoMenu />
                    </div>
                    <div className="siteNameWrapper">reactjs-core-notes</div>
                </div>

                <div className="themeToggleWrapper">
                    <button
                        type="button"
                        className={`themeToggle ${theme === "light" ? "isLight" : "isDark"}`}
                        onClick={handleToggleTheme}
                        aria-label="Toggle theme"
                        title="Toggle theme"
                    >
                        <span className="trackIcons">
                            <span className="icon left">
                                <FiMoon />
                            </span>
                            <span className="icon right">
                                <FiSun />
                            </span>
                        </span>

                        <span className="ball" />
                    </button>
                </div>
            </Styled.Header>

            <Styled.Main>
                <div className="appRoutesWrapper">
                    <AppRoutes />
                </div>

                <Styled.Footer>
                    <Footer />
                </Styled.Footer>

                <div
                    className={`sliderWrapper ${menuClicked === true ? "" : "hideSliderWrapper"}`}
                >
                    <div className="linksWrapper">
                        <SliderContent handleNavClick={handleNavClick} />
                    </div>

                    <div
                        className="emptyWrapper"
                        onClick={handleMenuClicked}
                    ></div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
