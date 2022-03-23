// Print all subsequences of a string
// str= abc
// otput: a, b, c, ab, bc, ac, abc;
//! t.c= O(2^n*k) where k is length of binary sting;
//! s.c = O(n) auxillary space  :Auxiliary Space is the extra space or temporary space used by an algorithm

let s = "abc";
let str = [];
printSubsequence(s, str, 0);
function printSubsequence(s,str, current) { 
    if (str.length > 0) { 
        console.log(str.join(" "))
        // return
    }
    if (current == s.length) { 
        return
    }

    for (var i = current; i < s.length; i++) { 
        str.push(s[i])
        printSubsequence(s, str, i + 1)
        str.pop()
    }
}

/*
!output:
a
a b
a b c
a c
b
b c
c  */