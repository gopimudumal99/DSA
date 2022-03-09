// swap a two number without using 3rd variable
let a = 10;
let b = 20

function swap(a, b) { 
    a = a + b
    b = a - b
    a = a - b
    return [a,b]
}
console.log(swap(a, b))

function swapXOR(a, b) { 
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return [a,b]
}
console.log(swapXOR(a, b));