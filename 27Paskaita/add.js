const handleSubmitCar = (event) => {
    event.preventDefault();
    // isitraukti brand  duomenis
    const brand = document.querySelector("input[name='brand']");
    //istraukti model duomenis is HTML 
    const model = document.querySelector("input[name='model']");

    //susikuriame automobilio objekta
    const car = { brand: brand.value, model: model.value };
    //apsirasome metoda, ka darysime su duomenimis
    const params = {
        method: "POST",
        body: JSON.stringify(car),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };

    fetch("https://olive-bead-glazer.glitch.me", params)
        .then((resp) => resp.json())
        .then((response) => {
            //sukurti notification
            //cia suvaziuoja duomenis
            //iskviesk funkcija, kiri iskvies sekmes pranesima
            console.log(response);
        })//cia nesuvaziuoja
        //iskviesk nesekmes pranesima
        .catch((error) => {
            console.error(error);
        });

};


const carForm = document.getElementById("car-form");
carForm.addEventListener("submit", handleSubmitCar)

// add new car turi perkelti i nauja psl (sukurti linka i index failais add ir atvirsciai)