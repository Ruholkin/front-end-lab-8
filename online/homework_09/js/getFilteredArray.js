function getFilteredArray (array, predicateFoo) {
	 let newArray = [];
	 forEach(array, function(el){
	 	if(predicateFoo(el) !== false){ newArray.push(predicateFoo(el)); }
	 });
	 return newArray;
}