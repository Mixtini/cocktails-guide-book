import React, { useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

import Contact from './contact/contact';

const PAGES = {
    DEFAULT: 'default',
    RECIPE: 'recipe',
    SEARCH: 'search',
    SURFING: 'surfing',
    CONTACT: 'contact'
}

const Main = () => {
    const [page, setPage] = React.useState(PAGES.DEFAULT);
    return (
        <>
            <Header />
            {
                page === PAGES.CONTACT && (<Contact />)
            }
            <div>Hello React!!!</div>
            <Footer onPageChange={setPage} />
        </>
    );
};

export default Main;
