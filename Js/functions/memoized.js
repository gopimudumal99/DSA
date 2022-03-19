let memoizedFun = () => { 
    let memo = {}
    return (value) => { 
        if (value in memo) {
            console.log(" fetching from  memo")
            return memo[value];
        } else { 
            console.log("calculated")
            let result = value + 20;
            memo[value] = result;
            return result;
        }

    }
}
const add  = memoizedFun()
console.log(add(4));
console.log(add(4));
