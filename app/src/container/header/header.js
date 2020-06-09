import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';

import COMMON_TEXT from '../../assets/wording/common.json';

const Header = ({ minwidth }) => {
    return (
        <StyledAppBar minwidth={minwidth} position="fixed">
            <AppBarContainer>
                <HeaderText>{COMMON_TEXT.title}</HeaderText>
                {/* <FormControlLabel
                    disabled
                    control={
                        <Switch checked={true} value="true" />
                    }
                    label="Light Theme"
                /> */}
            </AppBarContainer>
        </StyledAppBar>
    );
};

export default Header;

const HeaderText = styled.div`
    font-size: 24px;
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