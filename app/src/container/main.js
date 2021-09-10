// core
import React from 'react';

import { LogoImage } from './contact/contact.css.js';
import { MainContainer, Info } from './style.css.js';

const Main = () => {
    return (
        <MainContainer>
            <Info>
                <LogoImage />
            </Info>
            <Info>
                即將前往 Mixtini...
            </Info>
        </MainContainer>
    );
}

export default Main;
