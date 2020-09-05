// core
import React from 'react';
import PropTypes from 'prop-types';

// third party component
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// components
import {
    StyledExpansionPanel,
    OuterExpansionPanel,
    OuterExpansionPanelSummary,
    OuterExpansionPanelDetails,
    InnerExpansionPanelSummary,
    InnerExpansionPanelDetails,
    StyledRecommendBlock,
    ButtonGroup
} from '../search.css.js';

// utils, config and assets
import SEARCH_TEXT from '../../../assets/wording/search.json';

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
    dataObj: PropTypes.array.isRequired,
    expanded: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    onExpanded: PropTypes.func.isRequired,
    showRecommend: PropTypes.bool.isRequired,
    onControlRecommend: PropTypes.func.isRequired
};

export default RecommendBlock;
