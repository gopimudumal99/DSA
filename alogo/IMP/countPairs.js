// Given an array of integers, and a number ‘sum’, find the number of 
// pairs of integers in the array whose sum is equal to ‘sum’

let arr = [1,5,7,-1,5]; let n = 5; let sum = 6

getPairsCount(arr,n,sum)  // output:3  t.c=O(n^2) s.c=O(1)

function getPairsCount(arr,n,sum){
    let count = 0
    for(var i = 0; i<n; i++)
        for(var j = i+1; j<n; j++)
            if(arr[i]+arr[j] == sum)
                count++
    console.log(count)
}


function getPairsCountOptimal(arr,n,sum){
    var m = new Map()
    var count = 0
    for(var i = 0; i<n; i++){
        if(m.has(sum-arr[i])){
            count+=m.get(sum-arr[i])
        }
        if(m.has(arr[i])){
            m.set(arr[i],m.get(arr[i]+1))
        }else{
            m.set(arr[i],1)
        }
    }
    console.log(count)
}

getPairsCountOptimal(arr,n,sum) // output:3 t.c = O(n) s.c = O(1)