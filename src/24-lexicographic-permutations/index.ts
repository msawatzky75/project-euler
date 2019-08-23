let nums = [];
for (let i = 1000000000; i < 10000000000; i++) {
	nums.push(i.toString().padStart(10, "0"));
	if (nums.length === 1000000 + 1) break;
}
nums.sort((a, b) => a - b);
console.log(nums[1000000]);
