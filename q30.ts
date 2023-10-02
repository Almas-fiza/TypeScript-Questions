//Make a array of five or more usernames, including the name 'admin'.

const usernames: string[] =["admin","laiba", "fiza", "umair"]

//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const greetings: string[] =

usernames.map((usernames: string) => {
   if (usernames === "admin") {
    return' Hello admin, would you like to see a status report?';}

    else { return "Hi " + usernames + ", thank you for logging in again"}
   })

   console.log(greetings);


