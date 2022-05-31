class FullName {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    addToList = () => {
        const list = document.getElementById("name-form"); //issitraukiam lista
        const newName = document.createElement("td"); //sukuriam nauja elementa
        newName.textContent = this.name;
        const newLastName = document.createElement("td");
        newLastName.textContent = this.surname;
        const tr = document.createElement("tr");
        tr.append(newName, newLastName);
    };
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const submitFullNameForm = (event) => {
    event.preventDefault();
    const FullName = document.querySelector("input[name='name']");

    const item = new Item(itemName.value, surname.value);
    item.addToList();
    };
    
const itemForm = document.getElementById("name-form"); 
itemForm.addEventListener("submit", submitFullNameForm);