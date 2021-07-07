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

describe('insert before methode  ', () => {
  it('should return array of data with new vaule ', () => {
    const linkedList = new LinkedList();
  
    
    linkedList.insert(1);
    linkedList.insert(4);
    linkedList.insert(8);
    linkedList.insertBefore(8,10)

    
    expect(linkedList.head.next.value).toEqual(8);


  });

  it(' insert a node after the last node of the linked list',() => {
    let linkedList = new LinkedList();
    
    linkedList.insert(5);
    linkedList.insert(7);
    linkedList.insertAfter(7,3);
    
    expect(linkedList.head.next.value).toEqual(3);
  });



});



describe('Kth from end', () => {

  it('k is greater than the length of the linked list',()=>{
    const linked = new LinkedList();

    linked.append('one');
    linked.append('two');
    linked.append('three');
    linked.append('four');
    linked.insertAfter('six','four');

    expect(linked.kthFromEnd(9)).toBe('Exception');
  })

  it('k and the length are the same',()=>{
    const linked = new LinkedList();

    linked.append('one');
    linked.append('two');
    linked.append('three');
    linked.append('four');
    linked.insertAfter('six','four');

    expect(linked.kthFromEnd(5)).toBe('Exception');
  })

  it('K is not a positive integer',()=>{
    const linked = new LinkedList();

    linked.append('one');
    linked.append('two');
    linked.append('three');
    linked.append('four');
    linked.insertAfter('six','four');

    expect(linked.kthFromEnd(-5)).toBe('Exception');
  })

  it('Linked list of size 1',()=>{
    const linked = new LinkedList();

    linked.insert('one');

    expect(linked.kthFromEnd(1)).toBe('Exception');
    expect(linked.kthFromEnd(0)).toBe('one');
    expect(linked.kthFromEnd(-1)).toBe('Exception');
  })

});

describe('linked list zip',()=>{
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  const linked = new LinkedList();

  for(let i=0;i<5;i++){
    list1.append(i);
  }
  for(let i=0;i<5;i++){
    list1.append(i+10);
  }
  expect(linked.zipLists(list1,list2)).toBe('{ 0 } -> { 1 } -> { 2 } -> { 3 } -> { 4 } -> { 10 } -> { 11 } -> { 12 } -> { 13 } -> { 14 } -> NULL');
})