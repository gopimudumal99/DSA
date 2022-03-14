// Bubble sort algorithem
//t.c = O(n^2) s.c(O^1)
// input: N = 5
// A : 5 1 6 3 7

function bubbleSort(arr, n) { 
    for (var i = 0; i < n; i++) { 
        for (var j = 0; j < n-i-1; j++) { 
            if (arr[j] > arr[j + 1]) { 
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}
bubbleSort([5,1,6,3,7],5)