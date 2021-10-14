/* TASK!--------------
Write a function that accepts a number N and returns the smallest 
number between the sum of all even numbers between 0 and N(0 and N inclusive) 
and the sum of all odd numbers(0 and N inclusive) between 0 and N.
 */

var sumEven = 0;
var sumOdd = 0;
    for (let index = 0; index <= 19; index++) {
        
        if (index % 2 === 0) 
        {
            sumEven += index; 
         }
        else 
        {
            sumOdd += index;
        }
    
        
        }
        console.log(sumEven);
        console.log(sumOdd);
        console.log(Math.min(sumEven, sumOdd));
        
    
    