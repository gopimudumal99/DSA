//? pure fuctions ?
//* pure functions are function in which it reaturns a value and this value is determined only its arguments
//* without any side effects
//! this functions call "n" #of times in "n" of places in an aplication this fuction returns always same value

let arr = []

let impureFun = number => arr.push(number)
console.log(impureFun(6)) // returns 1
console.log(impureFun(6)) // returns 2
console.log(impureFun(6)) // returns 2
console.log(arr) // [6,6,6]

let pureFunc = number => argumentArray => argumentArray.concat([number])
console.log(pureFunc(8)(arr)) //! [6,6,6,8]
console.log(arr) //[6,6,6]

