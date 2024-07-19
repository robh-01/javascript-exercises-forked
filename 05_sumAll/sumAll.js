const sumAll = function (firstNum, secondNum) {

    if (firstNum > 0 && secondNum > 0 && Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        let sum = 0;
        if (firstNum > secondNum) {
            let temp = firstNum;
            firstNum = secondNum;
            secondNum = temp;
        }
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
        return sum;
    }
    else return 'ERROR'

};

// Do not edit below this line
module.exports = sumAll;
