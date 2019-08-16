// solved
function sumPowOfDigits(num: number, pow: number): number {
	const numStr = num.toString();
	let sum = 0;
	for (let i = 0; i < numStr.length; i++) {
		sum += Math.pow(Number(numStr.charAt(i)), pow);
	}

	return sum;
}

const answers: number[] = [];
for (let i = 10; i < 10000000; i++) {
	const current = sumPowOfDigits(i, 5);
	if (current === i) {
		answers.push(i);
		console.log(i);
	}
}

console.log(answers);
let sum = 0;
for (const key in answers) {
	sum += answers[key];
}
console.log(sum);
