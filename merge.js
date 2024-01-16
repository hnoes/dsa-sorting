// function to merge two sorted arrays into a single sorted array
function merge(arr1, arr2) {
  let results = []; // initialize an empty array to store the merged results
  let i = 0; // initialize a pointer for arr1
  let j = 0; // initialize a pointer for arr2

  // compare elements from arr1 and arr2 while both arrays of elements left
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]); // add the smaller element from arr1 to results
      i++; // move the pointer for arr1 to the next element
    } else {
      results.push(arr2[j]); // add the smaller element from arr2 to results
      j++; // move the pointer for arr2 to the next element
    }
  }

  // add any remaining elements from the arr1 to results (if any)
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // add any remaining elements from arr2 to results (if any)
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results; // return the merged and sorted array
}

// function to perform merge sort on an array
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case: if the array has 0 or 1 element, it's already sorted

  const mid = Math.floor(arr.length / 2); // calculate the midpoint of the array
  const left = mergeSort(arr.slice(0, mid)); // recursively sort the left half
  const right = mergeSort(arr.slice(mid)); // recursively sort the right half

  return merge(left, right); // merge the sorted left and right halves and return the result
}

// export the merge and mergeSort functions for use in other JavaScript files
module.exports = { merge, mergeSort };