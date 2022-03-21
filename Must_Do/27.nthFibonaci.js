// Nth Fibonacci
//!Given a positive integer N. Find the Nth fibonacci number.
// NOTE : In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, 
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 
// The beginning of the sequence is thus[0, 1, 2, 3, 5, 8, 13, 21, 34,...]
let n = 4
 
console.log(fib(n))  //! recursive fib t.c=O(2^n) 
console.log(fibOpti(n)) //! t.c = O(n) s.c = O(n)

//? recursive
function fib(n) { 
    if (n == 0 || n == 1) return n;
    return fib(n-1)+fib(n-2)
}

//? optimal
function fibOpti(n, memo = { 0: 0, 1: 1, 2: 1 }) { 
    if (memo[n] != undefined) return memo[n]
    for (var i = 3; i < n; i++) { 
        memo[n] = i-1+i-2
    }
    return memo[n]
}