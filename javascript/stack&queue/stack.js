const Node = require('../linked-list/node');

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }


    push(value) {
        //create node to push it 
        let node = new Node(value);


        //connect new node into slack if it's exiast (not empty) 
        //خلي ال توب  الي ع ستاك الموجودة يأشر على النود الجديدة 

        node.next = this.top;
        // pointer the top into the new node
        this.top = node;

        //this length for empty function implemetation just 
        this.length = this.length + 1;


    }


    peek() {
        if (this.top) {
            return this.top.value;
        }
        else {
            throw new Error('it is empaty linked list stack');
        }

    }
    pop() {
        //i will check if there stack linked list
        if (this.top) {
            // create pointer that equal top of stack 
            let pointer = this.top;
            // make the next of pointer = null to remove it from stack 
            pointer.next = null;
            // then make the top in that node that removed next to the next node (الي تحتها مباشرة) 
            this.top.next = this.top;
            //now make -- for length stack to empty function 
            this.length = this.length - 1;
            // now return the removed node value
            return pointer.value;
        }

        else {
            throw new Error('it is empaty linked list stack');

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


module.exports = Stack