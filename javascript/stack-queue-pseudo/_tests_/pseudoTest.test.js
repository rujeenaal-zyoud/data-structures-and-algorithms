
const { Besudo } = require('../pseudo.js');

const { expect } = require('@jest/globals');



describe('Happy Path', () => {

    it('enqueue into stack successfully', ()=> {
        let pesudo = new Besudo();

        pesudo.enqueue(1);
        pesudo.enqueue(2);
        pesudo.enqueue(3);


        expect(pesudo.queueStack.top.value).toBe(3);

    });


    it('dequeue into stack successfully', () => {
        let pesudo = new Besudo();

        pesudo.enqueue(1);
        pesudo.enqueue(2);
        pesudo.dequeue(3);

        expect(pesudo.dequeue()).toEqual(3);


    });

})



