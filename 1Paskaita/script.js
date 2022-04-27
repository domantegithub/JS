// One line comment
/* 
Multi line comments
*/
// Sukuriam kintamuosius
let myName;
let age;
let mySurname;
let fullName;
let result;
let average;
let percent;

console.log(myName); //undefined tipas naudojamas kai kintamasis yra sukurta, bet neturi prirskirtos reiksmes

//Priskiriam kintamiesiems reikšmes
// myName ="Domante"; //String -reikšmė apsirašanti tarp kabučių
// age=27; //Number - Reikšmė apsirašanti iš skaičių, sveiki sk.pvz-10 arba su kableliu 10.5
// mySurname = "Navarskaite";
// fullName = myName + " " + mySurname; //Sudetis - tarp dviejų tokių pačių tipų (pvz. String+String ir t.t.) Rezultate gaunamas naujas vienas Stringas
// result = age + age // 27 + 27
// result = result + result //54 +54 = 108
// average = (8 + 8 + 9 + 10 + 10) / 5; // (45) / 5=9
// //Is viso surinkta 60Eur ar atnesiau 20
// percent = (100 * 20) / 60;
// percentOutput = percent + "%"; //33.33 +% = number + string = string
// // console.log(age);
// // console.log(fullName);
// console.log(age);
// console.log(result);
// console.log(average);
// console.log(percentOutput);
// console.log (9+9); //18
// console.log("9"+"9"); //99

// //sukuriant kintamuosius su const - konstanta (kintamojo reiksme negali keistis)
// const myDogName = "Tina";
// const greetings = "Sveika" + " " + myDogName + "!";
// // myDogName = "Cipas"; //gausim errora, nes konstantine reiksme yra Tina
// console.log(myDogName);
// console.log(greetings);

/*1. Kada naudoti let o kada const?
Naudoti let tik tada, kai reikšmė kintanti, kitais atvejais const, pvz - jei vyras rodyti vyriskus vardus, jei moteris - moteriskus
Sukurus kintamaji visada reikia priskirti reiksme */

//String, number, boolean (bool)
const yes = true; //teigiama reiksme
const no = false; //neigiama reiksme

// console.log(10==10); //== palygina reiksmes, ar 10 yra lygu 10 = true
// console.log(10!=10) // 10 yra nelygu 10= false
// console.log(5!=9); // ar 5 nelygu 9? True
// console.log("5" == 5); // dviguba ligybe tikrina reiksmes, bet netikrina tipo=true 
// console.log("5" === 5); // triguba lygybe tikrina ar reiksme yra lygi ir tipas tas pats? = false. Naudojam sita
//Visos neigiamos (false) reiksmes yra - undefined, null, 0, "", false

// console.log("4" !=4);
// console.log("4" !==4);

const myPhone="Iphone";
const phoneNo=86123456;
const Iphone = true;
const Nokia = false;

console.log(myPhone);
console.log(phoneNo);
console.log(Iphone);


let bookName="Pilis";
let pageNumber=100;
let Pilis=true;

// 2.1. Sukurti kintamąjį userName priskirti jam betkokį string reikšmę.
// 2.2 Sukurti kintamąjį goodbye ir sukonstruoti stringą kurio reikšmė būtų Viso gero {username}, lauksime sugrįštant!
// 2.3 Išvesti goodbye į consolę.

const userName="Domante";
const goodbye="Viso gero" + ", " + userName +", " + "lauksime sugrįžtant!";
console.log(goodbye);

// 3.1 Sukurti kintamąjį kuris patikrintu dviguba lygybę ir išvesti į consolę
// 3.2 Sukurti kintamąjį kuris patikrintu dviguba nelygybę ir išvesti į consolę
// 3.3 Sukurti kintamąjį kuris patikrintu trigubą lygybę ir išvesti į consolę
// 3.4 Sukurti kintamąjį kuris patikrintu trigubą nelygybę ir išvesti į consolę

const homeCity="Vilnius";
const streetNo=15;
const vilnius=true;

console.log(streetNo == homeCity);
console.log(streetNo != homeCity);
console.log(homeCity === homeCity);
console.log(streetNo !==streetNo);