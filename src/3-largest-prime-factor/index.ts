import {isPrime, getFactors} from '../lib';

function getLargestPrimeFactor(num: number): number {
	const factors = getFactors(num);
	for (let i = factors.length - 1; i >= 0; i--) {
		if (isPrime(Number(factors[i]))) {
			return factors[i];
		}
	}
	return 0;
}

console.log(getLargestPrimeFactor(600851475143));
