import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-bg);
        color: var(--color-text-secondary);
        padding: 22px 15px;

        .inner {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
        }

        .left {
            .title {
                font-size: 14px;
                font-weight: 800;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-secondary);
                margin-bottom: 10px;
            }

            .time {
                font-size: 12px;
                color: var(--color-text-muted);
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;

            a {
                width: 34px;
                height: 34px;
                display: flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                text-decoration: none;

                transition:
                    background 160ms ease,
                    transform 0.2s ease;

                &:hover {
                    background: var(--color-surface-2);
                    transform: scale(1.2);
                }

                svg {
                    font-size: 16px;
                }
            }
        }

        .bottom {
            max-width: 1100px;
            margin: 14px auto 0;
            padding-top: 12px;
            border-top: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            font-size: 12px;
            color: var(--color-text-muted);

            .dot {
                opacity: 0.6;
            }
        }

        @media (max-width: 720px) {
            .inner {
                flex-direction: column;
                align-items: flex-start;
            }

            .right {
                gap: 8px;
            }
        }

        .meta {
            font-size: 12px;
            margin-top: 6px;
            color: var(--color-text-secondary);
        }

        .meta.muted {
            color: var(--color-text-muted);
        }
    `,
};
