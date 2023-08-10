function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'take a number as parameter';
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}
const inputNumber1 = (3);
const inputNumber2 = (4);
const outputNumber1 = cubeNumber(inputNumber1);
const outputNumber2 = cubeNumber(inputNumber2);
console.log(outputNumber1);
console.log(outputNumber2);