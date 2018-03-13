var naturalNumber, i, j, pyramid = "";
while( naturalNumber <= 0 || naturalNumber > 20 || (!isNaN(parseFloat(naturalNumber)) && isFinite(naturalNumber) == false) || ((naturalNumber ^ 0) === naturalNumber) == false ){
	naturalNumber = +prompt("Enter the natural number between 0 and 20: ", "");
	if(naturalNumber <= 0 || naturalNumber > 20 || (!isNaN(parseFloat(naturalNumber)) && isFinite(naturalNumber) == false) || ((naturalNumber ^ 0) === naturalNumber) == false) console.error("Incorrect!");
}
for( i=0; i < naturalNumber; i++){
    for (j = 0; j < naturalNumber - i - 1; j++) pyramid += "   ";
	for (j = 0; j < 2 * i + 1; j++) pyramid += "[~]";
    pyramid += "\n";
}
console.log(pyramid);