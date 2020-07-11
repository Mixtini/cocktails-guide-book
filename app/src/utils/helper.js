export const findExistInTwoArray = (array1, array2) => {
    for (let i = 0; i < array1.length; i += 1) {
        const find = array2.findIndex(elm => elm.toLowerCase() === array1[i].toLowerCase()) > -1
        if (find) return find;
    }
    return false;
};
