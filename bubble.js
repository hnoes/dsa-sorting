function bubbleSort(arr) {
    // helper function to swap elements in the array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  //outer loop: iterate from the end of the array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    // inner loop: iterate through the unsorted part of the array
    for (let j = 0; j < i - 1; j++) {
        //compare adjacent elements and swap if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

module.exports = bubbleSort;