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
      const todos = response.slice(0, 10);
  
      todos.forEach((todo) => renderTodo(todo)); //paima elementus
    })
    .catch((error) => {
      console.error(error);
    });