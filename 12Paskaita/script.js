console.log("12Paskaita");

//Tiksas:
//Pasikartoti masyvo struktūrą;
//Išmokti sukurti elementa script faile;
//Susipažinti teoriškai su Append/prepend metodais ir juos panaudoti

//Masyvu pvz.:
const array = ["Rokas", "Tomas", "Karolis"];
const number = [1, 2, 3, 4];
const user = [
    {name: "Rokas", age: 12 },
    {name: "Tomas", age: 14 },
];

const lists = [
    [1,2,5],
    [1,5,7],
    [7,5,8],
];

//Ištraukiam visus vaisius, netraukia vieno, nes traukia paga; tag name esančius visus įrašus
//ta pati galima padaryti ir su querySelectorAll
const fruits = document.getElementsByTagName("li");
const fruit2 = document.querySelectorAll("li");

console.log(fruits);
console.log(fruit2);
console.log(number);

//Naujo elemeno sukūrimas
//createElement yra metodas, kuris sukuria nauja elementa, pvz nauja vaisiu sarase
const pineapple = document.createElement("li");
//<li>/<li>
pineapple.textContent = "Pineapple";
//<li>Pineapple</li>

//Append - jis prideda i elemento gala nauja elementa. Pvz. i sarasa itraukti nauja item'a
//Prepend prideda i prieki
//pvz issitraukiam <ul> ir su appen pridedam <li>

//Issitraukiam <ul> i java scripta
const fruitList=document.getElementById("fruit-list");
//pridedam nauja vaikini elementa - nauja reiksme
fruitList.append(pineapple);

const pear = document.createElement("li");
pear.textContent = "Pear";
pear.style.color = "green";
fruitList.prepend(pear);

//Cia sukuriam toki <ol></ol>
const extraList = document.createElement("ol");
//<li>Pineapple></li>
extraList.append(pineapple);
extraList.append(pear);

//Atsivaizduoja is eiles apocioje <ul>, kadangi idedam i body dali
document.body.append(extraList);

//UZDUOTIS. JavaScript pagalba atvaizduoti nuotrauka ir jos aprasyma
//1. Pasirasome HTML kaip turetu atsivaizduoti be Java, kokios srtuktuos mums mazdaug reikia
//2. Tada bandome perrasyti tik java

const card = document.createElement("div");
//darome stilistika card elementui
card.style.background = "#f3f3f3";
//taip mano cardai atsivaizduos vienas salia kito
card.style.display = "flex";

//susitvarkome paveiksleli
const image = document.createElement("img");
image.src = "https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg";
image.alt = "Red ferrari";
image.style.width="40%";

//Susikuriame pavadinima h1 elemente
const info = document.createElement("div");
info.style.paddingLeft="24px";
const title = document.createElement("h1");
title.textContent="Ferrari f8 tributo";

const description = document.createElement("p");
description.textContent="Very nice car";

const benefits = document.createElement("ul");
const firstBenefit = document.createElement("li");
firstBenefit.textContent="Color";
const secondBenefit = document.createElement("li");
secondBenefit.textContent="Good Price";
const thirdBenefit = document.createElement("li");
thirdBenefit.textContent="Speed";

//TRUMPIAU GALIMA PADARYTI TAIP:
// const benefitList = ["Color", "Price", "Speed", "Emotion"];
// for (let i=0; i< benefitList.length; i++) {
//     const benefitDescription = array[i];
//     const benefit = document.createElement("li");
//     benefit.textContent = benefitDescription;
//     benefit.append(benefit);
// }

//appendinam i benefit lista
benefits.append(firstBenefit,secondBenefit,thirdBenefit);
//sudedu tekstus i info bloka
info.append(title, description, benefits);
//noriu i card ideti paveiksliuka ir info
card.append(image, info);
document.body.append(card);
