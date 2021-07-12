'use strict';
const Queue = require('../stack&queue/queue');
//create class 
class AnimalShelter {
    constructor() {
        //reinstict class Queue to create objects 
        this.cat = new Queue()
        this.dog = new Queue()

    }

    //function enque the object

    enqueue(animal) {
        if (animal === 'cat') {
            this.cat.enqueue(animal);
        }
        if (animal === 'dog') {
            this.dog.enqueue(animal);

        }
    }




    dequeue(pref) {
        if (pref === 'cat') {
            return this.cat.dequeue()
        }
        if (pref === 'doq') {
            return this.dog.dequeue()
        }
        else if (pref !== 'cat' && pref !== 'doq') {
            return null
        }




    }

}


    module.exports= AnimalShelter ;
