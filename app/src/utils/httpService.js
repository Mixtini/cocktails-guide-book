import { COMMON } from '../config/common';

const { API_SERVICE_HOST, API_KEY } = COMMON;
const API_PATH = `${API_SERVICE_HOST}${API_KEY}/exec`;

// fetch data
export const sendRequest = (api, resolve, reject) => {
    return new Promise((resolve, reject) => {
        fetch(api).then((response) => {
            console.log(response.status);
            if (response.status === 200 || response.status === 204) {
                response.json().then((rsp) => {
                    resolve(rsp.data);
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
    getRecipeCriteriaList: `${API_PATH}?method=getRecipeCriteriaList`
};