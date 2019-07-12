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
