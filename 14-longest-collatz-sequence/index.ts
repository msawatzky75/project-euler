function collatzSequenceLength(num: number): number {
	let length = 1;
	if (num % 2 === 0) {
		length = collatzSequenceLength(num/2) + 1;
	} else if (num !== 1) {
		length = collatzSequenceLength(3 * num + 1) + 1;
	}
	return length;
}

const longest = {num: 0, length: 0};

for (let i = 1; i < 1000000; i++) {
	let length = collatzSequenceLength(i);
	if (longest.length < length) {
		longest.num = i;
		longest.length = length;
	}
}
console.log(longest);
