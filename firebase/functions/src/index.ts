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
export const getBaseList = functions.https.onRequest((req: any, res: any) => {
    getDatafromDatabase('config/baselist')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});
export const getAttachedList = functions.https.onRequest((req: any, res: any) => {
    getDatafromDatabase('config/attached')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
});

// get overpartylab recipe
export const getCocktailsRecipes = functions.https.onRequest((req: any, res: any) => {
    // console.log(req.query, 'req.query');
    // const { name } = req.query;
    getDatafromDatabase('overpartylab-recipes')
    .then((snap: any) => {
        return cors(req, res, () => {
            res.status(200).send(snap);
        });
    })
    // .then((snap: any) => {
    //     if (name) {
    //         console.log(snap, '--snap');
    //         const values = Object.values(snap);
    //         console.log(values, '--values');
    //         const filter = values.filter((e: any) => { 
    //             console.log(e, '--e');
    //             return (e.keys.findIndex(name) > -1)
    //         });
    //         return cors(req, res, () => {
    //             res.status(200).send(filter);
    //         });
    //     } else {
    //         return cors(req, res, () => {
    //             res.status(200).send(snap);
    //         });
    //     }
    // })
});

// for testing API
export const testApi = functions.https.onRequest((req: any, res: any) => {
    return cors(req, res, () => {
        res.status(200).send('API is running');
    });
});