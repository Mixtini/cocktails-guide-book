import React from 'react';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

import { StyledSearch, StyledBottomNavigation } from './footer.css.js';

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
