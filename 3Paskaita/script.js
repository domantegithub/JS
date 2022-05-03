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

// //Template string, juos naudoti tik tada, kai dedame kintamuosius į vidų.
// const myName = "Domante";
// const surName = "Navarskaite";

// console.log(myName + " " + surName);
// console.log(`${myName} ${surName}`); 

// NAMU DARBAI
const car="Mini";

switch (car) {
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
    console.log("VW grupė");
    break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
    console.log("BMW grupė")
    break;
    default:
    console.log("Nei VW nei BMW")
}

const userInput = "lalal";

switch (userInput) {
    case "Obuolys":
    case "Agrastas":
    case "Avietė":
    case "Braškė":
    case "Agurkas":
    console.log("Vaisiai");
    break;
    case "Bulvė":
    case "Rabarbaras":
    case "Svogūnas":
    case "Poras":
    case "Kopūstas":
    console.log("Daržovės")
    break;
    default:
    console.log("Tokio vaisiaus ir daržovės nėra")
}

const weekDay = 0;

switch (weekDay) {
case 0:
console.log("Pirmadienis");
break;
case 1:
console.log("Antradienis");
break;
case 2:
console.log("Treciadienis");
break;
case 3:
console.log("Ketvirtadienis");
break;
case 4:
console.log("Penktadienis");
break;
case 5:
console.log("Šeštadienis");
case 6:
console.log("Sekmadienis");
break;
default:
console.log("Bloga savaitės diena");
break;
}

//2Uzduotis. Ternary
const myName="Domante";
const answer=myName.length>5 ? "Long name" : "Short name"
console.log(answer);

const clientAge=-1;
const leagalAge=18;

// const isAbleToDrive= clientAge>=leagalAge ? "Can Drive" : "Can't drive"

const isAbleToDrive= clientAge < 0 || clientAge > 120 ? "Invalid age" : clientAge>=leagalAge ? "Can Drive" : "Can't drive" 
console.log(isAbleToDrive);