// core
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// third party component
import Fuse from 'fuse.js';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChipInput from 'material-ui-chip-input';

// components
import Loader from '../../components/loader';
import {
    SwitchText,
    SearchContainer,
    SearchIndicator,
    StyledSearchIcon,
    Cards
} from './search.css.js';
import { Container, Header, Item, Content } from '../style.css.js';
import Card from './components/card';
import RecommendBlock from './components/recommendBlock';

// utils, config and assets
import { findExistInTwoArray } from '../../utils/helper';
import { sendRequest, Api } from '../../utils/httpService';
import { RECOMMEND } from '../../config/search';
import { ROUTE } from '../../config/common';
import SEARCH_TEXT from '../../assets/wording/search.json';
import SELECTOR from '../../assets/selector.json';

const SEARCH_KEY = 'searchKey';
const DEFAULT_STATE = {
    value: [],
    signature: true,
    isSearch: false,
    list: [],
    searchResultList: [],
    showRecommend: true,
    expanded: '' 
};
const DEFAULT_SEARCH_PAGE = {
    isInit: false,
    cocktailsList: []
};

// helper
const filterCocktails = (cocktailsList, searchKeys, signature) => {
    cocktailsList.sort(() => Math.random() - 0.5);
    return cocktailsList.filter(e => {
        const keys = Object.values(e.keys);
        const fuse = new Fuse(keys, { includeScore: true });
        let filterRule = true;
        for (let i = 0; i < searchKeys.length; i += 1) {
            const result = fuse.search(searchKeys[i].toLowerCase());
            const weight = result.filter(e => (e.score < 0.3));
            filterRule = filterRule && (result.length > 0 && weight.length > 0);
            if (!filterRule) break;
        }
        if(signature === false) filterRule = filterRule && (e.signature === signature);
        return filterRule;
    });
};

const Search = () => {
    const history = useHistory();

    // state
    const [userAction, setUserAction] = useState(DEFAULT_STATE);  
    const [searchPageData, setSearchPageData] = React.useState(DEFAULT_SEARCH_PAGE);
    const { isInit, cocktailsList } = searchPageData;
    const { value, signature, isSearch, searchResultList, showRecommend, expanded } = userAction;
    
    // update function
    const updateURL = (value) => {
        const searchParams = value.length === 0 ? '' : new URLSearchParams({
            [SEARCH_KEY]: value.join(',')
        });
        history.push(`${ROUTE.SEARCH.path}?${searchParams}`);
    };
    const updateSearchInput = (value, isSearch, showRecommend) => {
        setUserAction(state => ({ ...state, value, isSearch, showRecommend }));
    };

    // fetch data
    const getCocktailsList = () => {
        sendRequest(Api.getCocktails)
            .then((rsp) => {
                const { data } = rsp;
                setSearchPageData({ isInit: true, cocktailsList: data });
            })
            .catch((err) => {
                console.error(err);
                setSearchPageData({ isInit: true, cocktailsList: [] });
            });
    };

    // event handler
    const onClickSearch = () => {
        const searchResultList = filterCocktails(cocktailsList, value, signature);
        setUserAction({
            ...userAction,
            searchResultList,
            expanded: '',
            isSearch: true,
            showRecommend: false
        });
    };
    const onSwitchSignature = (e) => {
        const signature = e.target.checked;
        setUserAction(state => ({ ...state, signature }));
    };
    const onChipInputChange = (newValue) => {
        if (value.length < 3) {
            const searchValues = [...value, newValue];
            updateSearchInput(searchValues, false, true);
            updateURL(searchValues);
        }
    };
    const onSelectChange = (newValue) => {
        const find = findExistInTwoArray(value, [newValue]);
        if (value.length < 3 && !find) {
            const searchValues = [...value, newValue];
            updateSearchInput(searchValues, false, true);
            updateURL(searchValues);
        }
    };
    const handleDeleteChip = (chip) => {
        const index = value.indexOf(chip);
        if (index !== -1) value.splice(index, 1);
        updateSearchInput(value, false, true);
        setUserAction(state => ({ ...state, value, isSearch: false, showRecommend: true }));
        updateURL(value);
    };
    const onExpanded = (clickExpanded) => {
        const newExpanded = expanded === clickExpanded ? '' : clickExpanded
        setUserAction(state => ({ ...state,  expanded: newExpanded }));
    };
    const onControlRecommend = () => {
        const status = !showRecommend
        setUserAction(state => ({ ...state,  showRecommend: status }));
    };

    // effect hooks
    useEffect(() => {
        if (cocktailsList && cocktailsList.length === 0) {
            getCocktailsList();
        }
    }, []);

    // get query strings from the url and update to search input
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const elements = searchParams.get(SEARCH_KEY);
        if (elements) {
            const searchValue = elements.split(',');
            updateSearchInput(searchValue, false, true);
        }
    }, [location.search]);

    return (
        <Container>
            <Header data-testid={SELECTOR.SEARCH.TITLE} >
                <div>{SEARCH_TEXT.title}</div>
            </Header>
            {
                !isInit && <Loader />
            }
            {
                isInit && cocktailsList.length === 0 && (
                    <Item>
                        <Content data-testid={SELECTOR.SEARCH.CONTENT}>
                            {SEARCH_TEXT.error_text}
                        </Content>
                    </Item>
                )
            }
            {
                isInit && cocktailsList.length > 0 && (
                    <> 
                        <Item>
                            <Content data-testid={SELECTOR.SEARCH.CONTENT}>
                                <div>{SEARCH_TEXT.content}</div>
                                <div>{SEARCH_TEXT.tips}</div>
                            </Content>
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
                            label={<SwitchText checked={signature}>{SEARCH_TEXT.switch_content}</SwitchText>}
                        />
                        </Item>
                        <Item>
                            <SearchContainer>
                                <SearchIndicator>
                                    <StyledSearchIcon />
                                </SearchIndicator>
                                <ChipInput
                                    label={SEARCH_TEXT.input_hint}
                                    value={value}
                                    fullWidth={true}
                                    newChipKeys={[]}
                                    allowDuplicates={false}
                                    onAdd={(chips) => onChipInputChange(chips)}
                                    onDelete={(chip, index) => handleDeleteChip(chip, index)}
                                />
                            </SearchContainer>
                            <Button
                                variant="contained"
                                onClick={onClickSearch}
                                color="primary"
                                disabled={value.length === 0}
                            >
                                {SEARCH_TEXT.button.search}
                            </Button>
                        </Item>
                        <Item>
                            <RecommendBlock
                                dataObj={RECOMMEND}
                                onItemSelect={onSelectChange}
                                showRecommend={showRecommend}
                                expanded={expanded}
                                onExpanded={onExpanded}
                                onControlRecommend={onControlRecommend}
                            />
                        </Item>
                        <Item>
                            {
                                searchResultList.length === 0 && value.length !== 0 && isSearch && (
                                    <div>{SEARCH_TEXT.no_result}</div>
                                )
                            }
                            {
                                isSearch && (
                                    <Cards>
                                        {
                                            searchResultList.map((cocktail, idx) => {
                                                if (idx > 4) return null;
                                                return (
                                                    <Card
                                                        key={`key-${idx}`}
                                                        value={cocktail}
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
