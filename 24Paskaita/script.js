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