class MaxHeap {
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
  
    insert(element) {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
  
    deleteMax() {
      if (this.heap.length === 0) {
        return null; // Heap is empty
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
  
      return max;
    }
  
    heapifyUp(index) {
      if (index === 0) {
        return; // Reached the root of the heap
      }
  
      const parentIndex = this.getParentIndex(index);
      
  
      if (this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index);
      let largestIndex = index;
  
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
  
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
  
      if (largestIndex !== index) {
        [this.heap[index], this.heap[largestIndex]] = [
          this.heap[largestIndex],
          this.heap[index],
        ];
        this.heapifyDown(largestIndex);
      }
    }
  }

  const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(7);
console.log(maxHeap.heap); // Output: [15, 10, 5, 7]

 maxHeap.deleteMax();
//console.log(maxElement); // Output: 15
console.log(maxHeap.heap); // Output: [10, 7, 5]

  