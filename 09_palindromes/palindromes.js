const palindromes = function (str) {
    str = str.toLowerCase();
    let arrOfStr = str.split('');
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < arrOfStr.length; i++) {
        if (!(alphanumerical.includes(arrOfStr[i]))) {
            arrOfStr.splice(i, 1);
            i--;
        }
    }
    let reversedStr = arrOfStr.reduceRight((reversed, current) => reversed + current, "");
    if (arrOfStr.join('') == reversedStr) return true;
    else return false;
};
// Do not edit below this line
module.exports = palindromes;
