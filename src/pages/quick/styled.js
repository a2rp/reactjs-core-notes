import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 20px 80px;

        color: var(--color-text-primary);

        h1 {
            font-size: 30px;
            margin-bottom: 12px;
        }

        h2 {
            font-size: 18px;
            margin-top: 32px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            max-width: 780px;
            margin-bottom: 14px;
        }

        .intro {
            margin-bottom: 22px;
        }

        ul {
            margin-left: 18px;
            margin-bottom: 20px;

            li {
                font-size: 14px;
                color: var(--color-text-secondary);
                margin-bottom: 6px;
                list-style: disc;
            }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 10px;
            margin-top: 10px;

            a {
                padding: 10px 12px;
                border: 1px solid var(--color-border);
                background: var(--color-surface);
                color: var(--color-text-primary);
                font-size: 13px;
                text-decoration: none;

                &:hover {
                    background: var(--color-surface-2);
                }
            }
        }

        .note {
            margin-top: 28px;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `,
};
