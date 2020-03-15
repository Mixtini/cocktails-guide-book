import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

const BASE_LIST = [
    { key: 'all', name: 'All'},
    { key: 'vodka', name: 'Vodka 伏特加'},
    { key: 'gin', name: 'Gin 琴酒'},
    { key: 'rum', name: 'Rum 蘭姆酒'},
    { key: 'tequila', name: 'Tequila 龍舌蘭'},
    { key: 'whiskey', name: 'Whiskey 威士忌'}
];

const ATTACHED_LIST = [
    { key: 'all', name: 'All'},
    { key: 'coke', name: 'Coke 可樂'},
    { key: 'sprite', name: 'Sprite 雪碧'},
    { key: 'bubble', name: 'Bubble 氣泡水'},
    { key: 'grapefruit', name: 'Grapefruit 葡萄柚'},
    { key: 'cranberry', name: 'Cranberry 蔓越梅'},
    { key: 'orange', name: 'Orange 柳橙'},
    { key: 'Pineapple', name: 'pineapple 鳳梨'},
    { key: 'kiwi', name: 'Kiwi 奇異果'}
];


const Selector = ({ title, items, value, handleChange }) => {
    return (
        <StyledFormControl>
            <InputLabel>{title}</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
            >
                {items.map(item => <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>)}
            </Select>
        </StyledFormControl>
    );
};

const InputSearch = () => {
    return (
        <StyledForm noValidate autoComplete="off">
            <TextField label="請直接輸入調酒名稱" fullWidth={true} />
            <Button variant="contained">搜尋</Button>
        </StyledForm>
    );
};

const Recipe = () => {
    const [base, setBase] = React.useState('');
    const [attached, setAttached] = React.useState('');
    const handleChangeBase = event => {
        setBase(event.target.value);
    };
    const handleChangeAttached = event => {
        setAttached(event.target.value);
    };

    return (
        <Container>
            <HeaderText>
                <div>Over Party Lab Recipe</div>
            </HeaderText>
            <FormControlContainer>
                <Selector
                    title="基酒"
                    items={BASE_LIST}
                    value={base}
                    handleChange={handleChangeBase}
                />
                <Selector
                    title="附材料"
                    items={ATTACHED_LIST}
                    value={attached}
                    handleChange={handleChangeAttached}
                />
            </FormControlContainer>
            <SearchContainer>
                <InputSearch />
            </SearchContainer>
        </Container>
    );
};

export default Recipe;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderText = styled.div`
    font-size: 28px;
    display: flex;
    justify-content: center;
`;

const FormControlContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledForm = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    padding: 15px;
    && div {
        padding-right: 15px;
    }
`;

const SearchContainer = styled.div`
    padding: 8px;
`;

const StyledFormControl = styled(FormControl)`
    min-width: 150px;
`;