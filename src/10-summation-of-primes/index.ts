import {getNextPrime} from '../lib';

let sum = 0;
let current = getNextPrime(0);
while(current < 2000000) {
	sum += current;
	current = getNextPrime(current);
}
console.log(sum);
