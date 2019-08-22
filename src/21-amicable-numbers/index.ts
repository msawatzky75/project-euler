import {isAmicable} from '../lib';

let sum: number = 0;
for (let i = 0; i < 10000; i++) {
	if (isAmicable(i)) {
		sum += i;
	}
}
console.log(sum);
