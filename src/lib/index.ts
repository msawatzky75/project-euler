const uniqueFilter = (val, index, self) => self.indexOf(val) === index;
const ascSort = (a, b) => a - b;
const sum = (t, v) => t + v;

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
	return factors.filter(uniqueFilter).sort(ascSort);
}

export function getDivisors(num: number): number[] {
	const factors = getFactors(num);
	factors.pop();
	return factors;
}

export function sumDivisors(num: number): number {
	return sumArray(getFactors(num));
}

export function sumArray(arr: number[]) {
	return arr.reduce(sum);
}

export function isAmicable(num: number): boolean {
	return sumDivisors(sumDivisors(num)) === num && sumDivisors(num) !== num;
}

export function isPerfectNumber(num: number): boolean {
	return sumArray(getDivisors(num)) === num;
}

export function isAbundantNumber(num: number): boolean {
	return sumArray(getDivisors(num)) > num;
}
