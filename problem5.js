// function canPay(changeArray, totalDue) {
//     if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
//         return 'take array and number as parameter';
//     } else {
//         if (changeArray.length === 0) {
//             return 'take an array with value';
//         } else {
//             let totalAmmountOfArray = 0;
//             for (let index = 0; index < changeArray.length; index++) {
//                 const element = changeArray[index];
//                 totalAmmountOfArray = totalAmmountOfArray + element;
//             }
//             if (totalAmmountOfArray >= totalDue) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }
// const array1 = [1, 2, 5];
// const price1 = 10;
// const array2 = [1, 5, 5];
// const price2 = 10;
// const result1 = canPay(array1, price1);
// const result2 = canPay(array2, price2);
// console.log(result1);
// console.log(result2);


function compare(number) {
    let result = number * number * number;
    return result;
}
const result1 = compare(3);
const result2 = compare(4);
console.log(result1);
console.log(result2);
