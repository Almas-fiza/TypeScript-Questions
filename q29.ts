//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruits = ["apple", "banana", "cherry"];

if (favoriteFruits.includes("apple")) {
  console.log("Your favorite fruit is an apple.");
} 
 if (favoriteFruits.includes("banana")) {
  console.log("Your favorite fruit is a banana.");
} 
 if (favoriteFruits.includes("cherry")) {
  console.log("Your favorite fruit is a cherry.");
}
if(favoriteFruits.includes("mango")) {
    console.log("Your favorite fruit is a mango.");
}
 else {
  console.log("Your favorite fruit is not in the array.");
}