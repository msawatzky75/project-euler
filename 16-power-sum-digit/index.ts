// incomplete
function sumDigits(num: number): number {
	let sum = 0;
	if (num.toString().length > 1) {
		sum += sumDigits(removeFirstNum(num));
	}
	return sum + Number(num.toString().charAt(0));
}

function removeFirstNum(num: number): number {
	const magnitude = Math.pow(10, Math.floor(Math.log10(num)));
	return num - (magnitude * Math.floor(num / magnitude))
}

console.log(sumDigits(Math.pow(2, 1000)));
// console.log(sumDigits(Math.pow(2, 15)));

// console.log("sum of the digits", sumDigits(123));
// console.log(removeFirstNum(123));
