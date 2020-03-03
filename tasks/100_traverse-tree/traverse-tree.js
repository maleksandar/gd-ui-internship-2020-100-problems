/**
 * @param {Object} tree
 * @param {Function} callback
 * @description "Traverses tree and applies callback function
 * on each of the tree nodes."
*/
export function traverseTree(tree, callback) {
  callback(tree);
  tree.children.forEach((child) => {
    traverseTree(child, callback);
  });
}
