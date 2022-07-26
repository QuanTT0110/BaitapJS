//## Mirror Array
function mirror(nums){
    const newNums = nums;
    for(let i=nums.length-2;i>=0;i--){
        console.log(nums[i])
        newNums.push(nums[i]);
    }
    return newNums;
}


console.log(mirror([3, 5, 6, 7, 8]));