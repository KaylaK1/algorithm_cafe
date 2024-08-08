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
    // preOrderTrav(node: TreeNodeImp | null): void {
    //     if (node != null) {
    //         this.visit(node);
    //         this.preOrderTrav(node.left);
    //         this.preOrderTrav(node.right);
    //     }
    // }
    /**
     * To traverse a tree iteratively we use a stack
     * Since a stack is fifo, push the direction you want to go last. 
     */
    preOrderTrav(node: TreeNodeImp): void {
        
        const stack: Stack<TreeNodeImp> = new Stack();

        if (node !== undefined) {
            stack.push(node);
        }
        
        
        while (stack.size() !== 0) {
            const current: TreeNodeImp = stack.pop();

            this.visit(current);
            if (current.right !== null) {
                stack.push(current.right);
            }
            if (current.left !== null) {
                stack.push(current.left);
            }
        }
    }

    inOrderTrav(node: TreeNodeImp | null): void {
        if (node != null) {
            this.inOrderTrav(node.left);
            this.visit(node);
            this.inOrderTrav(node.right);
        }
        
    }

    postOrderTrav(node: TreeNodeImp | null): void {
        if (node != null) {
            this.postOrderTrav(node.left);
            this.postOrderTrav(node.right);
            this.visit(node);
        }
    }

    visit(node: TreeNodeImp): void {
        console.log(node.value);
    }
}