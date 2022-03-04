// Moore's voting algo

let arr = [1, 1, 5, 2, 2, 4, 1, 3, 3, 1, 5, 3, 1, 4, 1]; // we need to find which value repeted more
// 1->6 5->2 2->2 4->2
// 1@:--> Brute Force
//  max, count,  i run a tow  loops  entire arr  checking arr[i] === arr[j] increase count if count>max then,max = count,count = 0
// T.C = O(n^2) :-nested loop && S.C = O(1) :- no extra space used
function bruteForce(arr) {
  let max = 0;
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    let count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
      if (count > max) {
        max = count;
        index = i;
      }
    }
  }
  console.log(arr[index]);
}
bruteForce(arr);

// 2@ 2-pointer approach  {sort the arr + 2-poindtrer} nlogn || n ==> T.C = O(nlogn) && S.C:- O(1)
function pointer2(arr) {
  let max = 0;
  let count = 0;
  let index = 0;
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = i + 1;
  while (i < j && j < arr.length) {
    if (arr[i] === arr[j]) {
      count++;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
      index = i;
    }
    i++;
    j++;
  }
  console.log(arr[index]);
}
pointer2(arr);

// [1,1,1,2,2,3]
//            ^ ^
// c=0 max = 2; index = 1;  i++ j++

// is this ok for that space complisity increase for you because i think like that i am using key-value pare
//3@-> Key-value pair  // T.C O(n) && S.C(n)
var obj = {};
for (var i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] = obj[arr[i]] + 1;
  }
}
let values = Object.values(obj);
let keys = Object.keys(obj);
let max = 0;
let index = 0;
for (var i = 0; i < values.length; i++) {
  if (values > max) {
    max = values;
    index = i;
  }
}
console.log(+keys[index]);

// ***************************************************
// 4@ Moore's Voting Algo
arr = [1, 1, 5, 2, 2, 4, 1, 3, 3, 1, 5, 3, 1, 4, 1];
// let arr2 = [2,2,4,2,4,4,2,4,4]
function findCandiate(arr) {
  let maj_index = 0;
  let count = 1;
  for (var i = 1; i < arr.length; i++) {
    if (arr[maj_index] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      maj_index = i;
      count = 1;
    }
  }
  return arr[maj_index];
}
console.log(findCandiate(arr));
