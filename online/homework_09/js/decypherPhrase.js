function decypherPhrase ( someObject, someString ) {
	let newObject = {};
	for(let key in someObject){
    	newObject[someObject[key]] = key;
  	}
  	return cypherPhrase( newObject, someString );
}