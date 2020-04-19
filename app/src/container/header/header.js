import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import styled from 'styled-components';

const Header = () => {
    return (
        <AppBar position="static">
            <AppBarContainer>
                <HeaderText>Over Party Lab</HeaderText>
                <FormControlLabel
                    disabled
                    control={
                    <Switch checked={true} value="true" />
                    }
                    label="Light Theme"
                />
            </AppBarContainer>
        </AppBar>
    );
};

export default Header;

const HeaderText = styled.div`
    font-size: 24px;
    padding: 15px;
`;

const AppBarContainer = styled.div`
    && {
        background-color: #424242;
    }
    display: flex;
    justify-content: space-between
`;