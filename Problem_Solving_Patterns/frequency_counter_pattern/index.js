



function same1(firstArray, secondArray){
    //check for array length
    if(arr1.length !== arr2.length){
        return false;
    }
    //loop through both arrays
    for(var i = 0; i < firstArray.length; i++){
        let numberChecked = false
        for(var j = 0; j < secondArray.length; j++){
            if(Number(firstArray[i] * firstArray[i]) == Number(secondArray[j])){
                numberChecked = true;
                secondArray.splice(j, 1);
                break;
            }
        }
        if(!numberChecked){
            return false;
        }
    }
   return true;
}

same1(firstArray, secondArray);
module.export = same1;

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const map = {};
  for(let num of arr1) {
    let square = num ** 2;

    map[square] = (map[square] ?? 0 ) + 1;
  }
  
  for(let num of arr2) {
    if(!map[num]) {
      return false;
    }
  }

  return true;
}

let t1 = performance.now();
console.log(same([1,2,3], [1,4,9]))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = same;

