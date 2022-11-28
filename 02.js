011
function hero(bullets, dragons){
//Get Coding!
    if (bullets / dragons >= 2) {
        return true;
    }
    return false;
}

012
function century(year) {
    let result = 0;
    for (let i = 0; i < year; i++) {
        if (i % 100 === 0) {
            result++;
        }
    }
    return result;

}

013
function disemvowel(str) {
    let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
    return newStr;
}

014
return (str.match(/[aeiou]/ig) || []).length;

015
function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums];
}