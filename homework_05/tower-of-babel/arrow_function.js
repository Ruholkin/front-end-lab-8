var inputs = process.argv.slice(2);
var result = inputs.map( elem => elem[0] )
                   .reduce( (sum, elem) => sum + elem.toUpperCase() );
console.log(result);