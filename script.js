const form = document.querySelector("#form");
const inputTextTitle = document.querySelector("#inputTextTitle");
const dateInput = document.querySelector("#endDate");
const textArea = document.querySelector("#textArea");
const msg = document.querySelector("#msg");
const tasks = document.querySelector(".tasks")
const addBtn = document.querySelector("#addBtn")


//submit form from modal
form.addEventListener("submit",(e) => {
    formValidation();
    e.preventDefault(); 
}) 

//form-validation for input task title in modal
const formValidation = () => {
    if(inputTextTitle.value === ""){
        msg.innerText = "Input field cannot be empty"
    }else{
        msg.innerText = "";
        getData();
        //to close modal by clickin add btn by using data-bs-dismiss attribute
        addBtn.setAttribute("data-bs-dismiss", "modal")     //it takes 2 clicks to close
        addBtn.click();                                     // to make 1 click by fn call, so on 2nd click it will close

        (()=> {
            addBtn.setAttribute("data-bs-dismiss", "")      // to prevent closing modal without data in input field
        })()     
    }
}

//getting data from the form input an store it in data object
const data = {}
const getData = () => {
    // using bracket notation to give datas to object
    data["text"] = inputTextTitle.value; 
    data["date"] = dateInput.value;
    data["task"] = textArea.value;
    createTodo();
}

//create todo fn
const createTodo = () => {
    tasks.innerHTML += `
    <div class="task">
        <div class="taskHeader">
            <span class="fw-bold">${data.text}</span>
            <span class="fw-light">${data.date}</span>
        </div>
        <div class="taskData">
            <div class="taskText">${data.task}</div>
            <span class="options">
                <i onclick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
                <i onclick = "deleteTask(this)" class="fa-regular fa-trash-can"></i>
            </span>
        </div>
    </div>`
    resetFormData();
}           //delete & edit task be executed by this keyword in fun. call on icon

//reset form or clear data
const resetFormData = () => {
    inputTextTitle.value = "";
    dateInput.value = "";
    textArea.value = "";
}

//delete the task
const deleteTask = (e) => {
    e.parentElement.parentElement.parentElement.remove();       //for that delete icon 3 parents are thr in root
}

//edit the task data
const editTask = (e) => {
    let task = e.parentElement.parentElement.parentElement;
    inputTextTitle.value = task.children[0].children[0].innerHTML;
    dateInput.value = task.children[0].children[1].innerHTML;
    textArea.value = task.children[1].children[0].innerHTML;
    task.remove();
}