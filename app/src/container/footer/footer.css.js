import styled from 'styled-components';
import BottomNavigation from '@material-ui/core/BottomNavigation';

export const StyledSearch = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

export const StyledBottomNavigation = styled(BottomNavigation)`
    && {
        background-color: #424242;
    }
    && button > span {
        color: white;
    }
`;
