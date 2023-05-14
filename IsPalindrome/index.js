const isPalindrome = (str) => {
    if (str.length <= 1) {
        // return true when str is empty or has 1 string
        return true;
    } else if(str[0] === str.slice(-1)) {
        // Check if has the same letter
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

// console.log(isPalindrome('hello'));

module.exports = isPalindrome;