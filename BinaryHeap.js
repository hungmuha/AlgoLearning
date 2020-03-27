class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    swap(arr,index1,index2) {
        [arr[index1],arr[index2]] = [arr[index2], arr[index1]];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length -1;
        let element = this.values[idx];
        while(idx > 0) {
            let parentIndex = Math.floor((idx-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.swap(this.values, idx, parentIndex);
            idx = parentIndex;
        }
    }
    extractMax() {
        if(this.values.length == 0) return undefined;
        this.swap(this.values, 0, this.values.length-1);
        let returnedValue = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown(); 
        }  
        return returnedValue;
    }
    sinkDown() {
        let parentIndex = 0,
            length = this.values.length,
            heapCorrect = false;

        while(heapCorrect==false) {
            let parentValue = this.values[parentIndex],
            leftIndex = parentIndex*2 + 1,
            rightIndex = parentIndex*2 + 2,
            leftValue = leftIndex<length ? this.values[leftIndex] : -Infinity,
            rightValue = rightIndex<length ? this.values[rightIndex] : -Infinity;
            switch(Math.max(parentValue,leftValue,rightValue)) {
                case leftValue:
                    this.swap(this.values, parentIndex, leftIndex);
                    parentIndex = leftIndex;
                    break;
                case rightValue:
                    this.swap(this.values, parentIndex, rightIndex);
                    parentIndex = rightIndex;
                    break;
                case parentValue:
                    heapCorrect = true;
                    break;
            }
        }
    }
}
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority =priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    swap(arr,index1,index2) {
        [arr[index1],arr[index2]] = [arr[index2], arr[index1]];
    }
    enqueue(val, priority) {
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length -1;
        let element = this.values[idx];
        while(idx > 0) {
            let parentIndex = Math.floor((idx-1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            this.swap(this.values, idx, parentIndex);
            idx = parentIndex;
        }
    }
    dequeue() {
        if(this.values.length == 0) return undefined;
        this.swap(this.values, 0, this.values.length-1);
        let returnedValue = this.values.pop();
        if(this.values.length > 0) {
            this.sinkDown(); 
        }  
        return returnedValue;
    }
    sinkDown() {
        let parentIndex = 0,
            length = this.values.length,
            heapCorrect = false;

        while(heapCorrect==false) {
            let parentValue = this.values[parentIndex].priority,
            leftIndex = parentIndex*2 + 1,
            rightIndex = parentIndex*2 + 2,
            leftValue = leftIndex<length ? this.values[leftIndex].priority : Infinity,
            rightValue = rightIndex<length ? this.values[rightIndex].priority : Infinity;
            switch(Math.min(parentValue,leftValue,rightValue)) {
                case leftValue:
                    this.swap(this.values, parentIndex, leftIndex);
                    parentIndex = leftIndex;
                    break;
                case rightValue:
                    this.swap(this.values, parentIndex, rightIndex);
                    parentIndex = rightIndex;
                    break;
                case parentValue:
                    heapCorrect = true;
                    break;
            }
        }
    }
}
// let heap = new MaxBinaryHeap();
// heap.values = [41,39,33,18,27,12];
// heap.insert(55);
// heap.extractMax();
// console.log(heap.values);

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 3);
ER.enqueue('shitting blood', 2);
ER.dequeue();

console.log(ER.values);