const convertToCelsius = function(fTemp) {
  // Step 1: Subtract 32 from the Fahrenheit temperature.
  // Step 2: Multiply this number by five.
  // Step 3: Divide the result by nine.
  let celsiusTemp = ((fTemp - 32) * 5 )/ 9;
  // let celsiusTempRounded = Math.round(celsiusTemp);
  let celsiusTempRounded = Math.round(celsiusTemp * 10) / 10;

  console.log("convert to celsius = " + celsiusTemp );
  console.log("convert to celsius rounded = " + celsiusTempRounded );


  return celsiusTempRounded;



};

const convertToFahrenheit = function(cTemp) {
  // Multiply the °C temperature by 1.8. Add 32 to this number.
  let fahrenheitTemp = ((cTemp * 1.8) + 32);
  //let fahrenheitTempRounded = Math.round(fahrenheitTemp);
  let fahrenheitTempRounded = Math.round(fahrenheitTemp * 10) / 10;

  console.log("convert to fahrenheit = " + fahrenheitTemp );
  console.log("convert to fahrenheit rounded = " + fahrenheitTempRounded );

  return fahrenheitTempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
