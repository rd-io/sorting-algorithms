let selectionSwaps: number = 0;
let selectionChecks: number = 0;

console.log("\nSelection Sort")

const selectionSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);
    let j: number = newArray.length - 1;

    while(j > 0) {
        let biggestNumber: number = newArray[0];
        let biggestNumberLocation: number = 0;
        for(let i: number = 1; i <= j; i++) {
            selectionChecks++;
            if(newArray[i] > biggestNumber) {
                biggestNumber = newArray[i];
                biggestNumberLocation = i;
            }
        }
        const temp: number = newArray[j];
        newArray[j] = biggestNumber;
        newArray[biggestNumberLocation] = temp;
        selectionSwaps++;
        j--;
    }
    return newArray;
}

export { selectionSort, selectionSwaps, selectionChecks };
