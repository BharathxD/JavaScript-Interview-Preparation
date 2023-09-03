// Get Object Value From String Path

// Define a function to retrieve a value from an object using a string path.
function get(object, value) {
  // Check for invalid input.
  if (!value || !value.length === 0) return undefined;

  // Define characters to ignore in the path.
  const ignoredCases = ["[", ".", "]"];
  // Initialize an array to store the cleaned path components.
  const valueArray = [];

  // Iterate through the characters in the path and filter out ignored characters.
  for (let i = 0; i < value.length; i++) {
    if (!ignoredCases.includes(value[i])) valueArray.push(value[i]);
  }

  // Use the cleaned path components to traverse the object and retrieve the value.
  const result = valueArray.reduce((obj, key) => obj[key], object);

  // Return the retrieved value.
  return result;
}

// Define an example object.
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
