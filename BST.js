class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(current.value < value) {
                    if(current.right) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        return this;
                    }
                } else {
                    if(current.left) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        return this;
                    }
                }
            }
        }  
    }
    find(value) {
        if(!this.root) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(current.value > value) {
                current = current.left;
            } else if (current.value < value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value) {
        if(!this.root) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(current.value > value) {
                current = current.left;
            } else if (current.value < value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        var data = [],
        queue = [],
        current;

        queue.push(this.root);
        while(queue.length) {
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }
    DFSpreorder() {
        var data = [],
        current =this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSpostorder() {
        var data =[];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSinorder() {
        var data =[];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);   
        }
        traverse(this.root);
        return data;
    }

}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSpreorder());
console.log(tree.DFSpostorder());
console.log(tree.DFSinorder());