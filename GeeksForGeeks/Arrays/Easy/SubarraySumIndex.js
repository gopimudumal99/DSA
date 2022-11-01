// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

// In case of multiple subarray's, return the subarray which comes first on moving from left to right.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 10;
let s = 15;

const FindSubArraySumIndex = (arr, n, s) => {
  let start = 0;
  let currentSum = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    // if sum exceeds the given sum then minus increase start
    while (currentSum > s && start < i - 1) {
      currentSum = currentSum - arr[start];
      start++;
    }
    if (currentSum == s) {
      return [start, i];
    }
    if (i < n) {
      currentSum = currentSum + arr[i];
    }
  }
  return -1;
};

console.log(FindSubArraySumIndex(arr, n, s));

// T.C = O(N) && S.C = O(1) WindowSize approach