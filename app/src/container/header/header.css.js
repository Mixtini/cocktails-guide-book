import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const HeaderText = styled.div`
    font-size: 18px;
    padding: 15px; 
`;

export const StyledAppBar = styled(AppBar)`
    min-width: ${({minwidth}) => `${minwidth}px`};
`;

export const AppBarContainer = styled.div`
    && {
        background-color: #424242;
    }
    display: flex;
    justify-content: space-between;
`;
