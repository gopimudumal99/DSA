// RUN LENGTH ENCODING PROBLEN
// sequence
let S = "aaabbcccddggee"  // O/P:a3b2c3d2g2e2

// Ap1 key-value pair T.C=O(n) && S.C=O(n)
function strKeyValu(S) { 
    let obj = {}
    let s =""
    for (var i = 0; i < S.length; i++) { 
        if (obj[S[i]] == undefined) {
            obj[S[i]] = 1
        } else { 
            obj[S[i]] = obj[S[i]]+1
        }
    }
    for (elem in obj) { 
        s+=elem+obj[elem]
    }
    return s
}
console.log(strKeyValu(S)); 


//Optimal solution  S = aabbaa O/p:a2b2a2
function optiString(S) { 
    str = ""
    for (let i = 0; i < S.length; i++) {
        let c = 1
        while (i < S.length - 1 && S[i] === S[i + 1]) { 
            c++
            i++
        }
        str+=S[i]+c
    }
    return str
}
console.log(optiString(S));