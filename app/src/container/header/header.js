import React from 'react';

import { HeaderText, StyledAppBar, AppBarContainer } from './header.css.js';

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
