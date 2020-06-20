import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';

import COMMON_TEXT from '../../assets/wording/common.json';

const Header = ({ minwidth }) => {
    return (
        <StyledAppBar minwidth={minwidth} position="fixed">
            <AppBarContainer>
                <HeaderText>{COMMON_TEXT.title}</HeaderText>
            </AppBarContainer>
        </StyledAppBar>
    );
};

export default Header;

const HeaderText = styled.div`
    font-size: 18px;
    padding: 15px; 
`;

const StyledAppBar = styled(AppBar)`
    min-width: ${({minwidth}) => `${minwidth}px`};
`;

const AppBarContainer = styled.div`
    && {
        background-color: #424242;
    }
    display: flex;
    justify-content: space-between;
`;