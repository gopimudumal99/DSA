

let cycleList = (head) => { 
    let slow = head;
    let fast = head

    while (slow && fast && fast.next) { 
        slow = slow.next;
        fast = fast.next.next;
        return (slow==fast)
    }
    return false

}

// var hasCycle = function (head) {
//   var fast = head;
//   var slow = head;
//   while (fast && fast.next) {
//     fast = fast.next.next; //2 steps
//     slow = slow.next; //1step
//     if (fast === slow) return true;
//   }
//   return false;
// };
