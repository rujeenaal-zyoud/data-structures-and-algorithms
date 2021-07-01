'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

  describe('insert methode to the head', () => {
  it('should add node  to empty list first time', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.head.next).toBeNull();
  });
  it('should add to a list with values', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    linkedList.insert('b');
    expect(linkedList.head.value).toEqual('b');
    expect(linkedList.head.next.value).toEqual('a');
  });


});


// describe('insert methode to the head', () => {
//   it('should add node  to empty list first time', () => {
//     const linkedList = new LinkedList();
//     linkedList.insert('a');
//     expect(linkedList.head.value).toEqual('a');
//     expect(linkedList.head.next).toBeNull();
//   });
//   it('should add to a list with values', () => {
//     const linkedList = new LinkedList();
//     linkedList.insert('a');
//     linkedList.insert('b');
//     expect(linkedList.head.value).toEqual('b');
//     expect(linkedList.head.next.value).toEqual('a');
//   });


// });

