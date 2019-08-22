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

function removeFirstNum(num: bigint): bigint {
	const magnitude = 10n ** BigInt(num.toString().length);
	return num - magnitude;
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
