

const Stack = require('../stack');

describe('stack', () => {
    let stack;
    //we create before each  for aviod reainstaintion each time we call the functions 
    beforeEach(() => {
        stack = new Stack();
    })


    it('Creates an instance of Stack', () => {
        expect(stack instanceof Stack).toBeTruthy();
    });



    describe('peek', () => {

        it('return last item added on the Stack', () => {
            stack.push(1);
            expect(stack.peek()).toEqual(1);
            stack.push(2);
            expect(stack.peek()).toEqual(2);
        });
        it('does not alter the stack', () => {
            stack.push(1);
            expect(stack.peek()).toEqual(1);
            expect(stack.peek()).toEqual(1);
        });
        it('point to the correct item after pop() on the stack', () => {
            stack.push(1);
            stack.push(2);
            expect(stack.pop()).toEqual(2);
            expect(stack.peek()).toEqual(2);
        });
    });

    describe('push', () => {
        it('add items to the top of the stack', () => {
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toEqual(3);
        });
        describe('pop', () => {
            it('add items to the top of the stack', () => {
                stack.push(1);
                stack.push(2);
                stack.push(3);
                expect(stack.pop()).toEqual(3);


            });
        });
    });


    describe('peek', () => {
        it('Can successfully peek', () => {
            stack.push(1);
            stack.push(2);
         
            expect(stack.peek()).toBe(2);
       
        });
    
    
    });
    describe('is empty stack', () => {
        it('Can successfully return false not empty ', () => {
            stack.push(1);
            stack.push(2);
         
            expect(stack. isEmpty()).toBeFalsy;
       
        });
        it('Can successfully return true  empty ', () => {
         
         
            expect(stack. isEmpty()).toBeTruthy;
       
        });
    
    
    });


})