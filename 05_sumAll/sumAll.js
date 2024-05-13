const sumAll = function(firstNum, secNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secNum)) return "ERROR";
    if (firstNum < 0 || secNum < 0) return "ERROR";

    if (firstNum > secNum) {
        topNum = firstNum;
        botNum = secNum;
        console.log("topNum = " + topNum);
        console.log("botNum = " + botNum);
   
    }
    if (firstNum < secNum) {
        topNum = secNum;
        botNum = firstNum;
        console.log("topNum = " + topNum);
        console.log("botNum = " + botNum);
    }

    let sum = 0;
    for (let i = firstNum; i <= secNum; i++) {
        sum += i;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
