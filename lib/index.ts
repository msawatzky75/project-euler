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

function removeFirstNum(num: number): number {
	const magnitude = Math.pow(10, Math.floor(Math.log10(num)));
	return num - (magnitude * Math.floor(num / magnitude))
}

//too inaccurate for long numbers
export function sumDigits(num: number): number {
	console.log(num);
	let sum = 0;
	if (num.toString().length > 1) {
		sum += sumDigits(removeFirstNum(num));
	}
	return sum + Number(num.toString().charAt(0));
}

export class StrInt {
	num: string;

	constructor(num) {
		this.num = num.toString() || "";
	}
}
