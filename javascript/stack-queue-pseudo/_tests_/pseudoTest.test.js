'use strict';
let  Pseudo  = require ('../pseudo');

const { expect } = require('@jest/globals');

describe ('happy path', ()=>{
  it ('should enqueue to a Pseudo', ()=>{
  let  queue = new Pseudo();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.queueStack.top.value).toEqual(3);

    });


    // it ('should dequeue to a Pseudo', ()=>{
    //     let  queue = new Pseudo();
    //     queue.enqueue(1);
    //     queue.enqueue(2);
    //     queue.enqueue(3);
    //     let dataReturn = queue.dequeue();

    //     expect(dataReturn).toBe(1);
      
    //       });


      

})

// describe ('Edge Case',()=>{
//     it (' throw error  dequeue from an empty queue',()=>{
      
//       let queue = new Pseudo ();
    
//       expect(queue.dequeue).toThrowError;
//     });
// })