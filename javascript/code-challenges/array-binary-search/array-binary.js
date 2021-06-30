'use strict';

function BinarySearch (arr, value){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) {

      return middle;
    } else if (arr[middle] < value) {

      start = middle + 1;
    } else {

      end = middle - 1;
    }
  }
  return -1;
}

