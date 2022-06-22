console.log("konsultacija");

//Add event listener yra pagrinde naudojami mygtukams, click, submit ir t.t.
const myButton = document.getElementById("my-button");

let count = 0;

myButton.addEventListener("click", (event) => {
  count++;
  const countEl = document.getElementById("count");
  countEl.textContent = count;
  console.log(myButton);
  if (count > 5) {
    alert("you just hit button five times");
  }
});

//sukurti mygtuka Show my name su tusciu paragrafu,
//Nuspaudus mugtuka turi ismesti varda html'e ir pakeis vardo spalva i megstama
//submit naudoti tik formoms, padaryt prevent default

const personName = "Domantė";
const myNameButton = document.getElementById("my-name");

myNameButton.addEventListener("click", (event) => {
  const myName = document.getElementById("name");
  myName.textContent = personName;
  myName.style.color = "green";
});

//Sukurti HTML faile su mygtukais + ir -, h2 elementa, kuriame bus atvaizduojamas skaicius + prideda viena, o - atima 1

const sumButton = document.getElementById("sum");

let initialValue = 0;

sumButton.addEventListener("click", () => {
  initialValue++;
  const sumValues = document.getElementById("result");
  sumValues.textContent = initialValue;
});

const minusButton = document.getElementById("minus");

minusButton.addEventListener("click", () => {
  initialValue--;
  const minusResult = document.getElementById("result");
  minusResult.textContent = initialValue;
});

//Pakeisti mygtukus i +500 ir -500. Nuspaudus skaicius turi padideti per 500 ir sumazeti per 500
//Papildomai padaryti reset mygtuka, kuris nustato reiksme i 0
let number500Count = 0;

const plus500Button = document.getElementById("plus500");
plus500Button.addEventListener("click", () => {
  number500Count += 500;
  document.getElementById("result500-number").textContent = number500Count;
});

const minus500Button = document.getElementById("minus500");
minus500Button.addEventListener("click", () => {
  number500Count -= 500;
  document.getElementById("result500-number").textContent = number500Count;
});

const resetButton = document.getElementById("reset500");
resetButton.addEventListener("click", () => {
  number500Count = 0;
  document.getElementById("result500-number").textContent = number500Count;
});

//Budas su funckija

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
// if (action === "+") {
// number500Count += 500;
// } else if (action === "-") {
// number500Count -= 500;
// } else {
// number500Count = 0;
// }
// document.getElementById("result500-number").textContent = number500Count;
// }

//1. Issitraukti forma

const registerForm = document.getElementById("register");

//2. formai pridedu event listener gautume reiksmes atvaizduotas Console
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //3. Issitraukiam kiekviena formos inputa atskirai
  const username = document.querySelector("input[name='username']");
  const email = document.querySelector("input[name='email']");
  const number = document.querySelector("input[name='number']");
  const password = document.querySelector("input[name='password']");
  // patikriname ar gauname vertes
  // console.log(email.value);
  // console.log(number.value);
  const result = document.createElement("h2"); //Sukuriam h2 elementa
  //i h2 elementa ikeliame resultatus
  result.textContent = `${username.value}, ${email.value},${number.value}, ${password.value}`;
  //pridedame i body dali
  document.body.append(result);
});

//Sukurti forma su trim laukais, kuriuose reiks:
//-rasyti savo varda, pavarde ir metus;
//Nuspaudus mygtuka, turi atsirasti tekstas:
//jeigu metu daugiau nei 18-pilnametis
//jeigu maziau nei 18 nepilnametis

const registrationForm = document.getElementById("registration");
registrationForm.addEventListener("submit", handlePersonAge);

function handlePersonAge(event) {
  event.preventDefault();
  const nameInput = document.querySelector("input[name='name']").value;
  const surnameInput = document.querySelector("input[name='surname']").value;
  const age = document.querySelector("input[name='age']").value;
  const fullName = `${nameInput} ${surnameInput}`;
  const isMorethan18 = age >= 18 ? `${fullName} yra pilnametis` :`${fullName} yra nepilnametis`;
  const gotResult = document.createElement("h2");
  gotResult.textContent = isMorethan18;
  document.body.append(gotResult);

}
