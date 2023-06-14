function validatePalin(str) {  
    var flag
    const len = str.length;  
  
    for (let i = 0; i < len / 2; i++) {  
  
        if (str[i] !== str[len - 1 - i]) {  
            flag = 1
        }  
    }  
    if(flag === 1){
         console.log('its not palindrome')
    } else{
         console.log('This is palindrome')
      }
}  
  
const string = 'malayalam'  
  
console.log( validatePalin(string)); 
