// Divide two integers without using multiplication, division and mod operator

let a = 10 
let b = 3
// outpt : 3
function division(dividend, divisor) { 
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let quotient = 0
    while (dividend >= divisor) { 
        dividend -= divisor
        quotient++
    }
    if (sign == -1) quotient = - quotient
    return quotient
}
 console.log(division(a, b));