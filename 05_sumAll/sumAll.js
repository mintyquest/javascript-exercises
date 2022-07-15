const sumAll = function(firstNum, secondNum) {

    let currentNumber = firstNum;
    let currentNumber2 = secondNum;
    let sum = 0;
    if (firstNum > -1 && secondNum > -1 && typeof firstNum == "number" && typeof secondNum == "number" ) {
        
        if (firstNum < secondNum) {
            for (i = 0; i < (secondNum - (firstNum - 1)); i++) { //will iterate for the amount of distance there is between the two numbers and the second number is the bigger one.
                
                sum += currentNumber;
                currentNumber++;
            }
        }
        else {
            for (i = 0; i < (firstNum - (secondNum - 1)); i++) { //will iterate for the amount of distance there is between the two numbers and the first number is the bigger one.
                
                sum += currentNumber2;
                currentNumber2++;
            }
        }
    }
    else {
        return 'ERROR';
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;


//make a loop using the difference between the first number and the second one