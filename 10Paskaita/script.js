//index.html yra document objektas
// cia issitraukiam elementa
const nameInput = document.getElementById("name");

//isitraukiam js, tei irasai .textContent tada duoda h1 elemente irasyra verte
// yra keli būdai
console.log(nameInput.textContent);
console.log(nameInput.innerText);
console.log(nameInput.innerHTML);

nameInput.addEventListener("click", handleClickOnName)

function handleClickOnName() {
    //console.log("paspaudžiau"); // patikrinam ar js ismeta reiksme
    nameInput.style.color="red";
    nameInput.style.backgroundColor="blue";
    nameInput.style.textAlign="right";
    nameInput.style.fontSize="72px";
}

//2UZDUOTIS. Cia darom kad mygtukas sokinetu i viena ir i kita ekrano kampa
const jumpButton=document.getElementById("jump");

jumpButton.addEventListener("click",handleJump)
// cia iskeleme, kad mygtukas iskart butu desiniam kampe virsuje

    jumpButton.style.cssText = "position:absolute; top:30px; right:30px;";
//kuriam logika
let inTop = true; //kai mes nuspausime viena karta mygtuka, jis nukris i kita kampa ir tada jau bus false reiksme

function handleJump() {
    if (inTop) {
        jumpButton.style.cssText = "position: absolute; bottom: 30px; left: 30px;";
        jumpButton.textContent="Jump to Top"
        inTop=false; //kai mygtukas nusoka i apacia, tai nera jo naturali vieta, todel reiksme false
    } else {
        jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
        jumpButton.textContent="Jump to Bottom"
        inTop=true;
    }

}

//3UZDUOTIS. Kad mygtukas vaiksiotu ratu
//reikia tureti 4 skirtingus kampus, todel juos susikuriame (apsirasome)
const backwardsButton = document.getElementById("backwards");

backwardsButton.addEventListener("click",handleGoBackwards )
let position = 0;
const topLeft = "position: absolute; top: 10px; left: 10px;"; //pradine reiksme 0
    const topRight = "position: absolute; top: 10px; right: 10px;"; //  3
    const bottomRight = "position: absolute; bottom: 10px; right: 10px;"; // 1
    const bottomLeft = "position: absolute; bottom: 10px; left: 10px;"; // 2

    backwardsButton.style.cssText=topLeft; //apsirasome pradine mygtuko vieta

function handleGoBackwards() {

    //su kiekviena pozicija mes norime pakeisti stilistika, todel reikia sukurti logika
    //jei pozicija =1 atitiks topright reiksme, kai 2//bottom right ir t.t.
    if (position===0) {
        backwardsButton.style.cssText = bottomLeft; //transformacija is 0 i 1 ;
    } else if (position===1) {
        backwardsButton.style.cssText=bottomRight;
    } else if (position===2) {
        backwardsButton.style.cssText=topRight;
    } else {
        backwardsButton.style.cssText=topLeft;
        position = -1;
    }
    position++;
    console.log(position);
}
