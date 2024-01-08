let total = 2;
let a = 1;
let b = 2;

while (b < 4_000_000) {
	console.log(`a: ${a} b: ${b}`);
	let c = a + b;

	if (c % 2 == 0) {
		total = total + c;
	}

	a = b;
	b = c;
}

console.log(total);
