function truthCheck(collection, pre) {

    // return collection.every(obj => obj[pre])

    for (let i = 0; i < collection.length; i++) {
        if (!!collection[i][pre]) {
            return true;
        }
    }
    return false;
}