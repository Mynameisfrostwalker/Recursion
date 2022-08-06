const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1) {
        return arr;
    }

    const divide = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.splice(0, divide));
    const arr2 = mergeSort(arr);

    const newArr: number[] = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1[0]);
            arr1.shift();
        } else {
            newArr.push(arr2[0]);
            arr2.shift();
        }
    }
    if (arr1.length > 0) {
        newArr.push(...arr1)
    } else if (arr2.length > 0) {
        newArr.push(...arr2)
    }

    return newArr
}

const randomArr = (num: number) => {
    const arr: number[] = [];
    for (let i = 0; i < num; i += 1) {
        arr.push(Math.floor(Math.random() * 100))
    }

    return arr
}

const arr = randomArr(20)

console.log(arr)
console.log(mergeSort(arr))
