import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CollectionsBookmarkTwoToneIcon from '@material-ui/icons/CollectionsBookmarkTwoTone';

import logo from '../../assets/images/overpartylab-logo.jpg';
import CONTACT_TEXT from '../../assets/wording/contact.json';
import { LINK } from '../../config/contact';

import {
    Container,
    Header,
    Item,
    Content
} from '../style.css.js';

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
            <ContactLink>
                <StyledIcon href={LINK.FACEBOOK} target="_blank">
                    <FacebookIcon />
                    <div>{CONTACT_TEXT.button.facebook}</div>
                </StyledIcon>
                <StyledIcon href={LINK.INSTAGRAM} target="_blank">
                    <InstagramIcon />
                    <div>{CONTACT_TEXT.button.instagram}</div>
                </StyledIcon>
                <StyledIcon href={LINK.MEDIUM} target="_blank">
                    <CollectionsBookmarkTwoToneIcon />
                    <div>{CONTACT_TEXT.button.medium}</div>
                </StyledIcon>
            </ContactLink>
            <Footer>
                <div>
                    © {(new Date()).getFullYear()} <a href={LINK.INSTAGRAM} target="_blank">{CONTACT_TEXT.account}</a> v1.0.0-beta.1
                </div>
            </Footer>
        </Container>
    );
};

export default Contact;

const LogoImage = styled.div`
    width: 300px;
    height: 200px;
    background-size: 75%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${logo});
`;

const StyledIcon = styled.a`
    && svg {
        font-size: 5rem;
    }
    &&:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer; 
    }
    && div {
        padding: 10px;
    }
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
`;

const ContactLink = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
`;

const Footer = styled.div`
    position: fixed;
    width: 100%;
    bottom: 60px;
    background-color: ${props => props.theme.backgroundColor};
    display: flex;
    justify-content: center;
`;
