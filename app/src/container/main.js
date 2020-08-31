import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';
import Contact from './contact/contact';
import { MainContainer } from './style.css.js';

import { STYLE, ROUTE } from '../config/common';

const Main = () => {
    return (
        <>
            <Header minwidth={STYLE.MIN_WIDTH} />
            <BrowserRouter>
                <MainContainer>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={ROUTE.SEARCH.path} />} />
                        <Route exact path={ROUTE.SEARCH.path} component={Search} />
                        <Route exact path={ROUTE.CONTACT.path} component={Contact} />
                    </Switch>
                </MainContainer>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Main;
