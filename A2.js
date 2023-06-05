const array =[2,3,4,5,6,5,7,8,3,4]
var sam=[]
for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            sam [i] = array[j]
        }
    }
}
console.log(sam)