// // let user1 = "Ahmed";
// // let user2 = "Ali";
// // let user3 = "umar";

// // console.log(user1)
// // console.log(user2)
// // console.log(user3)


// import a from './first'

// console.log(a);

import inquirer from "inquirer";

let answer = await inquirer.prompt([{   
    name : "userName",
    type : "string",
    message : "What is your name?",

}]);

// console.log(answer);
console.log(`Welcome ${answer.userName} !`)