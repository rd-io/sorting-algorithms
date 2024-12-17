import { bubbleSort, steps } from './typescript-sorting/bubble';
import { selectionSort, steps2 } from './typescript-sorting/selection';

const unsortedArray: number[] = [5,1,3,4,8,6,7,2,10,9];


// const sortedArray: number[] = bubbleSort(unsortedArray);
const sortedArray: number[] = selectionSort(unsortedArray);

console.log("\nStarting array:\n", unsortedArray, "\n")
console.log("Ending array:\n", sortedArray, "\n")
console.log(`This was completed in ${steps2} steps.\n`)
