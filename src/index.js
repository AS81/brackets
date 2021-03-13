module.exports = function check(str, bracketsConfig) {
    // make array of pairs of brackets
    let bracketsPair = [];
    bracketsConfig.forEach((element, i) => {
        bracketsPair[i] = element[0] + element[1];
    });

    let strShorten;
    testStr(str);
    return String(strShorten).length === 0;

    // in str recursive replace each pair of brackets with ''
    function testStr(str) {
        strShorten = str;
        bracketsPair.forEach((pair) => {
            strShorten = strShorten.replace(pair, "");
        });
        if (strShorten.length < str.length && strShorten.length > 0) {
            str = strShorten;
            testStr(str);
        } else {
            return;
        }
    }
};
