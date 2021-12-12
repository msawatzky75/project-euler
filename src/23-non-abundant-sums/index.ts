import { memoize } from "lodash";
import { getProperDivisors, isAbundantNumber, sumArray } from "../lib";

const isAbundant = memoize(isAbundantNumber);
/*
 * Returns true if the number is a sum of two abundant numbers.
 */
function isAbundantSummable(num: number): false | [number, number] {
	const result = false;
	for (let i = 1; i <= num / 2; i++) {
		if (isAbundant(i) && isAbundant(num - i)) {
			return [i, num - i];
		}
	}
	return result;
}

const nonAbundantSummable = [];
for (let i = 0; i <= 28123 + 1; i++) {
	if (!isAbundantSummable(i)) {
		nonAbundantSummable.push(i);
	}
}

console.log(nonAbundantSummable);
console.log(sumArray(nonAbundantSummable));
