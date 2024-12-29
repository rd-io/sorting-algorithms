let quickSwaps: number = 0;
let quickChecks: number = 0;

console.log("\nQuick Sort");

const quickSort = (array: number[]): number[] => {

    const newArray: number[] = structuredClone(array);

    const sort = (array: number[]): number[] => {

        console.log(array);
        
        let i: number = 0;
        let j: number = array.length;

        if(j <= 1) {
            return array;
        }

        const leftArray: number[] = [];
        const rightArray: number[] = [];

        let leftShift: boolean = false;

        while(i !== j) {
            if(array[i] > array[j]) {
                array[i] = array[i] + array[j];
                array[j] = array[i] - array[j];
                array[i] = array[i] - array[j];
                if (leftShift === false) {
                    leftShift = true;
                } else {
                    leftShift = false;
                }
                quickSwaps++
            }
            quickChecks++
            if(leftShift === false) {
                j--;
            } else {
                i++;
            }
        }

        for(let z = 0; z < array.length; z++) {
            if(z < i) {
                leftArray[z] = array[z];
            } else if(z > i) {
                rightArray[z-i-1] = array[z];
            }
        }


        const returnArray: number[] = [];

        if(leftArray[0] !== undefined) {
            returnArray.push(...sort(leftArray))
        }
        if(array[i] !== undefined) {
            returnArray.push(array[i])
        }
        if(rightArray[0] !== undefined) {
            returnArray.push(...sort(rightArray))
        }

        return returnArray;

    }

    return sort(newArray);

}

export { quickSort, quickSwaps, quickChecks }
