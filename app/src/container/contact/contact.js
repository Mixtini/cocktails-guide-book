import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CollectionsBookmarkTwoToneIcon from '@material-ui/icons/CollectionsBookmarkTwoTone';

import styled from 'styled-components';

const IMAGE_URLS = {
    LOGO: 'https://lh3.googleusercontent.com/7tin4j0sYpS4A8O8a22msolDVuL-ISJAx_Kkp3FRr229R_9W_58W9QgIPyyTai-r-mNAhWOKIBpR6YeMk1HCO0nVCIwHWwyBLwfy5jTByHz5lmYeAkdlgBmVpCCglzDFmosN_0QRR4CFyaOspuNeDgcSs12j8U77tPumitPAdO_Wcesm7889L7jNIzyurOaYR_V3BtVjUZHpbWCuK8efNvrgFiXgAdIA9o6AO9VA_h_WSHEke_X350501L7HzUCesoUIQkSA0SPU5T3PeBcrBWgBp3SMb40xUedIlkplFUFuBGRPZ7_txj6B_84N9-_quSinkLXmBx_dL5SlaONIkEKJMV_nRlzPgfE2exC7tcmr7i0be5-x9urtJF9_8QaGPyR5fqZ92S8Iy-fu6fyBy15e0ewn3MocZiMTJJdrrm-Tc2TIXt8N4Wg61mAvhXsX_oVKIMeD-zptj04ZXww4qCVRgKpL_JboMY10fmYF-bHurH-eeq1Q0GCm842ILSr2H-1-qpD-_w0ueXSMeaTbaWtf2FN0YI8OjE2dSZBhCvtbGJGqCn8ngBuStxWhf0aqWps8g7qKo0VgPIVC_BQBWn5O60KxAH8y3LdOZ517F45HlphP3pet1vvAKXrJztw8-rkkLBg9C-Zu4asv2sn_aBi2gha9e-fOmFp0TB8i252u3KdO_OGTs7rYq7We9F5LP9TqSpoM-8cryRd6NeZOnK66H_RmbcUEjYT3KbhN6oa4Z_c=s320-no'
};

const Contact = () => {
    return (
        <ContactContainer>
            <ContactHeader>
                <div>Contact Us</div>
            </ContactHeader>
            <ContactLogo>
                <Image url={IMAGE_URLS.LOGO}/>
            </ContactLogo>
            <ContactWording>
                <div>如果喜歡我們的分享，不妨來追蹤四個研酒生所創立的 Instagram 與 Facebook 粉絲頁吧！我們會在上面不定時分享調酒以及各種酒類資訊，也歡迎隨時跟我們討論交流酒類的新知識。</div>
            </ContactWording>
            <ContactLink>
                <StyledIcon href="https://www.facebook.com/over.party.lab/" target="_blank">
                    <FacebookIcon />
                    <div>Fackbook</div>
                </StyledIcon>
                <StyledIcon href="https://www.instagram.com/over.party.lab/" target="_blank">
                    <InstagramIcon />
                    <div>Instagram</div>
                </StyledIcon>
                <StyledIcon href="https://medium.com/@overpartylab" target="_blank">
                    <CollectionsBookmarkTwoToneIcon />
                    <div>Medium</div>
                </StyledIcon>
            </ContactLink>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    padding: 8px;
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

const ContactWording = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px;
`;

const ContactLink = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
`;

const ContactLogo = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px;
`;
