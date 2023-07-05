const nestedEvenSum = (obj) => {
    let sum = 0;

    for(let key in obj) {
        if(typeOf obj[key] === 'object' && obj[key] !== null) {
            return sum+= nestedEvenSum(obj[key]); // recurcively call the nested object for the sum
        } else if(typeOf obj[key] === 'number' && obj[key] % 2 === 0) {
            sum+= obj[key]; // Add the even numbers to the sum
        }
    }
}