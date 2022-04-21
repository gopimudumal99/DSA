
// find longest palindrome length and substring 
// bruteForce gives t.c = O(n^3) s.c= O(1)

function longPalSub(str){
    let n = str.length
    let maxLength = 1;
    let start = 0
    for(let i = 0; i<n; i++){
      for(let j = i; j<n; j++){
        let flag = 1
        for(let k = 0; k<Math.floor((j-i+1)/2);k++){
          if(str[i+k]!=str[j-k]){
            flag = 0
          }
        }
        if(flag!=0 && (j-i+1)>maxLength){
          start = i;
          maxLength = (j-i+1)
        }
      }
    }
    printSub(str,start,maxLength)
    console.log("max length of palindrome:",maxLength)
  }
  
  longPalSub("forgeeksskeegfor")
  
  function printSub(str,start,end){
    let str1=""
    for(let i = start; i<=end; i++){
      str1 += str[i]
    }
    console.log("palindrome string is:",str1)
  }



  // optimal soluton is a Dp solution

  function maxLenPalSub(str){
      let n = str.length

      // create a table
      let tabel = new Array(n)
      for(let i = 0; i<n; i++){
          tabel[i] = new Array(n)
      }

      // substring length 1 is palidrome itself
      for(let i =0; i<n; i++){
          tabel[i][i] = true;
      }

      // substring length 2
      let start = 0; let maxLength = 1 
      for(let i = 0; i<n;i++){
          if(str[i] == str[i+1]){
              tabel[i][i+1] = true;
              start = i;
              maxLength = 2
          }
      }

      // substring length >2
      for(let k = 3; k<n; k++){
          for(let i = 0; i<n-k+1; i++){
              // end index of substing
              let j = i+k-1
              if(str[i] ==str[j] && tabel[i+1][j-1]){
                  tabel[i][j] =true;
                  if(k>maxLength){
                      maxLength= k
                  }
              }
          }
      }
      console.log("dp sol length",maxLength)
  }

  maxLenPalSub("forgeeksskeegfor")