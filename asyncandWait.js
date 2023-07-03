async function fun(){
    return 'hello'
}

//console.log(fun());

//fun().then((msg)=>console.log(msg))

let reachbus = new Promise((resolve,reject)=>{
    const reached = false
    if(reached){
        setTimeout(resolve,3000,'bus is arrivaled')
    } else{
        reject('bus is not reached')
    }
 })
//  .then((level))
// .catch((err)=>console.log('error'))

async function level(){
   try{
    console.log('hi');
    let res = await reachbus
    console.log(res);
    console.log('bye');
   } catch(err){
    console.log(err);
   }
}

level()