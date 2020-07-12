import { COMMON } from '../config/common';

const { API_SERVICE_HOST } = COMMON;

// fetch data
export const sendRequest = (api, option = { method: 'GET' }) => {
    const API_PATH = `https://${api}`;
    return new Promise((resolve, reject) => {
        fetch(API_PATH, option).then((response) => {
            if (response.status === 200 || response.status === 204) {
                response.json().then((rsp) => {
                    resolve(rsp);
                }).catch((err) => {
                    console.log('Not a json resp body', err);
                    resolve('Not a json resp body');
                });
            } else {
                reject('unexpect error');
            }          
        }, (error) => {
            console.log('reject');
            reject(error);
        });
    });
};

export const Api = {
    getBaseList: `${API_SERVICE_HOST}/getBaseList`,
    getAttachedList: `${API_SERVICE_HOST}/getAttachedList`,
    getCocktails: `${API_SERVICE_HOST}/getCocktails`,
    saveSearchData: `${API_SERVICE_HOST}/saveSearchData`,
};