import styled from 'styled-components';
import { STYLE } from '../config/common';
import logo from '../assets/images/overpartylab-logo.jpg';

export const MainContainer = styled.div`
    min-width: ${STYLE.MIN_WIDTH}px;
    padding: 64px 0px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
`;

export const Header = styled.div`
    font-size: 24px;
    padding: ${STYLE.PADDING}px;
    display: flex;
    justify-content: center;
`;

export const Item = styled.div`
    display: flex;
    justify-content: ${({ locate }) => locate ? locate : 'center' };
    padding: ${STYLE.PADDING}px;
`;

export const ItemName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${STYLE.PADDING}px;
`;

export const Content = styled.div`
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
`;

export const StyledIcon = styled.a`
    && svg {
        ${({ svgSize }) => svgSize && (`font-size: ${svgSize}`)};
    }
    ${({ height }) => height && height};
    ${({ width }) => width && width};
    margin: 10px;
    color: inherit;
    cursor: pointer;
`;

export const LogoImage = styled.div`
    margin: 10px;
    width: 100px;
    height: 100px;
    background-size: 100px 100px;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-image: url(${logo});
`;