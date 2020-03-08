import React from 'react';
import styled from 'styled-components';

import WIP from '../../component/wip/wip';

const Surfing = () => {
    return (
        <Container>
            <HeaderText>
                <div>Surfing</div>
            </HeaderText>
            <WIP />
        </Container>
    );
};

export default Surfing;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 28px;
    display: flex;
    justify-content: center;
`;