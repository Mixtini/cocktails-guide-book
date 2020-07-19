import React from 'react';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';
import Contact from './contact/contact';
import { MainContainer } from './style.css.js';

import { sendRequest, Api } from '../utils/httpService';
import { STYLE } from '../config/common';

const PAGES = {
    SEARCH: 'search',
    CONTACT: 'contact'
}

const DEFAULT_SEARCH_PAGE = {
    isInit: false,
    cocktailsList: []
}

const Main = () => {
    const [page, setPage] = React.useState(PAGES.SEARCH);
    const [searchPageData, setSearchPageData] = React.useState(DEFAULT_SEARCH_PAGE);

    const getCocktailsList = () => {
        sendRequest(Api.getCocktails)
            .then((rsp) => {
                const { data } = rsp;
                setSearchPageData({ isInit: true, cocktailsList: Object.values(data) });
            })
            .catch((err) => {
                console.error(err);
                setSearchPageData({ isInit: true, cocktailsList: [] });
            });
    };

    return (
        <>
            <Header minwidth={STYLE.MIN_WIDTH} />
            <MainContainer>
                {
                    page === PAGES.SEARCH && (
                        <Search
                            searchPageData={searchPageData}
                            getCocktailsList={getCocktailsList}
                        />
                    )
                }
                {
                    page === PAGES.CONTACT && (<Contact />)
                }
            </MainContainer>
            <Footer onPageChange={setPage} />
        </>
    );
};

export default Main;
