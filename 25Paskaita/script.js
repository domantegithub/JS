//Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, 
//kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje.
// Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

fetch("https://randomuser.me/api/")
.then((resp) => resp.json())
.then((response) => {
    const firstIem=response;
    console.log(firstIem);
})
.catch(error => {
    console.error(error, "Failed to load data");
});