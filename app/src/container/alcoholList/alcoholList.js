// core
import React, { useState, useEffect } from 'react';

// third party component
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

// components
import Loader from '../../components/loader';
import { Container, Header, Item, ItemName } from '../style.css.js';
import { StyledTableContainer, StyledSelect } from './alcoholList.css.js';

// utils, config and assets
import { sendRequest, Api } from '../../utils/httpService';
import { COLUMN_HEADER } from '../../config/alcoholList';
import TEXT from '../../assets/wording/alcoholList.json';

const DEFAULT_PAGE_DATA = {
    isInit: false,
    list: { gin: [] }
};
const DEFAULT_USER_ACTION = {
    type: 'gin'
};
const tempMapping = {
    gin: '琴酒'
};

const AlcoholList = () => {
    // state
    const [alcoholDataList, setAlcoholDataList] = useState(DEFAULT_PAGE_DATA);
    const [userAction, setUserAction] = useState(DEFAULT_USER_ACTION); 
    const { isInit, list } = alcoholDataList;
    const { type } = userAction;

    // get all alcohol list
    const alcoholType = Object.keys(list);
    const { gin } = list;

    // fetch data
    const getAlcoholList = () => {
        sendRequest(Api.getAlcoholList)
            .then((rsp) => {
                const { data } = rsp;
                setAlcoholDataList({ isInit: true, list: data });
            })
            .catch((err) => {
                console.error(err);
                setAlcoholDataList({ isInit: true, list: [] });
            });
    };

    // effect hooks
    useEffect(() => {
        if (gin.length === 0) {
            getAlcoholList();
        }
    }, []);

    return (
        <Container>
            <Header>
                <div>{TEXT.title}</div>
            </Header>
            {
                !isInit && <Loader />
            }
            {
                isInit && Object.keys(list).length > 0 && gin && (
                    <>
                        <Item locate="start">
                            <ItemName>{TEXT.selector.title}</ItemName>
                            <FormControl variant="outlined">
                                <StyledSelect
                                    value={type}
                                    renderValue={(type) => tempMapping[type]}
                                    onChange={(e) => { setUserAction({ ...userAction, type: e.target.value }); }}
                                >
                                    {
                                        alcoholType.map((t) => (<MenuItem key={`type-${t}`} value={t}>{t}</MenuItem>))
                                    }
                                </StyledSelect>
                            </FormControl>
                        </Item>
                        <Item>
                            <StyledTableContainer component={Paper}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            {
                                                COLUMN_HEADER.map(header => (
                                                    <TableCell key={header.key} align={header.align}>
                                                        {header.display}
                                                    </TableCell> 
                                                ))
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            type === 'gin' && gin.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell>
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell>{row.price}</TableCell>
                                                    <TableCell>{row.taste}</TableCell>
                                                    <TableCell>{row.suitable}</TableCell>
                                                    <TableCell>{row.buy}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </StyledTableContainer>
                        </Item>
                    </>
                )
            }
        </Container>
    );
};

export default AlcoholList;
