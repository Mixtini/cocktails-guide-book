import React from 'react';
import styled from 'styled-components';

import WIP from '../../component/wip/wip';

const Recipe = () => {
    return (
        <Container>
            <HeaderText>
                <div>Recipe</div>
            </HeaderText>
            <WIP />
        </Container>
    );
};

export default Recipe;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 28px;
    display: flex;
    justify-content: center;
`;