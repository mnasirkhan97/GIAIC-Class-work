// import inquirer from "inquirer";

// let info = await inquirer.prompt([{
//     name : "StudenName",
//     StudentID : "number",
//     message: "What is Your Name?",
//     // message2 : "What is your Student Id?" 
// }]);

// console.log(`Student Name : ${info.StudenName}`);
// console.log(`Welcome : ${info.StudenName}`);
// // console.log(`Student Name : ${info.StudenName}`);

// Slide page no 99 Example:



// import inquirer from "inquirer";

// let userAge = await inquirer.prompt([{
//     name : "age",
//     type : "number",
//     message : "Enter your Age:"
// }]);

// console.log("InShaALLAH in, " + (60 - userAge.age) + " years you will be 60 years old,");

import inquirer from "inquirer";
import chalk from "chalk"

let userAge = await inquirer.prompt([{
    name : "age",
    type : "number",
    message : "Enter your Age:"
}]);

console.log(chalk.blue("InShaALLAH in, " + (60 - userAge.age) + " years you will be 60 years old."));

