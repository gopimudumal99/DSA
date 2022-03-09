//  find the equilibrium index whose left and right sum are equal
let arr = [-7, 1, 5, 2, -4, 3, 0]
//       lef_sum=-1  ^  right_sum = -1
// ap1 brute force t.c = o(n2) s.c= o(1)
function equilibrium_index(arr) { 
    for (var i=  1; i < arr.length; i++) { 
        let left = 0
        for (var j = 0; j < i; j++) { 
            left+=arr[j]
        }
        let right = 0
        for (var j = i + 1; j <arr.length; j++) { 
            right += arr[j]
        }
        if (arr[left] == arr[right]) { 
            return i;
        }
    }
    return -1
}
console.log(equilibrium_index(arr));

//Ap2 :-> two array teqnique
//      [-7,  1,  5, 2, -4, 3, 0]
// left:[-7, -6, -1, 1, -3, 0, 0]  intial left[0] = arr[0]
//right:[ 0,  7,  6, 1, -1 ,3, 0]  initial right[n-1] = arr[n-1]
// this elem equal   ^ **this index
//t.c = O(n) s.c = O(n)
let arr1 = [-7, 1, 5, 2, -4, 3, 0];
function equilibrium_twoarray(arr) { 
    let left = []
    let right = []
    left[0] = arr[0]
    right[arr.length-1] = arr[arr.length-1]
    for (var i = 1; i < arr.length; i++) { 
        left[i]= left[i-1] +arr[i]
    }
    for (var j = arr.length - 2; j >= 0; j--) { 
        right[j] = right[j+1]+arr[j]
    }
    for (var i = 0; i < arr.length; i++) { 
        if (left[i] == right[i]) { 
            return i
        }
    }
    return -1
}
console.log(equilibrium_twoarray(arr1));

// ap3 :=> OPTIMAL SOLUTION t.c= O(n) s.c=O(1)

function equilibrium_opti(arr) { 
    let left_sum = 0
    let sum = 0
    for (var i = 0; i < arr.length; i++) { 
        sum+=arr[i]
    }
    for (var i = 0; i < arr.length; i++) { 
        sum -= arr[i]
        if (left_sum == sum) { 
            return i
        }
        left_sum+=arr[i]
    }
        return -1
}
console.log(equilibrium_opti(arr));