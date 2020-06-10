/*
*
*
*       Complete the handler logic below
*
*
*/

function ConvertHandler() {
    var conversionChart = {
      'gal': ['gallons',    3.78541, 'L'],
      'L'  : ['Litres',     1/3.78541, 'gal'],
      'lbs': ['pounds',     0.453592, 'kg'],
      'kg' : ['Kilograms',  1/0.453592, 'lbs'],
      'mi' : ['miles',      1.60934,  'km'],
      'km' : ['Kilometers', 1/1.60934, 'mi']
    }
    // Get number from input
    this.getNum = function(input) {
      var result = input.split(/[A-Za-z]/)[0];
      // is everything that comes before a characte
      
      if ((/[A-Za-z]/).test(result[0])){ // results to false
          // if nothing is provided it will default to 1
        result = 1
      } else if ((/\//).test(result)){
        if (result.split('/').length > 2) {
          result = 'Invalid Number';
          return result
        }
        let numerator = parseFloat(result.split('/')[0])
        let denominator =  parseFloat(result.split('/')[1])
  
        if (denominator > 0) {
          result = numerator / denominator;
        } else {
          result = 'Invalid Number';
        }
      } else if ( isNaN(result) ) {
        result = 'Invalid Number';
      } else {
        result = parseFloat(result)
      }
  
      return result;
    };
    // Get unit from input
    this.getUnit = function(input) {
  
      var result = input.split(/([A-Za-z]+)/);
      var unit = result[1].toLowerCase();
      if (unit==='l') { unit = 'L' }
  
      if (result.length > 3 |
          Object.keys(conversionChart).indexOf(unit) == -1 ) { // if not in keys returns -1 (<0)
        result = 'Invalid Unit';
      } else {
        result = result[1];
      }
      return result;
    };
    // Get returning input for inputed unit
    this.getReturnUnit = function(initUnit) {
      if (initUnit) {
        var unit = initUnit.toLowerCase();
        if (unit==='l') { unit = 'L' }
        var result = conversionChart[unit][2];
      } else {
        var result = null;
      }
  
      return result;
    };
    // Spell Out abbreviation of unit, like: L to Litres
    this.spellOutUnit = function(unit) {
      if (unit) {
        if (unit.toLowerCase()==='l') {
          unit = 'L'
        } else {
          unit = unit.toLowerCase()
        }
        var result = conversionChart[unit][0];
      }
      return result;
    };
    // convert to respective form
    this.convert = function(initNum, initUnit) {
      if (initUnit){
        var unit = initUnit.toLowerCase()
        if (unit=='l') { unit = 'L' }
        var result = initNum * conversionChart[unit][1];
      } else {
        var result = null
      }
      return parseFloat(result.toFixed(5));;
    };
    // Get full conversion string
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
        var result = initNum.toString()+ ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toString()+ ' ' + this.spellOutUnit(returnUnit);
        return result;
    };
  
  }
  
  module.exports = ConvertHandler