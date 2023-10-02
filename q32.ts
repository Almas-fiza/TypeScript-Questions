// Make a list of five or more usernames called current_users.

const current_users = [
"laiba" ,
"umair",
"almas",
"iqra",
"maham"
]

//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

const new_users = [
"LAIBA",
"MAHAM",
"HARRAM",
"NAYYAB",
"MONA"
]

//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.


new_users.map((new_users: string) => {
    if (current_users.includes(new_users.toLowerCase())) {
      console.log("username", new_users, "already in use. Please rename yourself");
    } else {
      console.log("username", new_users, "is available");
    }
  });