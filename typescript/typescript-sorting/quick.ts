let quickSwaps: number = 0;
let quickChecks: number = 0;

console.log("\nQuick Sort");

const quickSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);


    const sort = (array: number[], start: number, end: number) => {

        console.log("start: ", start, "\nend: ", end)

        if(start === end) {
            return 0;
        }

        let i: number = start;
        let j: number = end;
        let pivotLeft: boolean = false;

        while(i !== j) {
            if(array[i] > array[j]) {
                array[i] = array[i] + array[j];
                array[j] = array[i] - array[j];
                array[i] = array[i] - array[j];

                if(pivotLeft === false) {
                    pivotLeft = true
                } else {
                    pivotLeft = false
                }
            }

            if(pivotLeft === false) {
                j--;
            } else {
                i++;
            }
        }

        console.log("i: ", i, "\nj: ", j);
        sort(array, 0, i - 1);
        // sort(array, j + 1, array.length - 1);

        return array;
    }

    return sort(newArray, 0, newArray.length -1);

}

export { quickSort, quickSwaps, quickChecks }
