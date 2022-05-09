// console.log("6Paskaita. Masyvai, funkcijos, eventai")

const myName="Rokas";
// console.log(myName.length);

// const firstChar = myName[0];
// const lastChar = myName[myName.length - 1];
// const middleChar = myName[Math.floor(myName.length / 2)];

// console.log(firstChar);
// console.log(lastChar);
// console.log(middleChar);

// //Reikia isprintinti kiekviena savo vardo raide atskirai
// for (let i=0; i<myName.length; i++) {
//     const char = myName[i];
//     console.log(char);
//     console.log(`${i+1}. ${char}`);
// }

// const firstChar = myName.charAt(0);
// const lastChar = myName.charAt(myName.length-1);
// console.log(firstChar);

//MASYVAI
// const chars = ["R","O","K","A","S"];
// const fruits = ["apple","bananna","pear"];
// // console.log(fruits.length);
// // console.log(fruits[1]);
// //isptrinkite visus masyvo elementus
// for (let i = 0; i<fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }
//atvzaiduoti studento varda ir parasyti ar jo vardas yra ilgesnis nei 5 raides ar ne
// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
// for (let i=0; i<students.length; i++) {
//     const student=students[i];
//     if (student.length>5) {
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if (student.length<5) {
//         console.log(`Vardas ${student} turi mažiau nei 5 raides`);
//     } else {
//         console.log(`Vardas ${student} turi lygiai 5 raides`);
//     }
// }
//Prekiu krepseli suma
// const basket = [7, 10, 0.5, 23, 41];
// let total = 0; 

// for (let i=0; i<basket.length; i++) {
//     const number = basket[i];
//     total +=number;
// }
// console.log(total); // suma


//FUNKCIJOS
// return funckija
function square(number) {  //funckija priima argumenta
    return number * number; //grazina reiksme
}

const squaredNumber = square (10); //funckijos reiksme
console.log(squaredNumber);

//void funkcija, ji negrazina tokios reiksmes, tik iskviecia reiksme

function logger(value) { //priima reiksme
    console.log(value);
}

logger("Testing..")

function printAllArrayItems(array) {
    for (i=0; i< array.length; i++) {
        const item = array[i];
        console.log(item);
    }
}

const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];

printAllArrayItems(students);

function repeatString(string, count) {
    let finalString="";
    for(let i=0; i<count; i++) {
        finalString +=string;
    }
    return finalString;
}

const repeatedStrings=repeatString("Domante", 2);
console.log(repeatedStrings);

function addition (a,b) {
    return a+b;
}

function substraction (a,b) {
    return a-b;
}

console.log(addition(5,4));
console.log(substraction(10,7));