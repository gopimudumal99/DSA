let n = 10;
let m = 6
console.log(gcd(n, m))

function gcd(a, b) { 
    if (a == 0) return b;
    return gcd(b%a,a)
}
//! t.c = O(log(max(a,b)))
//s.c = O(1)