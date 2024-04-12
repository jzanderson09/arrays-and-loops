const convertToCelsius = function(fahrenheitTemp) {
  let newCelTemp = 0;
  if (fahrenheitTemp === 32) {
    return newCelTemp;
  }
  newCelTemp = parseFloat(((fahrenheitTemp - 32) * 5 / 9).toFixed(1));
  return newCelTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let newFahTemp = 0;
  if (celsiusTemp === 0) {
    newFahTemp = 32;
    return newFahTemp;
  }
  newFahTemp = parseFloat((celsiusTemp * (9 / 5) + 32).toFixed(1));
  return newFahTemp;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
