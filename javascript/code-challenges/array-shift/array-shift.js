'use strict';
function insertShiftArray(arr, newItem) {
    let newArr = [];

    let theMiddle = Math.floor(arr.length / 2); // index 2
    // push the old array into new array untel middle index the out of loop
    for (let i = 0; i < theMiddle; i++) {
        newArr.push(arr[i])
    }
    //now will push the new item into 
    newArr.push(newItem);
    for (let j = theMiddle; j < arr.length; j++) {
        newArr.push(arr[j]);

    }
    return newArr;
}

module.exports = insertShiftArray;