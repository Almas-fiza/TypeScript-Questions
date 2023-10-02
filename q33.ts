//Store the numbers 1 through 9 in a array.

const Numbers: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array.

for (let i = 0; i < Numbers.length; i++) {
    console.log(Numbers[i]);
}

//Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

for (let i = 0; i < Numbers.length; i++) {
    if (i === 0) {
        console.log(Numbers[i] + "st");
    } else if (i === 1) {
        console.log(Numbers[i] + "nd");
    } else if (i === 2) {
        console.log(Numbers[i] + "rd");
    } else if (i === 3) {
        console.log(Numbers[i] + "th");
    } else {
        console.log(Numbers[i] + "th");
    }
}





