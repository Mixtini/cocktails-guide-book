// core
import React, { useState, useEffect } from 'react';

// third party component


// components
import Loader from '../../components/loader';
import { Container, Header, Item} from '../style.css.js';

// utils, config and assets
import { sendRequest, Api } from '../../utils/httpService';
import CONTACT_TEXT from '../../assets/wording/alcoholList.json';

const DEFAULT_PAGE_DATA = {
    isInit: false,
    list: {}
};

const AlcoholList = () => {
    // state
    const [alcoholDataList, setAlcoholDataList] = useState(DEFAULT_PAGE_DATA); 
    const { isInit, list } = alcoholDataList;

    // get all alcohol list
    // const { gin, rum, tequila, whiskey, vodka } = list;

    // fetch data
    const getAlcoholList = () => {
        sendRequest(Api.getAlcoholList)
            .then((rsp) => {
                const { data } = rsp;
                setAlcoholDataList({ isInit: true, cocktailsList: Object.values(data) });
            })
            .catch((err) => {
                console.error(err);
                setAlcoholDataList({ isInit: true, cocktailsList: [] });
            });
    };

    // effect hooks
    useEffect(() => {
        if (list && Object.keys(list).length === 0) {
            getAlcoholList();
        }
    }, []);

    return (
        <Container>
            <Header>
                <div>{CONTACT_TEXT.title}</div>
            </Header>
            {
                !isInit && <Loader />
            }
            {
                isInit && (
                    <Item>
                        Coming Soon...
                    </Item>
                )
            }
        </Container>
    );
};

export default AlcoholList;
