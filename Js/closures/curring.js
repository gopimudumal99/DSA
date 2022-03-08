
// const sum = (a) => (b) => (c) => (d) => a + b + c + d
// const add = sum(3)(5)(5)(7)
// console.log(add)

const sum = (...args) => { 
    let store = [...args]
    if (store.length === 4) {
        return store.reduce((a, b) => a + b, 0)
    } 
    // otherwise return a function
    else { 
        //create a inner function
        const temp = function (...args2) { 
            store.push(...args2)
            if (store.length === 4) {
                return store.reduce((a, b) => a + b, 0)
            } else { 
                return temp
            }
        }
      
      return temp
    }
}



const res = sum(1, 2, 3, 4);
const res2 = sum(1)(2)(3)(4);
const res3 = sum(1, 2)(3, 4);
const res4 = sum(1, 2, 3)(4);
const res5 = sum(1)(2, 3, 4);
console.log(res,res2,res3,res4,res5)