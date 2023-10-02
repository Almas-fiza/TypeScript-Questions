//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

import { alien_color } from "./q25";


if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien!");
}

//If the alien’s color isn’t green, print a statement that the player just earned 10 points.

if (alien_color!== "green") {
  console.log("You just earned 10 points for shooting the alien!");
}
//Write one version of this program that runs the if block and another that runs the else block.

if (alien_color === "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points for shooting the alien!");
}