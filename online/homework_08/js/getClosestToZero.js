function getClosestToZero () {
	let variable = Math.abs(arguments[0]);
	for (let i = 0; i < arguments.length; i++){
		if (Math.abs(arguments[i]) > Math.abs(arguments[i+1])) {
			variable = Math.abs(arguments[i+1]);
		}
	}
	return variable;
}