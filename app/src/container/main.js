import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Recipe from './recipe/recipe';
import Search from './search/search';
import Surfing from './surfing/surfing';
import Contact from './contact/contact';

import { sendRequest, Api } from '../utils/httpService';

const PAGES = {
    SEARCH: 'search',
    RECIPE: 'recipe',
    SURFING: 'surfing',
    CONTACT: 'contact'
}

const init = (setBaseList, setAttachedList) => {
    sendRequest(Api.getBaseList)
        .then((data) => {
            setBaseList(data);
        })
        .catch((err) => {
            console.error(err);
        });
    sendRequest(Api.getAttachedList)
        .then((data) => {
            setAttachedList(data);
        })
        .catch((err) => {
            console.error(err);
        });
};

const getRecipeList = (setRecipeList) => {
    sendRequest(Api.getCocktailsList)
        .then((data) => {
            setRecipeList(data);
        })
        .catch((err) => {
            console.error(err);
        });
};


const Main = () => {
    const [page, setPage] = React.useState(PAGES.RECIPE);
    // recipe
    const [base, setBase] = React.useState('');
    const [attached, setAttached] = React.useState('');
    const [baseList, setBaseList] = React.useState([]);
    const [attachedList, setAttachedList] = React.useState([]);
    const [recipeList, setRecipeList] = React.useState([]);

    const handleChangeBase = event => {
        setBase(event.target.value);
    };
    const handleChangeAttached = event => {
        setAttached(event.target.value);
    };

    useEffect(() => {
        init(setBaseList, setAttachedList);
        getRecipeList(setRecipeList);
    }, []);

    return (
        <>
            <Header />
            <Container>
                {
                    page === PAGES.SEARCH && (<Search />)
                }
                {
                    page === PAGES.RECIPE && (
                        <Recipe
                            base={base}
                            baseList={baseList}
                            handleChangeBase={handleChangeBase}
                            attached={attached}
                            attachedList={attachedList}
                            handleChangeAttached={handleChangeAttached}
                            recipeList={recipeList}
                        />
                    )
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
