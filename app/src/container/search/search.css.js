import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { STYLE } from '../../config/common';

export const SwitchText = styled.span`
    font-size: 14px;
    color: ${({checked}) => checked ? 'black' : 'grey'};
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 300px;
    margin-right: ${STYLE.PADDING}px;
`;

export const SearchIndicator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    height: 48px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardTitle = styled.div`
    display: flex;
    width: 270px;
    text-align: center;
    font-size: 1rem;
    padding: 15px;
    && > button {
        margin-left: 10px;
    }
`;

export const ItemName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 190px;
`;

export const IGPostCard = styled.div`
    margin: 10px;
    padding-bottom: 15px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &&:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

export const Image = styled.div`
    width: 300px;
    height: 300px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ url }) => url});
    &&:hover {
        cursor: pointer;
    }
`;

export const StyledExpansionPanel = styled(ExpansionPanel)`
    width: 320px;
    && button {
        margin: 5px;
    }
`;

export const OuterExpansionPanel = styled(ExpansionPanel)`
    width: ${STYLE.MIN_WIDTH}px;
    &&& {
        background-color: #f4f4ec;
        box-shadow: none;
        margin-right: 20px;
    }
`;

export const OuterExpansionPanelSummary = styled(ExpansionPanelSummary)`
    width: ${STYLE.MIN_WIDTH}px;
`;

export const OuterExpansionPanelDetails = styled(ExpansionPanelDetails)`
    display: flex;
    flex-direction: column;
`;

export const InnerExpansionPanelSummary = styled(ExpansionPanelSummary)``;

export const InnerExpansionPanelDetails = styled(ExpansionPanelDetails)`
    && {
        padding: ${STYLE.PADDING}px 15px;
    }
`;

export const StyledRecommendBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
