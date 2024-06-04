export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = []; //create array of sorted and merged number
    let i = 0, j = collection2.length - 1, k = 0; //collection1: ASC, collection2: DES, collection3: ASC

    while (i < collection1.length && j >= 0 && k < collection3.length) { //Loop until index of collection1, collection2, collection3 is last, first, last number of each array
        if (collection1[i] <= collection2[j] && collection1[i] <= collection3[k]) { //if number of collection1[i] is less than other then append collection1[i] to result and increase index by 1
            result.push(collection1[i]);
            i++;
        } else if (collection2[j] <= collection1[i] && collection2[j] <= collection3[k]) { //if number of collection2[j] is less than other then append collection2[j] to result and decrease index by 1
            result.push(collection2[j]);
            j--;
        } else { //if number of collection3[k] is less than other then append collection3[k] to result and increase index by 1
            result.push(collection3[k]);
            k++;
        }
    }

    //Loop above is for case that have remaining number after merging process
    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }

    while (j >= 0) {
        result.push(collection2[j]);
        j--;
    }

    while (k < collection3.length) {
        result.push(collection3[k]);
        k++;
    }

    return result; //return merged and sorted array
}