const insertionSortArray = require('../lib/insertionSort.js').insertionSortArray;
import { assert } from 'chai';

describe('test', function() {
  it('should exist as a function', () => {
    assert.isFunction(insertionSortArray);
  })
  it('should sort an array of numbers from highest to lowest', function() {
    let unsortedArray = [6, 3, 9, 2, 5, 7, 10];
    assert.deepEqual(insertionSortArray(unsortedArray), [10, 9, 7, 6, 5, 3, 2]);
  });
  it('should sort an array of words as well', () => {
    let animalArray = ['bear', 'fox', 'deer', 'wolverine'];
    assert.deepEqual(insertionSortArray(animalArray), ['wolverine', 'fox', 'deer', 'bear']);
  })
  it('should work with a larger array', () => {
    let unsortedArray = [5, 7, 9, 3, 10, 4, 6, 3, 6, 8, 9, 11];
    assert.deepEqual(insertionSortArray(unsortedArray), [11, 10, 9, 9, 8, 7, 6, 6, 5, 4, 3, 3]);
  })
  it('should work on a very large array of larger numbers', () => {
    let superBigArray = [45, 65, 45, 70, 75, 80, 100, 3, 5, 7, 10, 11, 12, 13, 14, 10, 120, 140, 155, 160, 170, 180, 200, 220, 240, 250, 69, 95, 430, 350, 100, 90, 35, 20, 980, 67, 20];
    assert.deepEqual(insertionSortArray(superBigArray), [ 980,
  430,
  350,
  250,
  240,
  220,
  200,
  180,
  170,
  160,
  155,
  140,
  120,
  100,
  100,
  95,
  90,
  80,
  75,
  70,
  69,
  67,
  65,
  45,
  45,
  35,
  20,
  20,
  14,
  13,
  12,
  11,
  10,
  10,
  7,
  5,
  3 ])
})
});