import names from './names.json';
names.sort();

function nameValue(str: string): number {
	let val = 0;
	for (let i = 0; i < str.length; i++) {
		val += (str.charCodeAt(i) - 64);
	}
	return val;
}

let sum: bigint = 0n;
for (let i = 0; i < names.length; i++) {
	sum += BigInt((i + 1) * nameValue(names[i]));
}
console.log(sum);
