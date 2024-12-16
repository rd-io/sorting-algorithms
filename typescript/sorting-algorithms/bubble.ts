const test = (): void => {
    console.log("This is a test");
}

// array = [8,2,3,5,1,4,7,6,10,9]

const bubbleSort = (array: Number[]): Number[] => {

    const newArray: Number[] = structuredClone(array)
    let j: number = newArray.length;
    let steps = 0;

    while(j > 0) {
        for(let i: number = 1; i < j; i++ ) {
            steps++
            if(newArray[i-1] > newArray[i]) {
                const temp = newArray[i-1];
                newArray[i-1] = newArray[i];
                newArray[i] = temp;
            }
        }
    j--
    }

    console.log("\nStarting array: ", array)
    console.log("Ending array: ", newArray)
    console.log(`This was completed in ${steps} steps.\n`)
    return newArray;
}

export { test, bubbleSort };
