function isPrime(number) {
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function isPrime (number) {
	for (let i = 2; i < number/2; i++){
		if (number % i === 0) {
            return false;
        }
	}
	return number > 1;
}