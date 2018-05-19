let unsortedArray = [6, 3, 9, 5]

const mergeSortArray = array => {
  //break array into two unsorted arrays.
  //break new arrays down more until there's array of one element
  //merge single element arrays into two element sorted arrays
  //merge sorted arrays into larger sorted arrays until there is just one array sorted from lowest to highest
  if(array.length === 1) {
    return array
  }

  let secondPart = array.slice(Math.floor(array.length / 2));
  let firstPart = array.slice(0, Math.floor(array.length / 2));

  merge(mergeSortArray(firstPart), mergeSortArray(secondPart));
}

const breakApart = array => {
  let middle = Math.floor(array.length / 2);
  let part1 = array.slice(middle);
  let part2 = array.slice(middle, array.length);
  return 

}

module.exports = { mergeSortArray };