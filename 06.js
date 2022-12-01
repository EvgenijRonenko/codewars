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
