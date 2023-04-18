const averagePair = (arr, target) => {

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;

    if(average === target) {
      return true;
    } else if(average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

module.exports = averagePair;