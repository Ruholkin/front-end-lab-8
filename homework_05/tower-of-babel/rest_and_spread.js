var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

let avg = function(...args){
  return args.reduce( (sum, elem) => sum + elem ) / args.length;
};

console.log(avg(...args));