//let inputString = "hey";
//let repeatNumber = 3;

const repeatString = function(inputString,repeatNum) {
    let newString = '';
    for (let i = 0; i < repeatNum; i++) {
        newString += inputString;
    }
    return newString;

    /*
    for (let currentNum = 0; repeatNumber > currentNum; currentNum++) {
        console.log("current num = " + currentNum);
        console.log("repeat num = " + repeatNumber);

        return inputString;
        
    }
    */
};
// repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
