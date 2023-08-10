function findAddress(obj)  {
    if (typeof obj !== 'object') {
        return 'take a object as parameter';
    } else {
        const street = obj.street;
        const house = obj.house || '__';
        const society = obj.society || '__';
        const result = '' + street + ',' + house + ',' + society + '';
        return result;

    }
}

const obj1 = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
const obj2 = {
    street: 10,
    society: 'Earth Perfect'
}
const obj3 = {
    street: 10
}
const result1 = findAddress(obj1);
const result2 = findAddress(obj2);
const result3 = findAddress(obj3);
console.log(result1);
console.log(result2);
console.log(result3);