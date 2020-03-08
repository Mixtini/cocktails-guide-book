import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import styled from 'styled-components';

const Header = () => {
    return (
        <AppBar position="static">
            <HeaderText>Over Party Lab</HeaderText>
        </AppBar>
    );
};

export default Header;

const HeaderText = styled.div`
    font-size: 24px;
    padding: 15px;
    && {
        background-color: #424242;
    }
`;