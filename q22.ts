//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//accessing the error

let numbers : number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8];
console.log(numbers[9]);

//correcting the error

let number : number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8];
if(number.length>9){
    console.log(number[9]);
}
else{

console.log("index 9 is out of range");


}