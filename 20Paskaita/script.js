//UZDUOTYS CODE academy is 18 paskaitos

//Parasykite metoda klaseje, kuris pasakys ar gyvunas storas ar nestoras

//1) Pasikuriam klase
//2) Susikuriam metoda ,,isFat'' (skiriasi nuo funckinio programavimo)

class Cat {
    constructor(name, weight) {
        this.name=name;
        this.weight=weight;
    }
    isFat() {
        if(this.weight > 5) {
            return `${this.name} yra storas kačiukas`;
        } else {
            return `${this.name} yra plonas kačiukas`;
        }
    }
}

//3)susikuriam kintamaji kuri tikrinsime
const cat = new Cat("Kleopatras", 7);
//4)iskvieciame
console.log(cat.isFat());

//2UZDUOTIS
//parasykite funkcija, kuri priimtu masyva sudaryta is skaiciu ir raidius ir grazinkite tik raides

const randomArray = ["A", 5,2,3, "B", "C","D", 10,15];

//funcikja, kuri isfiltruos raides isNan - is not a number
const removeNumbersFromArray = (array) => array.filter(x => isNaN(x));
const removeLettersFromArray = (array) => array.filter(x => !isNaN(x)); //sauktukas apvercia logika t.y. tikrina ar skaiciai
//isNAN(A) - true;
//isNaN(5) - false;
//isNaN(2) - false ir t.t.
//cia prisiskiriam kintamajam funckija ir masyva(kintamuosius)
const removedNumbers = removeNumbersFromArray(randomArray);
const removedLetters = removeLettersFromArray(randomArray);
console.log(removedNumbers);
console.log(removedLetters);

//! sauktukas pavercia i true arba false reiksme, pvz.;
// Jei reiksme true ir priekyje padesim ! (!true) reiksme bus false
//jei !!true = bus true

//3UZDUOTIS
//Sukurkite funkcija, kuri paims stringa (raide), tai reikia ja padvigubint, o jeigu skaicius, nieko neradyt

let test = "Petras 123 Slekys";
//split("") -> ["a", "b", "c"]
// map(char)=> "a"+"a"
//join("")=>["a","a"] =>"aa"
//isNaN patikrina ar raide ar skaicius, jei raide - dvigubink, jei skaicius nieko nedaryk
const newTest = test.split("").map((char) => (isNaN(char) ? char + char : char)).join("");
console.log(newTest);

//4UZDUOTIS 
//parasykita funckija, kuri patikrins ar post code yra teisingas?
//Salygos 1)patikrinti ar susideda is 5 skaiciu;
//2)Patikrinti ar susideda ir skaiciu ir 2raidziu
//3)Patikrinti ar turi tarpa

const checkPostCode = (postCode) => {
    const letters = removeLettersFromArray(postCode.split(""));
    const numbers = removeNumbersFromArray(postCode.split(""));
//tikrinam ar removeletters.lenght yra lygu 5
    if (postCode.includes(" ")) {
        return false;
    } else if (letters.lenght===5) {
        return true;
    } else if (letters.lenght === 2 && numbers.lenght===3) {
        return true;
    } else {
        return false;
    }
};

const code = "123kk";
console.log(checkPostCode(code));

//1UZD. Parasykite metoda klaseje, kuris pasakys ar zmogus yra pilnametis ar ne

class Person {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    isAdult=() => {
        if(this.age >=18) {
            return `${this.name} yra pilnametis`;
        } else {
            return `${this.name} yra nepilnametis`;
        }
    }
}

const person = new Person("Petras", 17);
console.log(person.isAdult());

//Parasykite fukncija, kuri grazins masyva sudaryta tik is skaiciu (pvz. radau internete, galima ir su isNAN)
const array = [1, 5, "a", "g", "z", 6];
const onlyNumbers= array.filter(element => typeof element ==='number');
console.log(onlyNumbers);

//Sukurkite funkcija, kuri priims array ir prie kiekvieno array elemento prides 7, jei baigiasi 7 tada neprides

const jazzArray = ["G", "F", "C"];
const addNumberSeven = jazzArray.map((array) => (isNaN(array.slice(-1)) ? array + 7 : array));

console.log(addNumberSeven);

//Teisingesnis
const jazzify = array => array.map(element => element.endsWith('7') ? element : element.concat('7'));
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));