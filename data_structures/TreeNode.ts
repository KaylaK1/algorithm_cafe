interface ITreeNode<T> {
    value: number;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}
export class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

export const root: TreeNode<number> = new TreeNode(12);

//     12
//    / \
//   7   1
//  /   / \
// 4   10  5

root.right = new TreeNode(1);
root.left = new TreeNode(7);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);


