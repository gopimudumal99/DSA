// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.

let arr = [1, 2, 3, 1, 4, 5];
let k = 3
bruteForce(arr, k);  //! t.c = O(n*k) s.c = O(1)
optimal(arr, k);  // t.c = O(n) s.c = O(k)
function bruteForce(arr,k) { 
   let n = arr.length
    let arrmax =[]
    for (var i = 0; i < n - k + 1; i++) { 
        let max = 0
        for (var j = i; j < i+ k ; j++) { 
            max = Math.max(max,arr[j])
        }
        arrmax.push(max)
    }
    console.log(arrmax)  //[ 3, 3, 4, 5 ]
}

function optimal(arr,k) {
  let n = arr.length;
  let max = [];
  let max_val = 0;
  for (var i = 0; i < k; i++) {
    max_val = Math.max(max_val, arr[i]);
  }
  max.push(max_val);
  for (var i = k; i < n; i++) {
    max_val = Math.max(max_val, arr[i]);
    max.push(max_val);
  }
  console.log(max); //[ 3, 3, 4, 5 ]
}

// find maximum sum of subarray k in arr
let arr1 = [1, 2, 3, 1, 4, 5];
let k1 = 3;
maxSum(arr, k1); 
function maxSum(arr, k1) { 
    let n = arr.length
    let max_sum = 0
    
    //! brute force approch  t.c = O(n*k)  and s.c = O(1)
    /* 
    for (var i = 0; i < n - k + 1; i++) { 
        let sum = 0
        for (var j = i; j < i + k; j++) { 
            sum += arr[j]
        }
        max_sum = Math.max(max_sum,sum)
    }
    console.log(max_sum)
    */
    //! optimiz approach  (fixed window slide) t.c = O(n) & s.c = o(1)
    for (var i = 0; i < k; i++) { 
        max_sum+=arr[i]
    }
    let window_sum = max_sum;
    for (var i = k; i < n; i++) { 
        window_sum += -arr[i - k] + arr[i]
        max_sum = Math.max(max_sum,window_sum)
    }
    console.log("maximum_sum_of_size K: ",max_sum)
}

//?find the largest subbarry whose sum is x
//! this is a variablae window slide
let arr2 = [10, 5, 2, 7, 1, 9]
let x = 15
max_subarray(arr2, x);
function max_subarray(arr,target) { 
    let n = arr.length;
    //! step1:
    let sum = 0; let obj = {}; let max_subarr_len = 0;
    for (var i = 0; i < n; i++) { 
        //!step2: pre-fix-sum
        sum += arr[i]
        //!ckeck this "sum" with "target" sum if equal update max_len = i+1
        if (sum == target) { 
            max_subarr_len = i+1
        }
        //! step3: cheak sum in obj if not then "key = sum and value = index"
        if (obj[sum] == undefined) {
            obj[sum] = i
        }
        //! step4 : check key  "sum - target" present in obj then compare the value i- obj[sum-target] > max_subrr_len
        if(obj[sum-target] !=undefined){ 
            if (i - obj[sum - target] > max_subarr_len) { 
                max_subarr_len = i-obj[sum-target]
            }
        } 
    }
    console.log("maxmum_subarr_length: ",max_subarr_len)
}

// find the longest subarray of size which having sum x1
let arr3 = [10, 5, 2, 7, 1, 9];
let x1 = 15;
long_max_arr(arr3, x1);
function long_max_arr(arr,target) { 
    let n = arr.length;
    let sum = 0; let max_len = 0; let obj = [];
    for (var i = 0; i < n; i++) {
        sum += arr[i]
        if (sum == target) { 
            max_len = i+1
        }
        if (obj[sum] == undefined) { 
            obj[sum] = i
        }
        if (obj[sum - target] != undefined) { 
            if (i-obj[sum - target] > max_len) { 
                max_len =i-obj[sum-target]
            }
        }
    }
    console.log(max_len)
}

// find the longest subString containing unique charecters whithin given string;
// for optimal sol: t.c=o(n) s.c=o(n)
// for buretforce: t.c = O(n3) => generate all subsequence and check the unique char max length
let str = "aabbcdeabb";
 long_subStr(str);
function long_subStr(str) { 
    let n = str.length;
    //! step1: for variable sliding window take hash map
    let max_len_str = 0; let start = 0; let obj = {}
    for (var i = 0; i < n; i++) { 
        let char = str[i]
        if (obj[char] != undefined) { 
            start = Math.max(start,obj[char]+1)
        }
        obj[char] = i;
        max_len_str = Math.max(max_len_str,i-start+1)
    }
    console.log(max_len_str)
}
