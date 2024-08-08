/**
 * Given a binary tree and a number 'S', find if the 
 * tree has a path from root-to-leaf such that the sum
 * of all the node values of that path equals 'S'.
 * 
 * Root-to-leaf: DFS
 * If the current node is not a leaf node:
 * 1. Subtract the value of the current node from the given number for 
 * a new sum: S = S - node.value
 * 2. Recursively call the children nodes with the new number
 * If the current node is a leaf and it's value is  equal to the remainder,
 * then return true
 */

import { TreeNodeImp } from "../../../data_structures/TreeNode";

const has_path = function(root: TreeNodeImp<number> | null, sum: number): boolean {
    if (root == null) {
        return false;
    }

    // if the current node is a leaf and its value is equal to the sum, a path was found
    if (root.value === sum && root.left === null && root.right === null) {
        return true;
    }

    // traverse the left and right sub-trees. Return true if any of the subtree
    // paths match the remainder of number. 
    return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
}




const root = new TreeNodeImp(12);
root.left = new TreeNodeImp(7);
root.right = new TreeNodeImp(1);
root.left.left = new TreeNodeImp(9);
root.right.left = new TreeNodeImp(10);
root.right.right = new TreeNodeImp(5);

console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);