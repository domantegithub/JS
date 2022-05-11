const painter = document.querySelector("input[name=painter]");
//CODE AC 1uzduotis - isspausdinkite tiek I raidziu kiek..


//Anoniminės funkcijos - funkcija be pavadinimo, arrow funckija
painter.addEventListener("input", (event) => {
    const value = event.target.value;
    const result = document.getElementById("painter-result");

    //susikuriam kintamaji, kuris mums atstos nupiesta vaizda 
    let paintedI = ""; //tuščias stringas
    //result.textContent = value; - čia keičiame tik teksta
    for (let i = 0; i<value; i++) {
        paintedI +="<div>I</div>"
    }
    result.innerHTML = paintedI;// cia keiciame pati HTML, reikia prispaudint tiek i raidziu, kiek bus tu div
    // musu tikslas su for ciklu padaryti sita pasikartojima <div>I</div> arba kitaip sakant paintedI- kiek parasysim..
    console.log(value); //patikrinam ar ismeta ivesta verte
});

// 3Užduotis. Kai irasai reiksme, ir pelyte nueina nuo input field uzsifiksuoja irasyta reiksme ir sumuojasi
//elementas vadinasi "blur"

const price = document.querySelector("input[name='price']");
const totalResult = document.querySelector("#sum-result");
price.addEventListener("blur",handleBlur )

let total = 0;

function handleBlur(event) {
    const value=event.target.value;

    total += Number(value); //kiekviena karta nutinkant blur eventui (paspaudi ir nuspaudi)
    totalResult.textContent=`Total: ${total}`;
    price.value = 0;
}


//4Uzduotis 

//5Uzduotis susikurti input kai paspausim submit mygtuka turi sugeneruot random skaiciu.
//Jei sutampa - tai alert Atspejai, jei ne - Neatspejai.

//NAMU DARBAI
/*Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
L
L
L
L L L L */

const composition = document.querySelector("input[name='composition']");

composition.addEventListener("input", handleLetterComposition )

function handleLetterComposition(event) {
    const value = event.target.value;
    const result = document.getElementById("composition-result");

    let compositionL = "";

    for (let i=1; i<value; i++) {
        compositionL += "<div>L</div>"
    }
    for (let i=0; i<value; i++) {
        compositionL += textContent="L";
    }

    result.innerHTML=compositionL;
}

/*Sukurkite panašią funkciją, kuri atspausdintų C raidę.
t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
CCCCC
C
C
C
CCCCC */

const cletter = document.querySelector("input[name='cletter']");

cletter.addEventListener("input", handleCLetter )

function handleCLetter(event) {
    const value = event.target.value;
    const result = document.getElementById("cletter-result");

    let cletter = "";

    for (let i=0; i<value; i++) {
        cletter += textContent="C";
    }
    for (let i=1; i<value; i++) {
        cletter += "<div>C</div>"
    }
    for (let i=0; i<value; i++) {
        cletter += textContent="C";
    }

    result.innerHTML=cletter;
}

/* Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
Pvz.: Petras, Jonas, Mantas, Antanas. */

const nameList = document.querySelector("input[name='name']")