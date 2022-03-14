// Given an array A of N elements that contains elements from 1 to N - 1.
// All elements occur once except one which occurs twice.Find the repeating element.

// t.c = O(n) && s.c = O(1)
let arr = [1, 3, 3, 2, 4];

function findDuplicate(arr) { 
    for (var i = 0; i < arr.length; i++) { 
        let j = Math.abs(arr[i])
        if (arr[j] >= 0) {
            arr[j] = -arr[j]
        } else { 
            console.log(j)
        }
    }
}
findDuplicate(arr);