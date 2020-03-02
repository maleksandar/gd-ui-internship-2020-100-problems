export const traverseTree = (tree, func) => {
  traverse(tree, func);
};

const traverse = (tree, func) => {
  for (let property in tree) {
    if (tree.hasOwnProperty(property)) {
      if (typeof tree[property] == 'object') {
        traverse(tree[property], func);
      } else {
        func({value: tree[property]});
      }
    }
  }
};
