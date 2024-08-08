interface TreeNode<T> {
    value: number;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}
export class TreeNodeImp<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

export const root: TreeNode<number> = new TreeNodeImp(1);

// Tree with values: 1, 2, 5, 3, 4
root.value = 1;
root.right = new TreeNodeImp(5);
root.left = new TreeNodeImp(2);
root.left.left = new TreeNodeImp(3);
root.left.right = new TreeNodeImp(4);

