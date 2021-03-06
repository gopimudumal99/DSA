
function reverseList(head) { 
    let prev = null
    let next = null
    while (head) { 
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return next;
}

// t.c = O(n) s.c = (1)