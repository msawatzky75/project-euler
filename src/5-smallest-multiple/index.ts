let num = 21;
let answer = 0;
while(answer == 0) {
	for(let i = 2; i < 21; i++) {
		if (num % i !== 0)
			break;
		else if (i === 20)
			answer = num;
	}
	num++;
}
console.log(answer);
