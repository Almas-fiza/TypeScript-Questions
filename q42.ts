//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const make_great = (magiciansArr: string[]) => {
    magiciansArr.map((name: string, index: number) => {
      magiciansArr[index] = "The Great " + name;
    });
  };
  
  const magicianNmaes: string[] =[
    "harry","david","teller","alaadin","john"]
  make_great(magicianNmaes);
  import { show_magicians } from "./q41";
  show_magicians(magicianNmaes);

export{make_great}
