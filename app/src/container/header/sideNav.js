import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { LogoImage } from '../style.css.js';
import {
    SideNavContainer,
    SideNavContent,
    SideNavTitle,
    SideNavLogo,
    SideNavLinkBlock,
    SideNavLink,
    SideNavFooter
} from './sideNav.css.js';

import COMMON_TEXT from '../../assets/wording/common.json';
import { ROUTE, COMMON } from '../../config/common';
import CONTACT_TEXT from '../../assets/wording/contact.json';

const SideNav = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <SideNavContainer>
                <SideNavContent>
                    <SideNavTitle>
                        {COMMON_TEXT.title}
                        <IconButton onClick={onClose}>
                            <ChevronRightIcon />
                        </IconButton>
                    </SideNavTitle>
                    <SideNavLogo>
                        <LogoImage />
                    </SideNavLogo>
                    <SideNavLinkBlock>
                        <SideNavLink>
                            <Link to={ROUTE.SEARCH.path} onClick={onClose}>
                                <SearchTwoToneIcon />
                                {ROUTE.SEARCH.display}
                            </Link>
                        </SideNavLink>
                        <SideNavLink>
                            <Link to={ROUTE.CONTACT.path} onClick={onClose}>
                                <ContactMailTwoToneIcon />
                                {ROUTE.CONTACT.display}
                            </Link>
                        </SideNavLink>
                    </SideNavLinkBlock>
                </SideNavContent>
            </SideNavContainer>
            <SideNavFooter>
                <div>
                    © {(new Date()).getFullYear()} {CONTACT_TEXT.account} {COMMON.VERSION}
                </div>
            </SideNavFooter>
        </Drawer>
    );
};
SideNav.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default SideNav;
