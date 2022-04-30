// Given an array of n elements that contains elements from 0 to n-1, 
// with any of these numbers appearing any number of times. 
// Find these repeating numbers in O(n) and using only constant memory space.


let arr = [1, 2, 3, 4, 5, 6, 3];
let n = arr.length;
console.log(findDuplicates(arr,n))

function findDuplicates(arr,n){
    if(n<=1){
        return -1
    }

    let slow = arr[0],fast = arr[arr[0]]
    while(slow !=fast){
        slow = arr[slow]  
        fast = arr[arr[fast]]
    }

    fast = 0;
    while(slow!=fast){
        slow = arr[slow]
        fast = arr[fast]
    }
    return slow

}