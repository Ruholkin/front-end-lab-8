function getTransformedArray (array, foo) {
	let newArray = []; 
	forEach(array, function(el){
		newArray.push(foo(el));
	});
	return newArray;
}