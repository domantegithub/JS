
  const renderUserCard = (user) => {
    const photo = document.createElement("img");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const street = document.createElement("p");
  
    photo.src = "https://g4.dcdn.lt/images/pix/vyras-81892715.jpg";
    photo.alt = `${user.name} photo`;
    userName.textContent = user.username;
    email.textContent = user.email;
    street.textContent = user.address.street;
  
    // pakeisti street spalva i zalia
    // pakeisti email spalva i pilka
    street.style.color = "green";
    email.style.color = "grey";
  
    const card = document.createElement("div");
    card.className = "card";
    card.append(photo, userName, email, street);
  
    document.querySelector(".cards").append(card);
  };
  
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((resp) => resp.json())
    .then((response) => {
      renderUserCard(response);
    })
    .catch((error) => {
      console.error(error, ": Failed to load user");
    });