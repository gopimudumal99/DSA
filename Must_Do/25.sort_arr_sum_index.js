// ?Given a sorted array of integers nums and an integer K,
// ! return indices of the two numbers such that they add up to K.
//* array = [2, 7, 11, 15]; K = 9;   output:[0, 1];
let arr = [2,7,11,15,]; k = 13;
 sumTwo(arr, k); 
//for burteForce t.c = O(n2) s.c = O(1)
//for optimal solution = O(n) s.c = O(1)
function sumTwo(arr, k) { 
    // for (var i = 0; i < arr.length; i++) { 
    //     for (var j =i+1; j < arr.length; j++) { 
    //         if (arr[i] + arr[j] == k) { 
    //             console.log([i,j])
    //         }
    //     }
    // }
    let i = 0; let j = arr.length - 1;
    while (i < j) { 
        if (arr[i] + arr[j] == k) { 
            console.log([i, j])
            return
        }
        if (arr[i] + arr[j] > k) {
            j--
        } else { 
            i++
        }
    }
    console.log("no index present", -1)
    return
}
