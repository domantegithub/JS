const renderTodo = (todo) => {
    const {id, completed, title } = todo; //istraukia kintamuosius
   //sukuriam nauja elementa
    const todoEl = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoActions = document.createElement("div"); //new 06.28 kuriam delete 
    const todoStatus = document.createElement("span");
    const deleteButton = document.createElement("button"); //new 06.28
  //pridedam elementam klases
    todoEl.className = "todo";
    todoTitle.className = completed ? "todo-title done" : "todo-title";
    // padaro skirtingos spalvos rutuliukus. zalias - jei completed, pilkas - jei ne.
    todoStatus.className = completed ? "todo-status done" : "todo-status";
    todoActions.className = "todo-actions"; //new 06.28
    deleteButton.className = "todo-delete"; //new 06.28
  //priskiriam turini
    todoTitle.textContent = title;
    deleteButton.textContent = "Delete";//new 06.28 priskiriam mygtukui zodi delete
//darom zalia mygtuka kai paspaudziam ant burbuliuko
    todoStatus.addEventListener("click", () => {
      todoStatus.classList.toggle("done");
      todoTitle.classList.toggle("done");
      todoStatus.completed = !todoStatus.completed;
    });

    deleteButton.addEventListener("click", () => { //new 06.28
      console.log(todo);
      const params = {
        method: "DELETE",
      };
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, params)
      .then(resp => resp.json())
      .then(response => {
        console.log("successfully deleted: ", todo);
      })
        .catch((error) => {
          console.error(error);
      });
    });//new

    todoActions.append(todoStatus, deleteButton); //new
  //itraukiam naujus elementus
    todoEl.append(todoTitle,todoActions ); //new
    document.querySelector(".todo-container").prepend(todoEl);
  };
  
  //istraukiam duomenis is duoto API
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => resp.json())
    .then((response) => {
      const todos = response.slice(0, 5);//paimam 10 elementu
  
      todos.forEach((todo) => renderTodo(todo)); //paima elementus ir juos islista i sarasa
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

