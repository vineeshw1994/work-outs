class Node {
    constructor(value) {
        this.value = value
        this.next = null                
    }
}

class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
add(newNode){
    let node = this.Head;
    if(node==null){
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}
 displayList(){
    let node = this.Head;
    var str = ""
    while (node) {
        str += node.value + ' '
        node = node.next;
    }
    str += "NULL"
    console.log(str);  
  }
}
let numList = new SinglyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();
