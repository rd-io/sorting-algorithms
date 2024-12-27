// import { bubbleSort, bubbleSwaps, bubbleChecks } from './typescript-sorting/bubble';
// import { selectionSort, selectionSwaps, selectionChecks } from './typescript-sorting/selection';
// import { insertionSort, insertSwaps, insertChecks } from './typescript-sorting/insertion';
import { quickSort, quickSwaps, quickChecks } from './typescript-sorting/quick';

const unsortedArray: number[] = [5,1,3,4,8,6,7,2,10,9];
// const almostSortedArray: number[] = [1,2,3,4,5,6,7,9,10,8]


// const sortedArray: number[] = bubbleSort(unsortedArray);
// const sortedArray: number[] = selectionSort(unsortedArray);
// const sortedArray: number[] = insertionSort(unsortedArray);
const sortedArray: number[] = quickSort(unsortedArray);

console.log("\nStarting array:\n", unsortedArray, "\n")
console.log("Ending array:\n", sortedArray, "\n")

// console.log(`This was completed in ${bubbleSwaps} swaps and ${bubbleChecks} checks.\n`)
// console.log(`This was completed in ${selectionSwaps} swaps and ${selectionChecks} checks.\n`)
// console.log(`This was completed in ${insertSwaps} swaps and ${insertChecks} checks.\n`)
console.log(`This was completed in ${quickSwaps} swaps and ${quickChecks} checks.\n`)

/*

RESULTS

            Unsorted
-----------------------------------
Bubble: 12 swaps and 45 checks
Selection: 9 swaps and 45 checks
Insertion: 12 swaps and 20 checks
Quick: 


          Almost Sorted
-----------------------------------
Bubble: 2 swaps and 45 checks
Selection: 9 swaps and 45 checks
Insertion: 2 swaps and 11 checks
Quick: 

*/
