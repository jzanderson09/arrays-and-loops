const reverseString = function(string) {
    let stringReversed = string.split('');
    stringReversed = stringReversed.reverse();
    stringReversed = stringReversed.join('');
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
