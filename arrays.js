/*
ARRAY TASK

Write a function that accepts an array as an argument
 and logs the length of the array, the middle item
 and the index of the middle item.

NOTE: Assume that the argument passed into the
 function will always have a length that is an odd
 number e.g 3, 5, 7 etc.
*/

    function arrayToAccept(_parameter){
        const myArray = ["yellow", "blue", "purple", "lilac", "peach", "red", "black"];
        const lengthOfArray = myArray.length;
        const middleArrayIndex = ((myArray.length-1)/2);
        const middleArray = myArray[middleArrayIndex];

    console.log(lengthOfArray);
    console.log(middleArrayIndex);
    console.log(middleArray);
}
    
    arrayToAccept("yellow", "blue", "purple", "lilac", "peach", "red", "black");
