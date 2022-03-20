//  TRAPPING RAIN WATER

let arr = [1, 0, 2, 0, 1, 0, 3, 1, 0, 2];
// let arr =[1, 8, 6, 2, 5, 4, 8, 3, 7];
             // ^  ^  ^  ^  ^  ^  ^  ^
//step 1 : not consider end element beacuse before el we don't store water so
// step 1 : check left max val and check right max val
// step 3 : comapre lef and right val and take it out of minumum of them i,e.., min(left,right)-peresent elem

//@ap1 bruteForce and t.c = O(n2) and s.c = O(n)
function tapWater(arr) {
    let water =0
    for (var i = 1; i < arr.length - 1; i++) {   //step1
        let left = arr[i]
        for (var j = 0; j < i; j++) { 
            left= Math.max(left,arr[j]) 
        }
        let right = arr[i]
        for (var j = i+1; j < arr.length; j++) { 
            right = Math.max(right,arr[j])
        }

        water += Math.min(left, right) - arr[i]
    }
    console.log(water)
}
tapWater(arr)

//@ap2 two array method  t.c = O(n) && s.c=O(n) 
 
function tapWaterArr(arr) { 
    let left = []
    left[0] = arr[0]
    for (var i = 1; i < arr.length; i++) { 
        left[i] = Math.max(arr[i],left[i-1])
    }
    let right = []
    right[arr.length-1] = arr[arr.length-1]
    for (var i = arr.length - 2; i >= 0; i--) { 
        right[i] = Math.max(arr[i],right[i+1])
    }
    let water = 0
    for (var i = 0; i < arr.length; i++) { 
        water+=Math.min(left[i],right[i]) - arr[i]
    } 
    console.log(water)
}
tapWaterArr(arr);




