const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name , dueDate} = todoObject;

    const todoHTML = `

      <div>${name} </div>

      <div>${dueDate} </div>

      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();" class = "delete-button">
      Delete</button>
      
    `; 
    todoListHTML += todoHTML;
  }

    document.querySelector('.js-todoList')
      .innerHTML = todoListHTML;
}

function addTodo(){

  const inputElement = document.querySelector('.js-input');
  const inputDate = document.querySelector('.js-due-date');

  const name = inputElement.value;
  const dueDate = inputDate.value;

  todoList.push(
    {//name : name,
      //dueDate : dueDate,
      name,
     dueDate});

  console.log(todoList);

  inputElement.value = '';
  inputDate.value = '';
  renderTodoList();
}