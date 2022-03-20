// Palindrome Linked List
//?oj.masaischool.com/contest/2973/problem/05

https: var isPalindrome = function (head) {
  // ! step1: take stack [] and current = head
  let stack = [];
  let current = head;
  //! step2: push all elements in stack current!=null
  while (current != null) {
    stack.push(current.data);
    current = current.next;
  }
  //! step3: set back cur = head
  current = head;
  //! step4: check current elem with stack last elem and commare them retrurn true and flase
  while (current) {
    if (current.data != stack[stack.length - 1]) return false;
    current = current.next;
    stack.pop();
  }
  return true;
};

