import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

import { sendRequest, Api } from '../../utils/httpService';

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

const InputSearch = ({ inputValue, handleChange, onClickSearch }) => {
    return (
        <StyledForm noValidate autoComplete="off">
            <TextField
                label="請直接輸入調酒名稱"
                fullWidth={true}
                onChange={handleChange}
                value={inputValue}
            />
            <Button variant="contained" onClick={onClickSearch}>搜尋</Button>
        </StyledForm>
    );
};

const Recipe = ({
    base,
    baseList,
    handleChangeBase,
    attached,
    attachedList,
    handleChangeAttached,
    recipeList
}) => {
    const [inputValue, setInputValue] = React.useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value)
    };
    const onClickSearch = () => {
        const list = Object.values(recipeList);
        const find = list.find(e => (
            e.name === inputValue ||
            e.name_en === inputValue 
        ));
        console.log(inputValue, '--search key');
        console.log(find, '--find');
        setInputValue('');
    };
    return (
        <Container>
            <HeaderText>
                <div>Over Party Lab Recipe</div>
            </HeaderText>
            <FormControlContainer>
                <Selector
                    title="基酒"
                    items={baseList}
                    value={base}
                    handleChange={handleChangeBase}
                />
                <Selector
                    title="附材料"
                    items={attachedList}
                    value={attached}
                    handleChange={handleChangeAttached}
                />
            </FormControlContainer>
            <SearchContainer>
                <InputSearch
                    inputValue={inputValue}
                    handleChange={handleChange}
                    onClickSearch={onClickSearch}
                />
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