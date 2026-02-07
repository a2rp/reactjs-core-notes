import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,

    Header: styled.div`
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;

        background: #ffffff;
        border-bottom: 1px solid rgba(11, 15, 25, 0.08);

        transform: translateY(${(p) => (p.$hidden ? "-110%" : "0")});
        transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;
    `,

    Main: styled.div`
        position: relative;
        z-index: 10;
        padding-top: 75px;
        background: #f7f8fb;

        .appRoutesWrapper {
            min-height: 100vh;
        }
    `,

    EmptySpace: styled.div`
        position: relative;
        transition: height 0.2s ease;
    `,

    Footer: styled.div`
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;

        background: #ffffff;
        border-top: 1px solid rgba(11, 15, 25, 0.08);
    `,
};
