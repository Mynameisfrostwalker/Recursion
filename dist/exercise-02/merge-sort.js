"use strict";
var mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr;
    }
    var divide = Math.floor(arr.length / 2);
    var arr1 = mergeSort(arr.splice(0, divide));
    var arr2 = mergeSort(arr);
    var newArr = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1[0]);
            arr1.shift();
        }
        else {
            newArr.push(arr2[0]);
            arr2.shift();
        }
    }
    if (arr1.length > 0) {
        newArr.push.apply(newArr, arr1);
    }
    else if (arr2.length > 0) {
        newArr.push.apply(newArr, arr2);
    }
    return newArr;
};
var randomArr = function (num) {
    var arr = [];
    for (var i = 0; i < num; i += 1) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
};
var arr = randomArr(20);
console.log(arr);
console.log(mergeSort(arr));
//# sourceMappingURL=merge-sort.js.map