import React from 'react';
import { render } from '@testing-library/react';

import Contact from '../../../container/contact/contact';

describe('Test <Contact />', () => {
    let contact;
    const renderContact = () => {
        return (
            <Contact />
        );
    };
    beforeEach(() => {
        contact = render(renderContact());
    });

    afterEach(() => {
        contact.unmount();
    });

    test('Contact should display as expected', () => {
        expect(contact).toMatchSnapshot();
    });
});
