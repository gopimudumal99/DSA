let x = 10;
console.log(x); // no error 
 
function fun() { 
    "use strict";
    y = 20
    console.log(y) // throw a referenceError y is not definde
}
fun()