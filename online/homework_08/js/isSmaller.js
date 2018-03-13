function isBigger (firstArg, secondArg) {
	 return firstArg > secondArg;
}

function isSmaller (firstArg, secondArg) {
	if( firstArg === secondArg) { return false;}
	return !isBigger (firstArg, secondArg);
}