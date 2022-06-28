const renderItemCard = (item) => {
    const photo = document.createElement("img");
    const itemName = document.createElement("p");
    const price = document.createElement("h3");
    const deteleButton = document.createElement("button");

    photo.src = "https://pagrindinis.barbora.lt/api/images/GetInventoryImage?id=d0fb9982-06e1-469d-ae79-e7efd69c59a1";
    photo.alt = `${itemName.title} photo`;
    itemName.textContent =item.title;
    price.textContent = item.price;
    
  //pakeisti spalvas
    itemName.style.color = "grey";
    price.style.color = "red";
  
    const card = document.createElement("div");
    card.className = "card";
    card.append(photo, itemName, price);
  
    document.querySelector(".cards").append(card);
};


fetch("https://golden-whispering-show.glitch.me")
.then((resp) => resp.json())
.then((response) => {
  renderItemCard(response);
})
.catch((error) => {
  console.error(error, ": Failed to load user");
});