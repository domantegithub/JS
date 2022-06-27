// console.log("Konsultacija-kartojimas");

// //1) Sukurk kintamaji userName ir priskirk jam bet koki string;
// //Sukurk kintamaji goodbye ir sukonstruom stringa, kurio reiksme butu
// //Viso gero {userName}, lauksime sugriztanat
// const userName = "Domante";
// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant!`;
// console.log(goodbye);

// //2) Sukurk kintamaji salary, priskirk jam number ir iškonsolink su $ ženklu
// const salary = 10000;
// console.log(`$${salary}`);

// //3)Sukurti kintamaji ir nustatyti reiksme 10;
// //parasyti if salyga ar kaina mazesne nei 10, jei taip perku, jei ne neperku

// const price = 10;

// if (price > 10) {
//     console.log("Perku");
// } else {
//     console.log("Neperku");
// }
// //antras variantas

// let result = "";
// if (price > 10) {
//     result = "Perku";
// } else {
//     result = "Neperku";
// }
// console.log(result);

// //3 variantas
// let result2 = "Neperku";
// if (price > 10) {
//     result2 = "Perku";
// }
// console.log(result2);

// //4) Sukurti kintamaji hours

// const hours = 50;

// if (hours <= 6 && hours >= 0) {
//     console.log("Naktis");
// } else if (hours > 6 && hours <= 12) {
//     console.log("Rytas");
// } else if (hours > 12 && hours <= 18) {
//     console.log("Diena");
// } else if (hours > 18 && hours <= 24) {
//     console.log("Vakaras");
// } else {
//     console.log("Netinkama vertė");
// }

// //NAMU DARBAI

// // Ternary operatorius

// const price2 = 11;
// const isMoreThenTen = price2 > 10 ? "Perku" : "Neperku";
// console.log(isMoreThenTen);

// const whatDayTime = hours >= 0 && hours <= 6 ? "Naktis" : hours > 6 && hours <= 12 ? "Rytas" : hours > 12 && hours <= 18 ? "Diena" : hours > 18 && hours <= 24 ? "Vakaras" : "Netinkama vertė";

// console.log(whatDayTime);

// //Kintamasis su vardu, ir atvaizduoti pirma ir paskutine raide

// const personName = "Domantė";
// const firstAndLastLetter = personName[0] + personName.charAt(personName.length - 1);
// console.log(firstAndLastLetter);

// //sukurti kintamaji count ir suskaiciuoti kiek varde raidziu

// const count = personName.length;
// console.log(count);

// //atvaizduoti viskas vardo raides naudojant for cikla

// for (let i = 0; i < personName.length; i++) {
//     console.log(`${i + 1} raidė yra ${personName.charAt(i)}`);
// }

// FUNKCIJOS
//vienos turi return, o kitos neturi

//turi return reiksme
function square(num) {
  return num * num;
}
const squared = square(5);
console.log(squared);
//jei yra return reiksme, tuomet arba galima iskart consolinti arba susikurti kintamaji

//Sukurti funckija, kuri priims argumenta ir grazins skaiciu kubu

function getCube(number) {
  return number * number * number;
}

const gottenCube = getCube(3);
console.log(gottenCube);

//Sukurti funckija, kuri priims du skaicius ir gražins jų sandauga

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}
const multipliedNumbers = multiplyTwoNumbers(2, 3);
console.log(multipliedNumbers);

//Funckija, kuri priims du skaicius ir grazins sudeti, atimti ir dalyba

function sum(arg1, arg2) {
  return arg1 + arg2;
}
const summed = sum(10, 15);
console.log(summed);
//ats.:25

function sub(num3, num4) {
  return num3 - num4;
}
const subtraction = sub(15, 5);
console.log(subtraction);
//Ats.: 10
function divide(num4, num5) {
  return num4 / num5;
}
const divided = divide(25, 5);
console.log(divided);
//Ats.: 5

//Sukurti funckija, kuri priims stringa ir grazins kiek jame raidziu
function stringLength(string) {
  return string.length;
}

const str ="Domantė"
console.log(stringLength(str));

//Sukurk funckija, kuri priims du skaicius ir grazins ar pirmas didesnis uz antra

function compareTwoNumbers(number1, number2) {
  if (number1 > number2) {
    return true;
  } else {
      return false;
  }
}

console.log(compareTwoNumbers(3, 2));

//Antras variantas
// function compareTwoNumbers(number1, number2) {
//  return number1 > number2;
//arba
// return number1 > number2 ? true : false;
//   }
//   console.log(compareTwoNumbers(3, 2));

//Sukurti funckija, kuri priims stringa ir grazins pirma ir paskutini jo elementa sudejus

function getStringLetters(str) {
    return str[0] + str[str.length-1];
}
console.log(getStringLetters("Rokas"));

//grazinti random skaiciu
function getrandomNumber() {
    return Math.random;
}

console.log(getrandomNumber());
