// .splide() Padeda ištrinti arba įterpti masyvo elementą į pasirinktą vietą

// const sentence = ["I", "study", "JavaScript", "right", "now"];
//pirmasis skaicius nurodo nuo kurio elemento nukirsim, o antrasis kiek elementu nuimsim
// const eliminateFirstTwo = sentence.splice(0,2);
// sentence.splice(2,2);

//iterpiame kita zodi
//2- reiskia nuo kurios zodzio, 1- kiek zodziu
// sentence.splice(2,1, "TypeScript"); //Pakeicia masyvo elementa kitu

// sentence.splice(1,4, "studied", "TypeScript", "before");
// console.log(sentence);

//.slide() - grazinamas naujas masyvas su iterpiniais

// const sliced = sentence.slice(0,3); //grazina pirmus tris elementus
// const sliced = sentence.slice(-3); // grazina paskutinius tris elementus
// console.log(sliced);


// .reduce() - suskaiciuoja masyve esanciu skaiciu suma

// const numbers = [1,5,7,15,18,40,50,2.5];

// //previous value - total reiksme
// //current value - skirtingas skaicius, einama reiksme
// const total = numbers.reduce((previousValue, currentValue) => {
//     console.log(currentValue);
//     return previousValue + currentValue;
// });
// //1+5
// //6+7
// //13+7 ir t.t.
// console.log("");
// console.log(total);

// .sort() funckija - surikiuoja elementus pagal tam tikra eiga.
// const numbers = [1,5,7,15,18,40,50,2.5];

// // const sortedAscendingOrder=numbers.sort((a,b) => a-b); //surikiuoja didejimo tvarka
// // console.log(sortedAscendingOrder);

// const sortedDescendingOrder=numbers.sort((a,b) => b-a); //surikiuoja mazejimo tvarka
// console.log(sortedDescendingOrder);

//UZDUOTIS. Sukurkite masyva su elementais Jazz ir Blues
// 1) Pridekite stiliu Rock-n-Roll
// const musicStyle = ["Jazz", "Blues"];
// musicStyle.push("Rock-n-Roll");
// console.log(musicStyle);

// //2) Vietoje Blues pakeisti i classics
// musicStyle.splice(1,1, "Classic");
// console.log(musicStyle);

// //3) Pasalinkite pirma elementa ir parodyktie ji

// const firstElement=musicStyle.shift(0,1);
// console.log(firstElement);
// console.log(musicStyle);

// //4) Pridekite i masyvo pradzia du elementus Rap reggae

// musicStyle.unshift("Rap", "Reggae");
// console.log(musicStyle);

// //UZDUOTIS. turite masyva let arr= [ 11,-2,34,45,19, 6], padarykie suma tik teigiamu skaiciu

// const arr = [ 11,-2,34,45,19, 6];

// function getMaxSubSum(array) {
//     const sum = array.reduce((total,num) => num > 0 ? total + num :total,0);
//     return sum;
// }

// const sum = getMaxSubSum(arr);
// console.log(sum);

//NAMU DARBAI
const cars = ["BMW", "AUDI", "VW"];
cars.sort(); // rikiuoja pagal abecele, ne pagal skaiciaus dydi
console.log(cars);

const numbers = [10,5,1];
numbers.sort((a,b)=> a-b);
console.log(numbers);
// 1ciklas - a=10, b=5, 10-5, teigiamas, sukeiciam vietom
//[5,10,1] - pasislenka ir tada 10-1, teikiamas, apkeicia vietom
//[5,1,10] - griztame i pradzia 5-1, teigiamas, sukeicia vietom
//[1,5,10] - tuomet 5-10 jau teigiamas, gauname atsakyme neigiama ir uzidaro ciklas

//UŽDUOTIS. Išrikiuokite vardus paga; abecelę
const myFriend = ["Rita", "Ieva", "Jurgita", "Ligita", "Silvija", "Živilė", "Aušra"];
myFriend.sort();
console.log(myFriend);

myFriend.reverse(); // nuo z iki a
console.log(myFriend);

//3. UŽDUOTIS. Surikiuok mazejimo tvarka
const nums = [5, 10, 20, 11, 12, 1, 0, 14, 25];
nums.sort((a,b) => b-a) ;
console.log(nums);

//4. UŽDUOTIS. Grąžink didžiausią skaičių (vieną skaičių).

const points = [10, 5, 20, 4];
const max = points.sort((a,b) => a-b).reverse() [0]; // [0] paima pirma masyvo elementas
console.log(max);

//teisingesnis budas butu nenaudoti reverse
// points.sort((a,b) => b-a);
//console.log(points[0]); pirma reiksme grazina [0];

// UŽDUOTYS SU REDUCE()
// 1) Su reduce visus juos sudėk ir grąžink vieną skaičių.

const numberList = [1,7,33,15,5];
const l1=numberList.reduce((a,v)=> a+v );
console.log(l1);
//Ciklas veikia tokiu principu, kad a=1, o v=2. Tuomet sudedame a+v ir a pavirsta į 3 šiuo atveju.
//Toliau a=3, o v-3, tad gauname 6;
//toliau a =6, o v-4, gauname 10 ir t.t.

//2) Grazink skaiciu, kiek elementu yra is 3 simbolius

const carList = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
const threeSymbols = carList.reduce((a,v) => v.length===3 ? a+1: a, 0); //klausia ar BMW stringas yra 3 simboliai, tuomet jei taip, a+1(pradine reiksme 0)
//gauname 1, tuomet a=1, 1+1=2, tuomet 2+1=3 ir viskas.
console.log(threeSymbols);

//3) Grazink didziausia skaiciu is array naudojant reduce
const values = [1,2,3,4,5];
const maxValue = values.reduce((a, v) => Math.max(a, v));
console.log(maxValue);