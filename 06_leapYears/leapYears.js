const leapYears = function(testYear) {
    
    if (testYear / 400 &&  (testYear % 400) == 0) {
        console.log("divisible by 400");
        console.log("is a leap year");
        return true;
        
    } else if (testYear / 100 &&  (testYear % 100) == 0) {
        console.log("divisible by 100");
        console.log("is not a leap year");
        return false;
        
        
    } else if  (testYear / 4 &&  (testYear % 4) == 0) {
        console.log("divisible by 4");
        console.log("is a leap year");
        return true;
        
    } else {
        console.log("not divisible by 4");
        console.log("is not a leap year");
        return false;


    }

    

};

// Do not edit below this line
module.exports = leapYears;
