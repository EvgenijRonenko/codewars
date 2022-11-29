021
function solution(str){
    return str.split("").reverse().join("");
}

022
function boolToWord( bool ){
    if (bool === true) {
        return 'Yes';
    }
    return 'No';
}

023
function descendingOrder(n){
    return parseInt(n.toString().split("").sort((a, b) => b - a).join(''));
}

024
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
};

025
function makeNegative(num) {
    if (num > 0) {
        return num * -1;
    }
    return num;
}

026
function numberToString(num) {
    return String(num);
}

027
const stringToNumber = function(str){
    return Number(str);
}

028
function grow(x){
    let res = 1;
    for (let elem of x) {
        res *= elem;
    }
    return res;
}

029
function findAverage(array) {
    let counter = 0;
    let result = 0;
    let a = 0;
    let b = 0;
    for (let elem of array) {
        counter++;
    }

    for (let i = 0; i < array.length; i++){
        a = result += array[i];
        b = a / counter;

    }

    return b;
}

030
let summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum;
}
