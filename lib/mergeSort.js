

const smallestFor = (arr1, arr2) => {
  if(!arr1.length && !arr2.length) throw new Error('cannot have two empty arrays');

  if(!arr1.length) return arr2.shift();
  if(!arr2.length) return arr1.shift();
  if(arr1[0] <= arr2[0]) return arr1.shift();
  return arr2.shift();
}

const merge = (left, right) => {
  let sortedArray = [];
  while(left.length || right.length) {
    let smallest = smallestFor(left, right)
    sortedArray.push(smallest);
  }
  return sortedArray;
}

const mergeSort = array => {
  if(array.length === 1) {
    return array;
  }
  const divider = Math.floor(array.length / 2);
  let part1 = array.slice(0, divider);
  let part2 = array.slice(divider);
  return merge(mergeSort(part1), mergeSort(part2))
}

module.exports = { mergeSort };