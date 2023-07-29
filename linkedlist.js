class node{
    constructor(value){
        this.value = value
        this.null = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    empty(){
        return this.size === 0
    }

    getsize(){
        return this.size
    }

    prepend(value){
        const nod = new node(value)
        if(this.empty()){
            this.head =node
        } else{
            nod.next = this.size.head
            this.head = nod
        }
        this.size++
    }
    print(){
        if(this.empty()){
            console.log('list is empty');
        } else{
            let curr = this.head
            let listvalues = ''
            while(curr){
                listvalues += `${curr.value}`
                curr = curr.next
            }
            console.log(listvalues);
        }
    }
}

const list = new linkedlist()
console.log('list is empty?',  list.empty())
console.log('list size',  list.getsize());
list.print()
list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.print()