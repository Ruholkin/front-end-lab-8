/* spied algorithm from a github.com/rpavliv37 */

var maxPrize,
	possiblePrize = 0,
	randNumber,
	maxNumber,
	enterNumber,
	totalPrize = 0,
	result = true,
	attemptsUsed,
	attemptsLeft;

while(result){
	result = confirm("Do you want to play a game?");
	if(result == true){
		maxNumber = 5;
		maxPrize = 10;
		attemptsUsed = 0;
        attemptsLeft = 3;
        randNumber = Math.floor(Math.random() * (maxNumber + 1));

		while (attemptsUsed < 3 && result) {
        var enterNumber = prompt("Enter a number from 0 to ${maxNumber}\nAttempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${possiblePrize}$");

        if (!isNaN(parseFloat(enterNumber)) && isFinite(enterNumber) && Number(enterNumber) === randNumber) {
            totalPrize += possiblePrize;
            attemptsUsed = 0;
            attemptsLeft = 3;
            maxNumber = maxNumber * 2;
            maxPrize = maxPrize * 3;
            possiblePrize = maxPrize;
            randNumber = Math.floor(Math.random() * (maxNumber + 1));
            result = confirm("Do you want to continue a game?");
        } else {
            attemptsLeft--;
            attemptsUsed++;
            possiblePrize = Math.floor(maxPrize / 2);
        }
    }

    console.log("Thank you for a game. Your prize is ${totalPrize}");
    result = confirm("Do you want to play again?");
	}else{
		console.log("You did not become a millionaire.");
	}
}