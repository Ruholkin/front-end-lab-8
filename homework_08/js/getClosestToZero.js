function getClosestToZero () {
	let variable;
	for (let i = 0; i < arguments.length; i++){
		if (Math.abs(arguments[i]) > Math.abs(arguments[i+1])) {
			variable = Math.abs(arguments[i+1]);
		}
	}
	return variable;
}