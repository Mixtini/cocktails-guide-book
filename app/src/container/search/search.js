// core
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// third party component
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

// component
import Loader from '../../components/loader';
import {
    Container,
    Header,
    Item,
    Content
} from '../style.css.js';

// config and assets
import { STYLE } from '../../config/common';
import { RECOMMEND } from '../../config/search';
import SEARCH_TEXT from '../../assets/wording/search.json';

const DEFAULT_STATE = {
    value: [],
    signature: true,
    isSearch: false,
    isInit: false,
    list: [],
    searchResultList: [],
    showRecommend: false,
    expanded: '' 
};

const DEFAULT_USER_DATA_STATE = {
    gender: '',
    age: 1,
};

const RecommendBlock = ({ dataObj, expanded, onItemSelect, onExpanded, showRecommend, onControlRecommend }) => {
    return (
        <>
            <StyledRecommendBlock>
                <OuterExpansionPanel
                    expanded={showRecommend}
                    onChange={onControlRecommend}
                >
                    <OuterExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div>{SEARCH_TEXT.recommend}</div>
                    </OuterExpansionPanelSummary>
                    <OuterExpansionPanelDetails>
                    {
                        showRecommend && dataObj.map((e) => {
                            const { title, data } = e;
                            return (
                                <StyledExpansionPanel
                                    expanded={expanded === title}
                                    onChange={() => { onExpanded(title)} }
                                    key={`item-${title}`}
                                >
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <div>{title}</div>
                                    </ExpansionPanelSummary>
                                    <InnerExpansionPanelDetails>
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
                                    </InnerExpansionPanelDetails>
                                </StyledExpansionPanel>
                            )
                        })
                    }   
                    </OuterExpansionPanelDetails>
                </ OuterExpansionPanel>
            </StyledRecommendBlock>
        </>
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


const Search = ({ searchPageData, getCocktailsList }) => {
    const [ userAction, setUserAction] = useState(DEFAULT_STATE);  

    const { isInit, cocktailsList } = searchPageData;
    const { value, signature, isSearch, searchResultList, showRecommend, expanded } = userAction;

    const onClickSearch = (e) => {
        cocktailsList.sort(() => Math.random() - 0.5);
        const searchResultList = cocktailsList.filter(e => {
            let filterRule = false;
            for (let i = 0; i < value.length; i += 1) {
                filterRule = Object.values(e.keys).indexOf(value[i]) > -1;
                if (!filterRule) return filterRule;
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
            setUserAction({ ...userAction, value: [...value, ...newValue], isSearch: false });
        }
    };
    const onSelectChange = (newValue) => {
        if (value.length < 3 && value.indexOf(newValue) === -1) {
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
            <Header>
                <div>{SEARCH_TEXT.title}</div>
            </Header>
            {
                !isInit && <Loader />
            }
            {
                isInit && cocktailsList.length === 0 && (
                    <Item>
                        <Content>{SEARCH_TEXT.error_text}</Content>
                    </Item>
                )
            }
            {
                isInit && cocktailsList.length > 0 && (
                    <> 
                        <Item>
                            <Content>
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

const SwitchText = styled.span`
    font-size: 14px;
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
    width: 320px;
    && button {
        margin: 5px;
    }
`;

const OuterExpansionPanel = styled(ExpansionPanel)`
    width: ${STYLE.MIN_WIDTH}px;
    &&& {
        background-color: #f4f4ec;
        box-shadow: none;
        margin-right: 20px;
    }
`;

const OuterExpansionPanelSummary = styled(ExpansionPanelSummary)`
    width: ${STYLE.MIN_WIDTH}px;
`;

const OuterExpansionPanelDetails = styled(ExpansionPanelDetails)`
    display: flex;
    flex-direction: column;
`;

const InnerExpansionPanelDetails = styled(ExpansionPanelDetails)`
    && {
        padding: ${STYLE.PADDING}px 15px;
    }
`;

const StyledRecommendBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

// const StyleRadioGroup = styled(RadioGroup)`
//     && {
//         flex-direction: row;
//     }
// `;