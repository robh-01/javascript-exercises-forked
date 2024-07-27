const getTheTitles = function(arrOfObj) {
    return arrOfObj.reduce((arrOfTitle, currentObj) => {
        arrOfTitle.push(currentObj.title);
        return arrOfTitle;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
