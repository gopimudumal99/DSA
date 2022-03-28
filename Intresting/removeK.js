let m = "14301620"
let n = 4;

const removeDigits = (m, n, stack = []) => {
  let arr = m.split("").map(Number);
  for (let el of arr) {
    while (n && stack.length && el < stack[stack.length - 1]) {
      stack.pop();
      --n;
    }
    stack.push(el);
    }
  let begin = stack.findIndex((el) => el > 0);
  let end = stack.length - n;
  return !stack.length || begin == -1 || begin == end
    ? "0"
    : stack.slice(begin, end).join("").toString();
};
console.log(removeDigits(m, n));