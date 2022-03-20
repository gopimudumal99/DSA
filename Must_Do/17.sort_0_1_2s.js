// let arr = [0, 1, 2, 0, 1, 2];


// ! Dutch flag National Algorithem
let arr = [0,0,2,1,1,0,2,1,0]
function flagAlgo(arr) { 
    let l = 0; let m = 0; let r = arr.length - 1
    while (m <= r) { 
        switch (arr[m]) { 
            case 0: { 
                swap(arr, m, l)
                l++;
                m++;
                break;
            }
            case 1: {
                m++
                break;
            }
            case 2: { 
                swap(arr, m, r)
                r--
                break;
            }
        }
    }
    console.log(arr)
}

function swap(arr, a, b) { 
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    // return arr
}
flagAlgo(arr);