/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString().split("").reverse().join("");
    
    if (x.toString() == num) {
        return true; 
    } else {
        return false;
    }
};