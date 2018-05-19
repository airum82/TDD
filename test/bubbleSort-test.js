const sortArray = require('../lib/bubbleSort.js').sortArray;
import { assert } from 'chai';

describe('test', function() {
    it('It should exist as a function', () => {
      assert.isFunction(sortArray);
    })
    it('should sort an unsorted array from lowest to highest using bubble method', function() {
      let unsortedArray = [6, 3, 9, 2, 5];
      sortArray(unsortedArray);
      assert.deepEqual(unsortedArray, [2, 3, 5, 6, 9]);
    });
    it('should work on an array of words as well', () => {
      let unsortedArray = ['cat', 'dog', 'snake', 'rat'];
      sortArray(unsortedArray);
      assert.deepEqual(unsortedArray, ['cat', 'dog', 'rat', 'snake']);
    })
    it('should work with a larger array', () => {
      let unsortedArray = [5, 7, 9, 3, 10, 4, 6, 3, 6, 8, 9, 11];
      assert.deepEqual(sortArray(unsortedArray), [3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 10, 11]);
    })
  });