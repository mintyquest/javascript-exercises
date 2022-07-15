const removeFromArray = function(array, ...unwantedValues) {

let i = 0;

    
    do {
        
        if (array.includes(unwantedValues[i]) && typeof unwantedValues[i] == typeof array[array.indexOf(unwantedValues[i])]) {
            
            ;
            array.splice(array.indexOf(unwantedValues[i]), 1);
            
            console.log(array);
        }
        
        i++
    } while (i < unwantedValues.length);

return array;
};



// Do not edit below this line
module.exports = removeFromArray;
