let quickPartitions: number = 0;
let quickChecks: number = 0;

console.log("\nQuick Sort");

const quickSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);

    const sort = (array: number[]): number[] => {

        if(array.length <= 1) {
            return array;
        }

        const pivot: number = array[Math.floor(array.length / 2) - 1];

        const leftArray: number[] = [];
        const rightArray: number[] = [];

        for(let i: number = 0; i < array.length; i++) {
            if(array[i] < pivot) {
                leftArray.push(array[i]);
                quickChecks++
            } else if(array[i] > pivot) {
                rightArray.push(array[i]);
                quickChecks++
            }
        }

        quickPartitions++
        return [...sort(leftArray),pivot,...sort(rightArray)]

    }

    return sort(newArray);

}

export { quickSort, quickPartitions, quickChecks }
