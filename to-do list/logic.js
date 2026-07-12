const display = document.getElementById("display");

const addbtn = document.getElementById("add");

let tasks = [];

const input = document.getElementById("taskInput");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addTask();
    }
})
const savedTasks = localStorage.getItem("tasks");

if(savedTasks !== null){
    tasks = JSON.parse(savedTasks);
}
for(let task of tasks){
   createTask(task);
}

function addTask(){

    const task = input.value.trim();

    if(task === ""){
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(task)
    
    input.value = "";
}

addbtn.addEventListener("click", addTask)

function createTask(taskText){
    const li = document.createElement("li");

    const span = document.createElement("span");



    li.classList.add("task");
    li.addEventListener("click", function(){
        span.classList.toggle("completed");
    })

  
    span.textContent = taskText;

    const dltbtn = document.createElement("button");
    dltbtn.classList.add("delete-btn");
    dltbtn.textContent = "delete";
    
    li.appendChild(span);
    li.appendChild(dltbtn);
    dltbtn.addEventListener("click", function(event){
        event.stopPropagation();
            const index = tasks.indexOf(taskText);
            if(index !== -1){
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }

             li.remove();
    })

    

    display.appendChild(li);
}