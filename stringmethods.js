const scan = require ('readline-sync')

/*
function findstr(str){
    if(str === ' '){
       return true 
    }
     else{
        return false
    }
}
const str = 'vineesh wilson'
//console.log(findstr(str))

var text = ' hello man'
//console.log(text.charAt(9));

var fname ='vineesh'
var sname  = 'wilson'
//console.log(fname.concat(' '+"its my second name " +sname));

var indexof = 'hi vineesh welcome then what'
//console.log(indexof.indexOf('what'));

var lastindex = 'hello man where are you going '
//console.log(lastindex.lastIndexOf('go'));

var replace = 'hello vineesh'
//console.log(replace.replace('hello', 'vineesh'));

var search = 'hello vineesh'
//console.log(search.search("vineesh"))

var tostr = 'vin'
//console.log(tostr.toString())

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
//console.log( palindrome("car"));

const a = [1,2,3,5,6]
console.log(a);
var pos = Number(scan.question('Enter the position:'+ ' '))
var value =Number(scan.question('Enter the value :'+ " "))
var i;
for(i=a.length-1; i >pos-1; i--){
    a[i + 1] = a[i]
    a[i] = value
}
console.log(a);

let b = [12,34,45,67,8,9]
let p = 3
for(i=p-1; i<b.length-1; i++){
    b[i] = b[i + 1]
}
for(i=0; i<b.length-1;i++){
//console.log(b[i]);
}

/*var array =[10,12,14,15,18,20]
var j
var size = array.length
for(i=0; i<size; i++){
    if(array[i] % 2 !=0){
        for(j=i;j<size;i++){
            array [j] = array[j + 1]
            //console.log(array[i]);  
        }
    }
}
//console.log(array);
for(i=0; i<size-1;i++){
    console.log(array[i]);
}

const ary =[10,2,45,55,20,25]
var key =3

var size = ary.length
for(i=0;i<size;i++){
    if(key-1===i){
        var flg = 1
        break
    }
}
if(flg===1){
    //console.log(ary[i]);
}
*/


function validatePalin(str) {  
  
    const len = str.length;  
    var flag =0
  
    for (let i = 0; i < len / 2; i++) {  
  
        if (str[i] !== str[len - 1 - i]) {  
            flag = 1
        }  
    }  
    if(flag===1){
        //console.log('Its  Not palindrome');
    } else{
        //console.log('This is palindrome');
    }
}  
  
//const string = scan.question('Enter a string or number: ');  
  
//console.log( validatePalin(string)); 
  

/*const count_dublicate = function(str) {
    
    var arr = {}

    for (let i = 0; i < str.length; i++) {

        if (Object.keys(arr).includes(str[i])) {
            arr[str[i]] = arr[str[i]] + 1
            continue
        }
        
        arr[str[i]] = 1
    }
    return arr
    
}

const char = 'adsjfdsfsfjsdjfhacabcsbajda'


console.log(count_dublicate(char))*/

	
/*check_str = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true
    else
      return false
      }
  console.log(check_str('vineesh'))
  console.log(check_str([1, 2, 4, 0]))*/



 class Node_dobly {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		};
		this.length = 0;
		this.tail = this.head;
	}

	// Insert node at end of the list
	add(newNode) {
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		this.length++;
	}

    printList() {
		let current = this.head;
		let result = [];
		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}
		console.log(result.join(' '));
		return this;
	}
}

//let numList = new DoublyLinkedList();
//numList.add(new Node_dobly(2));
//numList.add(new Node_dobly(3));
//numList.add(new Node_dobly(4));
//numList.add(new Node_dobly(5));
//numList.add(new Node_dobly(6));
//numList.add(new Node_dobly(7));
//numList.printList();

function binarySearch(arr, x){
    let l = 0;
    let r = arr.length-1 ;
    console.log(r);
    let mid;
    while (r >= l) {
            mid = l + Math.floor((r - l) / 2);

            if (arr[mid] == x)
                    return mid;

            
            if (arr[mid] > x)
                    r = mid - 1;        
            
            else
                    l = mid + 1;
    }
    return -1;
}

    arr =new Array(2, 3, 4, 10, 40);
    x = 3;
    n = arr.length;
    result = binarySearch(arr, x);

(result == -1) ? console.log("Element is not present in array")
                    : console.log("Element is present at index " + result)
	
