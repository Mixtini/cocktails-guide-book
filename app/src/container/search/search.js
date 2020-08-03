// core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
import SEARCH_TEXT from '../../assets/wording/search.json';
import SELECTOR from '../../assets/selector.json';

const DEFAULT_STATE = {
    value: ['果香', '甜的'],
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
}

const Search = () => {
    const [userAction, setUserAction] = useState(DEFAULT_STATE);  
    const [searchPageData, setSearchPageData] = React.useState(DEFAULT_SEARCH_PAGE);

    const { isInit, cocktailsList } = searchPageData;
    const { value, signature, isSearch, searchResultList, showRecommend, expanded } = userAction;

    const getCocktailsList = () => {
        sendRequest(Api.getCocktails)
            .then((rsp) => {
                const { data } = rsp;
                setSearchPageData({ isInit: true, cocktailsList: Object.values(data) });
            })
            .catch((err) => {
                console.error(err);
                setSearchPageData({ isInit: true, cocktailsList: [] });
            });
    };
    const onClickSearch = () => {
        cocktailsList.sort(() => Math.random() - 0.5);
        const searchResultList = cocktailsList.filter(e => {
            const keys = Object.values(e.keys);
            const fuse = new Fuse(keys, { includeScore: true });
            let filterRule = true;
            for (let i = 0; i < value.length; i += 1) {
                const result = fuse.search(value[i].toLowerCase());
                const weight = result.filter(e => (e.score < 0.3));
                filterRule = filterRule && (result.length > 0 && weight.length > 0);
                if (!filterRule) break;
            }
            if(signature === false) filterRule = filterRule && (e.signature === signature);
            return filterRule;
        });
        setUserAction({ ...userAction, searchResultList, expanded: '', isSearch: true, showRecommend: false });
    };
    const onSwitchSignature = (e) => {
        const signature = e.target.checked;
        setUserAction({ ...userAction, signature });
    };
    const onChipInputChange = (newValue) => {
        if (value.length < 3) {
            setUserAction({ ...userAction, value: [...value, newValue], isSearch: false });
        }
    };
    const onSelectChange = (newValue) => {
        const find = findExistInTwoArray(value, [newValue]);
        if (value.length < 3 && !find) {
            setUserAction({ ...userAction, value: [...value, newValue], isSearch: false });
        }
    };
    const handleDeleteChip = (chip) => {
        const index = value.indexOf(chip);
        if (index !== -1) value.splice(index, 1);
        setUserAction({ ...userAction, value, isSearch: false, showRecommend: true });
    };
    const onExpanded = (clickExpanded) => {
        const newExpanded = expanded === clickExpanded ? '' : clickExpanded
        setUserAction({ ...userAction,  expanded: newExpanded });
    };
    const onControlRecommend = () => {
        const status = !showRecommend
        setUserAction({ ...userAction,  showRecommend: status });
    };

    useEffect(() => {
        if (cocktailsList && cocktailsList.length === 0) {
            getCocktailsList();
        }
    }, []);

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
Search.propTypes = {
    getCocktailsList: PropTypes.func.isRequired,
    searchPageData: PropTypes.object.isRequired
};

export default Search;
