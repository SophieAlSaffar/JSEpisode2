/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
  // Your code here
  array.forEach((element)=>{console.log(element)});
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function (temperatures) {
  // Your code here
  return temperatures.map(temperature =>{return (temperature - 32) * (5/9)});
}


/**************************************
* hottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
* - Accepts a threshold temperature
* - Returns an array of temperatures
*   that exceed the threshold
***************************************/
const hottestDays = function (temperatures, threshold) {
  // Your code here
  return temperatures.filter(temp=> {return temp > threshold});
}


/******************************************
* logHottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshold) {
  // Your code here
  let TempsAbove = hottestDays(temperatures, threshold);
  let TempsConvert = toCelsius(TempsAbove);
  logger(TempsConvert);

}


export { logger, toCelsius, hottestDays, logHottestDays }
