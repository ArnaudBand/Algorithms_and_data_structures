const capitalizeFirst = (arr) => {
    // Base case: return an empty arr if the arr.length == 0
    if(arr.length === 0) return [];

    // Extrad the first string of an arr
    let firstString = arr[0];

    // Captilaze the first string
    let capitalizeString = firstString.charAt(0).toUpperCase() + firstString.slice(1);
    // console.log('capitalize', capitalizeString);

    // Recursively call capitalizeFirst on the remaining strings in the array
    let restOfArr = arr.slice(1);
    let capitalizeArr = capitalizeFirst(restOfArr);
    // console.log(capitalizeArr);

    // Return the capitalized string concatenated with the capitalized rest of the array
    return [capitalizeString, ...capitalizeArr];
    
}

// capitalizeFirst(['hello'])
console.log(capitalizeFirst(['car','taco','banana'])); 

module.exports = capitalizeFirst;