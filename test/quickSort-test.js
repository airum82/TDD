import { assert } from 'chai';
const quickSort = require("../lib/quickSort.js").quickSort;

describe.only('test', function() {
   it('should exist as a function', () => {
    assert.isFunction(quickSort);
  })
  it('should quick sort an array of numbers from lowest to highest', function() {
    let unsortedArray = [6, 3, 9, 5]
    assert.deepEqual(quickSort(unsortedArray), [3, 5, 6, 9])
  })
  it('should sort an array of words as well', () => {
    let animalArray = ['bear', 'fox', 'deer', 'wolverine'];
    assert.deepEqual(quickSort(animalArray), ['bear', 'deer', 'fox', 'wolverine']);
  })
  it('should work with a larger array', () => {
    let unsortedArray = [5, 7, 9, 3, 10, 4, 6, 3, 6, 8, 9, 11];
    assert.deepEqual(quickSort(unsortedArray), [ 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11 ]);
  })
  it('should work on a very large array of larger numbers', () => {
    let superBigArray = [45, 65, 45, 70, 75, 80, 100, 3, 5, 7, 10, 11, 12, 13, 14, 10, 120, 140, 155, 160, 170, 180, 200, 220, 240, 250, 69, 95, 430, 350, 100, 90, 35, 20, 980, 67, 20];
    assert.deepEqual(quickSort(superBigArray), [ 3,
  5,
  7,
  10,
  10,
  11,
  12,
  13,
  14,
  20,
  20,
  35,
  45,
  45,
  65,
  67,
  69,
  70,
  75,
  80,
  90,
  95,
  100,
  100,
  120,
  140,
  155,
  160,
  170,
  180,
  200,
  220,
  240,
  250,
  350,
  430,
  980 ])
  })
})