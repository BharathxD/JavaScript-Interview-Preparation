// Get Object Value From String Path

function get(object, value) {
  if (!value || !value.length === 0) {
    return undefined;
  }
  const ignoredCases = ["[", ".", "]"];
  const valueArray = [];
  for (let i = 0; i < value.length; i++) {
    if (!ignoredCases.includes(value[i])) {
      valueArray.push(value[i]);
    }
  }
  const result = valueArray.reduce((obj, key) => obj[key], object);
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
