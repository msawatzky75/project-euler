function NumberToWords(number: number): string {
	if (number == 0)
		return "zero";

	let words = "";

	if (Math.floor(number / 1000000) > 0) {
		words += NumberToWords(Math.floor(number / 1000000)) + " million ";
		number %= 1000000;
	}

	if (Math.floor(number / 1000) > 0) {
		words += NumberToWords(Math.floor(number / 1000)) + " thousand ";
		number %= 1000;
	}

	if (Math.floor(number / 100) > 0) {
		words += NumberToWords(Math.floor(number / 100)) + " hundred ";
		number %= 100;
	}

	if (number > 0) {
		if (words != "")
			words += "and ";

		const unitsMap = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
		const tensMap = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

		if (number < 20)
			words += unitsMap[number];
		else
		{
			words += tensMap[Math.floor(number / 10)];
			if ((number % 10) > 0)
				words += "-" + unitsMap[number % 10];
		}
	}

	return words;
}

console.log(NumberToWords(6174));
let sum = 0;
for (let i = 1; i <= 1000; i++) {
	sum += NumberToWords(i).split(' ').join('').split('-').join('').length;
}
console.log(sum);
