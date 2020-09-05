import styled from 'styled-components';
import logo from '../../assets/images/overpartylab-logo.jpg';

export const LogoImage = styled.div`
    width: 300px;
    height: 200px;
    background-size: 75%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${logo});
`;

export const StyledIcon = styled.a`
    && svg {
        font-size: 5rem;
    }
    &&:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer; 
    }
    && span {
        padding-left: 10px;
    }
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
`;

export const ContactLink = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
`;
