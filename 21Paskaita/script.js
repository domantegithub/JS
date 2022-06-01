const cookie = {
    timeSpent: "2h",
    loggedIn: "2022/06/01T18:00:00",
    theme: "dark",
};

document.cookie = "timeSpent=2h";
document.cookie = "loggedIn=2022/06/01T18:00:00";
document.cookie = "theme=dark";

// localStorage.setItem("name","Domante");
// localStorage.setItem("surname", "Navarskaite");

/////////////

// const button = document.getElementById("save");

// button.addEventListener("click", () => {
//     const name = document.querySelector("input[name='name']");
//     const surname = document.querySelector("input[name='surname']");

//     const fullName = `${name.value} ${surname.value}`;
//     const result = document.getElementById("full-name");
//     result.textContent = fullName;

//     localStorage.setItem("fullName", fullName);
// });

///////

const submitButton = document.getElementById("sumbit");

submitButton.addEventListener("click", () => {
    const name = document.querySelector("input[name='name']");
    const result = document.getElementById("newname");
    result.textContent = name;

    localStorage.setItem("name", name);
});