const addNewProduct = (event) => {
    event.preventDefault();
    // isitraukti brand  duomenis
    const image = document.querySelector("input[name='image']");
    //istraukti model duomenis is HTML 
    const title = document.querySelector("input[name='title']");
    const price = document.querySelector("input[name='price']");

    //susikuriame automobilio objekta
    const newProduct = {image: image.value, title: title.value, price: price.value };
    //apsirasome metoda, ka darysime su duomenimis
    const params = {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };

fetch("https://golden-whispering-show.glitch.me", params)
.then((resp) => resp.json())
.then((response) => {
    //sukurti notification
    //cia suvaziuoja duomenis
    //iskviesk funkcija, kiri iskvies sekmes pranesima
    alert("Prekė sėkmingai pridėta");
    console.log(response);
})
.catch((error) => {
    console.error(error);
});
};

//Truko sitos dalies??
const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", addNewProduct);