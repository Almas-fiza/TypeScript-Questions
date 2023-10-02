"use strict";
//If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
const q25_1 = require("./q25");
if (q25_1.alien_color === "green") {
    console.log("You earned 5 points!");
}
//If the alien is yellow, print a message that the player earned 10 points.
if (q25_1.alien_color === "yellow") {
    console.log("You earned 10 points!");
}
//If the alien is red, print a message that the player earned 15 points.
if (q25_1.alien_color === "red") {
    console.log("You earned 15 points!");
}
