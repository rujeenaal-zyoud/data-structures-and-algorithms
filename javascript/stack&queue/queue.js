const Node = require('../linked-list/node');

class Queue {
    constructor() {
        this.rear = null;
        this.front = null;
        this.length = 0;
    }


    enqueue(value) {
        // create node 
        let node = new Node(value);
        //if we have empty queue
        //will put two pointer the rear and front in the node 
        if (this.length === 0) {
            this.rear = node;
            this.front = node;
            this.length = this.length + 1;

        }
        else {
            //connect the queue with new node in next the rear with node
            this.rear.next = node;
            //make the rear pointer in last node 
            this.rear = node;

            this.length = this.length + 1;

        }

    }

    dequeue() {
        //I will check if there any node by front pointer
        if (this.front) {
            //create pointer that point into front 
            let pointer = this.front
            //make it equal the value of front to retuen it 
            pointer = this.front.value;
            //change the front into next so it will deleted 
            this.front = this.front.next
            return pointer;
            this.length = this.length - 1;

        }
        else {
            throw new Error('it is empaty linked list queue');
        }

    }

    peek() {
        //to show value of the front if it's exist 
        if (this.front) {
            return this.front.value;
        }
        else {
            throw new Error('it is empaty linked list queue');
        }
    }


    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

}





module.exports = Queue;