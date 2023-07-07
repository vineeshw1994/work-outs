class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Singlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    empty(){
        return this.size === 0
    }

    size(){
        return this.size
    }

    prepend(data){
        const node = new Node (data)
        if(this.empty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        return this.size++
    }

    append(data){
        const node = new Node(data)
        if(this.empty()){
            this.head = node
        }
        else{
            var prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print(){
        if(this.empty()){
            console.log("List is empty");
        }
        else{
            let curr = this.head
            var listValues = ''
            while(curr){
                listValues +=`${curr.data} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new Singlist()
// list.print()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(50)
// list.print()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.print()


const array = [1,2,3,4,5]

//console.log(array instanceof Array);


const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Exampleville',
      country: 'Exampleland'
    }
  };

  console.log(person.address.number);



  