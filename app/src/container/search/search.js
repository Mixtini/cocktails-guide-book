import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import InstagramEmbed from 'react-instagram-embed';
import ChipInput from 'material-ui-chip-input'

import Loader from '../../components/loader';
import { sendRequest, Api } from '../../utils/httpService';
import { STYLE } from '../../config/common';

// import MOCKDATA from '../../__data__/db.json';

const DEFAULT_STATE = {
    value: [],
    signature: true,
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
    const { value, signature, isSearching, isInit, list, searchResultList } = userAction;

    const onClickSearch = (e) => {
        setUserAction({ ...userAction, isSearching: true });
        const searchResultList = list.filter(e => {
            let filterRule = false;
            for (let i = 0; i < value.length; i += 1) {
                console.log(value[i]);
                console.log(e.keys);
                filterRule = Object.values(e.keys).indexOf(value[i]) > -1;
                if (filterRule) break;
            }
            if(signature === false) filterRule = filterRule && (e.signature === signature);
            return filterRule;
        });
        setUserAction({ ...userAction, searchResultList, isSearching: false });
    };
    const onUpdateList = (list) => {
        setUserAction({ ...userAction, isInit: true, list });
    };
    const setLoading = (flag) => {
        setUserAction({ ...userAction, isSearching: flag });
    };
    const onClickType = (newValue) => {
        setUserAction({ ...userAction, value: [...value, newValue] });
    };
    const onSwitchSignature = (e) => {
        const signature = e.target.checked;
        setUserAction({ ...userAction, signature });
    };
    const onChipInputChange = (newValue) => {
        setUserAction({ ...userAction, value: [...value, newValue] });
    };
    const handleDeleteChip = (chip) => {
        const index = value.indexOf(chip);
        if (index !== -1) value.splice(index, 1);
        setUserAction({ ...userAction, value });
    }

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
                            <ContentContainer>輸入您喜歡的風味，氣味，基酒或是直接輸入調酒名稱，我們就會推薦您適合的調酒唷！</ContentContainer>
                        </Item>
                        <Item>
                        <FormControlLabel
                            control={
                                <Switch
                                    color="primary"
                                    checked={signature}
                                    onChange={onSwitchSignature}
                                />
                            }
                            label={<SwitchText checked={signature}>包含 OverPartyLab 獨創調酒</SwitchText>}
                        />
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
                                <ChipInput
                                    label="輸入喜歡的風味，基酒或是調酒"
                                    value={value}
                                    fullWidth={true}
                                    onChange={(chips) => onChipInputChange(chips)}
                                    onDelete={(chip, index) => handleDeleteChip(chip, index)}
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
    padding: ${STYLE.PADDING}px;
`;

const ContentContainer = styled.div`
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
`;

const ActionContainer = styled.div`
    button {
        margin: 3px;
    }
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
`;

const SwitchText = styled.span`
    color: ${({checked}) => checked ? 'black' : 'grey'};
`;

const SearchContainer = styled.div`
    display: flex;
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
    margin-right: ${STYLE.PADDING}px;
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
    padding: ${STYLE.PADDING}px;
    display: flex;
    justify-content: center;
`;