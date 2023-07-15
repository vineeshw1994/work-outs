function palindrome(){
    const name = 'hello'

for (let i = 0; i < Math.floor(name.length / 2); i++) {
    if (name[i] !== name[name.length - 1 - i]) {
      return false;
       
    }
  }
  
  return true;
}

console.log(palindrome());

