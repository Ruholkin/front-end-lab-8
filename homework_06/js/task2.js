var amountOfDollars = 0, amountOfEuros = 0, 
	dollarExchangeRate = 27.1240, euroExchangeRate = 33.2324;
while (amountOfEuros <= 0 || isNaN(amountOfEuros) == true){
	amountOfEuros = prompt("Enter amount of euros:", "");
}
while (amountOfDollars <= 0 || isNaN(amountOfDollars) == true){
	amountOfDollars = prompt("Enter amount of dollars:", "");
}
console.log( amountOfEuros +" euros are equal " + (amountOfEuros*euroExchangeRate).toFixed() + " UAH, " + amountOfDollars + " dollars are equal " + (amountOfDollars*dollarExchangeRate).toFixed() + " UAH, one euro is equal " + (euroExchangeRate/dollarExchangeRate).toFixed(3) + " dollars." );