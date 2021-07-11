// we want to create queue from stack as linked list 
//dependicess Node and stack
 const Stack = require('../stack&queue/stack');

// enque function for push element as stack exacliy  (push into top)






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


module.exports =  Pseudo;