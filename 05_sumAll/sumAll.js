const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    else if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    let result = 0;
    if (end < start) {
        for (let i = end; i <= start; i++) {
            result += i;
        }
    } else {
        for (let i = start; i <= end; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
