import styled from "styled-components";

export const Styled = {
    Wrapper: styled.nav`
        display: flex;
        align-items: center;
        gap: 8px;

        padding: 8px 12px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);

        font-size: 12px;
        color: var(--color-text-secondary);

        .backBtn {
            width: 28px;
            height: 28px;
            border-radius: 6px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            cursor: pointer;

            transition:
                background 150ms ease,
                border-color 150ms ease;

            svg {
                font-size: 14px;
            }

            &:hover {
                background: var(--color-surface-2);
            }
        }

        .crumbs {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 6px;
        }

        .sep {
            display: inline-flex;
            align-items: center;
            color: var(--color-text-muted);

            svg {
                font-size: 14px;
            }
        }

        .link {
            padding: 2px 6px;
            border-radius: 6px;
            color: var(--color-text-secondary);
            text-decoration: none;

            &:hover {
                background: var(--color-surface-2);
                color: var(--color-text-primary);
            }
        }

        .current {
            padding: 2px 6px;
            border-radius: 6px;
            color: var(--color-text-primary);
            font-weight: 700;
        }
    `,
};
