"use strict";
// ======> Objects
// defining a basic object in typescript 
// let obj = {
//     name: "Nasir"
// }
// console.log(obj.name)
// console.log(obj["name"])
// let userName : string = "Ubaid";
// let teacerDetail = {
//     name: "Ali Aftab",
//     age: 20,
//     qualities:{
//         height: 5.11,
//         hair: "black",
//     }
// }
// console.log(teacerDetail)
//=== > anonumous 
// let teacerDetail: { name: string; age: number; address: string; expertDeveloper:boolean } = {
//   name: "Ali Aftab",
//   age: 20,
//   address: "ABC address",
//   expertDeveloper: true
// };
// console.log(teacerDetail)
// let teacerDetail:
// {
//     name: string,          
//     age: number,
//     qualities:{
//         height: number,
//         hair: string,
//     }
// }
//  =
//   {
//     name: "Ali Aftab",
//     age: 20,
//     qualities:{
//         height: 5.11,
//         hair: "black",
//     }
// }
// console.log(teacerDetail);
// // ===:> Type alias
// let stdObj: stdObjType = {
//     name: "Nasir",
//     age: 25,
//     expDev : true,
// }
// type stdObjType ={
//     name: string,
//     age: number,
//     expDev: boolean,
// }
// Anonymous
// let studentObj: {name: string, age: number} = {
//     name: "Rehman",
//     age: 26,
// }
// // Aliased Object type
// let studentObj : studentObjType = {
//     name: "Rehman",
//     age: 26,
// }
// type studentObjType = {
//     name: string,
//     age: number,
// }
// ========> Unions Literals
// let myName : string | null;
// myName = null
// myName = 'Sheikh';
// myName = 14;  // error
// console.log(myName)
// let userName : string|number;
// userName = "Abdullah";
// userName = 786;  // error nh aya kiun k hum ne  line number 112 me string or number dono define k hai
// let age : number | string;  // union type me hum string or number donu de skty hain
// age = 25;
// age = "Twenty five"
// ======>  type Literals
// let TrafficLights : "Red" | "Orange" | "Green";
// TrafficLights = "Red"  // valid
// TrafficLights = "Green" // valid
// TrafficLights = "green" // Invalid (case sensetive hota hai)
// TrafficLights = "Green " // Invalid (Space b nh de sakty hain)
// TrafficLights = "Blue"  // Invalid
// let num : number | "dead" | "unknown"
// num = 1234; // valid
// num = "dead" // valid
// num = "unknown"  // valid
// =======> Type Intersection
// type person1 ={
//     name: string,
//     age: number
// }
// type person2 ={
//     gender: string,
//     exp: number,
// }
// type personType = person1 & person2
// let person : personType = {
//     name : "Sir ZEESHAN",
//     age: 36,
//     gender: "Male",
//     exp : 22,
// }
// =====> Arrays
let fruitName = ["Banana"];
// console.log(fruitName)
console.log(fruitName[0]);
//
