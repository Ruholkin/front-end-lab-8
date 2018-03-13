var outputMessage = 0, squareOfTriangle = 0;
var sideA = parseFloat(prompt("Enter the first side of the triangle: ", ""));
var sideB = parseFloat(prompt("Enter the second side of the triangle: ", ""));
var sideC = parseFloat(prompt("Enter the third side of the triangle: ", ""));
if( sideA <= 0 || sideB <= 0 || sideC <= 0 || isNaN(sideA) == true || isNaN(sideB) == true || isNaN(sideC) == true) {
	console.log("Incorrect data");
} else {
	outputMessage = "Type of triangle is ";
	switch (true) {
		case (sideA == sideB == sideC):
			outputMessage = outputMessage + "equilateral and ";
			break;
		case ( (sideA == sideB || sideA == sideC || sideB == sideC) && (sideA*sideA == sideB*sideB + sideC*sideC || sideB*sideB == sideA*sideA + sideC*sideC || sideC*sideC == sideA*sideA + sideB*sideB)):
			outputMessage = outputMessage + "isosceles and right triangle and "; 
			break;
		case (sideA == sideB || sideA == sideC || sideB == sideC):
			outputMessage = outputMessage + "isosceles and "; 
			break;
		case (sideA*sideA == sideB*sideB + sideC*sideC || sideB*sideB == sideA*sideA + sideC*sideC || sideC*sideC == sideA*sideA + sideB*sideB):
			outputMessage = outputMessage + "right triangle and "; 
			break;
		default:
			outputMessage = outputMessage + "scalene and "; 
			break;
	}
	squareOfTriangle = (0.25 * Math.sqrt( (sideA + sideB + sideC) * (- sideA + sideB + sideC) * (sideA - sideB + sideC) * (sideA + sideB - sideC))).toFixed(2);
	switch (true) {
		case (squareOfTriangle <=0):
		case (isNaN(squareOfTriangle)==true):
			console.log("Incorrect data. The triangle doesn't exist.");
			break;
		default:
			console.log( outputMessage + "square is " + +squareOfTriangle );
			break;
	}
}