import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,

    Header: styled.div`
        position: relative;
        z-index: 99;
        height: 60px;
        padding: 15px;

        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);

        transform: translateY(${(p) => (p.$hidden ? "-110%" : "0")});
        transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
        will-change: transform;

        display: flex;
        justify-content: space-between;
        gap: 15px;

        .menuIconSiteName {
            display: flex;
            align-items: center;
            gap: 15px;

            .menuIconWrapper {
                width: 50px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--color-border);
                cursor: pointer;
                background: transparent;

                &:hover {
                    background-color: var(--color-surface-2);
                }
            }

            .siteNameWrapper {
                color: var(--color-text-primary);
            }
        }

        .themeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Theme Toggle */
        .themeToggle {
            position: relative;
            width: 56px;
            height: 30px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 0;
            transition:
                background 200ms ease,
                border-color 200ms ease;
            overflow: hidden;

            &:hover {
                background: var(--color-surface-2);
            }

            .trackIcons {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 8px;
                pointer-events: none;

                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: var(--color-text-secondary);
                }
            }

            .ball {
                position: absolute;
                top: 50%;
                left: 4px;
                transform: translateY(-50%);
                width: 22px;
                height: 22px;
                border-radius: 999px;
                background: var(--color-text-primary);
                transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
                will-change: transform;
            }

            &.isLight .ball {
                transform: translate(26px, -50%);
            }

            &.isDark .ball {
                transform: translate(0, -50%);
            }
        }
    `,

    Main: styled.div`
        padding: 15px 0;
        overflow: auto;
        height: calc(100vh - 60px);
        overflow-y: auto;

        .appRoutesWrapper {
            min-height: 100vh;

            .breadcrumbs {
            }
        }

        .sliderWrapper {
            position: fixed;
            top: 60px;
            left: 0;
            height: calc(100vh - 60px);
            width: 100%;
            overflow: hidden;

            background-color: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);

            transition: width 0.2s ease;
            z-index: 9999;
            display: flex;

            .linksWrapper {
                flex: 0 0 300px;
                width: 300px;
                overflow: scroll;

                background-color: var(--color-bg);
                color: var(--color-text-primary);
                border-right: 1px solid var(--color-border);
            }

            .emptyWrapper {
                width: 100%;
            }

            &.hideSliderWrapper {
                width: 0;
            }
        }
    `,

    Footer: styled.div`
        /* min-height: 300px; */

        background: var(--color-bg);
        border-top: 1px solid var(--color-border);
        color: var(--color-text-secondary);
    `,
};
