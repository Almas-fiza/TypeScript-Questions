"use strict";
//More Conditional Tests:
//test for equality and inequality with string
let string = "hello";
console.log("if string == hello then its true");
console.log(string == "hello");
console.log("string!= hello then its false");
console.log(string != "hello");
//test using lowercase function
let text = "HELLO";
console.log("if text.tolowercase() == hello then its false");
console.log(text.toLowerCase() != "hello");
console.log("if text.toLowerCase() !=  HELLO then its true");
console.log(text.toLowerCase() == "hello");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;
console.log("if num1 == num2 then its false");
console.log(num1 == num2);
console.log("if num1!= num2 then its true");
console.log(num1 != num2);
console.log("if num1 > num2 then its false");
console.log(num1 > num2);
console.log("if num1 >= num2 then its false");
console.log(num1 >= num2);
console.log("if num1 < num2 then its true");
console.log(num1 < num2);
console.log("if num1 <= num2 then its true");
console.log(num1 <= num2);
//test using "and" and "or" operaors
let num = 10;
console.log("num > 5 && num == 10 should be true => ", num > 5 && num == 10);
console.log("num < 20 && num > 15 should be false => ", num < 5 && num > 7);
console.log("num > 5 || num == 10 should be true => ", num > 5 || num == 10);
console.log("num < 20 || num > 15 should be true => ", num < 5 || num > 7);
//test whether anitem is in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arr.includes(5) should be true");
console.log(arr.includes(5));
console.log("arr.includes(10) should be truee");
console.log(arr.includes(10));
//test whether an item isnot in an array.
console.log("arr.includes(20) should be false");
console.log(arr.includes(20));
console.log("arr.includes(100) should be false");
console.log(arr.includes(100));
//
