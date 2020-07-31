import styled from 'styled-components'

export const Formcss = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    width: 500px;
    padding: 16px 24px;
    border: 1px solid var(--primary);
    border-radius: 8px;
    margin-bottom: 16px;

    label {
        display: flex;
        flex-direction: column;
        font-size: 18px;
    }

    input {
        border: none;
        border-radius: 8px;
        margin-top: 6px;
        font-size: 22px;
        padding-left: 10px;
    }

    input[type="color"] {
        background-color: initial;
        width: 100%;
        min-height: 40px;
        padding: 0;
        cursor: pointer;
    }

    @media(max-width: 800px) {
        text-align: center;
        width: 100%;

        label {
            font-size: 16px;
        }
    }
`;