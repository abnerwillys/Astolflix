import styled from 'styled-components'

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 5%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;

export const LogoImage = styled.img`
    max-width: 180px;

    @media (max-width: 800px) {
        max-width: 105px;
        margin-top: 4px; 
    }
`;
