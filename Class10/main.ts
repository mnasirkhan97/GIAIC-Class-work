// ====> functions

// function halffryEgg(){

// }
// halffryEgg()



//====>  Hoisting : 

// console.log(a);
// var a = "Nasir";
// console.log(a);


// // console.log(a);
// let a = "Nasir";



// let a ;

// console.log(a)



// console.log(a)
// let a ;



// ====> global Scope, Local Scope  function scope

// ====> Global scope

// let std1 = "Amir";
// var std2 = "Ali";
// const std3 = "Uzair";



// ====> Block Scope


// let std1 = "Amir";
// var std2 = "Ali";
// const std3 = "Uzair";


// if(true){
//     std2="Mehwish"
//     console.log(std2)
//     std1="Ayesha"
//     std2="Mahnoor" 
//     // std3="Mahnoor" // error aye ga kiun k const ki value ko update nh kr sakty
// }

// console.log(std1)
// console.log(std2)
// console.log(std3)


// {
//     console.log(st1)
//     console.log(std2)
//     console.log(st3)
// }

// {
//     let myname = "Zeshan"
// }

// console.log(myname);




// {
//     var myname = "Zeshan"
// }

// console.log(myname);



// let std1 = "Amir";
// var std2 = "Ali";
// const std3 = "Uzair";


// if(true){
//     let std2="Mehwish"
//     console.log(std2, "Inside BlockScope")
//  }

// console.log("Out side   Block",std1)





// ===> Function scope


// function functionScope() {
//     // code something
// }

// functionScope()




// =====> Object


// let userName = "Kamran Khan"
// let userDesg = "Governor Sindh"
// let userResidence = "Governor House"
// let teacher = "Ali Aftab"
// let desg = "Teacher"
// let residence = "Karachi"



// let userObj ={
//     // key: value;
//     userName : "Kamaran Khan",
//     userDesg : "Governor Sindh",
//     userResidence : "Governor House",

// }

// console.log(userObj)
// console.log(userObj.userName)
// console.log(userObj.userDesg)
// console.log(userObj.userResidence)


// let zeeshanObj={
//     name: "Zeshan",
//     desg: "Intern",
//     res : "Johar",
//     fav: "Biryani",
//     drink: "Milk"
// }

// // console.log(zeeshanObj)
// // console.log(zeeshanObj.name)
// console.log(zeeshanObj.fav, zeeshanObj.name);
// console.log(zeeshanObj["drink"]);





// ======> Nested Object

let nestedObj = {
    objName: "Ali",
    desg: "Intern",
    res : "Johar",
    fav: "Biryani",
    drink: "Milk",
    qty: {
        hairColor: "black",
        eyeColor: "beown",
        hieght: 5,
    }
};

// console.log(nestedObj.qty.hairColor)
// console.log(nestedObj.qty.hieght)
// console.log(nestedObj.qty["hieght"])
console.log(nestedObj["qty"].hieght)
// console.log(nestedObj["qty"]["hieght"])