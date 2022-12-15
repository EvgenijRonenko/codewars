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