/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let arr = digits.join("");
      let result = BigInt(arr)+ BigInt(1);
      result = result.toString().split('').map(el => el - 0);
      return result;
};