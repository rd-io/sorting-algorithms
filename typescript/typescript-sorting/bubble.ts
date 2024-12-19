let bubbleSwaps: number = 0;
let bubbleChecks: number = 0;

console.log("\nBubble Sort")

const bubbleSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);
    let j: number = newArray.length;

    while(j > 0) {
        for(let i: number = 1; i < j; i++ ) {
            bubbleChecks++
            if(newArray[i-1] > newArray[i]) {
                const temp = newArray[i-1];
                newArray[i-1] = newArray[i];
                newArray[i] = temp;
                bubbleSwaps++
            }
        }
    j--;
    }

    return newArray;
}

export { bubbleSort, bubbleSwaps, bubbleChecks };
