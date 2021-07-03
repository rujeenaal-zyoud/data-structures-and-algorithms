'use strict';
const Node = require ('./node');

class LinkedList {
constructor()
{
    //we put the head here to easy our live :)
    //becuse node just have next pointer and value in it
    this.head =null
}


//craete insert function  that add new node in first 

insert(value){
    //create a node by calling class Node 
    //here the next will be null becuse we did'nt passing it
    const node = new Node(value);
    // if we did'nt have a head it mean it's empatey linked list so pointer the head into new node
    if(!this.head){
        this.head =node ;
    }
    // if we have actully a node in our linked list so do 
    else {
        //will  change the pointer head into new node  and connection
// connect the new node with first node (that have head pointer)
        node.next=this.head;
        //move the pointer head into new node
        this.head =node

    }
}

// in draw you under stand this part just
append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }


  //create a pointer to loop over linked list and check for all value if it same or not
  include(value){
    let pointer =this.head;
    while(pointer){
      if (pointer.value===value){
        return true;
      }
      pointer=pointer.next;
    }
    return false;
  }



  toString(){
    let pointer =this.head;
    let stingArr=[];
    while(pointer){

      stingArr.push(`{ ${pointer.value} } -> `);
      pointer=pointer.next;
    }
    stingArr.push(`NULL`);
    return stingArr.join('');
  }
}

module.exports = LinkedList;
