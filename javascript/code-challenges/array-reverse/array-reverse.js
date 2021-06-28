'use strict';

function reverseArray(arr){
    let newReverseArray =[];
    for(let i=arr.length-1; i >=0;i-- ){
     newReverseArray.push(arr[i]);

    }
    return newReverseArray;
}


module.exports=reverseArray;