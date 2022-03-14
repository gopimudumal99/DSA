function decimalConvert(n) {
    var j = 0
    let sum = 0
    for (var i = str.length - 1; i >= 0; i--) {
        if (+str[i] == 1) { 
            sum+=Math.pow(2,j)
        }
        j++
    }
    console.log(sum)
}
let str = "0111";
decimalConvert(str);