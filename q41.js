"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = void 0;
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
exports.show_magicians = show_magicians;
const magicianNmaes = [
    "harry", "david", "teller", "alaadin", "john"
];
show_magicians(magicianNmaes);
