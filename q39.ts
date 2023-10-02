// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

const city_country=(city:string, country:string) =>
{

    return ` ${city}, ${country}`;
}

console.log(city_country("London","UK"));
console.log(city_country("Delhi", "India"));
console.log(city_country("makkah", "saudia"));

