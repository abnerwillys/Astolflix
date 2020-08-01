import styled from 'styled-components'

const Button = styled.button`
    font-family: 'Roboto', sans-serif;

    border: 1px solid var(--primary);
    border-radius: 4px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    margin-left: 12px;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        background-color: #53585d;
        border-radius: 16px;
        transition: all 500ms;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        color: var(--white);
        outline: 0;
        text-align: center;  

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export default Button