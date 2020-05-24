import React from 'react';
import styled from 'styled-components';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';
import Contact from './contact/contact';

const PAGES = {
    SEARCH: 'search',
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
                    page === PAGES.CONTACT && (<Contact />)
                }
            </Container>
            <Footer onPageChange={setPage} />
        </>
    );
};

export default Main;

const Container = styled.div`
`;
