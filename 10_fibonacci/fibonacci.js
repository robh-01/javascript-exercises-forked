const fibonacci = function (num) {
    let fibonacciSequence = [];
    if (num == 0) return 0;
    else if (num < 0) return 'OOPS';
    else {
        fibonacciSequence[0] = 1; //first term
        fibonacciSequence[1] = 1; //second term
        for (let i = 2; i < num; i++) {
            fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        }
        return fibonacciSequence[num - 1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
