//MAsyvu su objektais metodai ir ju naudojimas

//objektai [] viduje
// const people = [{
//     id:1,
//     name:"Rokas",
//     surname:"Andreikenas",
//     age:23,
// },
// {
//     id:2,
//     name:"Tomas",
//     surname:"Tomenas",
//     age:25,
// },
// {
//     id:3,
//     name:"Simas",
//     surname:"Simonaitis",
//     age:16,
// },
// ];

// console.log(people);
// //paimam 1-aji itema
// const firstItem=people[0];
// console.log(firstItem);
// //galima issitraukti masyvo viena reiksme
// console.log(firstItem.name);
// //galima ir paskutini
// const lastItem=people[people.length-1];
// console.log(lastItem);

//iterpiame nauja Itema .push() metodas
// people.push({id:4, name:"Gokas", surname:"Songokas", age:99});
// people.shift();
// console.log(people);

// people.forEach((person) =>{
//     console.log(person);
//     const fullName=`${person.name} ${person.surname}`; //atspausdina tik varda ir pavarde
//     console.log(fullName);
// });

// map() prideda reiksme ir grazina nauja masyva

// const peopleWithFullName = people.map((person)=>{
//     const fullName=`${person.name} ${person.surname}`;
//     return {...person, /// tris taskai reiskia, kad reiksme yra perkopijuojama ir perkeliama
//     name: person.name.toUpperCase(), //pakelia vardus didziasias raide
//     fullName:"Belekas", //prideda elementa
//     canDrive: person.age>=18 ? true : false,
// }; 
// });
// console.log(peopleWithFullName);

//UZDUOTYS CODE ACADEMY

// 1) Prafiltruokite masyva, kad atfiltruotu pigiausias darzoves (maziau nei 1Eur)
// const veggies = [
//     { name: "Apple", category: "tree", price: 1 },
//     { name: "Pear", category: "tree", price: 2 },
//     { name: "Blackberries", category: "bush", price: 5 },
//     { name: "Blueberries", category: "bush", price: 7 },
//     { name: "Carrot", category: "dirt", price: 0.25 },
//     { name: "Potato", category: "dirt", price: 0.3 },
//     ];

// const cheapVeggies = veggies.filter(veggie => veggie.price <=1);
// const expensiveVeggies = veggies.filter(veggie => veggie.price >1);
// console.log(cheapVeggies);
// console.log(expensiveVeggies);

//2) Atfiltruoti tik brangiu darzoviu pavadinimus

// const expensiveVeggiesNames = expensiveVeggies.map(veggie => veggie.name);
// console.log(expensiveVeggiesNames);

//3) isrikiuoti pagal abecele

// const alphabetSorted=veggies.sort((a,b)=> (b.name > a.name ? -1 : 1));
// console.log(alphabetSorted);

//4) Sukurkite funkcija, kuri priims viena masyva su objektais name ir price
//grazins brangiausia ir pigiausia

//array inerpretuojame kaip viggies
// function prices(array) { // lowestAndHighest(array) {
// const sorted = array.sort((a,b) => a.price - b.price);
// const cheapest=sorted[0];
// const expensive= sorted[sorted.length -1];
// return {cheapest: cheapest, expensive:expensive};
// }

// lowestAndHighest(veggies) //prisiskiriam areju
// const veggiesPrice=prices(veggies);
// console.log(veggiesPrice.cheapest);
// console.log(veggiesPrice.expensive);

//NAMU DARBAI

const people = [
  {
    name: "Petras",
    age: 18
  },
  {
    name: "Jonas",
    age: 15
  },
  {
    name: "Antanas",
    age: 20
  },
  {
    name: "Urtė",
    age: 10
  },
  {
    name: "Diana",
    age: 25
  },
  {
    name: "Ieva",
    age: 16
  }
];

//1) Rodyti tik pilnamecius

const adults=people.filter(person => person.age>=18);
console.log(adults);

//2) Rodyti tik pilnameciu vardus
const adultsNames=adults.map(adult => adult.name);
console.log(adultsNames);

//3) Isrikiuoti antrojo pratimo vardus abeceles tvarka
const namesByAlphabet=adultsNames.sort();
console.log(namesByAlphabet);

//4)Sukurkite funkcija, kuri paims viena argumenta(su objektais),
//jie tures du parametrsu name ir price. Grazins brangiausia ir pigiausia

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ]
  
  function fn(items){
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  }
  
  console.log(fn(drinks));

  //Sukurkite funkcija, kuri paims minutes ir pavers i sekundes

  function minutesToSeconds(minutes) {
      return minutes*60;
  }
  //iskvieciam funkcija
console.log(minutesToSeconds(1));

//Funkcija, kuri paims vartotoju amziu ir paskaiciuos kiek dienu nugyveno

function myDays(year){
    return year*365;
}
console.log(myDays(20));

//Funkcija arrow, kuri padarytu skaiciaus kvadrata
const mySquareFuncion =(num) => num*num;
console.log(mySquareFuncion(6));

//Arrow funckija, kuri paimtu du skaicius ir graztintu plota
const triangle= (height, length) => (height*length)/2;
console.log(triangle(10,10));

//Funcija, kuri grazins parametro paskutine raide
const lastLetter=(letter) =>letter.charAt(letter.length-1);
console.log(lastLetter("Petras"));

//funckija, kuri paims stringa apvers ji ir grazins mazosiomis
const reverseName=(text) => text.split("").reverse().join("").toLowerCase();
console.log(reverseName("Petras"));

//funckija, kuri grazins didziausia neigiama skaiciu
const numberList= [-1, -100, -5, 10, 0, 11];
const values=numberList.filter(numberList => numberList< 0);
console.log(values);
values.sort((a,b)=>b-a);
console.log(values[0]);

//galima ir taip: const fn = (nums) => nums.filter(x => x < 0).sort((a, b) => b - a)[0];