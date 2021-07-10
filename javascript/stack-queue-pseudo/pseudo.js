// we want to create queue from stack as linked list 
//dependicess Node and stack
const Node = require('../linked-list/node');
// const Stack = require('../stack&queue/stack');

// enque function for push element as stack exacliy  (push into top)



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



class Pseudo {
    constructor() {
        this.queueStack = new Stack();
        this.secandStack = new Stack();

        this.length = 0;
    }



    enqueue(value) {
        this.queueStack.push(value);
    }


    dequeue() {
        // if statement to sure we have empty queue or not
        if (this.queueStack.top) {
            //looping the stack when we have any element and pop all element then push anther stack 
            while (this.queueStack.top) {
                this.secandStack.push(this.queueStack.pop());
                //so will have 1,2,3====3,2,1
            }
            //we want last item that it first in secand stack 
            let returnValue = this.secandStack.pop();
            //now do thw opseed that we want my stack that 1,2 not 2,1 so wiil push again in queueStack
            while (this.secandStack.top) {
                this.queueStack.push(this.secandStack.pop());

            }
            return returnValue;
        }
        else{
            throw new Error('it is empaty  pesudo');

        }

    }
}


module.exports =  Pseudo