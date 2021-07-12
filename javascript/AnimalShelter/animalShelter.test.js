
const Animal=require('../AnimalShelter/animal-shalter');

describe('animal-Shelter', () => {
    //we create before each  for aviod reainstaintion each time we call the functions 
    let animal = new Animal();

    it('Creates an instance of Animal class', () => {
        expect(animal instanceof Animal).toBeTruthy();
    });


})




describe('enqueue Animal', () => {
    let animal = new Animal();
    it('Can successfully enqueue cat to cat queue', () => {
        animal.enqueue('cat');
        expect( animal.enqueue('cat')).toBe('cat');
    
      });
  


});
