const reverseString = function(string) {
    let copyString = '';
    reverseCharLocate = string.length - 1;
    for (i = 0; i < string.length; i++) {
        copyString += string.charAt(reverseCharLocate--);
    }
    return copyString;
};

// Do not edit below this line
module.exports = reverseString;
