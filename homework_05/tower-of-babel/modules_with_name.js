var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./modules_with_name_math.js').PI;
var sqrt = require('./modules_with_name_math.js').sqrt;
var square = require('./modules_with_name_math.js').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));