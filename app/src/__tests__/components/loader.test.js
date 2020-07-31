import React from 'react';
import { render } from '@testing-library/react';

import Loader, { SmallLoader } from '../../components/loader';

describe('Test <Loader />', () => {
    let loader;
    const renderLoader = () => {
        return (
            <Loader />
        );
    };
    beforeEach(() => {
        loader = render(renderLoader());
    });

    afterEach(() => {
        loader.unmount();
    });

    test('Loader should display as expected', () => {
        expect(loader).toMatchSnapshot();
    });
});

describe('Test <SmallLoader />', () => {
    let smallLoader;
    const renderLoader = () => {
        return (
            <SmallLoader />
        );
    };
    beforeEach(() => {
        smallLoader = render(renderLoader());
    });

    afterEach(() => {
        smallLoader.unmount();
    });

    test('SmallLoader should display as expected', () => {
        expect(smallLoader).toMatchSnapshot();
    });
});