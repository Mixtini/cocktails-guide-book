// core
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// component
import Header from './header/header';
import SideNav from './header/sideNav';
import Search from './search/search';
import AlcoholList from './alcoholList/alcoholList';
import Contact from './contact/contact';
import { MainContainer } from './style.css.js';

// utils, config and assets
import { STYLE, ROUTE } from '../config/common';

const Main = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    return (
        <>
            <Header minwidth={STYLE.MIN_WIDTH} setOpenSideMenu={setOpenSideMenu} />

            <BrowserRouter>
                <MainContainer>
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={ROUTE.SEARCH.path} />} />
                        <Route exact path={ROUTE.SEARCH.path} component={Search} />
                        <Route exact path={ROUTE.ALCOHOL_LIST.path} component={AlcoholList} />
                        <Route exact path={ROUTE.CONTACT.path} component={Contact} />
                    </Switch>
                </MainContainer>
                <SideNav
                    open={openSideMenu}
                    onClose={()=> {setOpenSideMenu(false);}}
                />
            </BrowserRouter>
        </>
    );
};

export default Main;
