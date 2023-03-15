


function same(firstArray, secondArray){
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

same(firstArray, secondArray);