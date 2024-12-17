let steps2: number = 0;

const selectionSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);
    let j: number = array.length - 1;

    while(j > 0) {
        let biggestNumber: number = newArray[0];
        let biggestNumberLocation: number = 0;
        for(let i: number = 1; i <= j; i++) {
            steps2++;
            if(newArray[i] > biggestNumber) {
                biggestNumber = newArray[i];
                biggestNumberLocation = i;
            }
        }
        const temp: number = newArray[j];
        newArray[j] = biggestNumber;
        newArray[biggestNumberLocation] = temp;
        j--;
    }
    return newArray;
}

export { selectionSort, steps2 };
