/*
TASK: ------------------
Write a function that accepts three number arguments, 
finds the smallest number between the first and second argument and subtracts it from the bigger one.
The function should then add/sum that difference to the third argument..and then logs the sum.
*/
function calculator(num1, num2, num3) {
	let subtractedDifference = 0;

	if (num1 < num2) {
		subtractedDifference = num2 - num1;
	} else {
		subtractedDifference = num1 - num2;
	}

	const summedValue = subtractedDifference + num3;
	
	console.log(summedValue);
}

calculator(12, 9, 28);