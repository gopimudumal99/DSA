//FIND MAX PRODUCT OF SUBARRAY
let arr = [-1, 2, 3, 0, 6, 7]

// AP1:->find all subarrays and product them individully and compare the product which product is max print them s
// for this approach we get O(n^3) T.C &&n )(1) S.C
// for "n" length array how much sub array will produce?? Ans:-> sum of n natual nos.. ie,.., n(n+1)/2
// [1,2,3]  subarrys are :-> l1 [1] [2] [3]
//                           l2 [1,2] [2,3]
//                           l3 [1,2,3]     so total 6 subarray


// explaination: [-1,2,3,0,6,7] here from [-1,2,3] prod is 6 but after 3 we don't no which elem come ,
//  elem may be -ve +ve or zero so we have take prev_max_prod & prev_min_sum to compare with next elem
function maxProdSubarray(arr) { 
    let cur_max_prod = arr[0];
    let cur_min_prod = arr[0]
    let prev_max_prod = arr[0];
    let prev_min_prod = arr[0];
    let res = arr[0]
    for (var i = 0; i < arr.length; i++) { 
        cur_max_prod = Math.max(prev_max_prod * arr[i], prev_min_prod * arr[i], arr[i])
        cur_min_prod = Math.min(prev_max_prod * arr[i], prev_min_prod * arr[i], arr[i])
        res = Math.max(res, cur_max_prod)
        prev_max_prod = cur_max_prod;
        prev_min_prod = cur_min_prod
    }
    return res
}
console.log(maxProdSubarray(arr)); // O/p:42;
