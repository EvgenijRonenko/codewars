051
let number = function(busStops){
    let people = 0;
    for (let stop of busStops) {
        people += stop[0] - stop[1];
    }
    return people;
}

052
function sumStr(a,b) {
    return String(Number(a)+Number(b));
}

053
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

054
let square = arg => arg * arg

055
function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    }
    if (exam > 75 && projects >= 5) {
        return 90
    }
    if (exam > 50 && projects >= 2) {
        return 75
    }
    return 0
}

056
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

057
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}

058
function testEven(n) {
    return n % 2 === 0 ? true : false;
}

059
function isTriangle(a,b,c){
    if ((a + b > c) && (b + c > a) && (a + c > b)) {
        return true;
    }
    return false;
}

060
var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

function greet(language) {
    return database[language] || "Welcome";
}


