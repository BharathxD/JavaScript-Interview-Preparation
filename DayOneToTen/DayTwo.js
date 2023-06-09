// Set value in object at string path

function helper(object, path, value) {
  const [currentKey, ...restKeys] = path;
  if (restKeys.length > 0) {
    if (!object[currentKey]) {
      const isNumber = `${+restKeys[0]}` === restKeys[0];
      object[currentKey] = isNumber ? [] : {};
    }
    if (typeof object[currentKey] === "object") {
      const isNumber = `${+restKeys[0]}` === restKeys[0];
      object[currentKey] = helper(isNumber ? [] : {}, restKeys, value);
    } else {
      object[currentKey] = helper(
        object[currentKey] ? [] : {},
        restKeys,
        value
      );
    }
  } else {
    // If there are no keys after the currentKey
    object[currentKey] = value;
  }
  return object;
}

function set(object, path, value) {
  if (!path || !value || path.length === 0) {
    return undefined;
  }
  const ignoreCases = ["[", ".", "]"];
  const convertedArray = [];
  for (let i = 0; i < path.length; i++) {
    if (!ignoreCases.includes(path[i])) {
      convertedArray.push(path[i]);
    }
  }
  helper(object, path, value);
}

const object = {};

set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// 4

set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z);
// 5

console.log(object);
