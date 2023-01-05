061
function greet(name){
    return 'Hello, ' + name + ' how are you doing today?'
}

062
function getRealFloor(n) {
    if (n > 12) {
        return n - 2;
    }
    if(n > 0) {
        return n - 1;
    }
    return n;
}

063
function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (sum % 2 == 0) {
        return 'even';
    }
    return 'odd';
}

064
function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
        p0 = Math.floor((1 + percent / 100) * p0 + aug);
        count++
    }
    return count;
}

065
const arithmetic = (a, b, operator) => {
    return  (
        operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
}

066
smallEnough = (a, limit) => a.every(e => e <= limit)

067
let num = 8181
let numbers = num.toString().split('')
let r = numbers.map((el)=> el **2)
let r1 = +r.join('')

function squareDigits(num) {
    return +num.toString().split('').map(i => i * i).join('');
}

068
const doubleChar = (str) => str.split("").map(c => c + c).join("");
