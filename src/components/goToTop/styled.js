import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 20px;
        bottom: 24px;
        z-index: 999;

        width: 42px;
        height: 42px;
        border-radius: 999px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid var(--color-border);
        background: var(--color-surface);
        color: var(--color-text-primary);

        cursor: pointer;

        opacity: 0;
        pointer-events: none;
        transform: translateY(8px) scale(0.95);

        transition:
            opacity 200ms ease,
            transform 200ms cubic-bezier(0.22, 1, 0.36, 1),
            background 200ms ease,
            border-color 200ms ease;

        svg {
            font-size: 18px;
        }

        &:hover {
            background: var(--color-surface-2);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }
    `,
};
