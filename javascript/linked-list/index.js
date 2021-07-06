'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    //we put the head here to easy our live :)
    //becuse node just have next pointer and value in it
    this.head = null
  }


  //craete insert function  that add new node in first 

  insert(value) {
    //create a node by calling class Node 
    //here the next will be null becuse we did'nt passing it
    const node = new Node(value);
    // if we did'nt have a head it mean it's empatey linked list so pointer the head into new node
    if (!this.head) {
      this.head = node;
    }
    // if we have actully a node in our linked list so do 
    else {
      //will  change the pointer head into new node  and connection
      // connect the new node with first node (that have head pointer)
      node.next = this.head;
      //move the pointer head into new node
      this.head = node

    }
  }

  // in draw you under stand this part just
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let pointerNode = this.head;
      while (pointerNode.next) {
        pointerNode = pointerNode.next;
      }
      pointerNode.next = node;
    }
  }


  //create a pointer to loop over linked list and check for all value if it same or not
  include(value) {
    let pointer = this.head;
    while (pointer) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }



   toString() {
    let pointer = this.head;
    let stingArr = [];
    while (pointer) {

      stingArr.push(`{ ${pointer.value} } -> `);
      pointer = pointer.next;
    }
    stingArr.push(`NULL`);
    return stingArr.join('');
   }

  


  insertBefore(value,newValue){

 const node = new Node(newValue);
 // if the value it's for one node
 if (this.head.value === value) {
   // connect before
   node.next = this.head;
   //put the head into node
   this.head = node;

 }
 else {
   let pointer = pointer.head;
   while (pointer.next !== null) {

     if (pointer.next.value === value) {
       node.next = pointer.next;
       pointer.next = node;

     }
     pointer = pointer.next;

   }
 }
}

// here from my note book  back to study the draw that i do it :)

  insertAfter(value,newValue)
{

 let node = new Node(newValue);
 if (this.head.value === value) {
   this.head.next = node;
 } else {
   let pointer = this.head;
   while (pointer !== null) {
     if (pointer.value === value) {
       node.next = pointer.next;
       pointer.next = node;
     }
     pointer = pointer.next;
   }
 }
}


// kthFromEnd(k)
// {
//   let h = '';

//   try {
//     let pointer = this.head;
//     let pointer2 =this.length;
//     while(pointer){
//       if( pointer2 === k){
//         h= pointer.value

//       }

//       else{
//         pointer = pointer.next;
//         pointer2 = pointer2 -1;
//       }
//     }
//     return h

//   } catch (error) {
//     throw new Error ( error);
//   }
// }

}












module.exports = LinkedList;
//module.exports = insertBefore;
