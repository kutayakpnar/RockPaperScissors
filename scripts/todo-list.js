const todoList=[];

updateTodos();

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value='';
    updateTodos();
    

}



function updateTodos(){
    let todoListHTML=''

    for(let i=0;i<todoList.length;i++){
        const todo=todoList[i];
        const html=`<p>${todo}</p>`;
        todoListHTML+=html;


    }
    document.querySelector('.todos').innerHTML=todoListHTML;


}