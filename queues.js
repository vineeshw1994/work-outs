class Queu{
    constructor(){
        this.items=[] 
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        return this.items.shift()
    }
    empty(){
        return this.items.length===0
    }

    peek(){
        if(!this.empty()){
            return this.items.length
        }
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
} 
const queu = new Queu()
//queu.enqueue(10)
//queu.enqueue(20)
//queu.enqueue(30)
//queu.enqueue(40)
//queu.print()
//console.log(queu.size());
//queu.dequeue()
//queu.print()


class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }

    enqueue(value){
        this.items[this.rear] = value
        this.rear++
    }

    dequeue(){
        const iteam = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return iteam
    }

    empty(){
        return this.rear - this.front=== 0
    }

    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items);
    }
}


const queue = new Queue()
//console.log(queue.empty())
//queue.enqueue(10)
//queue.enqueue(20)
//queue.enqueue(30)
//queue.enqueue(40)
//queue.enqueue(50)
//queue.print()
//queue.dequeue()
//queue.print()


///////////////////////////////////////////////////////


class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Que{
    constructor(){
        this.front=null;
        this.rear=null;
    }
    enqueue(value){
        const node=new Node(value);
        if(this.front===null){
            this.front=node;
            this.rear=node;
        }
        else{
            this.rear.next=node;
            this.rear=node;
        }
    }
    dequeue(){
        if(this.front===null){
            console.log("Queue is Empty");
        }else{
           let removedValue=this.front;
            this.front=this.front.next;
            return removedValue.value;
        }
    }
    peek(){
        return this.front.value;
    }
    
    display(){
        if(this.front===null){
            console.log("Queue is Empty");
        }else{
            let curr=this.front;
            let queuevalues='';
            while(curr){
                queuevalues+=`${curr.value} ` ;
                curr=curr.next;
            }
            console.log(queuevalues);
        }
    }


}

const que=new Que();
que.enqueue(10);
que.enqueue(200);
que.enqueue(30);
que.enqueue(100);
que.display();
console.log(que.dequeue());;
que.display();
console.log(que.peek());