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

function greenAndWhite(color) {
const sliced = color.slice(0,2);
const sliced2=color.slice(-3);
const combine =sliced.concat(sliced2);
   return combine;
}

console.log(greenAndWhite(colors));

//Prideti oranzine spalva vietoje juodos naudojant splice() metoda
//Kodel nepadaudojamas praeitas gautas masyvas?

function addOrange(color) {
    color.splice(2,1, "Orange");
}
addOrange(colors);
console.log(colors);

//išfiltruoti reiksmes, kurios turi raide e

function itemsWithE(array) {
    const newColors = array.filter((color) => color.includes("e"));
    return newColors;
}

console.log(itemsWithE(colors));

//Išfiltruoti reiksmes, kuriu ilgis trumpesnes nei 4 raide

function shorterThenFour(array) {
    const newColorArray = array.filter((n)=> n.length <= 4);
    return newColorArray;
}
console.log(shorterThenFour(colors));

//Patikrinti ar bent viena reiksme turi z raide
//nepavyko!!!
function includesZ(array) {
    const colorsWithZ = array.filter((color) => {
        if (color.includes("z")) {
        return true;
    }});
    return colorsWithZ;
}

console.log(includesZ(colors));
