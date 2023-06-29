const array =[1,2,3,4,5]
const arr = array.map((val)=>{
    return val *5
})

//console.log(arr);

const a = array.map(add)

function add(val){
    return val * 3
}

console.log(a);