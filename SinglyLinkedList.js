class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if(!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length == 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if(!this.head) return undefined;
		var oldHead = this.head;
		this.head = oldHead.next;
		this.length--;
		if(this.length == 0) {
			this.tail = null;
		}
		return oldHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if(index<0 || index>=this.length) return null;
		var counter = 0;
		var current = this.head;
		while(counter!==index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index,value) {
		var foundNode = this.get(index);
		if(foundNode) {
			node.val = value;
			return true;
		}
		return false;
	}
	insert(index,value) {
		if(index < 0  || index > this.length) return false;
		//using !! to turn a value to true or false;
		if(index === 0) return !!this.unshift(value);
		if(index === this.length) return !!this.push(value);

		var prevNode = this.get(index-1);
		var temp =  prevNode.next;
		var newNode = new Node(value);
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	Remove(index) {
		if(index < 0 || index >= this.length) return undefined;
		if(index === 0) return this.shift();
		if(index === this.length-1) return this.pop();
		var prevNode = this.get(index-1);
		var removedNode = prevNode.next;
		prevNode.next = removedNode.next;
		this.length--;
		return removedNode;
	}
	Reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var prev = null;
		var next;
		for(let i = 0; i< this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

var list = new SinglyLinkedList();
list.push("hi");
list.push("hung");
list.push("whats up");

list.Reverse();
console.log(list.head);
console.log(list.tail);