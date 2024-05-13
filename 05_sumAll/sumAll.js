const sumAll = function(firstNum, secNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secNum)) return "ERROR";
    if (firstNum < 0 || secNum < 0) return "ERROR";
    if (firstNum > secNum) {
        const temp = firstNum;
        firstNum = secNum;
        secNum = temp;
        console.log("low number = " + firstNum);
        console.log("botNum = " + secNum);
      }

    let sum = 0;
    for (let i = firstNum; i <= secNum; i++) {
        sum += i;
    }
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
