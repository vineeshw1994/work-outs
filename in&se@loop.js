class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        let current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = newNode;
              break;
            }
            current = current.left;
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = newNode;
              break;
            }
            current = current.right;
          } else {
            // If the value already exists in the tree, do nothing
            break;
          }
        }
      }
    }
  
    search(value) {
      let current = this.root;
      while (current !== null) {
        if (value === current.value) {
          return true;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }
  }
  