function countDivisors(num: number): number {
	let count = 0;
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i === 0)
			count++;
	}
	return count*2;
}

function getNextTriangleNum(num: number): number {
	let sum = 0;
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}

let i = 1;
while (countDivisors(getNextTriangleNum(i)) <= 500) {
	i++;
}
// i will be 1 number behind because of the while guard
// turns out this is what i want
console.log(getNextTriangleNum(i));
