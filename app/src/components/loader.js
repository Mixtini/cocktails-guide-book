import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

export const SmallLoader = () => (
    <CircularProgress />
);

const Loader = () => (
    <LoaderContainer>
        <CircularProgress />
    </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;
