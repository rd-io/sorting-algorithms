let insertSwaps: number = 0;
let insertChecks: number = 0;

console.log("\nInsertion Sort")

const insertionSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);

    for(let j:number = 1; j < newArray.length; j++) {
        for(let i:number = j; i > 0; i--) {
            insertChecks++
            if(newArray[i-1] > newArray[i]) {
                newArray[i-1] = newArray[i-1] + newArray[i];
                newArray[i] = newArray[i-1] - newArray[i];
                newArray[i-1] = newArray[i-1] - newArray[i];
                insertSwaps++;
            } else {
                break;
            }
        }
    }
    return newArray;
}

export { insertionSort, insertSwaps, insertChecks }
