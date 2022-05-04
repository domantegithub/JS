// const nameNode = document.getElementById("name");
// nameNode.textContent = "Tomas";

// //Keičiame HTML reiksmes
// const descriptionNode= document.getElementById("description");
// descriptionNode.textContent="Man patinka programuoti";

// //Keiciame spalva
// document.body.style.backgroundColor="yellow";
// document.body.style.margin=0;
// nameNode.style.color="blue";
// nameNode.style.paddingLeft="10px"
// descriptionNode.style.padding="10px";
// descriptionNode.style.backgroundColor="cyan";

// const liByTag=document.querySelector("li"); paims pirmą li elementą
// const liById = document.querySelector("#discount"); //paims pirma sutinka LI su tagu #discount
// console.log(liById);

// const liByClass = document.querySelector(".yellow");
// console.log(liByClass);

// const firstItem =document.querySelector("li:first-child");
// console.log(firstItem); ->paima pirma elementa

// const lastItem =document.querySelector("li:last-child");
// console.log(lastItem); ->paima paskutini elementa

// const discountedItems=document.querySelector("#discount");
// console.log(discountedItems[0]); - paims konkrentu elementa
// console.log(discountedItems);

//Uzduotis 1. Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.
// document.body.innerHTML="<h2>Domante</h2>";

//Uzduotis 2.
//Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". 
//Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą.
// document.getElementById="name";
// const myName=document.getElementById("name");
// myName.textContent="Domante";

// //Uzduotis 3.
// //Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". 
// //Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".
// const products=document.querySelector("li:last-child");
// products.textContent="Sūris";

// const content=document.querySelector("span:nth-child(2)");
// content.textContent="Blue";

//Uzduotis 4.
//apkeiskite pirmus du sąrašo elementus vietomis.

const firstItem=document.querySelector("li:first-child");
const secondItem=document.querySelector("li:nth-child(2)");

const bmw_group=firstItem.textContent;
const vw_group=secondItem.textContent;

firstItem.textContent=vw_group;
secondItem.textContent=bmw_group;

