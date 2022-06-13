// console.log("Asinchroninis programavimas")

//KAIP duomenys ateina iš kitų sistemų, kiel užtrunka, kokie duomenys ir t.t.

//Funkcijos: promises, async await, callback ir listeners


// const resolvedPromise = new Promise((resolve, reject) => {
//     resolve("17 celsius, Vilnius");
// });

// resolvedPromise.then(response => {
//     console.log(`Dabar yra ${response} `);
// });

// const rejectedPromise = new Promise((resolve, reject) => {
//     reject("Tinklas yra perkrautas. Pabandykite vėliau");
// });

// //Cia yra promise, kuris ismes gera reiksme jei bus true ir Error, jei nepasieks duomenu 
// rejectedPromise.then((response) => {
//     console.log(`Dabar yra ${response}`);
// })
// .catch((error)=>{
//     console.error(error);
// })
// .finally(() => {
//     console.log("Kreipimasis į oro tarnybą");
// });

// const promise = new Promise((resolve, reject) => {
//     //setTimeOut padaro, kad atsakymas griztu siek tiek veliau
//     setTimeout(() => {
//     // resolve("17 celsius, Vilnius");
//     reject("Tinklas yra perkrautas. Pabandykite vėliau");
//     }, 4000);
// });

// //APSIRASOME KINTAMUOSIUS KIEKVIENAI SITUACIJAI, KAI IVYKTO, KAI NEGAUNA DUOMENU IR THANK YOU MESSANGE
// //Kai gausiu resolved noriu gauti atsakyma
// const renderWeather = (response) => {
//     const weather = document.getElementById("weather");
//     weather.textContent = `Dabar yra ${response}`;
// };

// //Kai ivyzksta erroras norime grazinti klaidos zinute
//  const showError = (err) => {
//      const error = document.getElementById("error");
//      error.textContent = err;
//      error.style.color = "red";
//  };

// //Galutine zinute- apsirasome kintamaji
// const showPriceMessage = () => {
//     const header = document.getElementById("header");
//     header.textContent = "Jūs pasinaudojote orų paslauga. Jums tai kainavo 5ct"
// };

// promise
// .then((response) => {
//     //sudedam kintamuosius, kuriuos noresime atvaziduoti
//     renderWeather(response);
// })
// .catch((error)=>{
//     showError(error);
// })
// .finally(() => {
//     showPriceMessage();
// });

//PVZ su ASYNC 
// const getWeather = async() => {
// try {
//     const response = await promise;
//     renderWeather(response);
// } catch (error) {
//     showError(error);
// } finally {
//     showPriceMessage();
// }
// };
// // Kad veiktu reikia iskviesti funckija getWeather
// getWeather();

// //antras budas
// async function getWeatherFunc() {

// }


//NAMU DARBAI IS CODE ACADEMY

//1) Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". 

// const resolveMyPromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("Yes, veikia");
//     },5000);
// });

// resolveMyPromise.then(response => {
//     console.log(response);
// });


//2) Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

const pazadas = new Promise((resolve, reject) => {
    //formuojame random skaiciu
    const random = Math.floor(Math.random() * 5) + 1;
// jei random skaicius = 1, tada reject
    setTimeout(() => {
      if(random === 1){
        reject();
      }
      else{
        resolve();
      }
    }, 5000)
  })
  
  pazadas
    .then(() => alert("Veikia"))
    .catch(() => alert("Oops, pažadas buvo atmestas"))


//3) Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.
// const pazadas = new Promise((resolve, reject) => {
//     const random = Math.floor(Math.random() * 5) + 1;
  
//     setTimeout(() => {
//       if(random === 1){
//         reject();
//       }
//       else{
//         resolve();
//       }
//     }, 5000)
//   })
  
//   pazadas
//     .then(() => "This is message")
//     .then((message) => alert(message))
//     .catch(() => alert("Oops, pažadas buvo atmestas"))