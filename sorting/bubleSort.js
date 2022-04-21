let arr = [1,4,5,2,1,3,5];
let n = arr.length;

function bubbleSort(arr,n){
    for(var i = 0; i<n; i++){
        for(var j = 0; j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}
bubbleSort(arr,n)

// t.c = O(n^2)
// s.c = O(1)
