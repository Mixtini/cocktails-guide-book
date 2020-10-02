import React from 'react';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

export const COMMON = {
    API_PREFIX: 'https://',
    API_SERVICE_HOST: 'raw.githubusercontent.com/overpartylab/cocktails-guide-book/master/database/',
    VERSION: process.env.APP_VERSION
};

export const STYLE = {
    MIN_WIDTH: 320,
    PADDING: 5
}

export const LINK = {
    FACEBOOK: 'https://www.facebook.com/over.party.lab/',
    INSTAGRAM: 'https://www.instagram.com/over.party.lab/',
    MEDIUM: 'https://medium.com/@overpartylab',
    GITHUB: 'https://github.com/overpartylab/cocktails-guide-book'
};

export const ROUTE = {
    SEARCH: {
        key: 'search',
        path: '/search',
        display: 'Search Cocktails',
        icon: <SearchTwoToneIcon />,
        release: true
    },
    ALCOHOL_LIST: {
        key: 'alcoholList',
        path: '/alcoholList',
        display: 'Find your alcohol',
        icon: <LocalBarTwoToneIcon />,
        release: true
    },
    CONTACT: {
        key: 'contact',
        path: '/contact',
        display: 'Contact Us',
        icon: <ContactMailTwoToneIcon />,
        release: true
    }
};
