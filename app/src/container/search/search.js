import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InstagramEmbed from 'react-instagram-embed';
import ChipInput from 'material-ui-chip-input';

import Loader from '../../components/loader';

import { sendRequest, Api } from '../../utils/httpService';
import { STYLE } from '../../config/common';
import { RECOMMEND } from '../../config/search';
import SEARCH_TEXT from '../../assets/wording/search.json';

import {
    Container,
    Header,
    Item,
    Content
} from '../style.css.js';

// import MOCKDATA from '../../__data__/db.json';

const DEFAULT_STATE = {
    value: [],
    signature: false,
    isSearch: false,
    isInit: false,
    list: [],
    searchResultList: [],
    expanded: '' 
};

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

const RecommendBlock = ({ title, data, expanded, onItemSelect, onExpanded }) => {
    return (
        <StyledExpansionPanel expanded={expanded} onChange={() => { onExpanded(title)} }>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div>{title}</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ButtonGroup>
                    {
                        data.map((e, idx) => {
                            return (
                                <Button
                                    key={`key-${idx}`}
                                    variant="contained"
                                    onClick={() => { onItemSelect(e)} }
                                >
                                    {e}
                                </Button>
                            );
                        })
                    }
                </ButtonGroup>
            </ExpansionPanelDetails>
        </StyledExpansionPanel>
    );
};

const Card = ({ value }) => {
    const { name: { zh, en }, igtoken } = value;
    return (
        <>
            <CardTitle>{`${zh} (${en})`}</CardTitle>
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
    const { value, signature, isSearch, isInit, list, searchResultList, expanded } = userAction;

    const onClickSearch = (e) => {
        list.sort(() => Math.random() - 0.5);
        const searchResultList = list.filter(e => {
            let filterRule = false;
            for (let i = 0; i < value.length; i += 1) {
                filterRule = Object.values(e.keys).indexOf(value[i]) > -1;
                if (!filterRule) return filterRule;
            }
            if(signature === false) filterRule = filterRule && (e.signature === signature);
            return filterRule;
        });
        setUserAction({ ...userAction, searchResultList, expanded: '', isSearch: true });
    };
    const onUpdateList = (list) => {
        setUserAction({ ...userAction, isInit: true, list });
    };
    const onSwitchSignature = (e) => {
        const signature = e.target.checked;
        setUserAction({ ...userAction, signature });
    };
    const onChipInputChange = (newValue) => {
        if (value.length < 5) {
            setUserAction({ ...userAction, value: newValue, isSearch: false });
        }
    };
    const onSelectChange = (newValue) => {
        if (value.length < 5 && value.indexOf(newValue) === -1) {
            setUserAction({ ...userAction, value: [...value, newValue], isSearch: false });
        }
    };
    const handleDeleteChip = (chip) => {
        const index = value.indexOf(chip);
        if (index !== -1) value.splice(index, 1);
        setUserAction({ ...userAction, value, isSearch: false });
    };
    const onExpanded = (clickExpanded) => {
        const newExpanded = expanded === clickExpanded ? '' : clickExpanded
        setUserAction({ ...userAction,  expanded: newExpanded });
    };

    useEffect(() => {
        getCocktailsList(onUpdateList);
    }, []);

    return (
        <Container>
            <Header>
                <div>{SEARCH_TEXT.title}</div>
            </Header>
            {
                !isInit && <Loader />
            }
            {
                isInit && (
                    <> 
                        <Item>
                            <Content>{SEARCH_TEXT.content}</Content>
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
                                    onChange={(chips) => onChipInputChange(chips)}
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
                        {
                            RECOMMEND.map((e) => {
                                const { title, data } = e;
                                return (
                                    <Item key={`item-${title}`}>
                                        <RecommendBlock
                                            key={`recommend-${title}`}
                                            title={title}
                                            data={data}
                                            onItemSelect={onSelectChange}
                                            expanded={expanded === title}
                                            onExpanded={onExpanded}
                                        />
                                    </Item>
                                )
                            })
                        }
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

const SwitchText = styled.span`
    color: ${({checked}) => checked ? 'black' : 'grey'};
`;

const SearchContainer = styled.div`
    display: flex;
    width: ${STYLE.MIN_WIDTH - STYLE.PADDING}px;
    margin-right: ${STYLE.PADDING}px;
`;

const SearchIndicator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
    height: 48px;
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardTitle = styled.div`
    text-align: center;
    font-size: 1rem;
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
    width: ${STYLE.MIN_WIDTH}px;
    && button {
        margin-right: 12px;
        margin-top: 5px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;