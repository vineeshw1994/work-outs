let user ={
    name:'anonymous',
    pageaccess:['login','dashboard','contant'],

    set setname(value){
        this.name = value
    },
    get getnmae(){
        return this.name
    }
}

let admin = {
    proto :user,
    isadmin :true
}

admin.setname = 'vineesh'

//console.log(admin);


const aa =[{m1:10,m2:20},{m3:30,m4:40}]
var sum=0
for(let val of aa){
    for(let key in val){
        sum +=val[key]
    }
}

//console.log(sum);

const obj1 ={
    fname:'vineesh',
    lname:'wilson',
    
}
 function fullname(fname,lname,city,state){
    console.log(this.fname+ ' '+this.lname +' '+this.city+' '+this.state);
}
const obj2 ={
    fname : 'roman',
    lname:'reigns'
}

fullname.call(obj2,marthandam,tamilnadu,)

