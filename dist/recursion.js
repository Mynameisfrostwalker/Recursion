"use strict";
var fibs = function (num) {
    var arr = [1, 1];
    for (var i = 3; i <= num; i += 1) {
        arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr;
};
var fibsRec = function (num) {
    if (num === 2) {
        return [1, 1];
    }
    var arr = fibsRec(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
};
console.log(fibsRec(8));
//# sourceMappingURL=recursion.js.map