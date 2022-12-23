/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const numbers  = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        const currentNum = numbers[s[i]];
        const nextNum = numbers[s[i + 1]];
     
        if (currentNum < nextNum) {
            result += nextNum - currentNum;
            i++;
        } else {
            result += currentNum;
        }
    }
      return result;
};