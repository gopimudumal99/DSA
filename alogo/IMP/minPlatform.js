var arr = [ 900, 940, 950, 1100, 1500, 1800 ];
var dep = [ 910, 1200, 1120, 1130, 1900, 2000 ];
var n =6;

findPlatform( arr, dep, n) // t.c = O(n^2)

function findPlatform( arr, dep, n){
var plat_needed = 1;
var result =1;
for(var i = 0; i<n; i++){
    plat_needed = 1
    for(var j = i+1; j<n; j++){
        if((arr[i]>=arr[j] && arr[i]<=dep[j]) || (arr[j]>=arr[i] && arr[j]<=dep[i])){
            plat_needed ++
        }
    }
    result = Math.max(plat_needed,result)
}
 
 console.log(result)
}



// optimal approach
// step1 : sort the arrival and departure times array
// step2 : take two variable i = 0; j = 0; run a while loop while(i<n && j<n)
// step3 : check arrival is <= dep them increment the platform i++; and arrival > departurn dec platform J++;
// step4: compare the result and platform which is greater store in result and print out them
// t.c = O(n*logn) s.c=O(1)

function minPlatformReq(arr,dep,n){
    arr = arr.sort((a,b)=>a-b)
    dep = dep.sort((a,b)=>a-b)

    let minPlatform = 1,result = 1,i =1,j=0;
    while(i<n && j<n){
        if(arr[i]<=dep[j]){
            minPlatform++
            i++
        }else if(arr[i]>dep[j]){
            minPlatform--
            j++
        }
        result = Math.max(result,minPlatform)
    }
    console.log(result)
}

minPlatformReq(arr,dep,n)