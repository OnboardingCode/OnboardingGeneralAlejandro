// variable = a container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

/* let x;
x = 100;
let age = 25;
let price = 10.99;
let gpa = 2.1;

let firstName = "Dude";
let favFood = "pizza";
let email = "dude213@gmail.com";

let online = false;
let forSale = true;
let isStudent = true;

console.log(`Dude is online?: ${online}`);
console.log(`Is this car for sale? ${forSale}`);
console.log(`Is the student enrolled? ${isStudent}`);

console.log(`You are ${age} years old.`);
console.log(`The price is ${price}.`);
console.log(`Your GPA is ${gpa}.`);
*/

let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

/* document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = isStudent; */
