// console.log("Hello Nasir");


// =====> Array:

// let arr = [2, "nasir", true];

// console.log(arr[1])

// arr.push("khan");

// console.log(arr)
// console.log("length===>", arr.length)


// ====> Object 

// let obj = {
//     name: "nasir",
//     age: 25,
//     male: true
// }


// console.log(obj.name)
// console.log(obj["name"])


// =======>  Arrays ki practice


// let arr = [1, "nasir", "khan"]
// console.log(arr)
// arr[1] = "Nasir"
// // console.log(arr[2])
// console.log(arr)


//=====>  arrays object


// let students = [{
//     name: "Usman",
//     age : 25,
//     developer: true 
// }]

// // console.log(students)
// // console.log(students[0].name)
// console.log(students[1].name) // error



// =====> Arrays Method

//--> push()  // Array k last me 1 element add ho jaye ga

// let fruits: string[] = ["Apple", "Orange", "Banana"]
// console.log(fruits)
// fruits.push("Kiwi")
// console.log(fruits)
// fruits.push("Mango")
// console.log(fruits)
// fruits.push["graps"]  // error


// ---> pop()  // Last element arry me e remove kr deta hai or return kr k deta hai

// fruits.pop()

// console.log(fruits)


// push & pop


// let fruits: string[] = ["Apple", "Orange", "Banana"]

// fruits.push("graps")
// console.log(fruits)
// let dropFruits = fruits.pop()
// console.log(fruits)
// console.log("Drops Fruit",dropFruits)




// ----> Shift & Unshift

// ----> Shift()  // Array k 1st index ko removed krta hai or return kr k deta hai
// let fruits: string[] = ["Apple", "Orange", "Banana"]
// console.log(fruits)

// let arrShift = fruits.shift()

// console.log(fruits)
// console.log(arrShift)



// ---> Unshift()  // Array k start me elements add krta hai

// let fruits: string[] = ["Apple", "Orange", "Banana"]
// console.log(fruits)

// let arrShift = fruits.unshift("Mango")

// console.log(fruits)
// console.log(arrShift)



// ======> Spice or slice

//-----> Slice  : Ye aik new arry bnata hai or us me modification krta hai jb k old arry ko change nh krta

//slice():

// slice() naya array banata hai aur original array ko modify nahi karta.
// Is method ka use array ke subset ko extract karne ke liye hota hai.
// Syntax: array.slice(start, end)
// start: Starting index from where subset ko extract karna hai. (included)
// end: Ending index until where subset ko extract karna hai. (not included)

// Example:
// javascript
// Copy code
// var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// var subset = fruits.slice(1, 3); // Extracts elements from index 1 to 2
// console.log(subset); // Output: ['Banana', 'Cherry']
// console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date'] (Original array remains unchanged)
// Is tareeke se, splice() array ko modify karta hai jabki slice() naya array create karta hai bina original array ko modify kiye.

// let fruits = ["Apple", "Banana", "Grapes", "Mango"];

// let sliceMethod = fruits.slice(0,2)  // ye 2 parameter leta hai jis me phla index number jhn se start krna or dosra index jhn tk end krna ho but ending point ko nh lata yani index 2 se phly tk (Or ye new arry return krta hai)

// console.log(fruits)
// console.log(sliceMethod)


// let names = ["Nasir", "Khalid", "Mudassir", "Ahmad", "Bashir", "Ali", "Usman"];

// let sliceMthd = names.slice(starting indexe, length)
// let sliceMthd = names.slice(2, 5)
// let sliceMthd = names.slice(2)

// console.log(names)
// console.log(sliceMthd)



// -----> Splice()

// splice():

// splice() array ko modify karta hai.
// Is method ka use array ke elements ko remove ya replace karne ke liye hota hai.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// start: Starting index from where elements ko remove karna shuru karna hai.
// deleteCount: Kitne elements ko remove karna hai.
// item1, item2, ...: Additional items jo add kiye jayenge agar required ho.


// example: 

// var fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// fruits.splice(1, 2); // Removes 'Banana' and 'Cherry'
// console.log(fruits); // Output: ['Apple', 'Date']

// practice

// let fruits : string[] = ["apple", "banana", "mango", "grapes", "cherry"];

// console.log(fruits)

// fruits.splice(starting index, delete krna hai jtny b elements delete krny ho unko likhna hai) // 

// let spliceMethd = fruits.splice(1, 2, "pineapple", "orange")  // index 1 pe banana hai or index 2 pe mango hai


// console.log(fruits)
// console.log(spliceMethd)


// ===> Union leterlas : agr hum arry me number , string or boolean ko aik sath add krna chahen toh is k liye use krty hain

// let fruits: (string | number | boolean)[] = [5, "nasir", true, 7, false, "Khan"]







// ======> tuples:
// TypeScript mein "tuples" ek data type hai jo fixed-size aur fixed-type arrays ko represent karta hai. Har element ko specific index ke saath define kiya jata hai, aur ye indexes zero-based hote hain.

// Example:
// Ek tuple declare karo jismein number, string, aur boolean type ke elements hain
// let person: [number, string, boolean];

// // Ab is tuple ko assign karo
// person = [1, "John Doe", true];

// // Access karte waqt indexes ka use karo
// console.log(person[0]); // Output: 1
// console.log(person[1]); // Output: "John Doe"
// console.log(person[2]); // Output: true

// // Tuple ke size aur type ka violation karne par TypeScript error generate karega
// person = ["Alice", 30, false]; // Error: Type 'string' is not assignable to type 'number'.
// person.push("Extra"); // Error: Property 'push' does not exist on type '[number, string, boolean]'.

// Is example mein, person tuple mein pehla element number, doosra string, aur teesra boolean type ka hai. Tuple ko declare karte waqt specified order aur data types ka dhyan rakhna zaroori hai. Tuple ka size fix hota hai aur usmein kewal declared types ke elements hote hain.



// let coffeeOrder : [string, string] = ["Cappuccino", "Medium"]
                            // Tuples:[Coffe Type, Size]  

type personalInfotype = [string, number, boolean]


let personalInfo: personalInfotype = ["Nasir", 123, true];

// let [name, rollNum, onsite] = personalInfo