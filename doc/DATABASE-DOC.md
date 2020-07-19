# OverPartyLab Database Design

## Intro

We are using Github static file as our database. All the file are in the databse folder(master branch).

## How to contribute
1. Create a update branch
2. Add data or update keywords
3. Send a pull request

## Table Schema

### ingredient

```
database/ingredient.json
```

The ingredients list will separate in five types. The content is key-value object type.
|Type       |Content|
|-----------|-------|
|base       |基酒    |
|liqueur    |其他酒類|
|attached   |副材料  |
|homemade   |自製材料|
|bubble_tea |手搖飲料|

### cocktails

```
database/cocktails.json
```

|Attribute  |Type  |Content|
|-----------|------|-------|
|name       |object| zh: 中文名稱; en: 英文名稱|
|key        |array | 使用調酒英文名當作 key，多單字使用 `-` 隔開，ex:`"long-island-iced-tea"` |
|keys       |array | 任何想要被搜索到的關鍵字| 
|signature  |bool  | 是不是 overpartylab 的 signature|
|igtoken    |string| ig url 的 key |

Example:
```json
{
    "igtoken": "BuGcFpgFU2C",
    "key": "cosmopolitan",
    "keys": ["柯夢波丹", "Cosmopolitan", "伏特加", "vodka", "君度", "cointreau", "甜的", "妹酒", "短飲", "果香", "檸檬", "lemon", "cranberry", "蔓越梅"],
    "name": {
        "en": "Cosmopolitan",
        "zh": "柯夢波丹"
    },
    "signature": false
},
{
    "igtoken": "BuLoM1ClP6G",
    "key": "mojito",
    "keys": ["莫西多", "Mojito", "蘭姆酒", "rum", "甜的", "清爽", "薄荷", "雪碧", "檸檬", "長飲"],
    "name": {
        "en": "Mojito",
        "zh": "莫西多"
    },
    "signature": false
},
```

### recipes

> TODO

OverPartyLab recipes

使用調酒英文名當作 key，多單字使用 ```-``` 隔開，ex: ```"long-island-iced-tea"```

|Attribute  |Type  |Content|
|-----------|------|-------|
|name       |object| zh: 中文名稱; en: 英文名稱|
|recipe     |array | ex: { "ingr": "vodka", "vol": "15" }|
|history    |object| zh: 中文歷史; en: 英文歷史|
|preparation|object| zh: 中文做法描述; en: 英文做法描述|
|tips       |object| zh: 中文tip; en: 英文tip|
|keys       |array | 任何想要被搜索到的關鍵字(原料除外)| 
|image      |string| google 相簿 url|
|igtoken    |string| ig url 的 key |

Example:
```json
{
    "history": {
        "en": "Robert Rosebud Butt claims to have invented the Long Island Iced Tea as an entry in a contest to create a new mixed drink with triple sec in 1972 while he worked at the Oak Beach Inn on Long Island, New York.",
        "zh": "據說在1972年，由長島橡樹灘客棧（Oak Beach Inn）的酒保發明了這種以四種基酒混製出來的飲料。"
    },
    "igtoken": "Bt_DxgkFEF9",
    "key": "long_island_iced_tea",
    "keys": [],
    "name": {
        "en": "Long Island Iced Tea",
        "zh": "長島冰茶"
    },
    "preparation": {
        "en": "Add all ingredients into cocktail shaker filled with ice. Shake it until chilled, then pour into glass and full up with coke.",
        "zh": "將所有材料放入雪克杯中，搖至雪克杯微冰。取長飲杯置入冰塊，倒入混合過後的材料後再用可樂倒滿。"
    },
    "recipe": [
        {
            "ingr": "vodka",
            "vol": "30"
        },
        {
            "ingr": "gin",
            "vol": "30"
        },
        {
            "ingr": "white_rum",
            "vol": "30"
        },
        {
            "ingr": "cointreau",
            "vol": "30"
        },
        {
            "ingr": "tequila",
            "vol": "10"
        },
        {
            "ingr": "lemon",
            "vol": "15"
        },
        {
            "ingr": "orange",
            "vol": "60"
        },
        {
            "ingr": "coke",
            "vol": "適量"
        }
    ],
    "tips": {
        "en": "",
        "zh": ""
    }
}
}
```



