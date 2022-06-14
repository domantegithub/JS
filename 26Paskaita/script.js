const renderTodo = (todo) => {
    const { completed, title } = todo; //istraukia kintamuosius
   //sukuriam nauja elementa
    const todoEl = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoStatus = document.createElement("span");
  //pridedam elementam klases
    todoEl.className = "todo";
    todoTitle.className = "todo-title";
    // padaro skirtingos spalvos rutuliukus. zalias - jei completed, pilkas - jei ne.
    todoStatus.className = completed ? "todo-status done" : "todo-status";
  //priskiriam turini
    todoTitle.textContent = title;
  //itraukiam naujus elementus
    todoEl.append(todoTitle, todoStatus);
    document.querySelector(".todo-container").prepend(todoEl);
  };
  
  //istraukiam duomenis is duoto API
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => resp.json())
    .then((response) => {
      const todos = response.slice(0, 5);//paimam 10 elementu
  
      todos.forEach((todo) => renderTodo(todo)); //paima elementus
    })
    .catch((error) => {
      console.error(error);
    });

    // Antra uzduoties dalis, paspaudus mygtuka naujas item ikris i sarao apacia


      //2) issitraukati fukcijos viduje input lauka (iskeliam i virsu)
   const handleAddTodo = (e) => {
    const todoText = document.querySelector("input[name='todo-text']");
// 3) input duomenis sudeti su append i todo list apacia. Kad tai padaryti pirma reikia susikurti nauja objekta
    const newTodo = {title: todoText.value, completed:false};
    
    //4)issiunciam naujus duomenis atgal i serveri, kad issaugotu

    const params = {
      method: "POST", //duodame uzduoti siusti duomenis
      body:JSON.stringify(newTodo), //nurodome kokius duomenis siusti
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },    
      };

    fetch("https://jsonplaceholder.typicode.com/todos",params)
    .then(resp => resp.json())
    .then(response => {
      renderTodo(response);
      todoText.value = "";
      console.log(response)
    })
   .catch(error => {
     console.error(error)
   })
  };
    //1) issitrukiam is html mygtuka ir priskiriam addEventListener
   
   const addButton = document.querySelector(".add-button");
   addButton.addEventListener("click", handleAddTodo);

