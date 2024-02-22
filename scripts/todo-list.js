const todoList = [{
    name: "make dinner",
    dueDate: "2022-12-22"
}, {
    name: "wash dishes",
    dueDate: "2022-12-10"


}];

renderTodos();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date');
    const dueDate = dateInputElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    //console.log(todoList);
    inputElement.value = '';
    renderTodos();


}



function renderTodos() {
    let todoListHTML = ''

    todoList.forEach(function(todoObject,index){
        //const name=todoObject.name;
        const { name, dueDate } = todoObject;
        //const {dueDate}=todoObject;
        //const dueDate=todoObject.dueDate;

        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
         <button onclick="
            todoList.splice(${index},1);
            renderTodos();
         " class="delete-todo-button">Delete</button>
         `;
        todoListHTML += html;

    }
)
/*
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name=todoObject.name;
        const { name, dueDate } = todoObject;
        //const {dueDate}=todoObject;
        //const dueDate=todoObject.dueDate;

        const html = `
        <div>${name}</div>
        <div> ${dueDate}</div>
         <button onclick="
            todoList.splice(${index},1);
            renderTodos();
         " class="delete-todo-button">Delete</button>
         `;
        todoListHTML += html;


    }
    */
    document.querySelector('.todos').innerHTML = todoListHTML;


}