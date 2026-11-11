import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 58vh;
        display: grid;
        place-items: center;
        padding: 48px 20px;
        color: var(--color-text-primary);

        .content {
            width: min(720px, 100%);
            padding: clamp(24px, 5vw, 48px);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            box-shadow: 0 20px 60px var(--color-shadow);
        }

        .eyebrow {
            margin: 0 0 20px;
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .breadcrumb {
            margin: 0 0 10px;
            color: var(--color-text-muted);
            font-size: 13px;
        }

        h1 {
            margin: 0 0 20px;
            font-size: clamp(28px, 5vw, 42px);
            line-height: 1.15;
        }

        .status {
            margin: 0 0 14px;
            color: var(--color-text-primary);
            font-size: 16px;
            font-weight: 600;
        }

        .description {
            max-width: 560px;
            margin: 0;
            color: var(--color-text-secondary);
            font-size: 15px;
            line-height: 1.7;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 28px;
        }

        .actions a {
            display: inline-flex;
            align-items: center;
            min-height: 42px;
            padding: 0 16px;
            border: 1px solid var(--color-border-light);
            border-radius: 8px;
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: border-color 150ms ease, background 150ms ease;
        }

        .actions a:hover,
        .actions a:focus-visible {
            border-color: var(--color-text-secondary);
            background: var(--color-surface);
        }

        .actions a:focus-visible {
            outline: 2px solid var(--color-text-primary);
            outline-offset: 3px;
        }

        @media (max-width: 480px) {
            .actions {
                flex-direction: column;
                align-items: stretch;
            }

            .actions a {
                justify-content: center;
            }
        }
    `,
};
