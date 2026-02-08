import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;

        color: var(--color-text-primary);

        .content {
            text-align: center;
            max-width: 420px;
        }

        .code {
            font-size: 64px;
            font-weight: 800;
            margin-bottom: 12px;
            color: var(--color-text-muted);
            letter-spacing: 2px;
        }

        h1 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
            margin-bottom: 22px;
            line-height: 1.6;
        }

        .actions {
            display: flex;
            gap: 12px;
            justify-content: center;

            a {
                padding: 6px 14px;
                font-size: 13px;
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                text-decoration: none;

                &:hover {
                    background: var(--color-surface-2);
                }
            }
        }
    `,
};
