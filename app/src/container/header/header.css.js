import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const HeaderText = styled.div`
    height: 45px;
    font-size: 18px;
    padding-left: 15px; 
    && > button {
        color: #ffffff;
    }
`;

export const HeaderInfo = styled.div`
    display: flex;
`;

export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledAppBar = styled(AppBar)`
    && {
        height: 45px;
        min-width: ${({ minwidth }) => `${ minwidth }px`};
    }
`;

export const AppBarContainer = styled.div`
    && {
        height: 45px;
        background-color: #424242;
    }
    display: flex;
    justify-content: space-between;
`;
