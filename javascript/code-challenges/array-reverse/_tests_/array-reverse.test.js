'use strict';


const reverseArray =require ('../array-reverse');

describe('revers array test', () => {
    it('should return an array reversed from a given array', () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5,4,3,2,1]);
    });
    it('should return an array reversed from a given array', () => {
      expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toEqual([-12, 823, -923,10,23, 3546,2354,89 ]);
    });

  });