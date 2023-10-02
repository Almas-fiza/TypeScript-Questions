//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

 interface icecream{
        flavor:string
        topping : string 
        price: number
    }

    const icecream=
    {
flavor: "mango",
        topping: "vanilla",
        price: 350

    }
    
    const icecream2=
    {
flavor: "banana",
        topping: "vanilla",
        price: 450.}
        
        const icecream3=
        {
flavor: "banana",
        topping: "vanilla",
        price: 450.

        }
        const icecreams:icecream[] =[
            icecream,
            icecream2,
            icecream3
        ]

        console.log(icecreams)
