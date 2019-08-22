import {getFactors, isAbundantNumber} from '../lib';

let sum = 0;
for (let i = 1; i <= 28123; i++) {
	if (isAbundantNumber(i)) {
		sum += i;
	}
}
console.log(sum, isAbundantNumber(11), getFactors(11).reduce((t,v) => t + v));
