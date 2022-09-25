const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

function deleteToDo(event){
    const parent = event.target.parentNode;
    parent.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)