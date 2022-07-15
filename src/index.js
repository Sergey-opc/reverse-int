module.exports = function reverse(n) {
    let pass = 0;
    n = Math.abs(n);
    while (n) {
        pass = pass * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return pass;
}  
