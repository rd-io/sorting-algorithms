let steps = 0;

const bubbleSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array)
    let j: number = newArray.length;

    while(j > 0) {
        for(let i: number = 1; i < j; i++ ) {
            steps++;
            if(newArray[i-1] > newArray[i]) {
                const temp = newArray[i-1];
                newArray[i-1] = newArray[i];
                newArray[i] = temp;
            }
        }
    j--;
    }

    return newArray;
}

export { bubbleSort, steps };
