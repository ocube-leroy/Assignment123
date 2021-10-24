/* LOOP TASK 3

Write an app that logs a single text that contains all the strings in an array of strings. 
It should print both the text and it's number in the array separated by commas and a space. 
Also the text should end with a fullstop not a comma.
(Hint: loop, if statements, string concatenation).
    E.g ["orange", "mango", "cashew"];
    logged result should look like this: 1-orange, 2-mango, 3-cashew.
 */
 let strArray = ["itel", "samsung", "iphone", "tecno", "oppo", "nokia", "infinix"];
 let loggedStrArray = "";
 let i = 0;
 
 
 for (i = 0; i <= strArray.length; i++) {

    let item = strArray[i];

     if (i < strArray.length-1) {
         
      loggedStrArray += i + '-' + item  + ', ';
      
 
     }
     
     else if (i == strArray.length-1) {
         loggedStrArray += i + '-' + item + '.';
     }
     
 
     
 }
 
 console.log(loggedStrArray);
 