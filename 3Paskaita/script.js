// console.log("Sveiki, čia trečia paskaita")

// // 3Paskaita Mokomės switch, ternary operatoriai, for ciklas
// const key = 2;
// //Argumentas key (gali būti ir kitas pavadinimas) turi atitikti case skaičiaus reikšmę

// switch (key) {
// case 1:
// console.log("Pirmadienis");
// break;
// case 2:
// console.log("Antradienis");
// break;
// case 3:
// console.log("Treciadienis");
// break;
// case 4:
// console.log("Ketvirtadienis");
// break;
// case 5:
// console.log("Penktadienis");
// break;
// case 6:
// case 7:
// console.log("Sekmadienis");
// break;
// default:
// console.log("Bloga savaitės diena");
// break;
// }

// //Atitikmuo galetų būti
// const number=2;
// if (number===1) {
//     console.log("Pirmadienis")
// } else if (number===2) {
//     console.log("Antradienis")
// } else if (number===3) {
//     console.log("Trečiadienis")
// } else if (number===4) {
//     console.log("Ketvirtadienis")
// } else if (number===5) {
//     console.log("Penktadienis")
// } else if (number===6 || number===7) {
//     console.log("Savaitgalia")
// } else {
//     console.log("Blogai įrašyta savaitės diena")
// }

//Ternary opratroriai veikia kaip if else ir yra laikomas kintamajame (const)
//Simboliai ? arba :
// ? - reiškia if
// : reiškia else
//Naudojam tik tada kai turime vieną if
// const age=15;
// const legalAge=18;
// const drinkingAge=20;
// const celciusDegress = 10;

// let result = "Pilnametis";

// if (age < legalAge) {
//     result="Nepilnametis";
// }
// //                             if         (true)    else (vidus)
// const resultTernary = age < leagalAge ? "nepilnametis" : "Pilnametis";
// const drink = age < drinkingAge ? "Milk":"Beer";
// const weather = celciusDegress <=0 ? "cold" : celciusDegress < 25 ? "warm" : "Hot";

// console.log(weather);

//Template string, juos naudoti tik tada, kai dedame kintamuosius į vidų.
const myName = "Domante";
const surName = "Navarskaite";

console.log(myName + " " + surName);
console.log(`${myName} ${surName}`); 