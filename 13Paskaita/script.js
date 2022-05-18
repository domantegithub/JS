//Tikslas: žinoti primityvius duomenų tipus ir jų apibrėžimą:
//Boolean object;
//Number object;
//String object

const name ="Domante";
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue= null;

const isHotString = Boolean(isHot).toString();

// console.log(isHot);
// console.log(isHotString);

const count = "15";

const countNumber=Number(count);

// console.log(count + count);
// console.log(countNumber + countNumber);

// integer - sveikasis skaičius
// console.log(Number.isInteger(5.5));

//paverciam i string
const myNumber = 5.756;
// console.log(Number(myNumber).toString());
// console.log(myNumber.toString());


//Uzapvalina po kablelio
// console.log(myNumber.toFixed(2));

const salary = 10.7413666666;
// console.log(salary.toFixed(2));


//PVZ.:Norime sužinoti ar žmogus yra laimingas? Tokiu atveju turetume ieskti atitikmentu.
//Metodas includes leidzi mums stringe rasti atitikmenis
const sentence="My name is Rokas and I am very happy";

console.log(sentence.includes("happy"));

//2PVZ. Slice metodas - nukerpa sakninio pradzia ar pabaiga(pagal raides ir tarpus)
// console.log(sentence.slice(0,16)); //nukerpa nuo 0-tos iki 8-tos stringo dalies
// console.log(sentence.slice(21));//nuo pradzios iki pat pabaigos
// console.log(sentence.slice(0,-5));// nuo pradzios iki nukirpto galo
// console.log(sentence.slice(-5)); //nuo galo nuima

//3PVZ.Trim metodas - istrina nereikalingus tarpus sakinio pradzioje ir gale
// const badText="   Hello, what's up?   ";
// console.log(badText);
// console.log(badText.trim());

//4PVZ. UpperCase arba LowerCase - modifikuoja raides i mazasias didziasias
const UpperCase = sentence.toUpperCase(); //Visos raides didziosios
console.log(UpperCase);
const LowerCase = sentence.toLowerCase(); //Visos raides mazosios
console.log(LowerCase);

//Tikriname ar abu stringai yra vienodi? Siuo atveju gausime kad ne, nes skiriasi raides didziosios/mazosios
// function areSameStrings(firstString, secondString) {
//     return firstString===secondString;
// }

// console.log(areSameStrings("Rokas","rokas"));

//Kad suvienodinti reikia visas raides pasiversti i didziasias ar mazasias
// function areSameStrings(firstString, secondString) {
//     return firstString.toUpperCase()===secondString.toUpperCase();
// }

// console.log(areSameStrings("Rokas","rokas"));

//4PVZ. Repeat - pakartojam ta pati daug kartu
const resultCount = 5;
const dog = "Rikis";
const result = dog.repeat(resultCount); //pakartos tiek kiek nurodome resultCount

// console.log(result);

// //Atitikmuo repeat funkcijos
// for (i=0; i<resultCount; i++) {
//     result += dog;
// }
// console.log(result);

//5PVZ. Splitted isskiria zodzius.
//Irasykite visus tagus, kurios atitiks jusu ieskoma

// const tagInput = "Prekyba Programavimas Marketingas Vadyba";
// const tags = tagInput.split(" ");
// console.log(tags);

// const countryInput = "Anglija, Sveicarija, Amerika, Latvija, Gruzija";
// const countries = countryInput.split(", ");//dar istrauktu be kableliu
// console.log(countries);

//NAMU DARBAI(primityviu duomenu tipu metodai)
//1.Uzduotis BOOLEAN.Pasirašykite variable isLegalAge, kurį priskirkite true arba false. Console.log'e atvaizduokite šį variable. 
//Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. Turėtų skirtis spalva teksto.

// const isLegalAge = 18;

// console.log(isLegalAge);
// console.log(isLegalAge.toString());

//rezultatuose pasikeicia spalva, stringas atvaizuojamas balta, o number geltona.

//1.Uzduotis. JS Number metodai. patikrink ar skaicius sveikasis ar ne, t.y. ar po kablelio yra dar skaiciu

// const milkPrice=3.2;
// console.log(Number.isInteger(milkPrice));

// //2.Uzduotis.Pakoreguoti pirma uzduoti, kad ismestu kaina po kablelio.
// console.log(milkPrice.toFixed(2));

//3. Uzduotis. Nesigavo.
// document.querySelector("form").addEventListener("submit", handleSum);
const gasAmount =Number(document.querySelector("input[name='price']").value);
const gasPrice=Number(document.querySelector("input[name='gas']").value);

const total=gasAmount*gasPrice;

console.log(total);
// function handleSum(event) {
//     event.preventDefault()
//     const total=gasAmount * gasPrice;
// const h1Node = document.createElement("h1");
// h1Node.textContent=total.toFixed(2);
// document.body.append(h1Node);
// }
