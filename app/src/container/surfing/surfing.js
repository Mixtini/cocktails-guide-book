import React from 'react';
import styled from 'styled-components';

const Surfing = () => {
    return (
        <Container>
            <HeaderText>
                <div>Surfing</div>
            </HeaderText>
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