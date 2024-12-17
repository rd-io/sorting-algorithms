import { bubbleSort, steps } from './typescript-sorting/bubble';

const unsortedArray: number[] = [5,1,3,4,8,6,7,2,10,9];
const sortedArray: number[] = bubbleSort(unsortedArray);


console.log("\nStarting array:\n", unsortedArray, "\n")
console.log("Ending array:\n", sortedArray, "\n")
console.log(`This was completed in ${steps} steps.\n`)
