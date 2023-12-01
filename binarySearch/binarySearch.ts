import {faker} from "@faker-js/faker";

const numArray: number[] = new Array(150).fill(0).map((_, i) => i + 1);
const stringArray: string[] = new Array(100).fill(null).map(() => faker.person.lastName()).sort();

const searchInSortedArray = <T extends string | number>(array: T[], target: T) => {
    let low = 0;
    let high = array.length - 1;
    let counter = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        counter++
        if (guess === target) {
            return {mid, counter, value: array[mid]};
        }

        if (guess < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return {counter};
}
console.log(searchInSortedArray(numArray, 50));
console.log(searchInSortedArray(stringArray, stringArray[30]));