// Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz” instead of the number,
// for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"

// function FizzBuzz(n) { 
//     for (var i = 1; i <= n; i++){
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz")
//         }
//        else if (i % 3 == 0) {
//             console.log("Fizz")
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz")
//         } else { 
//             console.log(i)
//         }
//     }
// }
// FizzBuzz(100)

function FizzBuzz(n) { 
    let c3 = 0
    let c5 = 0
    for (var i = 1; i <= n; i++) { 
        c3++;
        c5++;
        let d = ""
        if (c3 == 3) { 
            d += "Fizz";
            c3=0
        }
        if (c5 == 5) { 
            d += "Buzz";
            c5=0
        }
        if (d == "") {
            console.log(i)
        } else { 
            console.log(d)
        }
    }
}
FizzBuzz(100);