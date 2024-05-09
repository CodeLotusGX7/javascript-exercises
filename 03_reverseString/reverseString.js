const reverseString = function(stringInput) {
    let newString = '';
    let stringArray = stringInput.split('');
    let revStringArray = stringArray.reverse();
    let newRevString = revStringArray.join('');
    
    console.log(stringArray);
    console.log(revStringArray);
    return newRevString;

};

// Do not edit below this line
module.exports = reverseString;
