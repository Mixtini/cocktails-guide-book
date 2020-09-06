// core
import React from 'react';

// third party component


// components
import { Container, Header, Item} from '../style.css.js';

// utils, config and assets
import CONTACT_TEXT from '../../assets/wording/alcoholList.json';

const AlcoholList = () => {
    return (
        <Container>
            <Header>
                <div>{CONTACT_TEXT.title}</div>
            </Header>
            <Item>
                Coming Soon...
            </Item>
        </Container>
    );
};

export default AlcoholList;
