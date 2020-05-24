import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import InstagramEmbed from 'react-instagram-embed';

import Loader from '../../components/loader';
import { sendRequest, Api } from '../../utils/httpService';

// import MOCKDATA from '../../__data__/cocktails-guide-api-service-export.json';

const DEFAULT_STATE = {
    value: '',
    isSearching: false,
    isInit: false,
    list: [],
    searchResultList: []
};
const RECOMMEND = ['甜的', '酸的', '茶香', '柑橘香', '清爽'];
const getCocktailsList = (setRecipeList) => {
    // setRecipeList(Object.values(MOCKDATA["overpartylab-cocktails"]));
    sendRequest(Api.getCocktails)
        .then((data) => {
            setRecipeList(Object.values(data));
        })
        .catch((err) => {
            console.error(err);
        });
};

const Card = ({ value, setLoading }) => {
    const { name: { zh, en }, igtoken } = value;
    return (
        <>
            <div>{`${zh} (${en})`}</div>
            <InstagramEmbed
                url={`https://instagr.am/p/${igtoken}/`}
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                injectScript
            />
        </>
    );
};
const Search = () => {
    const [userAction, setUserAction] = useState(DEFAULT_STATE);
    const { value, isSearching, isInit, list, searchResultList } = userAction;

    const onInputChange = (e) => {
        const value = e.target.value;
        setUserAction({ ...userAction, value });
    };
    const onClickSearch = (e) => {
        setUserAction({ ...userAction, isSearching: true });
        const searchResultList = list.filter(e => {
            return Object.values(e.keys).indexOf(value) > -1;
        });
        setUserAction({ ...userAction, searchResultList, isSearching: false });
    };
    const onUpdateList = (list) => {
        setUserAction({ ...userAction, isInit: true, list });
    };
    const setLoading = (flag) => {
        setUserAction({ ...userAction, isSearching: flag });
    };
    const onClickType = (value) => {
        setUserAction({ ...userAction, value });
    };

    useEffect(() => {
        getCocktailsList(onUpdateList);
    }, []);
    return (
        <Container>
            <HeaderText>
                <div>今晚想喝什麼？</div>
            </HeaderText>
            {
                !isInit && <Loader />
            }
            {
                isInit && (
                    <> 
                        <Item>
                            <ContentContainer>輸入您喜歡的風味，氣味，基酒或是直接輸入調酒名稱，我們就會推薦您適合的調酒唷！(目前功能僅開放單一風味推薦)</ContentContainer>
                        </Item>
                        <Item>
                            <ActionContainer>
                                {
                                    RECOMMEND.map((e, idx) => {
                                        return <Button key={`key-${idx}`} variant="contained" onClick={() => { onClickType(e)} }>{e}</Button>;
                                    })
                                }
                            </ActionContainer>
                        </Item>
                        <Item>
                            <SearchContainer>
                                <StyledSearchIcon />
                                <TextField
                                    label="輸入喜歡的風味，基酒或是調酒"
                                    fullWidth={true}
                                    onChange={onInputChange}
                                    value={value}
                                />
                            </SearchContainer>
                            <Button variant="contained" onClick={onClickSearch} color="primary">搜尋</Button>
                        </Item>
                        <Item>
                            {
                                isSearching && <Loader />
                            }
                            {
                                !isSearching && (
                                    <Cards>
                                        {
                                            searchResultList.map((cocktail, idx) => {
                                                if (idx> 5) return null;
                                                return (
                                                    <Card
                                                        key={`key-${idx}`}
                                                        value={cocktail}
                                                        setLoading={setLoading}
                                                    />
                                                )
                                            })
                                        }
                                    </Cards>

                                )
                            }
                        </Item>
                    </>
                )
            }
        </Container>
    );
};

export default Search;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const ContentContainer = styled.div`
    width: 380px;
`;

const ActionContainer = styled.div`
    button {
        margin: 3px;
    }
    width: 380px;
`;

const SearchContainer = styled.div`
    display: flex;
    width: 380px;
    margin-right: 10px;
`;

const StyledSearchIcon = styled(SearchIcon)`
    height: 48px;
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeaderText = styled.div`
    font-size: 28px;
    padding: 10px;
    display: flex;
    justify-content: center;
`;