# OverPartyLab Database Design

## Intro

We are using Firebase Realtime Database, the file ```cocktails-guide-api-service-export.json``` is the snapshot for the databse.

## How to contribute
1. create a temp branch
2. add data
3. update database by using script/update-db.sh
4. merge branch back to master (no PR needed)

## Table Schema

### config

The ingredients list will separate in five types. The content is key-value object type.
|Type       |Content|
|-----------|-------|
|base       |基酒    |
|liqueur    |其他酒類|
|attached   |副材料  |
|homemade   |自製材料|
|bubble_tea |手搖飲料|

### overpartylab-recipes

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
    "cosmopolitan": {
        "name": {
            "zh": "柯夢波丹",
            "en": "Cosmopolitan"
        },
        "recipe": [
            { "ingr": "vodka", "vol": "15" },
            { "ingr": "cointreau", "vol": "15" },
            { "ingr": "lemon", "vol": "7" },
            { "ingr": "cranberry", "vol": "7" }
        ],
        "preparation": "先將雞尾酒杯冰杯，並把所有材料放入雪克杯中，搖至雪克杯微冰後，倒入雞尾酒杯中並加上裝飾。",
        "tips": null,
        "keys": ["柯夢波丹", "Cosmopolitan", "甜的", "妹酒"],
        "image": ""
    }
}
```



