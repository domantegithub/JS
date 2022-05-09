const nameButton =document.getElementById("name");
nameButton.addEventListener("click",clickButtonListener) //mygtukas gali iskviesti bet kokia funckija

function clickButtonListener() {
    alert("Domante");
}

const backgroundButton = document.getElementById("background");
backgroundButton.addEventListener("click",onClickBackgroundButton);

function onClickBackgroundButton() {
    document.body.style.backgroundColor="blue";
}

const loginButton=document.getElementById("login");
loginButton.addEventListener("click",loginHandler);

function loginHandler() {
    const h1Node = document.querySelector("h1");
    h1Node.textContent="Hello, Domante!";
    loginButton.textContent="Log out";
}