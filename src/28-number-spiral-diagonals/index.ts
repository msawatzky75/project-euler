function createArray(value: any, length: number) {
	let array2 = [];
	for (let i = 0; i < length; i++) {
		array2.push(value);
	}
	return array2;
}

function createGrid(length: number): Array<Array<number>> {
	let array = [];
	for (let i = 0; i < length; i++) {
		array.push(createArray(0, length));
	}
	return array;
}

const grid = createGrid(5);

