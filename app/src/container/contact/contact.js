import React from 'react';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                Contact Us
                <ContactMailTwoToneIcon />
            </ContactHeader>
            <ContactWording>
                <div>Please follow us on Instagram or Facebook if you like our website.</div>
                <div>如果您喜歡我們的網站，請在Instagram或Facebook上關注我們。</div>
            </ContactWording>
            <ContactLink>
                <FacebookIcon />
                <InstagramIcon />
            </ContactLink>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactWording = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContactLink = styled.div`
    display: flex;
    justify-content: space-between;
`;