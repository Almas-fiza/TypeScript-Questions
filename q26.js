"use strict";
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
const q25_1 = require("./q25");
if (q25_1.alien_color === "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (q25_1.alien_color !== "green") {
    console.log("You just earned 10 points for shooting the alien!");
}
//Write one version of this program that runs the if block and another that runs the else block.
if (q25_1.alien_color === "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points for shooting the alien!");
}
