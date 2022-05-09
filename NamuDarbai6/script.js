//Pirma uzduotis - sukurti funckija, kuri pa alertins mano varda
// const giveName=document.getElementById("name");
// giveName.addEventListener("click",clickButtonListener);

// function clickButtonListener() {
//     alert("Domante");
// }

// //Antra uzduotis. Funckija, kuri sukurs ir grazins random skaiciu nuo 1 iki 5;
// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   const rndInt = randomIntFromInterval(1, 5);
//   console.log(rndInt);

// // Trecia uzduotis. Parasyti savo vardo ir pavades raizdziu suma

// const myName="Domante";
// const mySurname="Navarskaite";

// function addition(a,b) {
//     return a + b;
// }
// console.log(addition(myName.length, mySurname.length));

//Ketvirta uzduotis. Funkcija, kuri pagal paduotą skaičių gražins tam tikrą raidę.
//pvz. 0-> A, 1=B ir t.t.

//Rasome funckijos pavadinima, o skliausteliuose parametrą, pagal kurį veiks.
function getLetterByNumber(number) {
    const alphabet=["A","B","C","D","E","F","G","H","J","K","L","M","N","R","S","T","U","U","Z"];
    return alphabet[number]; //funkcija gazina rezultata
}
console.log(getLetterByNumber(5));

//5 uzduoits
const operator="multi";

function calculations(n1, n2) {
    if (operator==="sum") {
        return n1+n2;
    } else if (operator==="sub") {
        return n1-n2;
    } else if (operator==="div") {
        return n1/n2;
    } else (operator==="multi")
        return n1*n2;
}

console.log(calculations(10,6))

//6Uzduotis. Sukurkite 2 funckijas.
//1-oji paims nuo 1 iki 10, kita gauta skaiciu pakelia kvadratu.

function generateRandomNumber (min, max) {
    let number=Math.floor(Math.random() * (max - min +1) + min);
    return number;
}
function squareNum (number) {
    return number * number;
}
console.log(squareNum(generateRandomNumber(1,10)));


// function square(number) {  //funckija priima argumenta
//     return number * number; //grazina reiksme
// }

// const squaredNumber = square (10); //funckijos reiksme
// console.log(squaredNumber);
