//KARTOJIMAS
//array.push stumia i masyvo gala
//array.pop() - ismeta is galo
//array.unshift() - stumia i prieki
//array.shift() - ismeta is priekio

// const names = ["Rokas", "Tomas", "Giedrius", "Martyna"];

// function addNewStudent(studentName) {
// names.unshift(studentName);
// }

// function removeStudent() {
// names.shift();
// }

// console.log(names);

// addNewStudent("Antanas");

// console.log(names);

// removeStudent();

// console.log(names);

//Uzduotis
//sukurti masyva colors, su reiksmemis
//sukurti funkcija, kuri priims colors ir grazins modifikuota
//palikite masyve tik zalia ir geltona

// const colors = ["red", "blue","green","white","black", "yellow", "purple"];
// console.log(colors);

// function removeColors(colors) {
//     colors.pop();//ismete is galo - liko red blue green white black yellow
//     colors.shift(); // blue green white black yellow 
//     colors.shift(); // green white black yellow 
//     colors.shift(); // white black yellow 
//     colors.shift(); // black yellow 
//     colors.shift(); // yellow
//     colors.unshift("green"); //green yellow
// }
// removeColors(colors);
// console.log(colors);

// //Grainkite masyva i pirmine jo bukle

// function addColors(colors) {
//     colors.shift();
//     colors.unshift("black");
//     colors.unshift("white");
//     colors.unshift("green");
//     colors.unshift("blue");
//     colors.unshift("red");
//     colors.push("purple");
// }

// addColors(colors);
// console.log(colors);

// //apsukite visas reiksmes vietomis, purple turi buti pirma ir red paskutine
// function fromPurpleToRed(colors) {
//     colors.reverse();
// }
// fromPurpleToRed(colors);
// console.log(colors);

// //atspausdinti visas masyvo reiksmes naudojant foreach metoda
//  colors.forEach(showColors);

//  function showColors(colors) {
//     console.log(colors);
//  }

//  //kitas budas
//  colors.forEach((color) => {
//      console.log(color);
//  });

// function doubleArrayItem(array) {
//     return array.map((item) => item + item);
//     }
    
//     const doubledItems = doubleArrayItem(colors);
//     console.log(doubledItems);

//Ištrinti žalia ir balta spalva naudojant slice() metoda
const colors = ["red", "blue","green", "white","black", "yellow", "purple"];

function removeGreenAndWhite(colorArray) {
const sliced = colorArray.slice(0,2);
const sliced2=colorArray.slice(-3);
const combine =sliced.concat(sliced2);
   return combine;
}
const removedGreenAndWhite = removeGreenAndWhite(colors);
console.log(removedGreenAndWhite);

//Prideti oranzine spalva vietoje juodos naudojant splice() metoda
//Kodel nepadaudojamas praeitas gautas masyvas? Reikia ideti gauna praeitos uzduoties rezultata


function addOrange(colorArray) {
    colorArray.splice(2,1, "orange");
}
addOrange(removedGreenAndWhite); //idejome praeitos uzduoties gauta rezultat
console.log(removedGreenAndWhite); //consolinam taip pat

//išfiltruoti reiksmes, kurios turi raide e

function itemsWithE(array) {
    const newColors = array.filter((color) => color.includes("e"));
    return newColors;
}
itemsWithE(removedGreenAndWhite)
console.log(removedGreenAndWhite);

//kitas budas
const hasEChar = removedGreenAndWhite.filter((color) => color.includes("e"));
console.log(hasEChar);

//Išfiltruoti reiksmes, kuriu ilgis trumpesnes nei 4 raide

function shorterThenFour(array) {
    const newColorArray = array.filter((n)=> n.length < 4);
    return newColorArray;
}
console.log(shorterThenFour(colors));

const shorterThen4Char = removedGreenAndWhite.filter((color)=> color.length< 4);
console.log("shorter then 4 char", shorterThen4Char);

//Patikrinti ar bent viena reiksme turi z raide
//nepavyko!!!

const hasZChar = removedGreenAndWhite.some((color) => color.includes("z"));
console.log("has Z char", hasZChar);

//Patikrinti ar turi reiksme brown
const hasBrownValue = removedGreenAndWhite.some((color) => color=== "brown");
console.log("has brown", hasBrownValue);

//kiek elementu turi a raide
const hasAChar = removedGreenAndWhite.filter((color) => color.includes("a"));
const aLetterCount =hasAChar.length;
console.log("has A letter", aLetterCount);