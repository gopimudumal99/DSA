// flat the array

let arr = [1,2,3,[4,5,6],7,8,[10]];

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


// union array  //t.c=O(m+n)
let a1=[1,2,3,4],a2=[3,4,5,7,8]
// unionElem(a1,a2)
function unionElem(arr1,arr2){
    let set = new Set()
    for(let i = 0; i<arr1.length; i++){
        set.add(arr1[i])
    }
    for(let i = 0; i<arr2.length; i++){
        set.add(arr2[i])
    }
    for(let k of set){
        console.log(k+" ")
    }
}

//intersection of two arrays O(m+n)
function interSection(arr1,arr2){
    let i = 0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            j++;
        }
        else if (arr1[i]<arr2[j]){
            i++;
        }else{
            console.log(arr2[j])
            i++;
            j++
        }
    }
}
interSection(a1,a2)

// sort binary array
let binaryArr=[1,1,0,1,0,1,0,0,1,1]
binarySort(binaryArr)
function binarySort(arr){
    let index = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<1){
           let temp = arr[i];
           arr[i] = arr[index];
           arr[index] = temp
           index++
        }
    }
    console.log(arr)
}

// sort 0's 1's 2's
let arrs=[1,2,0,0,1,2,1,0,2]
console.log(superSort(arrs))

function superSort(arr){
    let l= 0; let r=arr.length-1; m=0;
    while(m<=r){
        if(arr[m]==0){
            swap(arr,m,l)
            l++;
            m++;
        }
        else if(arr[m]==1){
            m++
        }else if(arr[m]==2){
            swap(arr,m,r)
            r--
        }
    }
    return arr
}
function swap(arr,l,r){
    [arr[l],arr[r]] = [arr[r],arr[l]]
}

//