"use strict";
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_great = void 0;
const make_great = (magiciansArr) => {
    magiciansArr.map((name, index) => {
        magiciansArr[index] = "The Great " + name;
    });
};
exports.make_great = make_great;
const magicianNmaes = [
    "harry", "david", "teller", "alaadin", "john"
];
make_great(magicianNmaes);
const q41_1 = require("./q41");
(0, q41_1.show_magicians)(magicianNmaes);
