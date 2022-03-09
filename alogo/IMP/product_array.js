// solve without division operator
// product of array expect there index
let arr = [10, 3, 5, 6, 2] // o/p:->[180,600,360,300,900]
  
//ap1 bruetforce  //t.c = O(n2) s.c=O(1)
function produBrute(arr) { 
    var prod = []
    for (var i = 0; i < arr.length; i++) { 
        let temp = 1
        for (var j = 0; j < arr.length; j++) { 
            if (i != j) { 
                temp*=arr[j]
            }
        }
        prod[i] = temp 
    }
    console.log(prod)
}
produBrute(arr); 


//AP2: Two array
//  arr = [10,  3,  5,  6,   2];
// left = [1,  10,  30, 150, 900]
//right = [180,  60, 12, 2,  1]
//o/p [180,600,360,304,900]
//t.c= O(n2) s.c=O(n)

function twoArrayProd(arr) { 
    let left = []
    left [0] =1
    let right = []
    right[arr.length-1] = 1
    for (var i = 1; i < arr.length; i++) { 
        left[i] = left[i-1]*arr[i-1]
    }
    for (var j = arr.length - 2; j >= 0; j--) { 
        right[j] = right[j+1] *arr[j+1]
    }
    for (var i = 0; i < arr.length; i++) { 
        arr[i] = left[i]*right[i]
    }
    console.log(arr)
}
twoArrayProd(arr);