import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

import styled from 'styled-components';

const Footer = ({ onPageChange }) => {
    const [value, setValue] = React.useState('search');
    const handleChange = (event, newValue) => {
        setValue(newValue);
        onPageChange(newValue);
    };
    return (
        <StyledSearch>
            <StyledBottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Search" value="search" icon={<SearchTwoToneIcon />} />
                <BottomNavigationAction label="Contact" value="contact" icon={<ContactMailTwoToneIcon />} />
            </StyledBottomNavigation>
        </StyledSearch>
    );
};

export default Footer;

const StyledSearch = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
    && {
        background-color: #424242;
    }
    && button > span {
        color: white;
    }
`;