import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import Search from '../../../container/search/search';
import SEARCH_TEXT from '../../../assets/wording/search.json';
import SELECTOR from '../../../assets/selector.json';

expect.extend({ toBeInTheDocument });

describe('Test <Search />', () => {
    let search;
    const renderSearch = () => {
        return (
            <Search />
        );
    };
    beforeEach(() => {
        search = render(renderSearch());
    });

    afterEach(() => {
        search.unmount();
    });

    test('Search should display as expected', () => {
        expect(search).toMatchSnapshot();
    });

    test('Title should display as expected', () => {
        const title = search.getByTestId(SELECTOR.SEARCH.TITLE).textContent;
        expect(title).toBe(SEARCH_TEXT.title);
    });
});
