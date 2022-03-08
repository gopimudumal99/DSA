let arr = [1,2,3]
// for (var i = 0; i < arr.length; i++) { 
//     setTimeout(() => { 
//         console.log(i,arr[i])
//     },i*1000)
// }
// for this output will be:
//3 undefinde
//3 undefined
//3 undefined
//Reason: 1.main reason is scoping here var indicates globla scope
// and 2. setTimeout is comes under async function that mease
// FIX :  replace "var" to "let" beacuse let indicates block scope
// OR

function display(i) {
    // console.log(this) // [1,2,3]
  setTimeout(function() {
    console.log(i, this[i]);
  }.bind(this), i * 100);
}

for (let i = 0; i < arr.length; i++) { 
    display.call(arr,i)
}


function display1(i) {
  // console.log(this) // [1,2,3]
  setTimeout(()=> {
      console.log(i, this[i]);
    },i * 100);
}

for (let i = 0; i < arr.length; i++) {
  display1.call(arr, i);
}

