//! 1.
// printName ("sonali")

// var printName;

// function printName(name) {
//   console.log('hello',name)
// }

// var printName = function(name){
//     console.log('hey', name)
// }

// ! 2.
// const arr = [1, 2, 3, 4]
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log("index: "+ i + ', element: '+ arr[i])
//     },3000)
// }

//! 3.
// function getName() {
//     var status = true;
//     if (status == true) {
//         var name = "masai"
//     }
//     console.log(name)
// }
// getName()

//! 4.
// function cont(x) {
//     var y = x * 10
//     function val(z) {
//         console.log(x,y,z)
//     }
//     val(y*5)
// }
// cont(3)
//! 5.
// const str = "masai"
// const {length} = str
// console.log(length)
// !6.
// "use strict";
// function name(){
//     var name = "masai"
//     console.log(this.name)
// }
// function greet() {
//     console.log("hello")
// }

// var arr = [{ name: 'Nrupul' }, { name: 'Aman' }, { name: 'albert' }]

// for (var i = 0; i < arr.length; i++) {
//     setTimeout(name.bind(arr[i]), 0);
//     setTimeout(greet(),0)
// }

//! 7.
// function getName() {
//     name = "albert"
// }
// getName()
// console.log(name)

//! 8.
// var arr = new Array(5).fill(0).map(function (a, b) { return b + 1 })
// console.log(arr)
//! 9.
// let a = "m"
// let b = "c"
// const person = { a, b }
// console.log(person)


// const email ="hi"
// email = "jd"

//!10.
// console.log(name)
// name = "masai"
// var name;

//!11
// "use strict";
// var name = 'ajay'

// function printDetails() {
//     console.log(this.name)
// }

// var person = {
//     name : "Haren",
//     company: 'masai',
//     print : printDetails
// }
// person.print()

//!12
// arr = ['a', 'b', 'c', 'd']
// const func = ([f, ...r]) => r.reduce((a, c) => a + c) + f
// console.log(func(arr))

//!13.
// const isAuth
// console.log(isAuth)  //* syntax error

//!14
// for (var i = 0; i <= 5; i++) {
//     setTimeout(function asyncronous() {
//         console.log(i)
//     },i*100)
// }
//!15
// name = "masai"
// var name
// console.log(name)
