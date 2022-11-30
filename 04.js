031
function lovefunc(flower1, flower2){
    if (flower1 % 2 != 0 && flower2 % 2 == 0) {
        return true;
    }
    if (flower1 % 2 == 0 && flower2 % 2 != 0){
        return true;
    }
    return false;
}

032
function removeChar(str){
    return str.slice(1, -1);

};

033
function removeExclamationMarks(s) {
    s = s.replace(/!/g, '')
    return s;
}

034
function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r') {
        return name + " plays banjo";
    }
    return name + " does not play banjo";
}

035
function evenOrOdd(number) {
    if (number % 2 == 0) {
        return 'Even';
    }
    return 'Odd';
}

036
function getGrade (s1, s2, s3) {
    if (((s1 + s2 + s3)/ 3) >= 90 && ((s1 + s2 + s3)/ 3) <= 100) {
        return 'A';
    }else if (((s1 + s2 + s3)/ 3) >= 80 && ((s1 + s2 + s3)/ 3) < 90){
        return 'B';
    }else if (((s1 + s2 + s3)/ 3) >= 70 && ((s1 + s2 + s3)/ 3) < 80){
        return 'C';
    }else if (((s1 + s2 + s3)/ 3) >= 60 && ((s1 + s2 + s3)/ 3) < 70) {
        return 'D';
    }else if (((s1 + s2 + s3)/ 3) >= 0 && ((s1 + s2 + s3)/ 3) < 60){
        return 'F';
    }
}

037
function past(h, m, s){
    let hour = 3600000;
    let minute = 60000;
    let second = 1000;
    return (h * hour) + (m * minute) + (s * second);
}

038
if (p1 === p2) {
    return `Draw!`;
}
if (p1 === 'rock' && p2 === 'scissors') {
    return `Player 1 won!`;
} else if (p1 === 'paper' && p2 === 'rock') {
    return `Player 1 won!`;
} else if (p1 === 'scissors' && p2 === 'paper') {
    return `Player 1 won!`;
} else {
    return `Player 2 won!`;
}

039
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height;
    }
}

040
const quarterOf = (month) => {
    if(month < 4) return 1;
    if(month < 7) return 2;
    if(month < 10) return 3;
    return 4;
}



