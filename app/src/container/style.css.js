import styled from 'styled-components';
import { STYLE } from '../config/common';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: #212121;
    // color: #fff;
`;

export const Header = styled.div`
    font-size: 28px;
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
