// Smaller neighbour element

// Given an array A having N positive integers. Find the nearest smaller number for every element such
// that the smaller element is on left side.
// Note - If any element doesn't have any smaller element that it to it's left, print -1 for it.

let arr = [1, 2, 5, 3, 5];
let arr1 = [15, 14, 12, 11, 13];

function smallerNeigbourElem(arr) { 
    let stack = []
    let res = ""
    let top = -1
    for (var i = 0; i < arr.length; i++) { 
        while (top > -1 && stack[top] >= arr[i]) { 
            stack.pop()
            top--
        }
        if (top <= -1) {
            res += -1 + " "
        } else { 
            res+=stack[top]+" "
        }
        stack.push(arr[i])
        top++
    }
    console.log(res)
}
smallerNeigbourElem(arr);

// t.c = O(n)
//space = O(n)
