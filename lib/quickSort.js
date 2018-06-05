function quickSort(arr) {
  if(arr.length < 1) {
    return arr;
  }
  let p = arr[arr.length - 1];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] <= p) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), p, ...quickSort(right)];
}

module.exports = { quickSort };