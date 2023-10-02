"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
let guestlist = [
    "maham", "Iqra", "Umair", "Mirha"
];
exports.guestlist = guestlist;
guestlist.forEach((guestName) => {
    console.log(`Hi ${guestName}, i wanna invite uh on dinner at my home, Kindly nake sure your presence.`);
});
//q15
console.log('umair cant come to dinner');
exports.guestlist = guestlist = ["maham", "Iqra", "irum", "Mirha"];
guestlist.forEach((guest) => {
    console.log(`Hi ${guest}, I am inviting you today on dinner at my Home`);
});
//q16
for (let guest of guestlist) {
    console.log(`Hi ${guest}, we found a bigger dinner table`);
}
;
//addind new guest to beginning of array
let newguest = "haram";
guestlist.unshift(newguest);
//console.log(guestlist)
//adding one guest to middle of array
let middleguestname = "sonia";
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, middleguestname);
//console.log(guestlist)
//using append ()to add new guest in the end of list
let guestatend = "nabila";
guestlist.push(guestatend);
//console.log(guestlist)
//new set of invitation message
console.log("new set of invitation message:");
for (let guest of guestlist) {
    console.log(`Hi ${guest}, Uh are invited to dinner`);
}
//q17
let guest = [
    'haram', 'maham',
    'sonia', 'Iqra',
    'irum', 'Mirha',
    'nabila'
];
//message about inviting only two persons.
console.log('i can invite only two persons for dinner');
//removing guest untill two person remain.
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    console.log(`Extremly sorry ${removeguest}, i cant invite uh to dinner `);
}
;
//message for remaining two persons
for (let guest of guestlist) {
    console.log(`Hey ! ${guest}, let meh tell uh that uh are still invited to dinner `);
}
//for empty list 
guestlist.pop();
guestlist.pop();
console.log('Guest list after dinner', guestlist);
