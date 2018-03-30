const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let pre = 0;
    let val = pre;

    return {
      next() {
        pre++;
        val = pre;

        if( pre%3 === 0 ) {
          val = "Fizz";
        }else if( pre%5 === 0 ){
          val = "Buzz";
        }else if( pre%3 === 0 && pre%5 === 0 ){
          val = "FizzBuzz";
        }

        if ( pre <= max ){
          return { done: false, value: val };
        }
        return { done: true };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}