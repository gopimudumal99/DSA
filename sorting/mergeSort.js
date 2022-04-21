// the algorithm uses the recursive function concept with divide and conquer strategy to 
// efficiently sort a given list of elements

// [5, 2, 4, 3, 1]

//! step 1 divided
//    [5, 2, 4]              |            [3, 1]
// [5, 2] | [4]              |           [3] | [1]
// [5] | [2] | [4]           |           [3] | [1]


//! step 2 conquer
// [5] | [2] | [4]           |           [3] | [1]
//     [2,5] | [4]           |            [1, 3]
//       [2, 4, 5]           |             [1, 3]
//                   [1, 2, 3, 4, 5]


// ? step 1: first impliment merge funcion it merge the two arrays

function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
   let res = [...sortedArr, ...left, ...right]
   return res
}


function mergeSort(arr){
    // base case if (arr.length = 1 reutn the arr)
    if(arr.length <=1){
        return arr
    }

    let half = Math.floor(arr.length /2);
    let left = arr.splice(0,half)
    let right = arr
    return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort( [5, 2, 4, 3, 1]))


//The merge sort algorithm has the time complexity of O(logN)
// Auxiliary Space: O(n)
// Algorithmic Paradigm: Divide and Conquer

