import React from 'react';
import PropTypes from 'prop-types';

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
Header.propTypes = {
    minwidth: PropTypes.number.isRequired
};

export default Header;
