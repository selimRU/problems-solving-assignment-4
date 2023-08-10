function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'take a number as parameter';
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}

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

function findAddress(obj) {
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

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
        return 'take array and number as parameter';
    } else {
        if (changeArray.length === 0) {
            return 'take an array with value';
        } else {
            let totalAmmountOfArray = 0;
            for (let index = 0; index < changeArray.length; index++) {
                const element = changeArray[index];
                totalAmmountOfArray = totalAmmountOfArray + element;
            }
            if (totalAmmountOfArray >= totalDue) {
                return true;
            } else {
                return false;
            }
        }
    }
}