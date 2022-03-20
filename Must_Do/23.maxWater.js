let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxWater(arr) { 
    let left = 0;
    let right = arr.length-1;
    let max_water = 0;
    
    while (left < right) { 
         max_water =Math.max(max_water,Math.min(arr[left], arr[right])*(right-left))
        if (arr[left] < arr[right]) {
            left++
        } else { 
            right--
        }
    }
  console.log(max_water)
}
maxWater(arr);