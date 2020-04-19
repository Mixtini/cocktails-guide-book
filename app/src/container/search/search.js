import React from 'react';
import styled from 'styled-components';

const Search = () => {
    return (
        <Container>
            <HeaderText>
                <div>Search</div>
            </HeaderText>
        </Container>
    );
};

export default Search;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 28px;
    display: flex;
    justify-content: center;
`;