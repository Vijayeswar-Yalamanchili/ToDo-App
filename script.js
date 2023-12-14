const form = document.querySelector("#form");
const inputTextTitle = document.querySelector("#inputTextTitle");
const dateInput = document.querySelector("#endDate");
const textArea = document.querySelector("#textArea");
const msg = document.querySelector("#msg");
const tasks = document.querySelector(".tasks")


//submit form from modal
form.addEventListener("submit",(e)=>{
    formValidation();
    e.preventDefault();    
}) 

//form-validation for input task title in modal
const formValidation = ()=>{
    if(inputTextTitle.value === ""){
        msg.innerText = "Input field cannot be empty"
    }else{
        msg.innerText = "";
        getData();
    }
}

//getting data from the form input an store it in data object
const data = {}
const getData = ()=>{
    // using bracket notation to give datas to object
    data["text"] = inputTextTitle.value; 
    data["date"] = dateInput.value;
    data["task"] = textArea.value;
    console.log(data);
}

