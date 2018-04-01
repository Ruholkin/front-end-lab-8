function *flat (arr) {
  if( Array.isArray(arr) ){
  	for( let i of arr ){
  	  yield* flat(i);
  	}
  } else {
  	yield arr;
  }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
  console.log( f );
}