const a=[5,2,9,7,4,1,12]
//console.log(a);
var i,j,temp;

for(i=1;i<a.length;i++){
    for(j=i;j>0;j--){
        if(a[j]>a[j-1]){
            tamp = a[j];
            a[j] = a[j-1];
            a[j-1] = temp;
        } else{
          break;
        }
    }
}
//console.log(a);


function insertionSort(arr) {
    const len = arr.length;
    
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = current;
    }
    
    return arr;
  }
  
  const array = [5, 2, 4, 6, 1, 3];
  const sortedArray = insertionSort(array);
  console.log(sortedArray); 
  

 