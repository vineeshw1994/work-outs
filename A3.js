const array = [1, 2, 3, 2, 4, 1, 5, 4];
const uniqueArray = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArray); 
