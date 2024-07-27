const findTheOldest = function (arr) {
    arr.sort(function (a, b) {
        todayDate = new Date().getFullYear();
        let aAge = (a.yearOfDeath || todayDate) - a.yearOfBirth;
        let bAge = (b.yearOfDeath || todayDate) - b.yearOfBirth;
        return bAge - aAge;
    })
    // console.table(arr);
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
