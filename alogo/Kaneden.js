//LONGEST SUBARRAY SUM PROBLEM

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = arr.length;

function maxLenSub(arr, n) {
    let max_sum = -Infinity;
    let cur_sum = 0;
  for (var i = 0; i < n; i++) {
      cur_sum += arr[i];
      
  if (cur_sum > max_sum) {
      max_sum = cur_sum;
    }
  if (cur_sum < 0) {
      cur_sum = 0;
    }
  }
  return max_sum;
}
console.log(maxLenSub(arr, n));
