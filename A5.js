const array = [1,2,3,4,5,6,7,8,9]

const target = 6
var pos;

for(let i=0;i<array.length;i++){
    if(array[i]=== target){
        pos = i
    }
}
console.log(pos);