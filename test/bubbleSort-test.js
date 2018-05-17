const sortArray = require('../lib/bubbleSort.js').sortArray;
import { assert } from 'chai';

describe('test', function() {
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
  });