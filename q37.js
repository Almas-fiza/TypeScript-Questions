"use strict";
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function Make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(message);
}
Make_shirt("large");
Make_shirt("medium");
Make_shirt("large", "I luv programming");
