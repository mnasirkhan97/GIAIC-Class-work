


// let a = 5;
// a++
// console.log(a);
// ++a
// console.log(a);

// let b = 10 
// b--
// console.log(b)
// --b
// console.log(b)
// console.log(b)




// import inquirer from "inquirer"

// const input1 = await inquirer.prompt([{
//     name : "num1",
//     type : "number",
//     message : "kindly enter your first no :"
// }]);

// const input2 = await inquirer.prompt([{
//     name : "num2",
//     type : "number",
//     message : "kindly enter your second no :"
// }]);

// let total : number = input1.num1 + input2.num2

// console.log(total)



// ======> BMI Calculator

// let weightInKg = 70 // 70kg
// let heightInMeters = 1.75 //1.75 meters

// let bmi = weightInKg / (heightInMeters * heightInMeters)

// console.log(`Your BMI is ${bmi}`)


// ======> BMI Calculator in CLI

import inquirer from "inquirer"

const input1 = await inquirer.prompt({
    name : "weight",
    type : "number",
    message: "Please enter your weight in KG :"
})

const input2 = await inquirer.prompt({
    name : "height",
    type : "number",
    message: "Please enter your Height in Meters :"
});

let bmi : number = input1.weight / (input2.height * input2.height) ;

console.log(`Your BMI value is : ${bmi}`)

