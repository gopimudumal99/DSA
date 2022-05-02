// flat the array
let arr = [1,2,3,[4,5,6],7,8,[10]]

function arrFlat(arr,depth=1){
    let result = []
    arr.forEach(arr=>{
        if(Array.isArray(arr) && depth>0){
            result.push(...arrFlat(arr,depth-1))
        }else{
            result.push(arr)
        }
    });
   return result
}

console.log(arrFlat(arr,1))