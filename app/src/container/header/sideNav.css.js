import styled from 'styled-components';

export const SideNavContainer = styled.div`
    width: 200px;
    height: 100%;
    background-color: #424242;
    display: flex;
    justify-content: center;
`;

export const SideNavContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SideNavTitle = styled.div`
    font-size: 16px;
    color: #ffffff;
    padding: 10px;
    && > button {
        color: inherit;
        padding-left: 40px;
    }
`;

export const SideNavLinkBlock = styled.div`
`;

export const SideNavLogo = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideNavLink = styled.div`
    padding: 10px;
    && > a {
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
    }
    && svg {
        padding-right: 5px;
    }
`;

export const SideNavFooter = styled.div`
    position: fixed;
    bottom: 15px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    padding: 5px;
`;
