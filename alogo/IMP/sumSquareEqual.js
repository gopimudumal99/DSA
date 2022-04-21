function squareSum(c){
    for(var a = 0; a*a<=c; a++){
        for(var b = 0; b*b<=c; b++){
            if(a*a +b*b ==c){
                return true
            }
        }
    }
}

console.log(squareSum(5))

// t.c O(n) two lops upto squareroot c


function sumSquare(n){
    let m = new Map()
    for(var i = 0; i*i<=n; i++){
        m.set(i*i,1)
        if(m.has(n-i*i)){
            return true
        }
    }
    return false

}

console.log(sumSquare(5))  // t.c= O(sqrt n)