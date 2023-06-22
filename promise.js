const booking = new Promise((res,rej)=>{
    var booking = true
    if(booking){
        res()
    } else{
        rej()
    }
}).then(res).catch(rej)

function res(){
    console.log('success');
}

function rej(){
    console.log('rejected');
}