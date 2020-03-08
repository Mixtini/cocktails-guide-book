import React from 'react';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import styled from 'styled-components';

const IMAGE_URLS = {
    LOGO: 'https://lh3.googleusercontent.com/Lx0J-pUSGxzTYJyUyDJvwHTJDql1yzOiQIsbMv_InzpLuP0-0XicL174hkoJTZbAYRslCgUqb9FAp2LlnoHNV5Z7CYoSlO3WdeG0pZ479fUZ-GUAdcI3rYRSd9dYgsRfBH7Ibl9QED88XqKaudZCAiu_PeDx0dZfEOh6rI53GWBZfCLODthBpoeet-_g6aDbxM-8NFJS01UxXUXoUcwnGc82GeV8BC_WqWw3BYf_u-iaJcdcrGVZCH0DlB6Z9qHM5e8vNszpQeTRLBF0XTvz36em84vk55B6r3_UWZ8J0zwYUlB9lIHLc63QpF3QNF5A5CxXymzgA3-uvQD5n_rU9PT4uYipxHf0ea3C6NW4G0xhQiDpJehQdvqMoJyYFAhFyHs2Hv_6Gdu4lXZT0HGe2hWm7O3vomEtpOmw2i-uW8O4dmsm-M5iLCgWwG8KZF6LFV-loRrzzvVZ_yRkSHHPQppF4buEKaok8PIH1R4aYQOuogKImmNVD5VI3x3IWq7-8_SjQbRhLo_SJuE0k5ZGPOczSgDhbfV_exhgbPt8bq46qKBz0nRxWfMFtRjwOwyLXJy9amufJ5FcUWrYTvzlGOJfK9dPdnX87HnlD5aJPmjlBg4UVBNg_KfbibiSPH_noOctZ7QUsgTeCXcsXFPiHnmFPFqvd_4hTjgAiH2wSxkUwC570WFhwCn7NWdR_Yy9_k0vscyw_H31l_Z1bdYySLLQr63zVtJ1bOmGwiIBVxIPdcI=s320-no'
};

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                <div>Contact Us <ContactMailTwoToneIcon /></div>
                <Image url={IMAGE_URLS.LOGO}/>
            </ContactHeader>
            <ContactWording>
                <div>Please follow us on Instagram or Facebook if you like our website.</div>
                <div>如果您喜歡我們的網站，請在Instagram或Facebook上關注我們。</div>
            </ContactWording>
            <ContactLink>
                <StyledIcon href="https://www.facebook.com/over.party.lab/" target="_blank">
                    <FacebookIcon />
                </StyledIcon>
                <StyledIcon href="https://www.instagram.com/over.party.lab/" target="_blank">
                    <InstagramIcon />
                </StyledIcon>
            </ContactLink>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.div`
    width: 300px;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});
`;

const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    && div {
        font-size: 28px;
    }
`;

const StyledIcon = styled.a`
    && svg {
        font-size: 5rem;
    }
    &&:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto; 
    }
    display: block;
    height: 100px;
    width: 100px;
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
`;

const ContactWording = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ContactLink = styled.div`
    display: flex;
    justify-content: space-around;
`;