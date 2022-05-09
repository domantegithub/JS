const submitForm = document.getElementById("my-form");
submitForm.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();
    const myNameInput = document.querySelector("input[name=name]");
    const myAge=document.querySelector("input[name=age]")

    const result = document.getElementById("age-result");
    result.textContent=myAge;

    myNameInput.value="";
    myAge.value = "";
}
