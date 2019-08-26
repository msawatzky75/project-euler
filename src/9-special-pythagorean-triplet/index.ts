function pythagoreanTriplet() {
	for (let a = 1; a < 1000; a++) {
		for (let b = 1; b < 1000; b++) {
			const c = Math.sqrt((a ** 2) + (b ** 2));
			if (a + b + c === 1000) {
				console.log(a, b, c);
				return a * b * c;
			}
		}
	}
}

console.log(pythagoreanTriplet());


