import { TreeNodeImp } from "../../data_structures/TreeNode";

interface Traversal {
    preOrderTrav(node: TreeNodeImp<number>): void;
    inOrderTrav(node: TreeNodeImp<number>): void;
    postOrderTrav(node: TreeNodeImp<number>): void;
    visit(node: TreeNodeImp<number>): void;
}

//     1
//    / \
//   2   3
//  / \
// 4   5

class TreeTraversal implements Traversal {
    /**
     * PreOrder traversal first visits the current node. 
     * Then traverses the left subtree and finally the right.
     * So it visits the current node first before it's subtrees. 
     */
    preOrderTrav(node: TreeNodeImp<number> | null): void {
        if (node != null) {
            this.visit(node);
            this.preOrderTrav(node.left);
            this.preOrderTrav(node.right);
        }
    }
    /**
     * To traverse a tree iteratively we use a stack
     * Since a stack is fifo, push the direction you want to go last. 
     */
    // preOrderTrav(node: TreeNodeImp<number>): void {
    //     const stack: TreeNodeImp<number>[] = [];
        
    //     if (!node) throw Error("Node is null, undefined, or falsy");
        
    //     stack.push(node);
        
    //     while (stack.length !== 0) {
    //         const current: TreeNodeImp<number> | undefined = stack.pop();

    //         if (current) {
    //             this.visit(current);
    //             if (current.right) {
    //                 stack.push(current.right);
    //             }
    //             if (current.left) {
    //                 stack.push(current.left);
    //             }
    //         }
    //     }
    // }

    /**
     * Traverse left subtree, visit the current node,
     * then traverse the right subtree.
     * So it visits the current node between it's subtrees.
     */
    inOrderTrav(node: TreeNodeImp<number> | null): void {
        if (node != null) {
            this.inOrderTrav(node.left);
            this.visit(node);
            this.inOrderTrav(node.right);
        }
        
    }

    /**
     * Traverses the left subtree, then the right, before
     * visiting the node.
     * Prints out each row from left to right.
     * So it visits the current node after it's subtrees. 
     */
    postOrderTrav(node: TreeNodeImp<number> | null): void {
        if (node != null) {
            this.postOrderTrav(node.left);
            this.postOrderTrav(node.right);
            this.visit(node);
        }
    }

    visit(node: TreeNodeImp<number>): void {
        console.log(node.value);
    }
}