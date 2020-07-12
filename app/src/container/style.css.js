import styled from 'styled-components';
import { STYLE } from '../config/common';

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
    justify-content: center;
    padding: ${STYLE.PADDING}px;
`;

export const Content = styled.div`
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
`;
