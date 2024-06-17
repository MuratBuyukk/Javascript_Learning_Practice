const newTask = document.querySelector('.input-task');
const addNewTaskBtn = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');

addNewTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', taskAction);
document.addEventListener('DOMContentLoaded', readLocalStorage);





function addTask(e){
    e.preventDefault();
   
    if(newTask.value.length > 0){
        //Task creation
        taskItemCreate(newTask.value);
        saveLocalStorage(newTask.value);  

        //clean input
        newTask.value = '';
    }
    else{
        alert('Can not empty');
    }
    
}

function convertLocalStorageToArray(){
    let tasks;

    if(localStorage.getItem('tasks') === null) tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'));

    return tasks;
}


function taskAction(e){
    const clickedAction = e.target;

    if(clickedAction.classList.contains('task-btn-complated')){
        clickedAction.parentElement.classList.toggle('task-complated');
    }else if(clickedAction.classList.contains('task-btn-delete')){
        if(confirm('Are you sure ? ')){
            clickedAction.parentElement.classList.toggle('disappear');
        
            const item = clickedAction.parentElement.children[0].innerText; 
            localStorageDelete(item);
    
            clickedAction.parentElement.addEventListener('transitionend', _ =>{
                clickedAction.parentElement.remove();
            });
        }
    }
}

function saveLocalStorage(newTask){
    let tasks = convertLocalStorageToArray();

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function readLocalStorage(){
    let tasks = convertLocalStorageToArray();

    tasks.forEach(element => {
        taskItemCreate(element);
    });
}

function taskItemCreate(task){
    //creating div
    const newDiv = document.createElement('div');
    newDiv.classList.add('task-item');

    //creating li
    const newLi = document.createElement('li');
    newLi.classList.add('task-defination');
    newLi.innerText = task; 
    newDiv.appendChild(newLi);

    //creating buttons
    const completeButton = document.createElement('button');
    completeButton.classList.add('task-btn', 'task-btn-complated');
    const completeIcon = document.createElement('i');
    completeIcon.classList.add('far', 'fa-check-square');
    completeButton.appendChild(completeIcon)
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('task-btn', 'task-btn-delete');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('far', 'fa-trash-alt');
    deleteButton.appendChild(deleteIcon);
    newDiv.appendChild(deleteButton);
    taskList.appendChild(newDiv);


    //adding animation
    newDiv.animate([{ opacity: 0 },{ opacity: 1 }],
        {duration: 800, easing: 'ease-in-out' });

}

function localStorageDelete(task){
    let tasks = convertLocalStorageToArray();


    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex,1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}