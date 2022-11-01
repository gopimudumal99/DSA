// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

let N = 5; // last no.
let arr = [1, 2, 3, 5];

const MissingNumber = (arr, n) => {
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    sum = sum - arr[i];
  }

  return sum;
};

console.log(MissingNumber(arr, N));
// T.C = O(N) && S.C = O(1)
