//Obejctinis prgramavimas, (nera labai populiarus)

//Susikurkite objektu konstruktoriu naudojant new pavadinimu Book, kuris gales kurti objektus
//Kurie tures sias savybes (properties): name, author, year ir metodus (naudojant prototype)
//Kurių vienas parašys pavadinimą ir autorių, o kitas parodys knygos amžių

//cia konstruktoriaus funkcija
// function Book (name, author, year) {
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//     this.getInfo= () => { //metodas rasome su this zodeliu
//         return `${this.name} parašė ${this.authorName}`;
//     };
//     this.getYears=() => { //datos konstruktorius
//         const today = new Date(); //čia susikuriam kintamaji dabartinei datai
//         return today.getFullYear() - this.year;
//     };
// }

//cia konstrukcoriaus funckija yra ikvieciama
// const harryPotterBook= new Book("Harry Potter", "J.K.Rowling", 1997);
// const  randomBook = new Book("Random Writer", "Very random", 2022);
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());


// Objektai su klasemis (naujas budas) (OOP)

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.authorName = author;
        this.year = year;
    }
    getInfo = () => { //su class metodus galima aosirasyti ir ne this zodelio
            return `${this.name} parašė ${this.authorName}`;
    };

    getYears = () => {
            const today = new Date(); //čia susikuriam kintamaji dabartinei datai
            return today.getFullYear() - this.year;
    };
}
const harryPotterBook= new Book("Harry Potter", "J.K.Rowling", 1997);
const  randomBook = new Book("Random Writer", "Very");

console.log(harryPotterBook.getInfo());
console.log(harryPotterBook.getYears());

//Susikurkite konstruktoriu Employee

class Employee {
    constructor(position, wage, experience){
        this.position = position;
        this.wage = wage;
        this.experience = experience;
    }
    //metodas, kuris apskaiciuojamas pagal tai kiek tu dirbi savo srityje
    getBonus = () => {
        if(this.experience < 5) {
            return this.wage;
        } else if (this.experience < 10) {
            return this.wage*2;
        } else {
            return this.wage * 3;
        }
    };
}

const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
const salesManager = new Employee("Sales manager", 6000, 7);
console.log(softwareDeveloper);
console.log(salesManager);
console.log(softwareDeveloper.getBonus());
console.log(salesManager.getBonus());

//NAMU DABRAI (OOP - object orientated programming)

//Susikurkite konstruktoriu car, kuris tures brand, model, engine ir tures metoda
//Turn on, kuris alertins vroom

function Car (b,m,e, price) {
    this.brand=b;
    this.model=m;
    this.engine=e;
    this.basePrice=price;
    this.turnOn = function (){
      alert("Vroom!")
    }    
    this.getPrice=() => {
        if(this.engine==="Electric") {
        return 10000;
        } else if (this.engine==="Diesel") {
            return 5000;
        } else {
            return this.basePrice;
        }
    }
}

const firstCar = new Car("BMW", "I3", "Electric", 5000);
const secondCar = new Car("Audi", "A6", "Diesel", 8000);
const thirdCar = new Car("Nissan", "Almera Tino", "Petrol", 3000);
console.log(firstCar.model);
console.log(secondCar.engine);

console.log(firstCar.getPrice());
console.log(secondCar.getPrice());
console.log(thirdCar.getPrice());