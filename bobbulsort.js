
function bubble(array){
    //const array = [7,3,10,5,9,2,6,1]
    var i,j,temp
var swapped 
for(i=0;i<array.length-1; i++){
    //swapped = false
    for(j=0; j<array.length - i; j++){
        if(array[j]>array[j+1]){
            //swapped = true
            temp = array[j]
            array[j] = array[j+1]
            array[j+1]=temp
        }
    }
    if(! swapped){
        break
    }
   
}
return array

}

const array = [7,3,10,5,9,2,6,1]
console.log(array);

console.log(bubble(array));




const b=[9,1,8,2,7,3,6,4,5]
//console.log(b);

for(i=0;i<b.length-1;i++){
    for(j=i+1;j<b.length; j++){
        if(b[i] > b[j]){
            var temp = b[i]
            b[i] = b[j]
            b[j] = temp
        }
    }
} 
//console.log(b);

