import React from 'react';
import styled from 'styled-components';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';
import Contact from './contact/contact';

import { sendRequest, Api } from '../utils/httpService';
import { STYLE } from '../config/common';
// import MOCKDATA from '../__data__/db.json';
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
        // setCocktailsList(Object.values(MOCKDATA["overpartylab-cocktails"]));
        sendRequest(Api.getCocktails)
            .then((data) => {
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
            <Container>
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
            </Container>
            <Footer onPageChange={setPage} />
        </>
    );
};

export default Main;

const Container = styled.div`
    min-width: ${STYLE.MIN_WIDTH}px;
    padding: 64px 0px;
`;
