const collectStrings = (obj) => {
    let str = [];
    for(let el in obj) {
        if(typeof obj[el] === 'string') {
            str.push(obj[el]);
        } else if(typeof obj[el] === 'object' && obj[el] !== null) {
            str = str.concat(collectStrings(obj[el]))
        }
    }
    return str;
}

module.exports = collectStrings;