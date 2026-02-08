import React from "react";
import { Styled } from "./styled";
import { FiGithub, FiLinkedin, FiGlobe, FiFacebook } from "react-icons/fi";

const formatIST = (iso) => {
    const d = new Date(iso);

    const parts = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }).formatToParts(d);

    const get = (t) => parts.find((p) => p.type === t)?.value || "";

    return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}:${get("second")} hrs`;
};

const Footer = () => {
    const lastUpdated =
        typeof __APP_COMMIT_ISO__ !== "undefined"
            ? formatIST(__APP_COMMIT_ISO__)
            : null;

    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="left">
                    <div className="title">reactjs-core-notes</div>
                    <div className="sub">
                        React core concepts explained as structured notes and
                        references.
                    </div>

                    {lastUpdated && (
                        <div className="meta">Last updated: {lastUpdated}</div>
                    )}
                </div>

                <div className="right">
                    <a
                        href="https://github.com/a2rp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGlobe />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aashishranjan"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/theash.ashish/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiFacebook />
                    </a>
                </div>
            </div>

            <div className="bottom">
                <span>© {new Date().getFullYear()} a2rp</span>
                <span className="dot">•</span>
                <span>React + styled-components</span>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
