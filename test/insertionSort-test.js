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
})