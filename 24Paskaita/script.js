const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (response.ok) {
        const data = await response.json();
        renderUserCard(data.results[0]);
      }
    } catch(error) {
      console.error(error);
    }
  };
  
  fetchRandomUser();
  
  // async function random() {}
  
  const getRandomUser = async () => {
    try {
      const resp = await fetch("https://magnetic-melon-yam.glitch.me");
      const response = await resp.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  getRandomUser();
  //grazinsim elementus is fetch
  const createUserRow = (user) => {
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdFavColor = document.createElement("td");
  
    tdId.textContent = user.id;
    tdName.textContent = user.name;
    tdCity.textContent = user.city;
    tdFavColor.textContent = user.fav_color;
  
    const trUser = document.createElement("tr");
    trUser.append(tdId, tdName, tdCity, tdFavColor);

    //grazina sukurta useri
    return trUser;
  };
  
  const renderTable = (users) => {
    const thId = document.createElement("th");
    const thCity = document.createElement("th");
    const thName = document.createElement("th");
    const thColor = document.createElement("th");
  
    thId.textContent = "id";
    thCity.textContent = "city";
    thName.textContent = "name";
    thColor.textContent = "fav_color";
  
    const thRow = document.createElement("tr");
    const thead = document.createElement("thead");
    const table = document.createElement("table");
  
    thRow.append(thId, thCity, thName, thColor);
    thead.append(thRow);
    table.append(thead);
  
    const tableBody = document.createElement("tbody");
  
    const firstRow = createUserRow(users[0]);
    const row2 = createUserRow(users[1]);
    const row3 = createUserRow(users[2]);
  
    tableBody.append(firstRow, row2, row3);
    users.forEach((user) => tableBody.append(createUserRow(user)));
  
    table.append(tableBody);
  
    document.body.append(table);
  };
  
  fetch("https://magnetic-melon-yam.glitch.me")
    .then((resp) => resp.json())
    .then((response) => {
      renderTable(response);
    })
    .catch((error) => {
      console.error(error);
    });