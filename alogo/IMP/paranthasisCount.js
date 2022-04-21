function minParentheses( p){
   let bal = 0;
   let ans = 0;
   for(var i = 0; i<p.length; i++){
       bal+=p[i]=="("?1:-1
       if(bal == -1){
           bal+=1
           ans+=1
       }
   }
   return ans
}
 
var p = "()))";



console.log(minParentheses( p))
// t.c O(n) s.c=O(1)
