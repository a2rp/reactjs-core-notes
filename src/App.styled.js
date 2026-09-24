import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div``,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 10000;
        height: 60px;
        padding: 10px 15px;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        display: flex;
        justify-content: space-between;
        gap: 15px;

        .menuIconSiteName {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .menuIconWrapper {
            width: 40px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            cursor: pointer;
            background: transparent;
            color: var(--color-text-primary);
            font-size: 20px;
            transition: border-color 180ms ease, box-shadow 180ms ease, background 180ms ease;

            &:hover,
            &:focus-visible {
                background: var(--color-surface-2);
                border-color: var(--color-accent);
                box-shadow: 0 0 16px var(--color-accent-soft);
                outline: none;
            }
        }

        .siteIdentity {
            display: flex;
            align-items: center;
            gap: 9px;
            color: var(--color-text-primary);
            text-decoration: none;
            font-weight: 700;
        }

        .siteIdentity img {
            width: 34px;
            height: 34px;
            object-fit: contain;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            background: var(--color-surface);
        }

        .themeToggleWrapper {
            display: flex;
            align-items: center;
        }

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
            overflow: hidden;
            transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

            &:hover,
            &:focus-visible {
                background: var(--color-surface-2);
                border-color: var(--color-accent);
                box-shadow: 0 0 16px var(--color-accent-soft);
                outline: none;
            }

            .trackIcons {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 8px;
                pointer-events: none;
            }

            .icon {
                display: flex;
                color: var(--color-text-secondary);
                font-size: 14px;
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
                transition: transform 220ms ease;
            }

            &.isLight .ball {
                transform: translate(26px, -50%);
            }
        }
    `,
    Main: styled.main`
        margin-top: 60px;
        padding: 15px 0;
        overflow: auto;
        height: calc(100vh - 60px);

        .appRoutesWrapper {
            min-height: 100vh;
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
            z-index: 9999;
            display: flex;
            transition: width 180ms ease;

            .linksWrapper {
                flex: 0 0 300px;
                width: 300px;
                overflow-y: auto;
                background-color: var(--color-bg);
                color: var(--color-text-primary);
                border-right: 1px solid var(--color-border);
            }

            .emptyWrapper {
                width: 100%;
                border: 0;
                background: transparent;
                cursor: pointer;
            }

            &.hideSliderWrapper {
                width: 0;
            }
        }
    `,
    Footer: styled.div`
        background: var(--color-bg);
        border-top: 1px solid var(--color-border);
        color: var(--color-text-secondary);
    `,
};
