export function Array2D<T>(length: number, defaultValue: T | null = null): T[][] {
	function createArray(value: T | null, length: number) {
		let array2 = [];
		for (let i = 0; i < length; i++) {
			array2.push(value);
		}
		return array2;
	}
		let array = [];
		for (let i = 0; i < length; i++) {
			array.push(createArray(defaultValue, length));
		}
		return array;
}

export function removeFirstNum(num: bigint): bigint {
	const magnitude = 10n ** BigInt(num.toString().length);
	return num - magnitude;
}

export function isPrime(num: number): boolean {
	return getFactors(num).length === 2;
}

export function sumDigits(num: bigint): bigint {
	let sum: bigint = 0n;
	for (let i = 0; i < num.toString().length; i++) {
		sum += BigInt(num.toString().charAt(i));
	}
	return sum;
}

export function factorial(num: bigint): bigint {
	let product: bigint = 1n;
	for (let i = 1n; i < num; i++) {
		product *= i;
	}
	return product;
}

export function getFactors(num: number): number[] {
	let factors: number[] = [];
	for (let i = 1; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			factors.push(i, num / i);
		}
	}
	return factors.filter((val, index, self) => self.indexOf(val) === index).sort((a, b) => a - b);
}

export function sumDivisors(num: number): number {
	const divisors = getFactors(num);
	let sum = 0;
	for (let i = 0; i < divisors.length; i++) {
		sum += divisors[i];
	}
	return sum;
}

export function isAmicable(num: number): boolean {
	return sumDivisors(sumDivisors(num)) === num && sumDivisors(num) !== num;
}

export function isPerfectNumber(num: number): boolean {
	return getFactors(num).reduce((t, v) => t + v) === num * 2;
}

export function isAbundantNumber(num: number): boolean {
	return getFactors(num).reduce((t, v) => t + v) - num > num;
}
