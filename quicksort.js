function quksort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivt = arr[arr.length - 1]
    let l = []
    let r = []
    for(i=0;i<arr.length -1;i++){
        if(arr[i]<pivt){
            l.push(arr[i])
        } else{
            r.push(arr[i])
        }
    }
    return [...quksort(l), pivt, ...quksort(r)]
}

const a=[8,20,-2,4,-6]
console.log(a);

console.log(quksort(a));

