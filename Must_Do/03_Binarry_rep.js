// Write a program to print Binary representation of a given number.
let N = 7;


  // This function converts a number into its binary representation.

 function binaryRepresentation(n) {
    var arr = Array(32).fill(0);
    // Filling the entire arrays with a default value of 0.
    var len = arr.length - 1;
    // let bin =''
    while (n > 0) {
      var temp = n % 2;
      arr[len] = temp;
      len--;
    // bin+=temp
    n = parseInt(n / 2);
    }
    var ans = arr.join("")
    return ans;
    //  return bin
  }
console.log(binaryRepresentation(12));
 
// 00000000000000000000000000000111;
// 00000000000000000000000000000111;