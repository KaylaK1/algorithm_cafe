import { TreeNode, root } from "../../../data_structures/TreeNode";
const Deque = require('collections/deque');
/**
 * All Paths for a Sum
 * Given a binary tree and a number 'S', find all paths
 * from root-to-leaf such that the sum of all the node 
 * values of each path equal 'S'
 */


const find_paths = function(root: TreeNode<number>, sum: number): Array<number> {
    const allPaths: Array<number> = [];
    find_paths_recursive(root, sum, new Deque(), allPaths);
    return allPaths;
}

const find_paths_recursive = function(currentNode: TreeNode<number> | null, sum: number, currentPath: any, allPaths: Array<number>): void {
    if (currentNode === null) {
        return;
    }

    // add the current node to the path
    currentPath.push(currentNode.value);

    // if the current node is a leaf and its value is equal to sum, save the current path
    if (currentNode.value === sum && currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath.toArray());
    } else {
        // traverse the left subtree
        find_paths_recursive(currentNode.left, sum - currentNode.value, currentPath, allPaths);
        // traverse the right subtree
        find_paths_recursive(currentNode.right, sum - currentNode.value, currentNode, allPaths);
    }
    // Remove the current node from the path while going up the recursive call stack.
    currentPath.pop();
}

let sum = 23;

const result = find_paths(root, sum);

console.log('Total number of paths: ', result.length);