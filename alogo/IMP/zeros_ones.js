let arr = [0, 1, 0, 1, 1, 1, 0, 1, 0]  //O/P:[0,0,0,0,1,1,1,1,1]
//ap1 burute force  t.c = O(n) && s.c = (1)
function zeros_ones_brute(arr) { 
    let zc = 0
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] === 0) {
            zc++
        }
    }
    for (var i = 0; i < zc; i++) { 
        arr[i] = 0
    }
    for (var i = zc; i <arr.length; i++) {
          arr[i] = 1;
    }
    console.log(arr)
}
zeros_ones_brute(arr);

// two pointer menthod
// [0, 1, 0, 1, 1, 1, 0, 1, 0]
// i^                       ^j
// incerase i untill get 1 && decrease j untill get zero and swap them
function pointer_zeros_ones(arr) { 
    let l = 0
    let r = arr.length - 1
    while (l < r) { 
        while (arr[l] == 0 && l <r ) { 
            l++
        }
        while (arr[r] == 1 && r > l) { 
            r--
        }
        // if (l < r) { 
           let temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
        // }
    }
    console.log(arr)
}
 pointer_zeros_ones(arr);