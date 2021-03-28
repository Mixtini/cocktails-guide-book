import React from 'react';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

export const COMMON = {
    API_PREFIX: 'https://',
    API_SERVICE_HOST: 'raw.githubusercontent.com/over-party-lab/cocktails-data-storage/master',
    VERSION: process.env.APP_VERSION
};

export const STYLE = {
    MIN_WIDTH: 320,
    PADDING: 5
}

export const LINK = {
    FACEBOOK: 'https://www.facebook.com/Mixtini-Co-103665374941599',
    INSTAGRAM: 'https://www.instagram.com/mixtini.co/',
    MEDIUM: 'https://medium.com/@overpartylab',
    GITHUB: 'https://github.com/overpartylab/cocktails-guide-book'
};

export const ROUTE = {
    SEARCH: {
        key: 'search',
        path: '/search',
        display: '今晚喝什麼？',
        icon: <SearchTwoToneIcon />,
        release: true
    },
    ALCOHOL_LIST: {
        key: 'alcoholList',
        path: '/alcoholList',
        display: '找瓶適合你的酒',
        icon: <LocalBarTwoToneIcon />,
        release: false
    },
    CONTACT: {
        key: 'contact',
        path: '/contact',
        display: '聯絡我們',
        icon: <ContactMailTwoToneIcon />,
        release: true
    }
};
