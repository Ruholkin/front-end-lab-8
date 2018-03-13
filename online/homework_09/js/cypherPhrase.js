function cypherPhrase ( someObject, someString ) {
	someString = someString.split("");
	someString = getTransformedArray( someString, function(el) {
		return someObject[el] || el;
	});
	return someString.join("");
}