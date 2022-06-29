//2) Kad atvaizduotume visas prekes, susikuriame funkcija, kuri perduos informacija
// duomenyse matome id, image, price ir title pasiimame ko reikia
const renderCard = (product) => {
  const { id, image, price, title } = product;

  //3 sukuriame nauja produkto kortele, reikes div, reikes img,
  const card = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleEl = document.createElement("p");
  const priceEl = document.createElement("h3");
  const deteleButton = document.createElement("button");

  //4) priskiriam klases musu elementams ->css lygegreciai pasidarom stiliu
  card.className = "card"; //<div class="card"></div>
  priceEl.style.color = "red"; //padarom, kad kaina butu raudona

  //5)Img tagui priskiriam paveiksliuko source
  imageEl.src = image; //<img src="url" alt="title"/>
  imageEl.alt = title;

  //6) Elementui reikia priskirti (reiksme)
  titleEl.textContent = title; //<p>{title}</p>
  priceEl.textContent = price; //<h3>2.99</h3>
  deteleButton.textContent = "Ištrinti"; //<button>Ištrinti</button>

  //9) nuspaudus istrinti preke
  deteleButton.addEventListener("click", () => {
      //10 nustatome istrynimo metoda
      const params = {method: "DELETE"};
    console.log(id);
    fetch(`https://golden-whispering-show.glitch.me/${id}`, params) //po 10 zingsnio prideti params
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        //11) istrynus perkrauti psl
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  });
  //7) viska sudedam i prekes kortele "card"
  card.append(imageEl, titleEl, priceEl, deteleButton); //<div class="card">
  // <img ../>
  //<p>{title}</p>
  //<h3>2.99</h3>
  //<button>Ištrinti</button>
  //</div>

  //8)sumetam viska i body
  document.body.append(card);
};

//1) Pasirašome fetch, kas ištrauktume duomenis
fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    //console.log(response); //patikriname ar gauname duomenis
    response.forEach((product) => renderCard(product)); //for each kad visus produktus atvaizduotu
  })
  .catch((error) => {
    console.error(error);
  });
