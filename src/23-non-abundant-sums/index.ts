import {getDivisors, isAbundantNumber, sumArray} from '../lib';

function isAbundantSummable(abundantNums, num): boolean {
	const wNums = abundantNums.filter(v => v <= num / 2);
	for(let i = 0; i < wNums.length; i++) {
		if (wNums.find(v => v === num - wNums[i]) !== undefined) {
			return true;
		} else if (isAbundantSummable(abundantNums, num - wNums[i])) {
			return true;
		}
	}
	return false;
}

const abundantNums = [];
const notAbundantSum = [];
for (let i = 12; i <= 28123; i++) {
	if (isAbundantNumber(i)) {
		abundantNums.push(i);
	}
	// if (!isAbundantSummable(abundantNums, i)) {
	// 	notAbundantSum.push(i);
	// }
}

console.log(isAbundantSummable(abundantNums, 96), isAbundantNumber(96), getDivisors(96), sumArray(getDivisors(96)));
// console.log(sumArray(notAbundantSum));
