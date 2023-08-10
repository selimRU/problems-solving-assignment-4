

// function sortMaker(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         arr[index];
//         if (arr[0] < 0 || arr[1] < 0) {
//             return 'invalid input';
//         }
//         else if (arr[0] < arr[1]) {
//             return [arr[1], arr[0]];
//         }
//         else if (arr[0] > arr[1]) {
//             return arr;
//         }
//         else if (arr[0] === arr[1]) {
//             return 'equal';
//         }
//     }

// }
// const inputArray1 = [2, 3];
// const inputArray2 = [4, 2];
// const inputArray3 = [4, 4];
// const inputArray4 = [1, 2];
// const inputArray5 = [4, -2];
// const result1 = sortMaker(inputArray1);
// const result2 = sortMaker(inputArray2);
// const result3 = sortMaker(inputArray3);
// const result4 = sortMaker(inputArray4);
// const result5 = sortMaker(inputArray5);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'take an array as parameter';
    }
    const first = arr[0];
    const second = arr[1];
    if (first < 0 || second < 0) {
        return 'Invalid Input';
    }
    else if (first > 0 && second > 0 && first < second) {
        return [second, first];
    }
    else if (first > second) {
        return arr;
    }
    else if (first === second) {
        return 'equal';
    }
    else {
        return false;
    }
}
const inputArray1 = [2, 3];
const inputArray2 = [4, 2];
const inputArray3 = [4, 4];
const inputArray4 = [1, 2];
const inputArray5 = [4, -2];
const result1 = sortMaker(inputArray1);
const result2 = sortMaker(inputArray2);
const result3 = sortMaker(inputArray3);
const result4 = sortMaker(inputArray4);
const result5 = sortMaker(inputArray5);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
