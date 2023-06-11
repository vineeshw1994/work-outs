const array = [1, 2, 3, 4, 2, 1, 5, 6, 3];
const uniqueArray = [];
const tempObj = {};

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (!tempObj[element]) {
    uniqueArray.push(element);
    tempObj[element] = true;
  }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
