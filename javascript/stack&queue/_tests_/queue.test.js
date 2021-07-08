
const Queue = require('../queue');

describe('queue', () => {
    let queue;
    //we create before each  for aviod reainstaintion each time we call the functions 
    beforeEach(() => {
        queue = new Queue();
    })


    it('Creates an instance of Queue', () => {
        expect(queue instanceof Queue).toBeTruthy();
    });

    describe('enqueue', () => {
        it('Can successfully enqueue multiple values into a queue then dequeue ', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.enqueue(4);
            expect(queue.dequeue()).toEqual(1);
            expect(queue.dequeue()).toEqual(2);
            expect(queue.dequeue()).toEqual(3);
            expect(queue.dequeue()).toEqual(4);
        });


});


describe('peek', () => {
    it('Can successfully peek', () => {
        queue.enqueue(1);
        queue.enqueue(2);
     
        expect(queue.peek()).toBe(1);
   
    });


});
describe('is empty queue', () => {
    it('Can successfully return false not empty ', () => {
        queue.enqueue(1);
        queue.enqueue(2);
     
        expect(queue. isEmpty()).toBeFalsy;
   
    });
    it('Can successfully return true  empty ', () => {
     
     
        expect(queue. isEmpty()).toBeTruthy;
   
    });


});


});