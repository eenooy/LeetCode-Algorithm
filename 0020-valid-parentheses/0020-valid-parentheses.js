/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const valid = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
    }
    let result = true;
    const array = [];
    const open = Object.keys(valid);
    
    if (array.length % 2 !== 0) {
      return false;
    } else {
      for(let i of s) {
        if (open.includes(i)) {
          array.push(i);
        } else {
          if (valid[array[array.length - 1]] === i) {
            array.pop();
          } else {
         
            return false;
          }
        }
      }
    }
    return !array.length;
};