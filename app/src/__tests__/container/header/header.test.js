import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../../container/header/header';

describe('Test <Header />', () => {
    let header;
    const renderHeader = () => {
        return (
            <Header minwidth={350} />
        );
    };
    beforeEach(() => {
        header = render(renderHeader());
    });

    afterEach(() => {
        header.unmount();
    });

    test('Header should display as expected', () => {
        expect(header).toMatchSnapshot();
    });
});
