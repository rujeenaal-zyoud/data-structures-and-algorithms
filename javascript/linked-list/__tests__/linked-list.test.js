'use strict';

// Require our linked list implementation
const LinkedList = require('../index');
const Node = require('../node');


describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});



describe('Node Module', () => {
  it('create an instance with value and next', () => {
    const value = 'some value';
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
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


describe('append methode to the end of list', () => {
  it('should append to empty list', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    expect(linkedList.head.value).toEqual('a');
    linkedList.append('a');
    expect(linkedList.head.value).toEqual('a');

  });
  it('should append  to a list with values', () => {
    const linkedList = new LinkedList();
    linkedList.append('a');
    linkedList.append('b');
    linkedList.append('c');

    expect(linkedList.head.value).toEqual('a');
    expect(linkedList.head.next.value).toEqual('b');
    expect(linkedList.head.next.next.value).toEqual('c');
    expect(linkedList.head.next.next.next).toBeNull();


  });


});

