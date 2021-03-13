module.exports = function check(str, bracketsConfig) {
    let arrayBrackets = [];
    let result = true;
    bracketsConfig.forEach((item) => {
        console.log(item, isStrCorrectOnePairBrackets(str, item));
        if (!isStrCorrectOnePairBrackets(str, item)) {
            console.log(`result must be false`);
            result = false;
        }
    });
    console.log(`res is ${result}`);
    return result;

    function isStrCorrectOnePairBrackets(str, bracketsPair) {
        //let bracketsPair = bracketsConfig[0];
        console.log(`str is ${str}, bracketsPair is ${bracketsPair}`);
        arrayBrackets = [];
        let correct = true;
        let bracketIsOpened = false;
        for (let i = 0; i < str.length; i++) {
            //if (bracketsPair.indexOf(str[i]) != -1) {
            if (str[i] === bracketsPair[1]) {
                bracketIsOpened = false;
                if (i === 0 || arrayBrackets.pop() != bracketsPair[0]) {
                    correct = false;
                }
            } else {
                arrayBrackets.push(str[i]);
                bracketIsOpened = true;
            }
            // }
        }
        console.log(
            `arrayB: ${arrayBrackets}, corr = ${correct}, isOpened = ${bracketIsOpened}`
        );
        if (bracketIsOpened === true) {
            return false;
        } else {
            return correct;
        } // return true; //arrayBrackets.length === 0;
    }
};
