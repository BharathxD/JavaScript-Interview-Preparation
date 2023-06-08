// Get Object Value From String Path

function get(obj, path) {
  if (!path || path.length === 0) {
    return undefined;
  }
  const ignoredCases = [".", "[", "]"];
  const convertedPath = [];
  for (let i = 0; i < path.length; i++) {
    if (ignoredCases.includes(path[i])) {
      continue;
    }
    convertedPath.push(path[i]);
  }
  const result = convertedPath.reduce((obj, key) => obj[key], obj);
  return result;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, ["a", "b", "c", "2"]));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, "a.c"));
