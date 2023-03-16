// Solve sumZero in naive way

// const sumZero = (arr) => {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// Refactor the solution

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === 0) {
      return [arr[left] , arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let t1 = performance.now();
console.log(sumZero([-3, -2, -1, 0, 1, 3]))
let t2 = performance.now();
console.log(`Time Elapse ${(t2 - t1) / 1000} seconds.`)

module.exports = sumZero;