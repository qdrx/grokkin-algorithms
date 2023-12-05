function findSmallest<T extends string | number>(arr: T[]) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort<T extends string | number>(arr: T[]) {
    const newArr = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}

console.log(selectionSort([7, 10, 27, 31, 5, 1]));
console.log(selectionSort(['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']));