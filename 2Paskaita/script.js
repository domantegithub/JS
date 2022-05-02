// 1. Patikriname ar esu tinkamame folderyje (2Paskaita) ->C:Users/Domante/JS/2Paskaita arba komanda ls
// 2. Patikrinti ar išsaugojau failą
// 3. Patikrinti ar įrašiau cosole.log()
// 4. Patikrinti ar teisingai Terminame įrašiau node script
// 5. Patikrinti terminale išmetamą žinutę

// console.log("Sveiki, čia antra paskaita");

// const money = 110.5;
// const price = 120.5;
// const currency = "$";

// if (money > price) {
//     const change = money -price;
// console.log("Tu nusipirkai daiktą. Tavo grąžą:" + currency + change); // A
// } else if (money === price) {
// console.log("Tu nusipirkai daiktą. Tau nebeliko pinigų :)"); // B
// } else {
//   const missingMoney = price - money;
//   console.log("Tau neužteko pinigų daiktui nusipirkti. Tau trūksta:" + currency + missingMoney); // C
// }

// const runner = "Kendyll";
// const position = 4;
// let medal = "pat on the back";

// if (position === 1) {
// medal = "gold";
// } else if (position === 2) {
// medal = "silver";
// } else if (position === 3) {
// medal = "bronze";
// }

// console.log(runner + " received a " + medal + " medal.");


// const number = 1;

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("Lyginis");
// }
// // if the number is odd
// else {
//     console.log("Nelyginis");
// }

let musician = 2;

if (musician < 1) {
    console.log("Ne grupė");
} else if (musician === 1) {
    console.log("Solo");
} else if (musician===2) {
console.log("Duetas");
} else if (musician===3) {
console.log("Trio");
} else if (musician===4) {
    console.log("Kvartetas");
} else if (musician > 4) {
    console.log("Didelė grupė");
}