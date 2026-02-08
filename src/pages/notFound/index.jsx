import React from "react";
import { Styled } from "./styled";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <div className="content">
                <div className="code">404</div>

                <h1>Page not found</h1>

                <p>
                    The page you are trying to access does not exist or may have
                    been moved.
                </p>

                <div className="actions">
                    <NavLink to="/home">Go to Home</NavLink>
                    <NavLink to="/quick">Quick Reference</NavLink>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NotFound;
