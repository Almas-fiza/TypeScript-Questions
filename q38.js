"use strict";
//Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
const describe_city = (city, country = "pakitan") => {
    console.log(city + " is in " + country);
};
describe_city("karachi", "pakistan");
describe_city("makkah", "saudia");
describe_city("delhi", "india");
describe_city("london", "UK");
