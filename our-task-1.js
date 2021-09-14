/*
TASK:-----------------
A function accepts 3 arguments, Find the difference between the 2nd smallest one and the most smallest one,
and then add the difference to the biggest one
*/
function calculator(num1, num2, num3) {
    const numbersArray = [num1, num2, num3];
    const sortedNumbersArray = numbersArray.sort((a, b) => a - b);

    const summedValue = sortedNumbersArray[1] - sortedNumbersArray[0] + sortedNumbersArray[2];

    console.log(summedValue);
}

calculator(12, 9, 28);