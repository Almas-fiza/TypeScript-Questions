"use strict";
const make_album = (artist, album, tracks) => {
    let albumobj = {
        artist,
        album,
    };
    if (tracks) {
        albumobj = Object.assign(Object.assign({}, albumobj), { tracks });
    }
    return albumobj;
};
console.log(make_album("Atif Aslam", "Laila Majnu", 30));
console.log(make_album("Shuja Haider", "Ru-Ba-Ru", 40));
console.log(make_album("Ed Sheeran", "Divide", 20));
