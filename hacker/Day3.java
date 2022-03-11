PROBLEM = Height Using Parent Array 
Input: N = 7
arr = {-1, 0, 0, 1, 1, 3, 5}
Output: 5
Explanation: Tree formed is:
                    0
                   / \
                  1   2
                 / \
                3   4
               /
              5
             /
            6      Height of the tree= 5

// Given a parent array arr[] of a binary tree of N nodes. Element at index i in the array arr[] represents the 
// parent of ith node, i.e, arr[i] = parent(i).Find the height of this binary tree.
// Note: There will be a node in the array arr[], where arr[i] = -1, which means this node 
// is the root of binary tree.



class Solution{
    static int findHeight(int N, int arr[]){
        // code here
        int res = 0;
        int par = N-1;
        while(par>=0){
            res++;
            par = arr[par];
        }
        return res;
    }
}