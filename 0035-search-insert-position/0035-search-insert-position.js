/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let numLength = 0;
    for(let i = 0; i < nums.length; i++) {
        if (Number(nums[i]) < target) {
            numLength += 1;
        }
    }
    
    return numLength;
};