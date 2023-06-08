function removeDuplicates(array) {
    var uniqueArray = [];
    
    for (var i = 0; i < array.length; i++) {
      var currentElement = array[i];
      var isDuplicate = false;
      
      for (var j = 0; j < uniqueArray.length; j++) {
        if (currentElement === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      
      if (!isDuplicate) {
        uniqueArray.push(currentElement);
      }
    }
    
    return uniqueArray;
  }
  

  var arr = [1, 2, 3, 4, 2, 1, 5, 6, 3];
  var result = removeDuplicates(arr);
  console.log(result); 
  