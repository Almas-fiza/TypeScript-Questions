"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = " harram shakeel";
//lowercase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
//upparCae
let upparCaseName = personName.toUpperCase();
console.log(upparCaseName);
//titlecase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
