// Given a sorted array of N integers and you need to find if Key (K) exists in the array
// or not, write an efficient code to do this.
//! Note: Try to do it by implementing Binary Search both iteratively and recursively

//N = 4, arr[] = { 1, 3, 4, 7 }, K = 3

let arr = [1, 3, 4, 7]
let n = 4;
let k = 4;

console.log(BS(arr, n, k));  // itretive function t.c = O(logn)
console.log(BSR(arr, k, 0, n - 1)); // recursive function t.c = O(logn)


function BS(arr, n, k) { 
    let low = 0;
    let high = n-1;
    while (low <= high) { 
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == k) {
            return true
        }
        else if (arr[mid] > k) {
            high = mid-1
        } else { 
            low = mid+1
        }
    }
    return false
}


function BSR(arr, k, low, high,) { 
    if (high >= low) { 
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] == k) return true
        else if (arr[mid] > k) {
           return BSR(arr, k, low, mid - 1);
        } else { 
             return BSR(arr, k, mid+1, high);
        }
    }
    return false
}