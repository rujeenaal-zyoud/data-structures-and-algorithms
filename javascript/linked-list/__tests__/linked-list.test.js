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




describe('include methode to search value in  the  of list', () => {
  it('should return true if value in list', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    
    expect(linkedList.include('a')).toEqual(true);
    linkedList.include('a');

  });
  it('should return false if value not in thelist', () => {
    const linkedList = new LinkedList();
    linkedList.insert('a');
    expect(linkedList.include('b')).toEqual(false);
    

  });


});






describe('to string methode that return data in linked list with -> ', () => {
  it('should return array of data ', () => {
    const linkedList = new LinkedList();
  

    linkedList.insert(1);
    linkedList.insert(4);
    linkedList.insert(8);

    
    expect(linkedList.toString()).toEqual('{ 8 } -> { 4 } -> { 1 } -> NULL');


  });



});