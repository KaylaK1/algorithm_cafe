import { TreeNodeImp } from "../../data_structures/TreeNode";
import { Stack } from "../../data_structures/Stack";

interface Traversal {
    preOrderTrav(node: TreeNodeImp): void;
    inOrderTrav(node: TreeNodeImp): void;
    postOrderTrav(node: TreeNodeImp): void;
    visit(node: TreeNodeImp): void;
}

class TreeTraversal implements Traversal {
    /**
     * PreOrder traversal first visits the current node. Then
     * Visits all left children before the right.
     * @param node contains value and left/right pointers.
     */
    // preOrderTrav(node: TreeNode | null): void {
    //     if (node != null) {
    //         this.visit(node);
    //         this.preOrderTrav(node.left);
    //         this.preOrderTrav(node.right);
    //     }
    // }
    /**
     * To traverse a tree iteratively we use a stack
     * @param node 
     */
    preOrderTrav(node: TreeNodeImp): void {
        
        const stack: Stack<TreeNodeImp> = new Stack();

        stack.push(node);
        
        while (stack.size() !== 0) {
            const current: TreeNodeImp = node;

            this.visit(current);
            if (current.right !== null) {
                stack.push(current.right);
            }
            if (current.left !== null) {
                stack.push(current.left);
            }
        }
    }

    inOrderTrav(node: TreeNodeImp): void {
        
    }

    postOrderTrav(node: TreeNodeImp): void {
        
    }

    visit(node: TreeNodeImp): void {
        console.log(node.value);
    }
}