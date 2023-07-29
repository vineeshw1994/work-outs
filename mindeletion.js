class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Helper function to maintain the heap property by moving a node up
  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }

  // Helper function to maintain the heap property by moving a node down
  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallestIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(smallestIndex, index);
      this.heapifyDown(smallestIndex);
    }
  }

  // Function to insert an element into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Function to delete the minimum element from the heap
  deleteMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
    //const lastElement = this.heap.pop();

    /*if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.heapifyDown(0);
    }

    return min;*/
  }
}

// Example usage:
const heap = new MinHeap();
heap.insert(4);
heap.insert(8);
heap.insert(2);
heap.insert(10);
heap.insert(1);

console.log(heap.heap); // [1, 4, 2, 10, 8]

heap.deleteMin();
console.log(heap.heap); // [2, 4, 8, 10]
heap.deleteMin();
console.log(heap.heap); // [2, 4, 8, 10]
