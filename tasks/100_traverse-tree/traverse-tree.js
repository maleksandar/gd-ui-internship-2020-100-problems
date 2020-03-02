export function traverseTree(tree, callback) {
  callback(tree);
  tree.children.forEach((subtree) => {
    traverseTree(subtree, callback);
  });
}
