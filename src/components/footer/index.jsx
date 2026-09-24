import React from "react";
import { Styled } from "./styled";
import { FiCoffee, FiCode, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCode],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const supportLinks = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FiHeart],
];

const IconLinks = ({ items }) => (
    <div className="linkGroup">
        {items.map(([label, href, Icon]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
            </a>
        ))}
    </div>
);

const Footer = () => {
    const lastUpdated = typeof __APP_COMMIT_ISO__ !== "undefined" ? new Date(__APP_COMMIT_ISO__).toLocaleDateString("en-IN") : null;
    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="left">
                    <div className="title">reactjs-core-notes</div>
                    <div className="sub">React core concepts explained as structured notes and references.</div>
                    {lastUpdated && <div className="meta">Last updated: {lastUpdated}</div>}
                </div>
                <div className="right"><IconLinks items={links} /><IconLinks items={supportLinks} /></div>
            </div>
            <div className="bottom">
                <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
                <span className="dot">•</span>
                <span>React + styled-components</span>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
