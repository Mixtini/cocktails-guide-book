// core
import React from 'react';

// third party component
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CollectionsBookmarkTwoToneIcon from '@material-ui/icons/CollectionsBookmarkTwoTone';

// components
import { LogoImage, StyledIcon, ContactLink, Footer } from './contact.css.js';
import { Container, Header, Item, Content} from '../style.css.js';

// utils, config and assets
import COMMON_TEXT from '../../assets/wording/common.json';
import CONTACT_TEXT from '../../assets/wording/contact.json';
import { LINK } from '../../config/contact';

const Contact = () => {
    return (
        <Container>
            <Header>
                <div>{CONTACT_TEXT.title}</div>
            </Header>
            <Item>
                <LogoImage />
            </Item>
            <Item>
                <Content>{CONTACT_TEXT.content}</Content>
            </Item>
            <Item>
                <Content>{CONTACT_TEXT.content_recommend}</Content>
            </Item>
            <Item>
                <ContactLink>
                    <StyledIcon href={LINK.FACEBOOK} target="_blank">
                        <FacebookIcon /> 
                        <span>{CONTACT_TEXT.button.facebook}</span>
                    </StyledIcon>
                    <StyledIcon href={LINK.INSTAGRAM} target="_blank">
                        <InstagramIcon />
                        <span>{CONTACT_TEXT.button.instagram}</span>
                    </StyledIcon>
                    <StyledIcon href={LINK.MEDIUM} target="_blank">
                        <CollectionsBookmarkTwoToneIcon />
                        <span>{CONTACT_TEXT.button.medium}</span>
                    </StyledIcon>
                </ContactLink>
            </Item>
            <Footer>
                <div>
                    © {(new Date()).getFullYear()} <a href={LINK.INSTAGRAM} target="_blank">{CONTACT_TEXT.account}</a> {COMMON_TEXT.version}
                </div>
            </Footer>
        </Container>
    );
};

export default Contact;
