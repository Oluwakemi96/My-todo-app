
let addTask = document.querySelector('.fa-solid.fa-plus')

let taskDisplay = document.getElementById('todo-display')

let newTasks = document.querySelector('#new-tasks')

 addTask.addEventListener
  ('click',()=>{
  if(taskDisplay.value.length == 0){
      alert("Please Enter a Task")
  }
    else{
      newTasks.innerHTML += `<div class="added-tasks">
        <p>${(taskDisplay).value}
        </p> <span class="delete"><i class="fa-solid fa-trash-can"></i></span>
      </div>` 

      taskDisplay.value=null
    }

    let deletedIcons = document.querySelectorAll('.delete')

    
    for (let deletedIcon of deletedIcons){
      deletedIcon.onclick = function(){
       this.parentNode.remove();
    }
  }
  
  })



















