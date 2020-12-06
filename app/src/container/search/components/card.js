// core
import React from 'react';
import PropTypes from 'prop-types';

// third party component
import Button from '@material-ui/core/Button';

// components
import {
    CardTitle,
    ItemName,
    IGPostCard
    // Image
} from '../search.css.js';

// utils, config and assets
import SEARCH_TEXT from '../../../assets/wording/search.json';

const Card = ({ value }) => {
    const { name: { zh, en }, igtoken } = value;
    const igPostUrl = `https://www.instagram.com/p/${igtoken}`;
    // const url = `${igPostUrl}/media/?size=l`;
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
                    color="secondary"
                >
                    {SEARCH_TEXT.button.more}
                </Button>
            </CardTitle>
            {/* <Image url={url} onClick={onClickPost} /> */}
        </IGPostCard>
    );
};
Card.propTypes = {
    value: PropTypes.object.isRequired
};

export default Card;
