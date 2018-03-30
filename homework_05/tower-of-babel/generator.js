const max = process.argv[2];
let FizzBuzz = function* () {
  let pre = 0;
  let val = pre;

  while( pre < max ){
    pre ++; 
    val = pre;

    if( pre%3 === 0 ) {
      val = "Fizz";
    }else if( pre%5 === 0 ){
      val = "Buzz";
    }else if( pre%3 === 0 && pre%5 === 0 ){
      val = "FizzBuzz";
    }

    yield val;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}