import { find_paths } from '../graphs/trees/depth_first_search/AllPathsforSum';
import { root } from '../data_structures/TreeNode';

test('Returns correct number of Nodes that equal Sum of 23', () => {
    expect(find_paths(root, 23)).toBe(2);
});
  