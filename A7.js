const array = [1,2,3,4,5,6,7,8,9]
var flag

for(let i=0; i<array.length; i++){
    flag = 0
    for(let j=2; j<array[i]; j++){
        if(array[i] % j === 0){
            flag = 1;
            break;
        }
    }
    if(flag === 0){
        console.log(array[i]);
    }
}