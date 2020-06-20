import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({
    origin: true
});

const getDatafromDatabase = (path: string) => {
    const db = admin.database();
    return db.ref(path).once('value');
}

// get config base list
export const getBaseList = functions.region('asia-east2').https.onRequest((req: any, res: any) => {
    getDatafromDatabase('config/baselist')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});
export const getAttachedList = functions.region('asia-east2').https.onRequest((req: any, res: any) => {
    getDatafromDatabase('config/attached')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});

// get overpartylab recipe
export const getCocktailsRecipes = functions.region('asia-east2').https.onRequest((req: any, res: any) => {
    getDatafromDatabase('overpartylab-recipes')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});

// get overpartylab cocktails
export const getCocktails = functions.region('asia-east2').https.onRequest((req: any, res: any) => {
    getDatafromDatabase('overpartylab-cocktails')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});

// for testing API
export const testApi = functions.region('asia-east2').https.onRequest((req: any, res: any) => {
    return cors(req, res, () => {
        res.status(200).send('API is running');
    });
});

export const saveSearchData = functions.region('asia-east2')
    .https.onRequest((req: any, res: any) => {
        const { body } = req;
        const { userData, value, signature, timestamp } = body;
        const user = { userData, value, signature, timestamp };
        console.log(user, '-user');
        return admin.database().ref('user-search').push(user).then(() => {
            return cors(req, res, () => {
                res.status(200).send({ code: 0, info: 'save data successfully' });
            });
        });
});
