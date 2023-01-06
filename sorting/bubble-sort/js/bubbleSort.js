/**
 * In-place array bubble-sorting
 * @param {Array} arr Array to sort
 * @returns {Array} sorted array
 */
function bubbleSort(arr) {
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    let stop = true;
    for (let j = 0; j < size - i - 1; j++) {
      const a = arr[j];
      const b = arr[j + 1];
      if (a > b) {
        arr[j] = b;
        arr[j + 1] = a;
        stop = false;
      }
    }
    if (stop) {
      break;
    }
  }
  return arr;
}

// Test
const randomArray = [...new Array(100).keys()].map((x) => Math.round(Math.random() * 100));
console.log(`original:\n\t${JSON.stringify(randomArray)}\n\nsorted:\n\t${JSON.stringify(bubbleSort(randomArray))}\n`);
