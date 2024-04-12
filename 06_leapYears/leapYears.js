const leapYears = function(year) {
    // divisible by 4
    /*
    years divisible by 100 are not leap 
    years unless divisible by 400.
    */

    let result = false;
    if (year % 4 === 0) {
        result = true;
        if (year % 100 === 0) {
            result = false;
            if (year % 400 === 0) {
                result = true;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
