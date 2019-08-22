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

const grid = createGrid(21);

grid[0][0] = 1;

console.log(grid);
for (let y = 0; y < grid.length; y++) {
	for (let x = 0; x < grid[y].length; x++) {
		if (x + 1 < grid[y].length) {
			grid[x + 1][y] += grid[x][y];
		}
		if (y + 1 < grid.length) {
			grid[x][y + 1] += grid[x][y];
		}
	}
}
console.log(grid);
