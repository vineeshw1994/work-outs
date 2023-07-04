//NUmber type:
var a = 10;
var b  = a //deeb primitive datatypys is deep copy

b=20

//console.log(a);
//console.log(b);

//string type::
var name = ' vineesh'
var nam = name;

nam = 'roman'

//console.log(name);
//console.log(nam);

// shallow copy ::

// in array
var arr = [1,2,3,4,5]
var arr1 = [...arr];

arr1[0]= 100;

//console.log(arr);
//console.log(arr1);


let val = arr === arr1
//console.log(val);


// object

let obj1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    address:{
        city:'marthandam',
        state:'tamilnadu'
    }
}



let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.salary = 60000
obj2.address.city='kaliyakkavilai'
// console.log(obj1);
// console.log(obj2);


function sample(name='hi there'){
    //console.log(name);
}

sample()


function recursion(num){
    if(num === 1){
        return num
    }

    return num + recursion(num-1)
}

console.log(recursion(6));