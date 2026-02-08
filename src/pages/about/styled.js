import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 20px 80px;

        color: var(--color-text-primary);

        h1 {
            font-size: 32px;
            margin-bottom: 16px;
        }

        h2 {
            font-size: 20px;
            margin-top: 32px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin-bottom: 14px;
            max-width: 780px;
        }

        ul {
            margin-left: 18px;
            margin-bottom: 16px;

            li {
                font-size: 14px;
                color: var(--color-text-secondary);
                margin-bottom: 8px;
                list-style: disc;
            }
        }

        strong {
            color: var(--color-text-primary);
        }

        .foot {
            margin-top: 28px;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `,
};
