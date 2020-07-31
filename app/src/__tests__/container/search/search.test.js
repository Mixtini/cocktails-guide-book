import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

import Search from '../../../container/search/search';
import SEARCH_TEXT from '../../../assets/wording/search.json';
import SELECTOR from '../../../assets/selector.json';

expect.extend({ toBeInTheDocument });

describe('Test <Search />', () => {
    const initProps = {
        searchPageData: {
            isInit: false, cocktailsList: []
        },
        getCocktailsList: jest.fn()
    };
    let search;
    const renderSearch = (props) => {
        return (
            <Search {...props} />
        );
    };
    beforeEach(() => {
        search = render(renderSearch(initProps));
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

    test('Loader should display as expected when not init', () => {
        const loader = search.getByTestId(SELECTOR.COMMON.LOADER);
        expect(loader).toBeInTheDocument();
    });

    test('Error content should display as expected when no data', () => {
        const props = { ...initProps, searchPageData: { ...initProps.searchPageData, isInit: true }}
        search.rerender(<Search {...props} />)
        const content = search.getByTestId(SELECTOR.SEARCH.CONTENT).textContent;
        expect(content).toBe(SEARCH_TEXT.error_text);
    });
});
