export const traverseTree = (tree, cb) => {
  traverse(tree, cb);
};

const traverse = (tree, cb) => {
  for (let props in tree) {
    if (tree.hasOwnProperty(props)) {
      if (typeof tree[props] === "object") {
        traverse(tree[props], cb);
      } else {
        cb({ value: tree[props] });
      }
    }
  }
};
