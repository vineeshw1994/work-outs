const reachA = new Promise((resolve,reject)=>{
    let reached = false
    if(reached){
        setTimeout(resolve,3000,'A is reached')
    }else{
        reject('a not reached')
    }
})

const reachB = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve,2000,'B is reached')
    }else{
        reject('b not reached')
    }
})
const reachC = new Promise((resolve,reject)=>{
    let reached = true
    if(reached){
        setTimeout(resolve,1000,'C is reached')
    }else{
        reject('c not reached')
    }
})


// async function level(){
//     try{
//         console.log('hi');
//         let res = await reachA
//         console.log(res)
//         console.log('end');
//     }catch(err){
//         console.log(err);
//     }
// }
Promise.any([reachA,reachB,reachC])
.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})