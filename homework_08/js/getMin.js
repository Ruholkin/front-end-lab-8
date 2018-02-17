function getMin () {
	let rez ;
	return rez = Math.min.apply(null, arguments);
}

function getMin () {
	let min = arguments[0];
	for (let i = 1; i<arguments.length + 1; i++) {
		if (min > arguments[i]) { min = arguments[i];}
	}
	return min;
}