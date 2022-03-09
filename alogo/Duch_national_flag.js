// important problem
// ZERO'S, ONE'S AND TWO'S
let arr = [1,0,0,1,2,0,2,1]
function threes(arr) {
    let l = 0
    let r = arr.length-1
    let m = 0
    while (m <= r) { 
        if (arr[m] == 0) {
            swap(arr, l, m)
            l++
            m++
        } else if (arr[m] == 1) {
            swap(arr, m, r)
            r--
        } else { 
            m++
        }
    }
    console.log(arr)
}
function swap(arr, first, second) { 
    [arr[first],arr[second]] = [arr[second],arr[first]]
}

threes(arr);