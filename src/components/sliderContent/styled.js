import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;

        /* Search */
        .searchWrapper {
            position: sticky;
            top: 0;
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px;
            background: var(--color-bg);
            border-bottom: 1px solid var(--color-border);

            input {
                flex: 1;
                background: transparent;
                border: 1px solid var(--color-border);
                padding: 6px 8px;
                font-size: 13px;
                color: var(--color-text-primary);
            }

            .searchIcon {
                color: var(--color-text-muted);
            }

            .clearBtn {
                background: transparent;
                border: 0;
                cursor: pointer;
                color: var(--color-text-muted);
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    color: var(--color-text-primary);
                }
            }
        }

        ul {
            overflow-y: auto;
            padding: 8px 0;
        }

        ul li a {
            display: flex;
            align-items: center;
            height: 32px;

            font-size: 13px;
            text-decoration: none;

            color: var(--color-text-primary);

            border-left: 3px solid transparent;
            transition: background 160ms ease;
        }

        /* Parent vs Child spacing */
        ul li a.isParent {
            padding: 0 12px;
            margin-top: 6px;
            font-weight: 700;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        ul li a.isChild {
            padding: 0 12px 0 26px; /* indent */
            font-weight: 500;
            color: var(--color-text-secondary);
        }

        /* Hover */
        ul li a:hover {
            background-color: var(--color-surface-2);
        }

        /* Active - works for both parent and child */
        ul li a.active {
            background-color: var(--color-surface-2);
            border-left-color: var(--color-text-primary);
        }

        /* Active child gets a tiny extra pop */
        ul li a.isChild.active {
            color: var(--color-text-primary);
        }
    `,
};
