function stringifyNumbers(obj) {
    let newobj = {};

    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            newobj[key] = obj[key].toString();
        } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newobj[key] = stringifyNumbers(obj[key]);
        } else {
            newobj[key] = obj[key];
        }
    }
    return newobj
}

module.exports = stringifyNumbers;