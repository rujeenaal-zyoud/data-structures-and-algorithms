'use strict';


const insertShiftArray =require ('../array-shift');

describe('insert array test', () => {
    it('should return an array insert-middle from a given array', () => {
      expect(insertShiftArray([2,4,6,-8],5)).toEqual([2,4,5,6,-8]);
    });
  
  });