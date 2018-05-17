const insertionSortArray = require('../lib/insertionSort.js').insertionSortArray;
import { assert } from 'chai';

describe('test', function() {
  it('should sort an array of numbers from highest to lowest', function() {
    let unsortedArray = [6, 3, 9, 2, 5, 7, 10];
    assert.deepEqual(insertionSortArray(unsortedArray), [10, 9, 7, 6, 5, 3, 2]);
  });
  it('should sort an array of words as well', () => {
    let animalArray = ['bear', 'fox', 'deer', 'wolverine'];
    assert.deepEqual(insertionSortArray(animalArray), ['wolverine', 'fox', 'deer', 'bear']);
  })
})