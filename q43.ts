//Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.

function make_great(magicians: string[]): string[]
{
   return magicians.map(magicians => "The Great " + magicians)
}
function show_magicians(magicians: string[]): void{

magicians.forEach(magicians =>console.log(magicians));
}

const originalmagicianNmaes: string[] =[
"harry","david","teller","alaadin","john"
]
const modifiedmagicianNmaes: string[] = 
    make_great(originalmagicianNmaes);
    show_magicians(originalmagicianNmaes);
    show_magicians(modifiedmagicianNmaes);















