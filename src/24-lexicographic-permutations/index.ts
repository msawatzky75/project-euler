// find the 1 000 000th lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.
const input = "012";
const permutations = permute(input);
console.log(permutations[999_999]);

function permute(input) {
	const result = [];
	permuteRecursive(input, result, "");
	return result;
}

function permuteRecursive(input: string, result: string[], current: string) {
	if (input.length === 0) {
		console.log(current);

		result.push(current);
		return;
	}
	for (let i = 0; i < input.length; i++) {
		permuteRecursive(input.slice(0, i) + input.slice(i + 1), result, current + input[i]);
	}
}
