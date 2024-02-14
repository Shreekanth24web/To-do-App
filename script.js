 
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("clicked");
      formValidation();
});

let formValidation = () => {
      if (textInput.value == '') {
            msg.innerHTML = 'Field coannot be empty'
            console.log('failure')

      } else {
            console.log("success")
            msg.innerHTML = ''
            acceptData();
      }
}

let data = []
let acceptData = () => {
      data['text'] = textInput.value;
      data['date'] = dateInput.value;
      data['textarea'] = textarea.value;

      createTasks();
      console.log(data)
}
let createTasks = () => {
      tasks.innerHTML += `
      <div>
            <span class="fw-bold">${data.text}</span>
            <span class="small text-secondary">${data.date}</span>
            <p>${data.textarea}</p>
            <span class="options">
                  <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                  <i onclick="deleteTask(this)" class="fas fa-trash-alt"></i>
            </span>
      </div>
      `
      resetForm();

}

let resetForm = () => {
      textInput.value = '';
      dateInput.value = '';
      textarea.value = '';
}

let deleteTask = (e) => {
      e.parentElement.parentElement.remove()
      console.log(e.parentElement.parentElement)
}
let editTask = (e) => {
      let selectedTask = e.parentElement.parentElement;
      console.log(selectedTask)
      textInput.value = selectedTask.children[0].innerHTML;
      dateInput.value = selectedTask.children[1].innerHTML;
      textarea.value = selectedTask.children[2].innerHTML;

      // selectedTask.remove()
      deleteTask(e);
}
