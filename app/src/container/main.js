import React, { useState } from 'react';
import styled from 'styled-components';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Recipe from './recipe/recipe';
import Search from './search/search';
import Surfing from './surfing/surfing';
import Contact from './contact/contact';

const PAGES = {
    SEARCH: 'search',
    RECIPE: 'recipe',
    SURFING: 'surfing',
    CONTACT: 'contact'
}

const Main = () => {
    const [page, setPage] = React.useState(PAGES.SEARCH);
    return (
        <>
            <Header />
            <Container>
            {
                page === PAGES.SEARCH && (<Search />)
            }
            {
                page === PAGES.RECIPE && (<Recipe />)
            }
            {
                page === PAGES.SURFING && (<Surfing />)
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
    /* display: flex;
    justify-content: center; */
`;
