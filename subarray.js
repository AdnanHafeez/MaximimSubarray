let maximum = (n1,n2) => {
  if(n1 === n2) return n1;
  if(n1 < n2) return n2;
  return n1;
}

var maxSubArray = function(nums) {

  if(nums.length < 1) return 0;
  let maxSum = nums[0];
  let maxSumSoFar = nums[0];
  for(let i = 1; i < nums.length; i++) {
    maxSumSoFar = maximum(maxSumSoFar+nums[i],nums[i]);
    maxSum = maximum(maxSumSoFar,maxSum);
  }

  return maxSum;

};

let input = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(input));
