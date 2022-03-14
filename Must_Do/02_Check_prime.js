// Given an integer N. Check whether N is prime or not.
//T.c = sqrt(N) and s.c = O(1)
function isPrime(n) { 
    let fact = 0
    for (var i = 1; i <= Math.sqrt(n); i++){
        // console.log(i)
        if (n % i == 0) { 
            if (i * i != n) {
                fact = fact + 2
                // console.log(i)
            } else { 
                fact = fact + 1
            }
        }
    }
    if (fact == 2) {
        console.log("prime")
    } else { 
        console.log("no prime")
    }
}
isPrime(4); 