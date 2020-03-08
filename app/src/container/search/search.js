import React from 'react';
import styled from 'styled-components';

import WIP from '../../component/wip/wip';

const Search = () => {
    return (
        <Container>
            <HeaderText>
                <div>Search</div>
            </HeaderText>
            <WIP />
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