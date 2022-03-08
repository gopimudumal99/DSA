// Search a given elem in a given matrix in which ***[row-wise sorted] && [col-wise sorted]***

// explain: i take two pointers and i & j  i = 0 && j = n-1  mat[i][j] = 40
//  if(mat[i][j] >target) j--
//  if(mat[i][j] <target) i++
//  if both equal print the position
let mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
let target = 29;

function searchMatSort(mat, target) { 
    let i = 0
    let j = mat.length - 1
    while (i < mat.length && j >= 0) { 
        if (mat[i][j] === target) {
            return [i+1, j+1]
        } else if (mat[i][j] > target) {
            j--
        } else { 
            i++
        } 
    }
    return "not found"
}
console.log(searchMatSort(mat, target))