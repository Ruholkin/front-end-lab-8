function forEach (array, foo) {
	if ( typeof (foo) !== "function" || !array.length ) { 
		console.error("Arguments of forEach() function don't fit it."); 
		return; }
	for (let i of array) {
		foo(i);
	}
}