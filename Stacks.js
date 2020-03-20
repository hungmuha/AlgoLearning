//using Array as stack
var stack =[];
//push and pop
stack.push('google');
stack.push("instagram");
stack.push('youtube');
stack.pop();
//shift and unshift
stack.unshift('google');
stack.unshift("instagram");
stack.unshift('youtube');
stack.shift();

//create Stack like a linkedlist
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) return null;
        var returnVal = this.first.val;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return returnVal;
    }
}