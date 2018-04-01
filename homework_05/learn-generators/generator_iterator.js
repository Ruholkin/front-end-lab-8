function *factorial(n){
  let fact = 1,
      i = 0;
  while( i < n ){
  	yield fact *= ++i;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120