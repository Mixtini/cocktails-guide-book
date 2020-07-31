import React from 'react';
import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';
import SELECTOR from '../assets/selector.json';

export const SmallLoader = () => (
    <CircularProgress />
);

const Loader = () => (
    <LoaderContainer data-testid={SELECTOR.COMMON.LOADER}>
        <CircularProgress />
    </LoaderContainer>
);

export default Loader;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;
