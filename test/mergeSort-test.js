const mergeSortArray = require('../lib/mergeSort.js').mergeSortArray;
import { assert } from 'chai';

describe('test', function() {
  it('should merge sort an array of numbers from lowest to highest', function() {
    let unsortedArray = [6, 3, 9, 5]
    assert.deepEqual(mergeSortArray(unsortedArray), [9, 6, 5, 3])
  })
})