import RECIPE from '../_data_/common.json';

const { BASE_LIST, ATTACHED_LIST } = RECIPE;

const getBaseList = (request: any, response: any) => {
    console.log(request);
    response.send(BASE_LIST);
}

const getAttachedList = (request: any, response: any) => {
    console.log(request);
    response.send(ATTACHED_LIST);
}

const commonApi = {
    getBaseList,
    getAttachedList
}

export default commonApi;