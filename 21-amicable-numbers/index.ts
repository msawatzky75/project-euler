function getDivisors(num: number): [number] {
	let divisors: [number] = [1];
	for (let i = 2; i <= num / 2; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}
	return divisors;
}

function sumDivisors(num: number): number {
	const divisors = getDivisors(num);
	let sum = 0;
	for (let i = 0; i < divisors.length; i++) {
		sum += divisors[i];
	}
	return sum;
}

function isAmicable(num: number): boolean {
	return sumDivisors(sumDivisors(num)) === num && sumDivisors(num) !== num;
}

let sum: number = 0;
for (let i = 0; i < 10000; i++) {
	if (isAmicable(i)) {
		sum += i;
	}
}
console.log(sum);
