var q = [];
//push + shift
q.push("1");
q.push(2);
q.shift();
q.shift();
//unshift vs pop
q.unshift(1);
q.unshift(2);
q.pop();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first = this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
