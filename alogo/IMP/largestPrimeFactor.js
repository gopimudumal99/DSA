
// Q3. find largest prime factor
// Input: 6
// Output: 3

function largestPrimeFactor(n){
    var i=2;
    while (i<=n){
        if (n%i == 0){
            n/=i; 
        }else{
            i++;
        }
    }
    console.log(i);
    }
    var a = 6
    largestPrimeFactor(a)


    function smallestPrimeFactor(n){
        if(n%2==0){
            return 2
        }
        for(var i = 3; i*i<=n; i+=2){
            if(n%i==0){
                return i
            }
        }
     }
     console.log(smallestPrimeFactor(36))
