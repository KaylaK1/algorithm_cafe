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

export const root: TreeNode<number> = new TreeNode(1);

//     1
//    / \
//   2   3
//  / \
// 4   5
root.value = 1;
root.right = new TreeNode(5);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);


