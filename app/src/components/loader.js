import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => (
    <LoaderContainer>
        <CircularProgress />
    </LoaderContainer>
);

export const SmallLoader = () => (
    <CircularProgress />
);

export default Loader;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    /* padding-top: 25vh; */
`;
