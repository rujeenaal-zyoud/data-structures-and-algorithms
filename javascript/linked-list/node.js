'use strict';
//create class for creat node each time when call new Node
class Node {
    constructor(value,next=null){
this.value=value;
this.next =next;
    }
}

module.exports =Node;