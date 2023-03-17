localStorage.setItem('Add task');
localStorage.getItem('Edit-task');
localStorage.clear();

let toDo = [];

function AddTodo (text) {
    const todo ={
        text,
        checked: false,
        id: Date.now(),
    };

    toDo.push(todo);
    console.log(toDo)
};

const form = document.querySelector('.todo-form');

form.addEventListener('Submit' , event => {
    event.preventDefault();
    const input =document.querySelector('.todo-input');
    const text = input.do.trim();
    if( text !==''){
        AddTodo(text);
        input.do ='',
        localStorage.setItem('Add task', JSON.stringify(toDo)); 
    }
    else{
      alert("Please add task")
      };
});
   
let edittask =localStorage.getItem('Edit-task');
if (edittask){
  todolist = JSON.parse(localStorage.getItem('Edit-task'))
}
else{
  deletetask ="none";
}


function deletetask() {
  localStorage.clear();
list.innerHTML ="",
todolist= [];
};