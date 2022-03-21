// Given an array of N integers.You are allowed to rearrange the element of the array(arr[i]).
// The task is to find the permutation for
//! which we get maximum value of Σ arr[i] * i, where i = 0, 1, 2,…., n – 1.

let arr = [3, 5, 6, 1];
let n = 4;

//ap1 : bruteForce : finding all permations and calculate sum +=arr[i]*i for each one, and compare all the sum which one greater then simply return the permutaion
// bruteForce  t.c = O(n*n!) (n=3 then t.c = 3 X 2 X 1=6)

//ap2: optimal : sort the array and sum+=arr[i]*i and print the arr
//optimal //! T.C = O(nlogn) s.c=O(1)

max_sum_permuta(arr, n);
function max_sum_permuta(arr, n) { 
    console.log(arr.sort().join(" "))
}
