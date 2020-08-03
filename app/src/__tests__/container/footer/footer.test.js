import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../../../container/footer/footer';

describe('Test <Footer />', () => {
    let footer;
    const renderFooter = () => {
        return (
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
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
