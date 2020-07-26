import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../../container/footer/footer';

describe('Test <Footer />', () => {
    let footer;
    const onPageChange = jest.fn();
    const renderFooter = () => {
        return (
            <Footer onPageChange={onPageChange} />
        );
    };
    beforeEach(() => {
        footer = render(renderFooter());
    });

    afterEach(() => {
        footer.unmount();
    });

    test('Footer should display as expected', () => {
        expect(footer).toMatchSnapshot();
    });
});
