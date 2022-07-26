//## Find the Second Largest Number

function secondLargest(nums){
    nums.sort((a, b) => {
        return a - b;
    });
    return nums[nums.length-2]
}

console.log(secondLargest([54, 23, 11, 17, 10]));