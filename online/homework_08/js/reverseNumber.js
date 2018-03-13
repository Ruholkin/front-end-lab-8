function reverseNumber (number) {
	let variable = number.toString().split("").reverse().join("");
	return parseInt(variable, 10) * Math.sign(number);
}