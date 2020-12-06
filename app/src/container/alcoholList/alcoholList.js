// core
import React from 'react';

// components
import { Container, Header, Item } from '../style.css.js';

import TEXT from '../../assets/wording/alcoholList.json';

const AlcoholList = () => {
    return (
        <Container>
            <Header>
                <div>{TEXT.title}</div>
            </Header>
            <Item>
                即將推出，敬請期待！
            </Item>
        </Container>
    );
};

export default AlcoholList;
