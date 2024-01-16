// Function to get the digit at a specified position (from right to left) in a number
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;  // Special case: If the number is 0, it has one digit
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the maximum number of digits among the elements in an array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Function to perform radix sort on an array of numbers
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);  // Find the maximum number of digits in the array
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);  // Create 10 empty digit buckets (0-9)
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      let digit = getDigit(num, k);  // Get the k-th digit (from right to left) of each number
      digitBuckets[digit].push(num);  // Place the number in the corresponding digit bucket
    }
    nums = [].concat(...digitBuckets);  // Concatenate the digit buckets to form a new array
  }
  return nums;  // Return the sorted array
}

// Export the getDigit, digitCount, mostDigits, and radixSort functions for use in other JavaScript files
module.exports = { getDigit, digitCount, mostDigits, radixSort };
