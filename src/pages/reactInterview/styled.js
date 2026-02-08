// src/pages/interview/react/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 1440px;
        margin: 0 auto;
        padding: 40px 20px 80px;
        color: var(--color-text-primary);

        .pageHeader {
            margin-bottom: 18px;
        }

        h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        p {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            max-width: 860px;
            margin-bottom: 12px;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .chip {
            font-size: 12px;
            padding: 4px 8px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-secondary);
            border-radius: 10px;
        }

        .qnaGrid {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 18px;
            margin-top: 18px;
        }

        .qnaListWrapper {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            overflow: hidden;
            height: calc(100vh - 220px);
            min-height: 520px;

            display: flex;
            flex-direction: column;
        }

        .listTop {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }

        .listTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13px;
            color: var(--color-text-primary);
            font-weight: 600;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border: 1px solid var(--color-border);
                border-radius: 10px;
                background: var(--color-surface-2);
                color: var(--color-text-secondary);
            }
        }

        .listMeta {
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .listBody {
            padding: 10px 0;
            /* overflow: auto; */
            overflow-y: auto;
            position: relative;
        }

        .qnaSection {
            padding: 8px 0 12px;
            border-bottom: 1px solid var(--color-border);
        }

        .qnaSection:last-child {
            border-bottom: none;
        }

        .sectionHeader {
            padding: 10px 14px 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .sectionTitle {
            font-size: 12px;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-weight: 700;
        }

        .sectionCount {
            font-size: 11px;
            color: var(--color-text-secondary);
        }

        .qnaList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .qnaItem {
            width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            cursor: pointer;

            display: flex;
            align-items: flex-start;
            gap: 10px;

            padding: 10px 14px;
            color: var(--color-text-secondary);

            transition: background 160ms ease;

            &:hover {
                background: var(--color-surface-2);
                color: var(--color-text-primary);
            }
        }

        .qnaItem.isActive {
            background: var(--color-surface-2);
            color: var(--color-text-primary);
            border-left: 3px solid var(--color-text-primary);
            padding-left: 11px;
        }

        .qIndex {
            flex: 0 0 auto;
            font-size: 12px;
            color: var(--color-text-secondary);
            opacity: 0.9;
            margin-top: 1px;
        }

        .qText {
            font-size: 13px;
            line-height: 1.45;
            color: inherit;
        }

        .content {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 14px;
            padding: 14px;
            height: fit-content;
        }

        .contentCard {
            border-radius: 12px;
        }

        .contentTop {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--color-border);
        }

        .contentMeta {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .badge {
            font-size: 12px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            white-space: nowrap;
        }

        .counter {
            font-size: 12px;
            color: var(--color-text-secondary);
        }

        .navButtons {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .navBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 34px;
            padding: 0 12px;
            border-radius: 10px;

            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-primary);

            cursor: pointer;
            transition:
                transform 120ms ease,
                background 150ms ease;

            &:hover {
                background: var(--color-surface);
                transform: translateY(-1px);
            }

            &:disabled {
                cursor: not-allowed;
                opacity: 0.5;
                transform: none;
            }
        }

        .questionBlock {
            padding: 14px 2px 0;
        }

        .qTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .qIcon {
            width: 32px;
            height: 32px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .qLabel {
            font-size: 12px;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
            font-weight: 700;
        }

        .qTextBig {
            font-size: 16px;
            line-height: 1.65;
            color: var(--color-text-primary);
            padding: 12px 14px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
        }

        .answerBlock {
            margin-top: 14px;
            padding: 14px 2px 0;
        }

        .aTitle {
            font-size: 12px;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .aText {
            font-size: 14px;
            line-height: 1.8;
            color: var(--color-text-primary);

            p {
                margin-bottom: 12px;
            }

            ul {
                margin: 10px 0 14px 18px;
            }

            li {
                margin-bottom: 6px;
            }

            strong {
                font-weight: 700;
            }

            em {
                font-style: italic;
            }

            pre {
                margin-top: 12px;
                padding: 12px;
                background: var(--color-surface-2);
                border: 1px solid var(--color-border);
                overflow-x: auto;
                font-size: 13px;
            }

            code {
                font-family: Consolas, Monaco, monospace;
            }
        }

        .emptyAnswer {
            font-size: 13px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            padding: 12px 14px;
            border: 1px dashed var(--color-border);
            background: transparent;
            border-radius: 14px;
        }

        .hint {
            margin-top: 12px;
            font-size: 12px;
            color: var(--color-text-secondary);
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .qnaGrid {
                grid-template-columns: 1fr;
            }

            .qnaListWrapper {
                height: auto;
                min-height: auto;
            }
        }
    `,
};
