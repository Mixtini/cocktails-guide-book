// core
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// third party component
import Fuse from 'fuse.js';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChipInput from 'material-ui-chip-input';

// components
import Loader from '../../components/loader';
import {
    SwitchText,
    SearchContainer,
    SearchIndicator,
    StyledSearchIcon,
    Cards,
    CardTitle,
    ItemName,
    IGPostCard,
    Image,
    StyledExpansionPanel,
    OuterExpansionPanel,
    OuterExpansionPanelSummary,
    OuterExpansionPanelDetails,
    InnerExpansionPanelSummary,
    InnerExpansionPanelDetails,
    StyledRecommendBlock,
    ButtonGroup
} from './search.css.js';
import { Container, Header, Item, Content } from '../style.css.js';

// utils, config and assets
import { findExistInTwoArray } from '../../utils/helper';
import { RECOMMEND } from '../../config/search';
import SEARCH_TEXT from '../../assets/wording/search.json';

const DEFAULT_STATE = {
    value: ['果香', '甜的'],
    signature: true,
    isSearch: false,
    isInit: false,
    list: [],
    searchResultList: [],
    showRecommend: true,
    expanded: '' 
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
                                    <InnerExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <div>{title}</div>
                                    </InnerExpansionPanelSummary>
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
RecommendBlock.propTypes = {
    dataObj: PropTypes.object.isRequired,
    expanded: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    onExpanded: PropTypes.func.isRequired,
    showRecommend: PropTypes.bool.isRequired,
    onControlRecommend: PropTypes.func.isRequired
};

const Card = ({ value }) => {
    const { name: { zh, en }, igtoken } = value;
    const igPostUrl = `https://www.instagram.com/p/${igtoken}`;
    const url = `${igPostUrl}/media/?size=l`;
    const onClickPost = () => {
        window.open(igPostUrl, "_blank");
    };
    return (
        <IGPostCard>
            <CardTitle>
                <ItemName>
                    {`${zh} (${en})`}
                </ItemName>
                <Button
                    variant="contained"
                    onClick={onClickPost}
                    color="primary"
                >
                    {SEARCH_TEXT.button.more}
                </Button>
            </CardTitle>
            <Image url={url} onClick={onClickPost} />
        </IGPostCard>
    );
};
Card.propTypes = {
    value: PropTypes.object.isRequired
};

const Search = ({ searchPageData, getCocktailsList }) => {
    const [ userAction, setUserAction] = useState(DEFAULT_STATE);  

    const { isInit, cocktailsList } = searchPageData;
    const { value, signature, isSearch, searchResultList, showRecommend, expanded } = userAction;

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
    getCocktailsList: PropTypes.object.isRequired,
    searchPageData: PropTypes.func.isRequired
};

export default Search;
