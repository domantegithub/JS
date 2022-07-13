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
 .then((resp) => resp.json())
 .then((resonpse) => {
//atvaizduoti pirmo elemento duomenis
const fisrtItem = resonpse[0]; //Po to darom console.log(fisrtItem);
//atvaizduojam HTML'e email, name ir phone
const paragraph = document.createElement("p"); //sukuriam elementa "p"
//nustatome koks bus atvaizduotas turinys, siuo atveju pasirinkome email, name ir phone
paragraph.textContent = `${fisrtItem.email}, ${fisrtItem.name}, ${fisrtItem.body}`;

//pridedame į HTMl body dalį naują p elementą
document.body.prepend(paragraph);
     console.log("comments:", resonpse);
 })
 .catch(error => {
     console.error(error , "Failed to load comments");
 });


 //2UZDUOTIS
 //atvaizduoti pirmo objekto adresa, company ir email, juos sudeti i atskirus kintamuosius
 //Veliau juos atvaizduoti HTML'e

 //antra uzduoties dalis, susikuriame kintamaji, kuri inconsolinsim i html
const renderUser = (user) => {
    //issitraukiam reiksmes kokiu mums reikia
    const addressCity = user.address.city;
    const companyName = user.company.name;
    const email = user.email;

    const tdAddressCity = document.createElement("td");
    const tdCompanyName = document.createElement("td");
    const tdEmail = document.createElement("td");

    //dabar padarome, kad reiksmes butu atvaizduotos text formatu
    tdAddressCity.textContent = addressCity;
    tdCompanyName.textContent = companyName;
    tdEmail.textContent = email;

    //atvaizduojame i lentele tris kintamuosius
    const trUser = document.createElement("tr");
    trUser.append(tdAddressCity,tdCompanyName,tdEmail);

    //dabar viska sukeliam i tablebody
    document.getElementById('users').append(trUser);
};

 fetch("https://jsonplaceholder.typicode.com/users")
 .then((resp) => resp.json())
 .then((resonpse) => {
    resonpse.forEach((fisrtUser) => renderUser(fisrtUser));
 })
 .catch(error => {
     console.error(error, ":Failed to load users");
 });

 const renderUserCard = (user) => {
    const photo = document.createElement("img");
    const userName= document.createElement("h3");
    const email =document.createElement("p");
    const street = document.createElement("p");
    photo.src = "https://st2.depositphotos.com/1024381/5201/i/950/depositphotos_52016905-stock-photo-young-man-handsome-face.jpg";
    photo.alt = `${user.userName} photo`;
    userName.textContent = user.username;
    email.textContent = user.email;
    street.textContent = user.address.street;

    const card = document.createElement("div");
    card.className = "card";
    card.append(photo, userName, email, street);

    document.querySelector(".cards").append(card);
 };

//istraukiame viena useri - per / nurodome 1
 fetch("https://jsonplaceholder.typicode.com/users/1").then(resp => resp.json()).then(resonpse => {
     console.log("user:", resonpse);
     //atvaizduoti userio name, username, email ir city ekrane
 }).catch(error => {
     console.error(error, ":Failed to load user");
 });