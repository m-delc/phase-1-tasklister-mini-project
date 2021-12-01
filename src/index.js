// document.addEventListener("DOMContentLoaded", () => {
//   // let form = document.querySelector('form').addEventListener('submit', (e)








// console.log(document.querySelector('form'))


// document.addEventListener('DOMContentLoaded', () => {
//   let form = document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     buildToDo(e.target.new_todo.value)
//     form.reset()
//   })
// })

// function buildToDo(todo){
//   console.log(togo)
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.appendChild.addEventListener('click', handleDelete)
//   btn.textContent = 'x'
//   p.textContent = `${todo} `
//   p.appendChild(btn)
//   document.querySelector('#todo_container').appendChild(p)
// }

// function handleDelete(e){
//   e.target.parentNode.remove()
// }


// document.addEventListener("DOMContentLoaded", () => {
//   //grab all the necessary DOM elements
//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");
//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");
//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });



//-----


// const createNewTask = event => {
//   //stop form from trying to submit
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;
//   appendNewTask(newTask);
//   event.target.reset();
// };
// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };







//  attempt 

// const createNewTask = e => {
//   e.preventDefault()
//   const newTaskDescription = document.getElementById('new-task-description');
//   // newTaskDescription.innerText = 
//   const addedTask = newTaskDescription.value
// }

// console.log(document.getElementById('new-task-description'))









//  https://www.youtube.com/watch?v=VW8kNAous88&ab_channel=dcode

// const newElement = document.createElement('li');
// console.log(newElement)


// const createNewTask = e => {
//   e.preventDefault()
//   const newTaskDescription = document.getElementById('new-task-description')
//   const addedTask = document.body.appendChild('li')
// }

// console.log(createNewTask)









//  https://www.youtube.com/watch?v=-pRg_daFjfk&ab_channel=learn-webdev

// console.log(document.querySelector('Submit'))



// xxx.addEventListener('click', function(){
//   const newTask = document.createElement('li')
//   newTask.innerText = inputField.value
//   yyy.appendChild(newTask)
// })


// const newTaskDescription = document.querySelector('#new-task-description');
// const enterNewTask = newTagDescription.value;




// const createTaskForm = document.getElementById('create-task-form')
// const submitNewTask = e => {
//   e.preventDefault()
//   createTaskForm.addEventListener('submit')
//   const newTaskInput = document.querySelector('#new-task-description').innerText.value
// }

// console.log(document.querySelector('#new-task-description'))





//follow along with DJ

document.addEventListenerListener('DOMContentLoaded', () => {
  const form = kdocument.querySelector('create-task-form')
  const talkList = document.querySelector('#tasks')
  const taskData = document.querySelector('#new-task-description')
  
  form.addEventListener('submit', (e) => {
    const task = taskData.value
    e.preventDefault()
    const li = document.createElement('li')
    li.innerText = task
    const button = document.createElement('button')
    button.innerText = 'X'
    li.appendChild(button)
    taskList.appendChild(li)
    taskData.value
    button.addEventListener('click'), (e) => {
      e.target.parentNode.remove()
    })
    // console.log(taskData.value)
  })
})