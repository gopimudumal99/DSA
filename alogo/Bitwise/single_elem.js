// expect one elem all are twice
// find the onces elem in the array  
let arr = [1, 1, 3, 5, 6, 7, 3, 5, 4, 6, 7];
// o/p:4
function ones(arr) { 
    let xor = 0
    for (var i = 0; i < arr.length; i++) { 
        xor^=arr[i]
    }
    console.log(xor)
}
ones(arr)
