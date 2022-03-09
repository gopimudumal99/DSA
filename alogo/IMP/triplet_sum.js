// TRIPLETE WHOSE SUM IS TARGET

let arr = [12, 3, 4, 1, 6, 9]
let n = arr.length
let sum = 24

//Ap1:-> Brrute force t.c = O(n^3) & s.c = O(1)
function triplet_sum_brute(arr,n,sum) { 
    for (var i = 0; i <= n - 3; i++) { 
        for (var j = i + 1; j <= n - 2; j++){
            for (var k = j + 1; k <= n - 1; k++) { 
                if (arr[i] + arr[j] + arr[k] == sum) { 
                    console.log(arr[i]+" "+arr[j]+" "+arr[k])
                }
            }
        }
    }
}
(triplet_sum_brute(arr, n, sum));

//sorting + twopointer t.c = O(n2) sc = O(1)
function triplet_sum_sort_twoPointer(arr, n, sum) { 
    let arr1 = arr.sort((a, b) => a - b)
    for (var i = 0; i <=n-3; i++) { 
        let l = i+1
        let r = n - 1
        while (l < r) { 
            let temp = arr1[i]+arr1[l]+arr1[r]
            if (temp === sum) {
                return true
            } else if (temp < sum) {
                l++
            } else { 
                r--
            }
        }
    }
}
console.log(triplet_sum_sort_twoPointer(arr, n, sum));