import React from 'react';
import { Link } from "react-router-dom";

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

import { StyledSearch, StyledBottomNavigation } from './footer.css.js';

import { ROUTE } from '../../config/common';

const Footer = () => {
    const [value, setValue] = React.useState(ROUTE.SEARCH.key);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <StyledSearch>
            <StyledBottomNavigation value={value} onChange={handleChange}>
                <Link to={ROUTE.SEARCH.path}>
                    <BottomNavigationAction
                        label={ROUTE.SEARCH.display}
                        value={ROUTE.SEARCH.key}
                        icon={<SearchTwoToneIcon />}
                    />
                </Link>
                <Link to={ROUTE.CONTACT.path}>
                    <BottomNavigationAction
                        label={ROUTE.CONTACT.display}
                        value={ROUTE.CONTACT.key}
                        icon={<ContactMailTwoToneIcon />}
                    />
                </Link>
            </StyledBottomNavigation>
        </StyledSearch>
    );
};

export default Footer;
