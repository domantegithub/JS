// FETCH API ir REST

//Kad galetume is back-endinio serverio atsisiusti duomenis, mums reikalingas Fetch API
//jis naudodamas HTTP servisa kreipiasi i back-end ir istraukia duomenis

//REST - tarsi fetch taisykles, kuriu reikia laikytis. apacioja nurodoma REST metodais
//GET - gauna esamus įrašus (duomenis)
//POST - sukuria naują įrašą
//PUT - modifikuoja esantį įrašą (duomenis)
//DELETE - ištrina esamą įrašą


const url = "https://jsonplaceholder.typicode.com/comments";

//fetch veikia kaip funckija, todel ja reikia iskviesti
//jei norime gauti duomenis, naudojame then, kuria irgi reikia iskviesti
//Json reikalingas, kad duomenys graziai atrodytu
//Pirmas then reikalingas, kad praliestume per json, o antras jau istikruju atiduos duomenis
//catch butinas, jei negautume duomenu, kad ismestu errora
 fetch(url)
 .then(resp => resp.json())
 .then(resonpse => {
//atvaizduoti pirmo elemento duomenis
     console.log("comments:", resonpse);
 }).catch(error => {
     console.error(error , "Failed to load comments");
 });

 const users = "https://jsonplaceholder.typicode.com/users";

 fetch(users).then(resp => resp.json()).then(resonpse => {
     console.log("users:", resonpse);
     //atvaizduoti pirmo objekto adresa, company ir email, juos sudeti i atskirus kintamuosius
 }).catch(error => {
     console.error(error, ":Failed to load users");
 });

//istraukiame viena useri - per / nurodome 1
 fetch("https://jsonplaceholder.typicode.com/users/1").then(resp => resp.json()).then(resonpse => {
     console.log("user:", resonpse);
     //atvaizduoti userio name, username, email ir city ekrane
 }).catch(error => {
     console.error(error, ":Failed to load user");
 });