// defination:"CLOSURES IS A COMBINATION OF A FUNCTION BUNDLE TOGETHER WITHIN THE LEXICAL ENVIRONMENT"
// "Lexical Scope allows inner functions to access the scope of their outer functions"


function most(a) {
    return function outer(b) {
        return function inner(c) { 
            return a+b+c
        }
    }
}
console.log(most(1)(2)(3));


// uses in memrozation
// uses in currying
// uses in debounce
// uses in setTImeout
// maintain async