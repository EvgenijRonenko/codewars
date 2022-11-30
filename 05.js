041
function paperwork(n, m) {
    if (n > 0 && m > 0) {
        return n * m;
    }
    return 0;
}

042
const enough = (cap, on, wait) => (on + wait) >= cap ? (on + wait) - cap : 0;

043
function otherAngle(a, b) {
    return 180 - (a+b);
}

044
function repeatStr (n, s) {
    return s.repeat(n);
}

045
function stringToArray(string){

    return string.split(' ');

}

046
function openOrSenior(data){
    let result = [];

    for(var i = 0; i < data.length; i++){
        result[i] = (data[i][0] >= 55 && data[i][1] > 7) ? 'Senior' : 'Open';
    }

    return result;
}

047
function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max(...numbers) +" "+ Math.min(...numbers);
}

048
function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {

        return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1);
    }
    else

        return -1;
}

049
return array.map((element, index) => `${index + 1}: ${element}`);

050
function stray(numbers) {
    let strayChar = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        if(strayChar !== numbers[i]){
            return strayChar = numbers[i];
        }
    }
    return 0;
}