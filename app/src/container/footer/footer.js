import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

import styled from 'styled-components';

const Footer = ({ onPageChange }) => {
    const [value, setValue] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
        onPageChange(newValue);
    };
    return (
        <StyledSearch>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction label="Recipe" value="recipe" icon={<ImportContactsTwoToneIcon />} />
                <BottomNavigationAction label="Search" value="search" icon={<SearchTwoToneIcon />} />
                <BottomNavigationAction label="Bar Surfing" value="surfing" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Contact" value="contact" icon={<ContactMailTwoToneIcon />} />
            </BottomNavigation>
        </StyledSearch>
    );
};

export default Footer;

const StyledSearch = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
`;