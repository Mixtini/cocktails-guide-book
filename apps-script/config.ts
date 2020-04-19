const COMMON = {
    RETURN_FORMAT: {
        data: '',
        info: ''
    }
};

const RECIPE = {
    BASE_LIST: [
        { key: 'all', name: 'All'},
        { key: 'vodka', name: 'Vodka 伏特加'},
        { key: 'gin', name: 'Gin 琴酒'},
        { key: 'rum', name: 'Rum 蘭姆酒'},
        { key: 'tequila', name: 'Tequila 龍舌蘭'},
        { key: 'whiskey', name: 'Whiskey 威士忌'}
    ],
    ATTACHED_LIST: [
        { key: 'all', name: 'All'},
        { key: 'coke', name: 'Coke 可樂'},
        { key: 'sprite', name: 'Sprite 雪碧'},
        { key: 'bubble', name: 'Bubble 氣泡水'},
        { key: 'grapefruit', name: 'Grapefruit 葡萄柚'},
        { key: 'cranberry', name: 'Cranberry 蔓越梅'},
        { key: 'orange', name: 'Orange 柳橙'},
        { key: 'Pineapple', name: 'pineapple 鳳梨'},
        { key: 'kiwi', name: 'Kiwi 奇異果'}
    ]
};

const CONFIG = {
    COMMON,
    RECIPE
};

export default CONFIG;
