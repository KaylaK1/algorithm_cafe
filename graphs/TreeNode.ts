interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}
class TreeNodeImp {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

const root: TreeNode = new TreeNodeImp(1);

// Tree with values: 1, 2, 5, 3, 4
root.value = 1;
root.right = new TreeNodeImp(5);
root.left = new TreeNodeImp(2);
root.left.left = new TreeNodeImp(3);
root.left.right = new TreeNodeImp(4);