function *range(from, to) {
  // your code goes here
  while( from <= to ){
  	yield from++;
  }
}
for (var r of range(5, 10)) {
  console.log( r );
}