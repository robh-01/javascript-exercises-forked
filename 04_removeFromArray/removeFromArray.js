const removeFromArray = function (array, ...elements) {
    let filteredArray = [];
    for (i = 0; i < array.length; i++) {
        if (!elements.includes(array[i])) { 
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
