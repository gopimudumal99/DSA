//TWO ELEMENTS WHOSE SUM IS  CLOSEST SUM TO ZERO
//  THAT MEEANS ______-3___-2___-1___0___1___2___3___
//                               ^       ^   closest sum of zero is -1 or 1 both are correct

let arr = [1, 2, 6, 9, -5, -3];  //consider absolute values

// AP1:-> BRUTE FORCE T.C = O(n2) & s.c = O(1)

function closeToZero(arr) {
    let min_l = 0 
    let min_r  = 1
    let min_sum =arr[min_l]+arr[min_r]
    let sum
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
             sum = arr[0] + arr[j]
            if (Math.abs(sum) < Math.abs(min_sum)) {
                min_sum = sum
                min_l = i;
                min_r = j
            }
        }
    }
    console.log(arr[min_l],arr[min_r])
}
(closeToZero(arr))

//AP2:--> SORTING + TWOPOINTER t.c = O(nlogn) s.c=O(1)
function sortCloseToZero(arr) {
    arr = arr.sort((a, b) => a - b)   //nlogn
    let min_sum = Infinity
    let min_l 
    let min_r
    let l = 0
    let r = arr.length-1
    let sum;
    while (l < r) { 
        sum = arr[l]+arr[r]
        if (Math.abs(sum) < Math.abs(min_sum)) { 
            min_sum = sum
            min_l = l;
            min_r = r;
        }
        if (sum < 0) l++
        else r--
    }
    console.log(arr[min_l],arr[min_r])
}
sortCloseToZero(arr)