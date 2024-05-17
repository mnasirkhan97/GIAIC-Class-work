"use strict";
// ====> concatenation:
// let first_name : string = "Nasir";
// let last_name : string = "Khan";
// console.log(first_name + last_name);
// console.log(first_name +" "+ last_name);
// ===> Template literals
// let first_name : string = "Nasir";
// let last_name : string = "Khan";
// console.log(`${first_name} + ${last_name}`)
// console.log(`${first_name}  ${last_name}`)
// console.log(`${first_name} ${last_name}`)
// console.log(`${first_name}${last_name}`)
//  ===> Functions
// ===> Simple (Static Function)
// function defination || function declaration
// function myName(){
//     console.log("Nasir")
// }
// function call || function invoke
// myName()
// ====> agr funcation ko block { } k andr call krengy toh??
// function myName(){
//     console.log("Nasir")
//     myName()
// }
// code work nh kry ga.....
// function todayClass() {
//     console.log("Class tuesday")
//     console.log("Class monday")
// }
// todayClass()
// todayClass()
// todayClass()
// todayClass()
// ====> parameter & argument :  a parameter is a variable in the function definition, while an argument is the actual value that is passed to the function when it is called.
// ===> Static Functions : jis me parameters or arguments nh hoty
// function myName (name:string){
//     console.log(name)
// }
// myName("Nasir");
// ===> Multiple Names
// ===> Dynamic Functions : jis me parameter or arguments lety hain
// function stdName (name:string){
//     console.log(name)
// }
// stdName("Nasir");
// stdName("Yasir");
// stdName("Umar");
// stdName("Ahmad");
// ====> 1 se zyada parameter or arguments pass krna:
// function sum (num1:number, num2:number){
//     console.log(num1 + num2)
// }
// sum(10,12);
// sum(22, 13)
// sum(5, 8)
// ==> Qs
// function nameAge(name:string, age:number){
//     console.log(`My Name is ${name} and age is ${age} `)
// }
// nameAge("Nasir", 25);
// nameAge("Ahmad", 24);
// nameAge("Khan", 22);
// ==> agr hum arguments men order change krengy toh error ay ga
// function nameAge(name:string, age:number){
//     console.log(`My Name is ${name} and age is ${age} `)
// }
// nameAge(25,"Nasir" );  // error
// =====> Default Parameter : if you forget an ingredient , you have a backup
// function myBio (name:string="Nasir", age:number=25){
//     console.log(`My Name is ${name} and My age is ${age}`)
// }
// // myBio();
// myBio("Yasir", 22);
// ====> any keyword: agr hum string ki jga number de dengy toh error nh aye ga
// function myBio (name:any, age:any){
//     console.log(`My Name is ${name} and My age is ${age}`)
// }
// myBio(18, "ali");
// function myBio (name:string="Nasir", age:number=25){
//     console.log(`My Name is ${name} and My age is ${age}`)
// }
// myBio(string, number);   // error
// function myBio (name:string = "Ali", age:number = 24){
//     console.log(`My Name is ${name} and My age is ${age}`)
// }
// myBio("Nasir", 22);
// myBio();
// myBio(null, null);  // error
// function myBio (name:string = null, age:number = 24){   // error
//     console.log(`My Name is ${name} and My age is ${age}`)
// }
// myBio("Nasir");
// myBio();
// function myName(name:string, age:number){
//     console.log(`My Name is ${name} & my age is ${age}`)
// }
// myName("Ali", 22)
// ======> Return : is se hum function k bhr value get kr sakty hn
// function addTwoValue (num1:number, num2:number){
//     let value = num1 * num2;
//     return value;
// }
// console.log(addTwoValue(2, 5)) 
// console.log(addTwoValue)
// ===> without return: bhr value nh mil sakti hai
// function addTwoValue (num1:number, num2:number){
//     let value = num1 * num2;
//     console.log(`inner value --> ${value}`)
//     
// }
// console.log(addTwoValue(2, 5)) 
function addTwoValue(num1, num2) {
    let value = num1 * num2;
    console.log(value);
    return value;
}
console.log(addTwoValue(2, 5));
