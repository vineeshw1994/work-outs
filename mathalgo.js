
// fibnacci problem
/*function fibnacci(num){
    const fib  = [0 , 1]
    for(i=2;i<num;i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

const number = 4
console.log(fibnacci(number));
//big o(n)*/


// factorial recursion problem number
/*
function factorial(n){
    if(n===1){
        return 1
    }

    return n/ factorial(n-1)
}

let num = 5
console.log(factorial(num));
*/

//factorial problem

/*function fact(n){
    let res = 1;
    for(i=1;i<=n;i++){
        res = res + i;
    }
    return res;
}

const a = 5;
console.log(fact(a));
*/

//prime number

/*function prime(n){
    for(i=2;i<=n;i++){
        if(i>n && i % 2 === 0){
            var flag = 1
        }

        if(flag === 1){
            console.log(i);
        }
    }
    
}

prime(10)*/

//recursion fibnocci series
/*
function refib(n){
    if(n < 2){
        return n
    }
    return refib(n-1) + refib(n-2)
}

console.log(refib(6));*/

//recursive binary search
/*
function rebin(arr, tar){
     return search(arr,tar, 0,arr.length - 1)
}
function search(arr,tar,r,l){
    if(l > r){
        return -1
    }

    var mid = math.floor((l+r)/2)
    if(tar === arr[mid]){
        return mid
    }
    if(tar < arr[mid]){
        return search(arr,tar, mid-1,l)
    } else {
        return search(arr, tar, mid+1, r)
    }
}

const a=[1,2,3,4,5,6,7]
const t =2
console.log(rebin(a, t));*/

