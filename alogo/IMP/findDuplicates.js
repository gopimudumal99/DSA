// find the duplicates of element in arr
// ************[1<=arr[i]<=n-1]]*****************
// only arr index prest in arre elems
// j = math.abs(arr[i])
let arr = [1, 2, 3, 6, 3, 6, 1];
// j = 1
//arr[i]=-2

function duplicates(arr) {
  for (var i = 0; i < arr.length; i++) {
    let j = Math.abs(arr[i]);

    if (arr[j] >= 0) {
      arr[j] = -arr[j];
    } else {
      console.log(j);
    }
  }
}
duplicates(arr);
