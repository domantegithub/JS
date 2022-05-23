// Masyvai ir ju metodai
//pop() - pašalina paskutinį masyvo elementa ir ji grazina. Grazina reiskia, kad jei parasysim lastElement ir fruits.pop - ismes ji.

const fruits = ["Apple","Orange","Pear"];

// const lastElement=fruits.pop();
// console.log(fruits); //grazina be Pear
// console.log(lastElement); //grazina tik Pear

//Shift() - pašalina pirmąjį masyvo elementą ir jį grąžina.

// const firstElement = fruits.shift();
// console.log(fruits);
// console.log(firstElement);

// Push() - pridėti elementa i masyvo gala (panasiai kaip append). Daznai naudojamas.

// fruits.push("Pineapple");
// console.log(fruits);

// Unshift()- prideda elementa i masyvo prieki
// fruits.unshift("Bannana");
// console.log(fruits);


//reikia gauti rezultata [APPLE ORANGE PEAR]
const UpperCaseFruits = [];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const upperCased = fruit.toUpperCase();
    UpperCaseFruits.push(upperCased)
}
//Veikimo principas
//["APPLE"];
//["APPLE", "ORANGE"];
//["APPLE", "ORANGE" "PEAR"]
// console.log(UpperCaseFruits);

//callback funkcija.

// function log(name) {
//     console.log(name);
// }

// function showAlert(callback) { //sios funkcijos tikslas iskviesti ja kitoje funkcijoj
//     callback("Rokas");
// }

// showAlert(log);

//METODAS foreach() - panasiai veikia kaip 'For' ciklas, kuris praeina per visus Masyvo elementus, i ja paduodam callback funkcija

const names = ["Bob", "Helen", "Jack"];
// names.forEach(showName) //parodyk kiekviena varda

// function showName(name) { //traktuojama kaip callback funkcija, jei idesim i for.each
//     console.log(name);
// }

//  names.forEach((name, index) => { //dazniausias budas, anonimine funkcija
//      console.log(index +name);
//  });

//  //MAP() - panasus i for.each, bet ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva. butina return reiksme

//  const modifiedNames = names.map((name) => {
//      //paima pirma raide ir padaro ja didziaja o visas kitas mazasias
//      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//      return name.repeat(2); //pakartoja reiksmes du kartus
//  });

//  console.log(names); //cia grazin pirmine reiksme
//  console.log(modifiedNames); //cia grazina nauja reiksme, siuo atveju dvigubi elementai

 //
 //METODAS .filer() - eina per visus masyvo elementus ir grazina nauja masyva, jeigu reiksme yra "true"
 //Susikuriam masyva, kur susidarom metus ir atfiltruojam, kur daugiau uz 20 m. (gaunam nauja masyva)

 const age = [12,15,23,27,55];

 const moreThanTwenty = age.filter(age => {
     return age > 20;
 } );
 console.log(moreThanTwenty);

 const lessThanTwenty = age.filter(age => age < 20); //galima rasyti ir taip, jei nera garbanotu skliaustu
 console.log(lessThanTwenty);

 // METODAS. find()
 //UZDUOTIS. Sukurk masyva ir atfiltrok pirma automobili, kurio pavadinimas prasideda is L raides ir ji grazina

 const cars = ["BMW", "Audi", "Lamborgini", "Lada", "mercedes", "VW"];
//suranda pirma elementa is masyvo, kuris atitinka kriteriju "pirma raide L"
 const foundCar = cars.find(car => car.charAt(0)==="L");
 console.log(foundCar);


 //METODAS. some() - panasus i find, tik grazinama reiksme yra true arba false
//Ieskome automobiliu pavadinimu, kurie turi maziau nei 3 raides pavadinime
 const hasShortName = cars.some(car => car.length <3);
 console.log(hasShortName);

 //METODAS. every() - patikrina ar kiekvienas elementas atitinka kriteriju ir grazina true arba false
 //Pvz. ar musu cars prasideda is didziosios raides

 const hasUpperLetter = cars.every(car => car.charAt(0)===car.charAt(0).toUpperCase());
 console.log(hasUpperLetter);

 //NAMU DARBAI
 /* Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. 
 Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. 
 O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, 
 ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; 
    pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).*/
    
    // callback funkcija yra funckija, kuria mes galime padyoti kaip parametra.
    function alertName(text) { //funckija iskviecia varda
        alert(text)
      }
      
      function consoleName(text) { //funckija ji isprintina
        console.log(text)
      }
      
      function coreFunction(name, callback) { //name yra parametras, kuri keisim, o callback funckija
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        callback(capitalizedName)
      }
      
      coreFunction("peTras", consoleName)