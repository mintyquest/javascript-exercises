const leapYears = function(leapYears) {

    if (leapYears % 400 == 0) { //Approves years that are divisble by 400
        return true;
    }
    else if (leapYears % 4 == 0 && leapYears % 100 != 0) { //Approves years like 1996 but filters years that are divisible by 100 but not by 400
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
