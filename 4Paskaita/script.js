console.log("4Paskaita, for ciklai")

/* (i=0 Inicializavimas - prasidės veiksmai nuo 0-lintos reikšmės
    i<10 sąlyga iki kurios vietos vyks ciklas, čia kaip if.
    i++ išlaiška, kas kiek mūsų i didės */

    //Kintamieji i, j, k
    //i++ prideda kas vieną ( i= i+1)
    //i-- atima kas vieną (i=i-1)

// for (let i=0; i<10; i++) {
//     console.log("John");
// }

// const vardas="Domante";
// const count = 10;

// for (let i=0; i<count; i++) {
//     console.log(vardas)
// }

// for (let i=10; i>0; i--) {
//     console.log(i)
// }

// for (let i=0; i<10; i+=2 )
// console.log(i)
// i=0; 0<10 ; 0=0+2
// i=0; 2<10 ; 2=2+2
// i=0; 4<10 ; 4=4+2
// i=0; 6<10 ; 6=6+2

// const dogName="Rikis";
// const repeat=3;
// let result="";

//Mes norim pakartoti Rikio varda x kartu, kiek nurodom repeat kintamajame
// for (let i=0; i<repeat; i++) {
// result +=dogName;
// }
// // a= a + b
// // "" ="" + "rikis"
// //"rikis"="rikis" + "rikis"
// //rikisrikis=rikisrikis + rikis ir t.t.
// console.log(result)

// for (let i = 0; i < repeat; i++) {
//     if (i === repeat - 1) {
//     // paskutinis ciklas
//     result += `${dogName}.`;
//     } else {
//     result += `${dogName}, `;
//     }
//     }

//     console.log(result)

// const start = 1;
// const count = 9;
// let result = 0;

// for (let i=start; i<count; i++){
//     result += i;
// }
// console.log(result);

// // do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.
// let i=0;
// do {
//     console.log(i);
//     i++;
// } while (i<10);
//.................................
//Uzduotis. Naudodami cikla, parasykite visus lyginius skaicius nuo 2 iki 10
// for (i=2; i<=10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
// // .................................
// //Uzduotis. Perrašyti while cikla
// // let x=9;
// // while (x>=1) {
// //     console.log("hello " +x)
// //     x=x-1;
// // }

// for (x=9; x>=1; x--) {
//     console.log("hello " + x)
// }


// //.................................
// //Uzduotis parasyti funckija getLauch(), kuri turi viena parametra, skaiciu, kuris zymi sugritanciu ha skaiciu
// function getLaugh(times) {
//     let result='';
//     for (i = 0; i < times; i++) {
//       result += 'ha';
//     }
//     return result + '!';
//   }
  
//   console.log(getLaugh(4));

  //.............................
  //Uzduotis CA, while ciklas

//   let i=0;
//   while (i<3){
//       console.log("Domante")
//       i++
//   }

//   const myName="Domante"
//   let times=3;
//   let combo="";

//   do {
//       combo +=myName;
//       times--;
//   }   while (times>0);
//       console.log(combo);

//JS math Objektas
// const random1= Math.floor(Math.random()*5)+1;
// console.log(random1);

const min=5;
const max=12;
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(random);