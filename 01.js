01
function DNAtoRNA(dna) {
    let str = '';
    for (let i = 0; i < dna.length; i++){
        if (dna[i] == 'T'){
            str += 'U';
        } else {
            str += dna[i];
        }
    }
    return str;
}

02
function findNeedle(haystack) {
    // your code here
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == 'needle') {
            return 'found the needle at position ' + i;
        }
    }
}

03
function fakeBin(x){
    let answer = x.split('')
    let result = [];
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] < 5) {
            result.push(0)
        } else {
            result.push(1)
        }
    }
    return result.join("");
}

04
function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    }
    return number * 9;
}

05
function opposite(number) {
    //your code here
    return number * (- 1);
}

06
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}

07
function greet (name, owner) {
    if (name == owner) {
        return 'Hello boss';
    }
    return 'Hello guest';
}

08
function noSpace(x){
    return x.replace(/ /g,'');
}

09
function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + (numbers[i] * numbers[i]);
    }
    return sum;
}

010
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let counter = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i]) {
            counter += 1;
        }
    }
    return counter;
}