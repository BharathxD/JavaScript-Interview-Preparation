// Set value in object at string path

// Define a helper function to recursively set a value in an object at a given path.
function helper(object, path, value) {
  // Split the path into its components.
  const [currentKey, ...restKeys] = path;

  // If there are more keys in the path, we need to continue traversing the object.
  if (restKeys.length > 0) {
    // Check if the current key does not exist in the object.
    if (!object[currentKey]) {
      // Determine if the next key should be treated as an array index or an object key.
      const isNumber = `${+restKeys[0]}` === restKeys[0];
      // Initialize the current key as an empty array or object accordingly.
      object[currentKey] = isNumber ? [] : {};
    }

    // Check if the current key's value is an object.
    if (typeof object[currentKey] === "object") {
      // Determine if the next key should be treated as an array index or an object key.
      const isNumber = `${+restKeys[0]}` === restKeys[0];
      // Recursively call the helper function with the current key's value.
      object[currentKey] = helper(isNumber ? [] : {}, restKeys, value);
    } else {
      // If the current key's value is not an object, initialize it as an empty array or object.
      object[currentKey] = helper(
        object[currentKey] ? [] : {},
        restKeys,
        value
      );
    }
  } else {
    // If there are no keys after the currentKey, set the value at the current key.
    object[currentKey] = value;
  }

  // Return the modified object.
  return object;
}

// Define a function to set a value in an object using a path.
function set(object, path, value) {
  // Check for invalid input.
  if (!path || !value || path.length === 0) {
    return undefined;
  }

  // Define characters to ignore in the path.
  const ignoreCases = ["[", ".", "]"];
  // Initialize an array to store the cleaned path components.
  const convertedArray = [];

  // Iterate through the characters in the path and filter out ignored characters.
  for (let i = 0; i < path.length; i++) {
    if (!ignoreCases.includes(path[i])) {
      convertedArray.push(path[i]);
    }
  }

  // Call the helper function to set the value in the object.
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
