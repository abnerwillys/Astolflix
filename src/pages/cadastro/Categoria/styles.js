import styled from 'styled-components'

export const Containercss = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;

    h1 {
      font-size: 28px;
      letter-spacing: 2px;
      margin-top: 0;
    }

    button {
        width: 500px;
        font-size: 20px;
        letter-spacing: 2px;
        border: none;
        border-radius: 8px;
        color: var(--white);
        background-color: rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }

    button:hover {
        background-color: var(--primary);
        border-radius: 0;
        transition: all 700ms;
    }

    span {
        font-size: 22px;
        margin-top: 50px; 
        display: block;
        text-align: center;
    }

    @media(max-width: 800px) {
        h1, span {
            font-size: 18px;
        }

        button {
            width: 100%;
        }
    }
`;

Containercss.list = styled.ul`
    padding: 16px 6px;
    margin-bottom: 50px;
    width: 500px;
    min-height: 50px;
    border: 1px solid var(--primary);
    border-radius: 8px;
    font-size: 18px;

    @media(max-width: 800px) {
        width: 100%;
    }
`;