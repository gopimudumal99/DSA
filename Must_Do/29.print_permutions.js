// Given an array of distinct integers of size N,
// the task is to generate and print all permutations of the given array.

let arr = [1, 2,3]
let n = 3;  
var res = []
print_Permutations(arr, 0)  //! T.C = O(n*n!) beacuse n! for permutions and n is for retquier time to print n! so O(n*n!)
// !S.C = O(n)

function print_Permutations(arr, current) { 
    if (current == arr.length) { 
        res.push(arr.join(" "))
        //// console.log(arr.join(" "))
        return 
    }
    for (var i = current; i < arr.length; i++) { 
        swap(arr, i, current)
        print_Permutations(arr, current + 1);
        swap(arr,i,current)
    }
}

res.sort()
for (ele of res) { 
    console.log(ele)
}

function swap(arr, a, b) { 
    return [arr[a],arr[b]] = [arr[b],arr[a]]
}