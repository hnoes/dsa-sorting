// Function to perform selection sort on an array
function selectionSort(arr) {
  // Helper function to swap two elements in the array
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;  // Assume the current index has the lowest value

    // Iterate through the remaining unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;  // Update 'lowest' if a smaller value is found
      }
    }

    // If 'lowest' is not the same as 'i', swap the elements
    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }

  return arr;  // Return the sorted array
}

// Export the selectionSort function for use in other JavaScript files
module.exports = selectionSort;
