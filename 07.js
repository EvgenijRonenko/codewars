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
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += p0 * (percent / 100) + aug;
    }
    return years;
}