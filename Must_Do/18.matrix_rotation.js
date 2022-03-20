let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = arr.length;
fun(arr, n);
function fun(arr, n) { 
    for (var i = 0; i < Math.floor(n / 2); i++) { 
        for (var j = i; j < n - i - 1; j++) { 
            let temp = arr[i][j];
            arr[i][j] = arr[j][n - 1 - i];   // ! imp line this
            arr[j][n - 1 - i] = arr[n - 1 - i][n - j - 1];
            arr[n - i - 1][n - j - 1] = arr[n - j - 1][i];
            arr[n - j - 1][i] = temp;
        }
    }
    console.log(arr)
}

// output [ [3, 6, 9],
//          [2, 5, 8],
//          [1, 4, 7] ]

// ! t.c = O(n^2)
//! s.c = O(1)

// ? step1: matrix --> transpone matrix
// ? step2: transpone matrix reverse them

// for (var i = 0; i < n; i++) { 
//     for (var j = 0; j < n; j++) { 
//         swap(arr[i][j],arr[j][i])
//     }
// }
// console.log(arr)
// function swap(a, b) { 
//     let temp = a;
//     a = b;
//     b = temp
// }