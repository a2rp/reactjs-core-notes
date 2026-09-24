import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-bg);
        color: var(--color-text-secondary);
        padding: 22px 15px;

        .inner,
        .bottom {
            max-width: 1100px;
            margin: 0 auto;
        }

        .inner {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
        }

        .title {
            font-size: 14px;
            font-weight: 800;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .sub,
        .meta {
            font-size: 12px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .right {
            display: grid;
            gap: 10px;
            justify-items: end;
        }

        .linkGroup {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .right a {
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            background: var(--color-surface);
            color: var(--color-text-primary);
            text-decoration: none;
            transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, color 180ms ease;

            &:hover,
            &:focus-visible {
                background: var(--color-surface-2);
                border-color: var(--color-accent);
                color: var(--color-text-primary);
                box-shadow: 0 0 16px var(--color-accent-soft);
                outline: none;
            }
        }

        .bottom {
            margin-top: 14px;
            padding-top: 12px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            font-size: 12px;
            color: var(--color-text-muted);

            a {
                color: var(--color-text-primary);
                font-weight: 700;
            }
        }

        @media (max-width: 720px) {
            .inner {
                flex-direction: column;
            }

            .right {
                justify-items: start;
            }
        }
    `,
};
