export function traverseTree(tree, func) {
  callback(tree, func);
}

function callback(tree, func) {
  let keys = Object.keys(tree);

  for (let key of keys) {
    if (key === 'value') {
      func({value: tree[key]});
    }
    if (typeof tree[key] === 'object') {
      callback(tree[key], func);
    }
  }
}
