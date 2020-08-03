import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// component
import Header from './header/header';
import Footer from './footer/footer';
import Search from './search/search';
import Contact from './contact/contact';
import { MainContainer } from './style.css.js';

import { STYLE } from '../config/common';

const Main = () => {
    return (
        <>
            <Header minwidth={STYLE.MIN_WIDTH} />
            <BrowserRouter>
                <MainContainer>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/search" />} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/contact" component={Contact} />
                    </Switch>
                </MainContainer>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Main;
