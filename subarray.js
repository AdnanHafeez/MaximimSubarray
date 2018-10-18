let maximum = (n1,n2) => {
  if(n1 === n2) return n1;
  if(n1 < n2) return n2;
  return n3;
}

var maxSubArray = function(nums) {

  if(nums.length < 1) return 0;
  let maxSum = nums[0];
  let maxSumSoFar = num[0];
  for(let i = 1; i < nums.length; i++) {
    maxSumSoFar = maximum(maxSumSoFar+nums[i],maxSumSoFar);
    maxSum = maximum(maxSumSoFar,maxSum);
  }

};
