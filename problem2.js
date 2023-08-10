function matchFinder(string1, string2) {
    let first = string1;
    let second = string2;
    if (typeof first !== 'string' || typeof second !== 'string') {
        return 'take two strings as parameter';
    } else {
        if (first.includes(second)) {
            return true;
        }
        else {
            return false;
        }
    }
}
const inputString1 = ('john Doe');
const inputString2 = ('ohn');
const inputString3 = ('javaScript');
const inputString4 = ('Code');
const inputString5 = ('Peter Parker');
const inputString6 = ('Pen');
const inputString7 = ('Peter Parker');
const inputString8 = ('pet');

const result1 = matchFinder(inputString1, inputString2);
const result2 = matchFinder(inputString3, inputString4);
const result3 = matchFinder(inputString5, inputString6);
const result4 = matchFinder(inputString7, inputString8);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);