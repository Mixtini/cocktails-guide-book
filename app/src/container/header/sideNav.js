// core
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// third party component
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// components
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

// utils, config and assets
import { ROUTE, COMMON } from '../../config/common';
import COMMON_TEXT from '../../assets/wording/common.json';
import CONTACT_TEXT from '../../assets/wording/contact.json';

const SideNav = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <SideNavContainer>
                <SideNavContent>
                    <SideNavTitle>
                        {COMMON_TEXT.title}
                        <IconButton onClick={onClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </SideNavTitle>
                    <SideNavLogo>
                        <LogoImage />
                    </SideNavLogo>
                    <SideNavLinkBlock>
                        {
                            Object.keys(ROUTE).filter(e => ROUTE[e].release).map(r => (
                                <SideNavLink key={`route-${ROUTE[r].key}`}>
                                    <Link to={ROUTE[r].path} onClick={onClose}>
                                        {ROUTE[r].icon}
                                        {ROUTE[r].display}
                                    </Link>
                                </SideNavLink>
                            ))
                        }
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
