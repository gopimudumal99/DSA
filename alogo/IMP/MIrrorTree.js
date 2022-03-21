class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

function mirror(root){
   if(root == null) {
       return 
   }else{
       mirror(root.left)
       mirror(root.right)
       
       // swap them
       let temp = root.left;
       root.left = root.right;
       root.right = temp;
   }
}
