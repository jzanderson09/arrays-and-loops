const removeFromArray = function(arr, ...item) {
    let newArr = arr;
    for (let i = 0; i < item.length; i++) {
        newArr = newArr.filter(element => element !== item[i]);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
