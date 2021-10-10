/*Task-----------
Write a JavaScript program to sum the multiples of 3, 5 and 7 between 22 and 1000.
*/
var sum = 0;
for (let i = 22; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0 ) {
        sum += i;
        
    }
    
}
console.log(sum);