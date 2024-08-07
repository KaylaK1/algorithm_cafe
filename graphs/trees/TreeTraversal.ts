interface Traversal {
    preOrderTrav(node: TreeNode): void;
    inOrderTrav(node: TreeNode): void;
    postOrderTrav(node: TreeNode): void;
    visit(node: TreeNode): void;
}

class TreeTraversal implements Traversal {
    /**
     * PreOrder traversal first visits the current node. Then
     * Visits all left children before the right.
     * @param node contains value and left/right pointers.
     */
    preOrderTrav(node: TreeNode | null): void {
        if (node != null) {
            this.visit(node);
            this.preOrderTrav(node.left);
            this.preOrderTrav(node.right);
        }
    }

    inOrderTrav(node: TreeNode): void {
        
    }

    postOrderTrav(node: TreeNode): void {
        
    }

    visit(node: TreeNode): void {
        console.log(node.value);
    }
}