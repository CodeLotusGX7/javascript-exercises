const removeFromArray = (inputArray, ...removalArg) => {

  const newArray = [];
  inputArray.forEach((item) => {

    if (!removalArg.includes(item)) {
      newArray.push(item);
    }
  });
  
  return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
