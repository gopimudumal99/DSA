// Frequency in Sorted Array

let arr = [1, 3, 3, 4, 5, 6, 7, 7, 8, 9];
let n = 10;
let target = 7
bsLower(arr, n, target); 
bsupper(arr, n, target);
function bsLower(arr, n, k) { 
    let ind = -1
    let low = 0; let high = n - 1;
    while (low <= high) { 
        let mid = low+Math.floor((high-low)/2)
        if (arr[mid] == k) {
            ind = mid;
            high = mid - 1
        } else if (arr[mid] > k) {
            high = mid - 1;
        } else { 
            low = mid +1
        }
    }
    console.log(ind)
}

function bsupper(arr, n, k) {
  let ind = -1;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      ind = mid;
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(ind);
}