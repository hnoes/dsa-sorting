// function to perform insertion sort on an array
function insertionSort(arr) {
  // iterate through the entire array
  for (let i = 0; i < arr.length; i++) {
    // store the current value to be inserted into its correct position
    let currentValue = arr[i];

    // start comparing the current value with the elements before it
    for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      // shift the element one position up if it's greater than the current value
      arr[j + 1] = arr[j];
    }

    // insert the current value into its correct sorted position
    arr[j + 1] = currentValue;
  }

  // return the sorted array
  return arr;
}

// export the insertionSort function for use in other JavaScript files
module.exports = insertionSort;