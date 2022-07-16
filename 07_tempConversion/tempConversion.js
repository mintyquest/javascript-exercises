const ftoc = function(fahrenheit) {

  //return (faren - 32) * parseFloat(5/9).toFixed(1);
  return +(((fahrenheit - 32) * 5) /9).toFixed(1);
  
};

const ctof = function(celsius) {

  return +((celsius * 9) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
