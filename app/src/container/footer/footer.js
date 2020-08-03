import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

import { StyledSearch, StyledBottomNavigation } from './footer.css.js';

const Footer = () => {
    const [value, setValue] = React.useState('search');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <StyledSearch>
            <StyledBottomNavigation value={value} onChange={handleChange}>
                <Link to="/search"><BottomNavigationAction label="Search" value="search" icon={<SearchTwoToneIcon />} /></Link>
                <Link to="/contact"><BottomNavigationAction label="Contact" value="contact" icon={<ContactMailTwoToneIcon />} /></Link>
            </StyledBottomNavigation>
        </StyledSearch>
    );
};
Footer.propTypes = {
    onPageChange: PropTypes.func.isRequired
};

export default Footer;
