module.exports = function check(str, bracketsConfig) {
    let bracketsPair = bracketsConfig[0];
    let arrayBrackets = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === bracketsPair[1]) {
            if (
                arrayBrackets.length === 0 ||
                arrayBrackets.pop() != bracketsPair[0]
            ) {
                return false;
            }
        } else {
            arrayBrackets.push(str[i]);
        }
    }
    return arrayBrackets.length === 0;
};
