var arg1 = process.argv[2];
var arg2 = process.argv[3];

import MODULE from './modules_default_export_math.js';

console.log(MODULE.PI);
console.log(MODULE.sqrt(+arg1));
console.log(MODULE.square(+arg2));