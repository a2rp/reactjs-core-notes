// pages/home/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px 20px 80px;
        color: var(--color-text-primary);
    `,

    Hero: styled.section`
        margin-bottom: 60px;

        h1 {
            font-size: 42px;
            margin-bottom: 12px;
        }

        .subtitle {
            font-size: 18px;
            color: var(--color-text-secondary);
            max-width: 700px;
        }
    `,

    Section: styled.section`
        margin-bottom: 48px;

        h2 {
            font-size: 24px;
            margin-bottom: 12px;
        }

        p {
            max-width: 800px;
            color: var(--color-text-secondary);
        }

        ul {
            margin-top: 10px;

            li {
                margin-bottom: 8px;
                color: var(--color-text-secondary);
            }
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            border: 1px solid var(--color-border);
            padding: 20px;
            background: var(--color-surface);

            h3 {
                margin-bottom: 8px;
                font-size: 18px;
            }

            p {
                font-size: 14px;
                margin-bottom: 12px;
            }

            a {
                font-size: 14px;
                color: var(--color-link);
            }

            a:hover {
                color: var(--color-link-hover);
            }
        }
    `,
};
