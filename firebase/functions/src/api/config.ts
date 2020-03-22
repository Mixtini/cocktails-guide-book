import RECIPE from '../_data_/common.json';
const cors = require('cors')({
    origin: true
});
const { BASE_LIST, ATTACHED_LIST } = RECIPE;

const getBaseList = (request: any, response: any) => {
    console.log(request);
    return cors(request, response, () => {
        response.status(200).send(BASE_LIST);
    });
}

const getAttachedList = (request: any, response: any) => {
    console.log(request);
    return cors(request, response, () => {
        response.status(200).send(ATTACHED_LIST);
    });
}

const commonApi = {
    getBaseList,
    getAttachedList
}

export default commonApi;